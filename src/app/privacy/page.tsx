import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, Shield, Eye, Lock, Database } from 'lucide-react'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                SURAJI
              </span>
            </div>
            
            <Link href="/">
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Kembali ke Beranda
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Kebijakan Privasi <span className="text-blue-600">SURAJI</span>
          </h1>
          <p className="text-lg text-gray-600">
            Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
        </div>

        <div className="space-y-8">
          {/* Introduction */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Eye className="w-6 h-6 mr-2 text-blue-600" />
                Pendahuluan
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-blue max-w-none">
              <p className="text-gray-700 leading-relaxed">
                Di <strong>SURAJI</strong>, kami berkomitmen untuk melindungi privasi dan keamanan data pribadi Anda. 
                Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi 
                yang Anda berikan saat menggunakan layanan minimarket kami, baik secara online maupun offline.
              </p>
            </CardContent>
          </Card>

          {/* Data Collection */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Database className="w-6 h-6 mr-2 text-blue-600" />
                Pengumpulan Data
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg mb-2">Data yang Kami Kumpulkan:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li><strong>Informasi Pribadi:</strong> Nama, alamat email, nomor telepon, alamat pengiriman</li>
                  <li><strong>Informasi Transaksi:</strong> Riwayat pembelian, metode pembayaran, detail pesanan</li>
                  <li><strong>Informasi Teknis:</strong> Alamat IP, jenis browser, waktu akses, data perangkat</li>
                  <li><strong>Informasi Lokasi:</strong> Data geolokasi untuk pengiriman dan layanan berbasis lokasi</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg mb-2">Cara Kami Mengumpulkan Data:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Saat Anda mendaftar akun atau membuat pesanan di website kami</li>
                  <li>Saat Anda menghubungi layanan pelanggan kami</li>
                  <li>Melalui cookie dan teknologi pelacakan lainnya</li>
                  <li>Saat Anda menggunakan layanan pengiriman kami</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Data Usage */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Lock className="w-6 h-6 mr-2 text-blue-600" />
                Penggunaan Data
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Kami menggunakan data yang Anda berikan untuk tujuan berikut:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><strong>Menyediakan Layanan:</strong> Memproses pesanan dan pengiriman produk</li>
                <li><strong>Personalisasi:</strong> Menyesuaikan pengalaman berbelanja Anda</li>
                <li><strong>Komunikasi:</strong> Mengirim konfirmasi pesanan, update pengiriman, dan promosi</li>
                <li><strong>Penyempurnaan Layanan:</strong> Menganalisis data untuk meningkatkan kualitas layanan</li>
                <li><strong>Keamanan:</strong> Mendeteksi dan mencegah aktivitas yang mencurigakan</li>
                <li><strong>Kepatuhan Hukum:</strong> Memenuhi kewajiban hukum dan peraturan yang berlaku</li>
              </ul>
            </CardContent>
          </Card>

          {/* Data Protection */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="w-6 h-6 mr-2 text-blue-600" />
                Perlindungan Data
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                <strong>SURAJI</strong> mengimplementasikan berbagai langkah keamanan untuk melindungi data pribadi Anda:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Enkripsi data selama transmisi dan penyimpanan</li>
                <li>Akses terbatas ke data pribadi bagi staf yang berwenang</li>
                <li>System monitoring dan deteksi intrusi</li>
                <li>Backup data teratur dan aman</li>
                <li>Update keamanan sistem secara berkala</li>
              </ul>
            </CardContent>
          </Card>

          {/* User Rights */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Hak Anda Sebagai Pengguna</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Sebagai pengguna, Anda memiliki hak-hak berikut terkait data pribadi Anda:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><strong>Akses:</strong> Meminta salinan data pribadi yang kami simpan</li>
                <li><strong>Koreksi:</strong> Memperbarui atau memperbaiki data yang tidak akurat</li>
                <li><strong>Penghapusan:</strong> Meminta penghapusan data pribadi Anda</li>
                <li><strong>Pembatasan:</strong> Membatasi pengolahan data pribadi Anda</li>
                <li><strong>Portabilitas:</strong> Memindahkan data Anda ke layanan lain</li>
                <li><strong>Penolakan:</strong> Menolak pengolahan data untuk tujuan pemasaran</li>
              </ul>
            </CardContent>
          </Card>

          {/* Third Party */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Pihak Ketiga</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Kami dapat berbagi data Anda dengan pihak ketiga dalam kondisi berikut:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><strong>Penyedia Layanan:</strong> Jasa pengiriman, payment gateway, dan penyedia layanan teknis</li>
                <li><strong>Partner Bisnis:</strong> Supplier dan vendor yang membantu operasional kami</li>
                <li><strong>Otoritas Hukum:</strong> Saat diwajibkan oleh hukum atau peraturan yang berlaku</li>
                <li><strong>Transfer Bisnis:</strong> Dalam kasus merger, akuisisi, atau penjualan aset</li>
              </ul>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-white">
            <CardHeader>
              <CardTitle className="text-blue-600">Hubungi Kami</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Jika Anda memiliki pertanyaan atau keluhan tentang kebijakan privasi kami, 
                silakan hubungi kami melalui:
              </p>
              <div className="space-y-2">
                <p className="text-gray-700">
                  <strong>Email:</strong> privacy@suraji.com
                </p>
                <p className="text-gray-700">
                  <strong>Telepon:</strong> 0823-8246-6172
                </p>
                <p className="text-gray-700">
                  <strong>Alamat:</strong> JL. PESATUAN, Desa/Kelurahan Manggar Baru, 
                  Kec. Balikpapan Timur, Kota Balikpapan, Provinsi Kalimantan Timur
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl">SURAJI</span>
          </div>
          <p className="text-gray-400">
            &copy; 2024 SURAJI. All rights reserved. | Privacy Policy
          </p>
        </div>
      </footer>
    </div>
  )
}