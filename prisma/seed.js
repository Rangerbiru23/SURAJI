const { PrismaClient } = require('@prisma/client')

const db = new PrismaClient()

async function main() {
  console.log('Start seeding...')

  // Create categories
  const makananCategory = await db.category.create({
    data: {
      name: 'Makanan',
      description: 'Berbagai macam makanan kemasan dan makanan ringan',
    },
  })

  const minumanCategory = await db.category.create({
    data: {
      name: 'Minuman',
      description: 'Minuman dalam kemasan, soda, jus, dan air mineral',
    },
  })

  const tembakauCategory = await db.category.create({
    data: {
      name: 'Tembakau',
      description: 'Produk tembakau dan rokok (18+)',
    },
  })

  const rumahTanggaCategory = await db.category.create({
    data: {
      name: 'Rumah Tangga',
      description: 'Kebutuhan sehari-hari dan perlengkapan rumah tangga',
    },
  })

  // Create products
  await db.product.createMany({
    data: [
      {
        name: 'Indomie Mie Goreng',
        description: 'Mie instan rasa original favorit Indonesia',
        price: 3000,
        categoryId: makananCategory.id,
        stock: 100,
        featured: true,
      },
      {
        name: 'Taro Net',
        description: 'Snack keripik kentang dengan rasa keju',
        price: 8000,
        categoryId: makananCategory.id,
        stock: 50,
        featured: true,
      },
      {
        name: 'Aqua Mineral Water 600ml',
        description: 'Air mineral murni dalam kemasan botol',
        price: 4000,
        categoryId: minumanCategory.id,
        stock: 200,
        featured: true,
      },
      {
        name: 'Coca-Cola 390ml',
        description: 'Minuman soda rasa cola klasik',
        price: 8000,
        categoryId: minumanCategory.id,
        stock: 80,
        featured: true,
      },
      {
        name: 'Dji Sam Soe 234',
        description: 'Rokok kretek filter premium (18+)',
        price: 25000,
        categoryId: tembakauCategory.id,
        stock: 30,
        featured: false,
      },
      {
        name: 'Sokola Coklat',
        description: 'Coklat batangan dengan rasa manis',
        price: 5000,
        categoryId: makananCategory.id,
        stock: 60,
        featured: false,
      },
      {
        name: 'Pepsodent Toothpaste',
        description: 'Pasta gigi untuk kesehatan gigi dan mulut',
        price: 12000,
        categoryId: rumahTanggaCategory.id,
        stock: 40,
        featured: false,
      },
      {
        name: 'Lifebuoy Soap',
        description: 'Sabun mandi cair dengan kandungan antiseptik',
        price: 10000,
        categoryId: rumahTanggaCategory.id,
        stock: 45,
        featured: false,
      },
    ],
  })

  // Create promotions
  const tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)
  
  const nextWeek = new Date()
  nextWeek.setDate(nextWeek.getDate() + 7)

  await db.promotion.createMany({
    data: [
      {
        title: 'Diskon Akhir Pekan',
        description: 'Dapatkan diskon 20% untuk semua produk minuman',
        discount: 20,
        startDate: new Date(),
        endDate: nextWeek,
        active: true,
      },
      {
        title: 'Promo Mie Instan',
        description: 'Beli 5 gratis 1 untuk semua merek mie instan',
        discount: 15,
        startDate: new Date(),
        endDate: nextWeek,
        active: true,
      },
      {
        title: 'Harga Spesial Snack',
        description: 'Diskon 10% untuk semua produk snack',
        discount: 10,
        startDate: new Date(),
        endDate: tomorrow,
        active: true,
      },
    ],
  })

  console.log('Seeding finished.')
}

main()
  .then(async () => {
    await db.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await db.$disconnect()
    process.exit(1)
  })