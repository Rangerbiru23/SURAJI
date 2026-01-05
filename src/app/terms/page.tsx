import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, FileText, ShoppingBag, Users, Gavel, AlertCircle } from 'lucide-react'

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                <FileText className="w-5 h-5 text-white" />
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
            Syarat & Ketentuan <span className="text-blue-600">SURAJI</span>
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
                <Gavel className="w-6 h-6 mr-2 text-blue-600" />
                Pendahuluan
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-blue max-w-none">
              <p className="text-gray-700 leading-relaxed">
                Selamat datang di <strong>SURAJI</strong>. Syarat & Ketentuan ini mengatur penggunaan 
                layanan minimarket kami, baik secara online melalui website maupun offline di toko fisik. 
                Dengan menggunakan layanan kami, Anda menyetujui untuk terikat oleh syarat dan ketentuan ini.
              </p>
            </CardContent>
          </Card>

          {/* Services */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <ShoppingBag className="w-6 h-6 mr-2 text-blue-600" />
                Layanan Kami
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg mb-2">Deskripsi Layanan:</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  <strong>SURAJI</strong> menyediakan layanan perdagangan eceran berbagai macam barang, 
                  terutama:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Makanan dan minuman kemasan</li>
                  <li>Produk tembakau (sesuai peraturan yang berlaku)</li>
                  <li>Kebutuhan rumah tangga sehari-hari</li>
                  <li>Produk kesehatan dan kebersihan pribadi</li>
                  <li>Snack dan makanan ringan</li>
                  <li>Minuman dalam kemasan</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg mb-2">Ketersediaan Produk:</h3>
                <p className="text-gray-700 leading-relaxed">
                  Kami berusaha untuk menyediakan semua produk yang tercantum, namun ketersediaan 
                  dapat berubah sewaktu-waktu tanpa pemberitahuan sebelumnya.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* User Responsibilities */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="w-6 h-6 mr-2 text-blue-600" />
                Tanggung Jawab Pengguna
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Sebagai pengguna layanan <strong>SURAJI</strong>, Anda setuju untuk:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Memberikan informasi yang akurat dan lengkap saat pendaftaran</li>
                <li>Menjaga kerahasiaan akun dan kata sandi Anda</li>
                <li>Tidak menggunakan layanan untuk aktivitas ilegal atau melawan hukum</li>
                <li>Mematuhi batasan usia untuk pembelian produk tertentu (seperti tembakau)</li>
                <li>Melakukan pembayaran tepat waktu untuk setiap transaksi</li>
                <li>Tidak melakukan penyalahgunaan atau gangguan terhadap sistem kami</li>
                <li>Menghormati staf dan pelanggan lain</li>
              </ul>
            </CardContent>
          </Card>

          {/* Ordering and Payment */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Pemesanan dan Pembayaran</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg mb-2">Proses Pemesanan:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Pemesanan dapat dilakukan online melalui website atau langsung di toko</li>
                  <li>Kami berhak menolak pesanan yang tidak memenuhi syarat</li>
                  <li>Konfirmasi pesanan akan dikirim melalui email atau WhatsApp</li>
                  <li>Harga yang tercantum adalah harga berlaku saat pemesanan</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg mb-2">Metode Pembayaran:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Tunai (untuk pembelian di toko)</li>
                  <li>Transfer bank</li>
                  <li>E-wallet (sesuai yang tersedia)</li>
                  <li>Pembayaran harus dilunasi sebelum atau saat pengiriman</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Delivery */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Pengiriman</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg mb-2">Layanan Pengiriman:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Pengiriman tersedia untuk area tertentu di Balikpapan</li>
                  <li>Biaya pengiriman akan diinformasikan saat checkout</li>
                  <li>Waktu pengiriman perkiraan 1-3 jam tergantung lokasi</li>
                  <li>Penerima harus berusia minimal 18 tahun untuk produk tertentu</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg mb-2">Kebijakan Pengiriman:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Kami tidak bertanggung jawab atas keterlambatan karena faktor eksternal</li>
                  <li>Barang yang sudah diterima tidak dapat dikembalikan kecuali ada cacat produksi</li>
                  <li>Pastikan alamat pengiriman akurat dan lengkap</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Returns and Refunds */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Pengembalian dan Pengembalian Dana</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg mb-2">Kebijakan Pengembalian:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Produk dapat dikembalikan dalam kondisi rusak atau kadaluarsa</li>
                  <li>Pengembalian harus dilakukan maksimal 24 jam setelah pembelian</li>
                  <li>Struk pembelian asli harus disertakan</li>
                  <li>Produk yang sudah dibuka atau digunakan tidak dapat dikembalikan</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-lg mb-2">Proses Pengembalian Dana:</h3>
                <p className="text-gray-700 leading-relaxed">
                  Pengembalian dana akan diproses dalam 3-7 hari kerja melalui metode 
                  pembayaran yang sama dengan transaksi awal.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Intellectual Property */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Hak Kekayaan Intelektual</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed mb-3">
                Semua konten di website <strong>SURAJI</strong>, termasuk namun tidak terbatas pada:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-3">
                <li>Logo dan merek dagang "SURAJI"</li>
                <li>Desain website dan tata letak</li>
                <li>Foto produk dan konten visual</li>
                <li>Deskripsi produk dan teks</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                dilindungi oleh hukum hak cipta dan merek dagang. 
                Tidak ada bagian dari website ini yang boleh direproduksi tanpa izin tertulis dari kami.
              </p>
            </CardContent>
          </Card>

          {/* Limitation of Liability */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertCircle className="w-6 h-6 mr-2 text-blue-600" />
                Pembatasan Tanggung Jawab
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed mb-3">
                <strong>SURAJI</strong> tidak bertanggung jawab atas:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Kerugian tidak langsung, insidental, atau konsekuensial</li>
                <li>Gangguan layanan karena faktor di luar kendali kami</li>
                <li>Kerusakan atau kehilangan data pengguna</li>
                <li>Kualitas produk dari pihak ketiga yang kami jual</li>
                <li>Aksi pengguna lain yang melanggar hukum</li>
              </ul>
            </CardContent>
          </Card>

          {/* Important Notice */}
          <Card className="border-0 shadow-lg bg-gradient-to-br from-red-50 to-white border-red-200">
            <CardHeader>
              <CardTitle className="text-red-600">Penting: Pembelian Produk Tembakau</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed mb-3">
                Sesuai peraturan yang berlaku di Indonesia:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Pembelian produk tembakau hanya diperbolehkan untuk usia 18 tahun ke atas</li>
                <li>Kami berhak meminta identitas untuk verifikasi usia</li>
                <li>Kami menolak penjualan jika usia pembeli tidak memenuhi syarat</li>
                <li>Peringatan kesehatan tercantum pada semua kemasan produk tembakau</li>
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
                Jika Anda memiliki pertanyaan tentang Syarat & Ketentuan ini, 
                silakan hubungi kami melalui:
              </p>
              <div className="space-y-2">
                <p className="text-gray-700">
                  <strong>Email:</strong> legal@suraji.com
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
              <FileText className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl">SURAJI</span>
          </div>
          <p className="text-gray-400">
            &copy; 2024 SURAJI. All rights reserved. | Terms & Conditions
          </p>
        </div>
      </footer>
    </div>
  )
}