import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const active = searchParams.get('active')
    const limit = searchParams.get('limit')
    const offset = searchParams.get('offset')

    let whereClause: any = {}
    
    if (active === 'true') {
      whereClause.active = true
      whereClause.startDate = {
        lte: new Date()
      }
      whereClause.endDate = {
        gte: new Date()
      }
    }

    const promotions = await db.promotion.findMany({
      where: whereClause,
      orderBy: {
        createdAt: 'desc'
      },
      take: limit ? parseInt(limit) : undefined,
      skip: offset ? parseInt(offset) : undefined
    })

    return NextResponse.json(promotions)
  } catch (error) {
    console.error('Error fetching promotions:', error)
    return NextResponse.json(
      { error: 'Failed to fetch promotions' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { title, description, discount, startDate, endDate, image } = body

    if (!title || !description || !discount || !startDate || !endDate) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    const promotion = await db.promotion.create({
      data: {
        title,
        description,
        discount: parseFloat(discount),
        startDate: new Date(startDate),
        endDate: new Date(endDate),
        image
      }
    })

    return NextResponse.json(promotion, { status: 201 })
  } catch (error) {
    console.error('Error creating promotion:', error)
    return NextResponse.json(
      { error: 'Failed to create promotion' },
      { status: 500 }
    )
  }
}