'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, Shield, Eye, Database, User, Lock } from 'lucide-react'
import Link from 'next/link'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <img src="/logo.png" alt="CV BAROKAH SQUAD" className="h-10 w-auto mr-3" />
              <span className="font-bold text-xl text-blue-900">CV BAROKAH SQUAD</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">Beranda</Link>
              <Link href="/privacy" className="text-blue-600 font-semibold">Privacy</Link>
              <Link href="/terms" className="text-gray-700 hover:text-blue-600 transition-colors">Terms</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Back Button */}
        <Link href="/">
          <Button variant="outline" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Kembali ke Beranda
          </Button>
        </Link>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Shield className="h-10 w-10 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Kebijakan Privasi <span className="text-blue-600">CV BAROKAH SQUAD</span>
          </h1>
          <p className="text-xl text-gray-600">
            Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8">
          {/* Introduction */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Eye className="h-6 w-6 text-blue-600 mr-3" />
                Pendahuluan
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-blue max-w-none">
              <p className="text-gray-700 leading-relaxed">
                Di <strong>CV BAROKAH SQUAD</strong>, kami sangat memprioritaskan privasi dan keamanan data pribadi Anda. 
                Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, melindungi, 
                dan membagikan informasi pribadi Anda ketika Anda menggunakan layanan konveksi tekstil kami.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Dengan menggunakan layanan kami, Anda menyetujui praktik-praktik yang dijelaskan dalam kebijakan ini.
              </p>
            </CardContent>
          </Card>

          {/* Data Collection */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Database className="h-6 w-6 text-orange-600 mr-3" />
                Informasi yang Kami Kumpulkan
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">1. Informasi Pribadi</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Nama lengkap</li>
                  <li>Alamat email</li>
                  <li>Nomor telepon</li>
                  <li>Alamat pengiriman</li>
                  <li>Informasi pembayaran</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">2. Informasi Bisnis</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Nama perusahaan (jika ada)</li>
                  <li>Detail pesanan konveksi</li>
                  <li>Spesifikasi produk</li>
                  <li>Desain dan mockup</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">3. Informasi Teknis</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Alamat IP</li>
                  <li>Jenis browser</li>
                  <li>Waktu akses</li>
                  <li>Halaman yang dikunjungi</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Data Usage */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <User className="h-6 w-6 text-blue-600 mr-3" />
                Penggunaan Informasi
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Kami menggunakan informasi Anda untuk:</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Memproses dan menyelesaikan pesanan konveksi Anda</li>
                  <li>Memberikan layanan pelanggan yang lebih baik</li>
                  <li>Mengirimkan update status pesanan</li>
                  <li>Memproses pembayaran dan transaksi</li>
                  <li>Mengirimkan informasi produk dan promosi</li>
                  <li>Memperbaiki kualitas layanan kami</li>
                  <li>Memenuhi kewajiban hukum dan peraturan</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Data Protection */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Lock className="h-6 w-6 text-orange-600 mr-3" />
                Keamanan Data
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                <strong>CV BAROKAH SQUAD</strong> berkomitmen untuk melindungi keamanan informasi pribadi Anda. 
                Kami menerapkan langkah-langkah keamanan yang wajar dan sesuai untuk:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Mencegah akses tidak sah</li>
                <li>Menggunakan enkripsi data</li>
                <li>Memperbarui sistem keamanan secara berkala</li>
                <li>Melatih staf tentang privasi data</li>
                <li>Membatasi akses data hanya kepada yang berwenang</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Namun, perlu diingat bahwa tidak ada metode transmisi internet atau penyimpanan elektronik 
                yang 100% aman.
              </p>
            </CardContent>
          </Card>

          {/* Data Sharing */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Database className="h-6 w-6 text-blue-600 mr-3" />
                Pembagian Informasi
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Kami tidak menjual, memperdagangkan, atau menyewakan informasi pribadi Anda kepada pihak ketiga. 
                Kami hanya membagikan informasi Anda dalam kondisi berikut:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Dengan persetujuan Anda</li>
                <li>Untuk memproses pesanan (mitra pengiriman, payment gateway)</li>
                <li>Untuk memenuhi kewajiban hukum</li>
                <li>Untuk melindungi hak, privasi, keamanan, atau properti kami</li>
                <li>Dalam kasus transfer bisnis (merger, akuisisi)</li>
              </ul>
            </CardContent>
          </Card>

          {/* User Rights */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <User className="h-6 w-6 text-orange-600 mr-3" />
                Hak Anda sebagai Pengguna
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Sebagai pengguna layanan <strong>CV BAROKAH SQUAD</strong>, Anda memiliki hak untuk:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Mengakses informasi pribadi yang kami simpan</li>
                <li>Memperbarui atau mengoreksi informasi yang tidak akurat</li>
                <li>Menghapus informasi pribadi Anda</li>
                <li>Menolak pemasaran langsung</li>
                <li>Meminta salinan data pribadi Anda</li>
                <li>Menarik persetujuan penggunaan data</li>
              </ul>
            </CardContent>
          </Card>

          {/* Cookies */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Eye className="h-6 w-6 text-blue-600 mr-3" />
                Kebijakan Cookie
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Website kami menggunakan cookie untuk meningkatkan pengalaman pengguna:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Cookie esensial untuk fungsi website</li>
                <li>Cookie analitik untuk memahami penggunaan</li>
                <li>Cookie preferensi untuk pengalaman personal</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Anda dapat mengatur browser untuk menolak cookie atau memberi tahu saat cookie dikirim.
              </p>
            </CardContent>
          </Card>

          {/* Children Privacy */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="h-6 w-6 text-orange-600 mr-3" />
                Privasi Anak-anak
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                Layanan kami tidak ditujukan untuk anak-anak di bawah 13 tahun. 
                Kami tidak sengaja mengumpulkan informasi pribadi dari anak-anak. 
                Jika kami mengetahui telah mengumpulkan informasi dari anak di bawah 13 tahun, 
                kami akan mengambil langkah untuk menghapus informasi tersebut segera.
              </p>
            </CardContent>
          </Card>

          {/* Changes to Policy */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Eye className="h-6 w-6 text-blue-600 mr-3" />
                Perubahan Kebijakan
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                <strong>CV BAROKAH SQUAD</strong> dapat memperbarui kebijakan privasi ini dari waktu ke waktu. 
                Perubahan akan diposting di halaman ini dengan tanggal "Terakhir diperbarui" yang baru. 
                Kami mendorong Anda untuk meninjau kebijakan ini secara berkala.
              </p>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <User className="h-6 w-6 text-orange-600 mr-3" />
                Hubungi Kami
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini atau ingin menggunakan hak Anda, 
                silakan hubungi kami:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-semibold text-gray-900"><strong>CV BAROKAH SQUAD</strong></p>
                <p className="text-gray-700">Email: privacy@barokahsquad.com</p>
                <p className="text-gray-700">Telepon: 082382466172</p>
                <p className="text-gray-700">
                  Alamat: SETIABUDHI REGENCY BLOK B BARU NOMOR 3<br />
                  Desa/Kelurahan Ciwaruga, Kec. Parongpong<br />
                  Kab. Bandung Barat, Provinsi Jawa Barat<br />
                  Kode Pos: 40559
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <img src="/logo.png" alt="CV BAROKAH SQUAD" className="h-8 w-auto mr-2" />
                <span className="font-bold text-lg">CV BAROKAH SQUAD</span>
              </div>
              <p className="text-gray-400">
                Mitra terpercaya untuk kebutuhan konveksi tekstil berkualitas tinggi.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Layanan</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Konveksi Kaos</li>
                <li>Konveksi Seragam</li>
                <li>Konveksi Fashion</li>
                <li>Custom Design</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Perusahaan</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/" className="hover:text-white">Tentang Kami</Link></li>
                <li><Link href="/" className="hover:text-white">Portofolio</Link></li>
                <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-white">Terms & Conditions</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Kontak</h4>
              <ul className="space-y-2 text-gray-400">
                <li>082382466172</li>
                <li>info@barokahsquad.com</li>
                <li>Ciwaruga, Parongpong</li>
                <li>Bandung Barat, 40559</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 CV BAROKAH SQUAD. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}