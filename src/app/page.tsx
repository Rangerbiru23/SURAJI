'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Phone, Mail, MapPin, ShoppingBag, Star, TrendingUp, Users, Zap } from 'lucide-react'
import { useState, useEffect } from 'react'

interface Product {
  id: string
  name: string
  price: number
  image?: string
  featured: boolean
  category: {
    name: string
  }
}

interface Promotion {
  id: string
  title: string
  description: string
  discount: number
  image?: string
}

export default function HomePage() {
  const [products, setProducts] = useState<Product[]>([])
  const [promotions, setPromotions] = useState<Promotion[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const [productsRes, promotionsRes] = await Promise.all([
        fetch('/api/products?featured=true&limit=8'),
        fetch('/api/promotions?active=true&limit=3')
      ])
      
      if (productsRes.ok) {
        const productsData = await productsRes.json()
        setProducts(productsData)
      }
      
      if (promotionsRes.ok) {
        const promotionsData = await promotionsRes.json()
        setPromotions(promotionsData)
      }
    } catch (error) {
      console.error('Failed to fetch data:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                <ShoppingBag className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                SURAJI
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#products" className="text-gray-700 hover:text-blue-600 transition-colors">Produk</Link>
              <Link href="#promotions" className="text-gray-700 hover:text-blue-600 transition-colors">Promo</Link>
              <Link href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">Tentang</Link>
              <Link href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Kontak</Link>
            </div>

            <Button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white">
              Hubungi Kami
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-500 to-blue-400 opacity-90"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              <Zap className="w-3 h-3 mr-1" />
              Powered by Meta Ads Technology
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Selamat Datang di <span className="text-yellow-300">SURAJI</span>
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Minimarket modern dengan berbagai macam barang kebutuhan sehari-hari. 
              Makanan, minuman, dan tembakau dengan harga terjangkau.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 font-semibold">
                <ShoppingBag className="w-5 h-5 mr-2" />
                Belanja Sekarang
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                Lihat Promo
              </Button>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-300 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-white rounded-full opacity-10 animate-pulse"></div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Mengapa Memilih <span className="text-blue-600">SURAJI</span>?
            </h2>
            <p className="text-lg text-gray-600">Kami memberikan yang terbaik untuk kebutuhan Anda</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <CardTitle>Harga Terjangkau</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Produk berkualitas dengan harga yang bersaing di pasaran
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <CardTitle>Pelayanan Terbaik</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Staff yang ramah dan siap membantu kebutuhan belanja Anda
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <CardTitle>Kualitas Terjamin</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Produk segar dan berkualitas tinggi untuk kepuasan Anda
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="products" className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Produk Unggulan <span className="text-blue-600">SURAJI</span>
            </h2>
            <p className="text-lg text-gray-600">Pilihan terbaik untuk kebutuhan sehari-hari Anda</p>
          </div>

          {loading ? (
            <div className="grid md:grid-cols-4 gap-6">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="bg-white rounded-lg shadow-md h-64 animate-pulse"></div>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-4 gap-6">
              {products.map((product) => (
                <Card key={product.id} className="group hover:shadow-lg transition-all duration-300 border-0">
                  <div className="aspect-square bg-gradient-to-br from-blue-100 to-blue-50 rounded-t-lg flex items-center justify-center">
                    <ShoppingBag className="w-12 h-12 text-blue-400" />
                  </div>
                  <CardContent className="p-4">
                    <Badge variant="secondary" className="text-xs mb-2">
                      {product.category.name}
                    </Badge>
                    <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-2xl font-bold text-blue-600">
                      Rp {product.price.toLocaleString('id-ID')}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
          
          <div className="text-center mt-8">
            <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
              Lihat Semua Produk
            </Button>
          </div>
        </div>
      </section>

      {/* Promotions */}
      <section id="promotions" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Promo Spesial <span className="text-red-500">Hari Ini</span>
            </h2>
            <p className="text-lg text-gray-600">Dapatkan penawaran terbaik dari kami</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {promotions.map((promo) => (
              <Card key={promo.id} className="border-0 shadow-lg overflow-hidden group hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-4xl font-bold">{promo.discount}%</div>
                    <div className="text-lg">DISKON</div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{promo.title}</h3>
                  <p className="text-gray-600">{promo.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Tentang <span className="text-blue-600">SURAJI</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                SURAJI adalah minimarket modern yang menyediakan berbagai macam barang kebutuhan sehari-hari. 
                Kami berkomitmen untuk memberikan pelayanan terbaik dengan produk berkualitas tinggi.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Dengan dukungan teknologi Meta Ads, kami memastikan pengalaman berbelanja Anda menjadi 
                lebih mudah, nyaman, dan menyenangkan.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold text-blue-600">1000+</div>
                  <div className="text-gray-600">Produk Variatif</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600">24/7</div>
                  <div className="text-gray-600">Pelayanan</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Visi & Misi</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Visi</h4>
                  <p className="text-blue-100">
                    Menjadi minimarket pilihan utama masyarakat dengan pelayanan terbaik dan produk berkualitas.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Misi</h4>
                  <p className="text-blue-100">
                    Memberikan kemudahan akses kebutuhan sehari-hari dengan harga terjangkau dan kualitas terjamin.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Hubungi <span className="text-blue-600">SURAJI</span>
            </h2>
            <p className="text-lg text-gray-600">Kami siap melayani kebutuhan Anda</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Alamat</h3>
                <p className="text-gray-600">
                  JL. PESATUAN, Desa/Kelurahan Manggar Baru<br />
                  Kec. Balikpapan Timur, Kota Balikpapan<br />
                  Provinsi Kalimantan Timur
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Telepon</h3>
                <p className="text-gray-600">
                  <a href="tel:082382466172" className="text-blue-600 hover:text-blue-700 font-medium">
                    0823-8246-6172
                  </a>
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Email</h3>
                <p className="text-gray-600">
                  <a href="mailto:info@suraji.com" className="text-blue-600 hover:text-blue-700 font-medium">
                    info@suraji.com
                  </a>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <ShoppingBag className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-xl">SURAJI</span>
              </div>
              <p className="text-gray-400">
                Minimarket modern dengan berbagai macam barang kebutuhan sehari-hari.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="text-gray-400 hover:text-white transition-colors">Terms & Conditions</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Layanan</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Makanan & Minuman</li>
                <li>Tembakau</li>
                <li>Kebutuhan Rumah Tangga</li>
                <li>Produk Kesehatan</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Powered by</h4>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="text-gray-400">Meta Ads Technology</span>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 SURAJI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}