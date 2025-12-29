'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, FileText, Package, CreditCard, AlertTriangle, CheckCircle, Shield } from 'lucide-react'
import Link from 'next/link'

export default function TermsConditions() {
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
              <Link href="/privacy" className="text-gray-700 hover:text-blue-600 transition-colors">Privacy</Link>
              <Link href="/terms" className="text-blue-600 font-semibold">Terms</Link>
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
          <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <FileText className="h-10 w-10 text-orange-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Syarat & Ketentuan <span className="text-orange-600">CV BAROKAH SQUAD</span>
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
                <FileText className="h-6 w-6 text-blue-600 mr-3" />
                Pendahuluan
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-blue max-w-none">
              <p className="text-gray-700 leading-relaxed">
                Selamat datang di <strong>CV BAROKAH SQUAD</strong>. Syarat dan Ketentuan ini mengatur 
                penggunaan layanan konveksi tekstil yang kami sediakan. Dengan menggunakan layanan kami, 
                Anda setuju untuk terikat oleh syarat dan ketentuan ini.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Jika Anda tidak setuju dengan bagian mana pun dari syarat dan ketentuan ini, 
                harap jangan menggunakan layanan kami.
              </p>
            </CardContent>
          </Card>

          {/* Services */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Package className="h-6 w-6 text-orange-600 mr-3" />
                Layanan Konveksi
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-orange-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Layanan yang Kami Sediakan:</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Konveksi kaos (oblong, polo, raglan, custom)</li>
                  <li>Konveksi seragam (kantor, sekolah, komunitas)</li>
                  <li>Konveksi fashion (kemeja, jaket, celana, dress)</li>
                  <li>Custom design sesuai permintaan klien</li>
                  <li>Konsultasi desain dan bahan</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Keterangan Layanan:</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Semua produk dibuat sesuai spesifikasi yang disepakati</li>
                  <li>Kami menggunakan bahan berkualitas tinggi</li>
                  <li>Waktu pengerjaan disesuaikan dengan jumlah dan kompleksitas pesanan</li>
                  <li>Quality control dilakukan pada setiap tahap produksi</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Ordering Process */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <CheckCircle className="h-6 w-6 text-blue-600 mr-3" />
                Proses Pemesanan
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Langkah-langkah Pemesanan:</h3>
                <ol className="list-decimal list-inside text-gray-700 space-y-1">
                  <li>Konsultasi dan penentuan spesifikasi produk</li>
                  <li>Penyediaan desain dan pemilihan bahan</li>
                  <li>Penawaran harga dan kesepakatan</li>
                  <li>Pembayaran uang muka (DP) minimal 50%</li>
                  <li>Proses produksi sesuai kesepakatan waktu</li>
                  <li>Quality control dan revisi jika diperlukan</li>
                  <li>Pelunasan pembayaran</li>
                  <li>Pengiriman atau pengambilan produk</li>
                </ol>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Syarat Pemesanan:</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Identitas diri yang valid (KTP/SIM/Paspor)</li>
                  <li>Spesifikasi produk yang jelas dan detail</li>
                  <li>Desain yang disetujui (jika custom)</li>
                  <li>Pembayaran DP sesuai kesepakatan</li>
                  <li>Persetujuan waktu pengerjaan</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Payment */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <CreditCard className="h-6 w-6 text-orange-600 mr-3" />
                Pembayaran
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Metode Pembayaran:</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Transfer Bank (BCA, Mandiri, BNI, BRI)</li>
                  <li>E-Wallet (OVO, GoPay, DANA)</li>
                  <li>Tunai (untuk pengambilan langsung)</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Ketentuan Pembayaran:</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>DP minimal 50% dari total harga</li>
                  <li>Pelunasan sebelum pengiriman</li>
                  <li>Harga sudah termasuk PPN (jika applicable)</li>
                  <li>Harga tidak termasuk ongkos kirim</li>
                  <li>Pembayaran tidak dapat dikembalikan</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Cancellation */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertTriangle className="h-6 w-6 text-blue-600 mr-3" />
                Pembatalan dan Pengembalian
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Kebijakan Pembatalan:</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Pembatalan sebelum produksi: DP tidak dapat dikembalikan</li>
                  <li>Pembatalan saat produksi berjalan: DP tidak dapat dikembalikan + biaya material yang sudah terpakai</li>
                  <li>Pembatalan setelah produksi selesai: wajib melunasi pembayaran penuh</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Kebijakan Pengembalian:</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Produk cacat produksi: revisi atau penggantian gratis</li>
                  <li>Kesalahan spesifikasi: revisi sesuai kesepakatan awal</li>
                  <li>Pengembalian hanya berlaku untuk produk cacat produksi</li>
                  <li>Klaim pengembalian maksimal 7 hari setelah penerimaan</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Intellectual Property */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="h-6 w-6 text-orange-600 mr-3" />
                Hak Kekayaan Intelektual
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Desain Klien:</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Desain yang disediakan klien tetap menjadi hak milik klien</li>
                  <li>CV BAROKAH SQUAD berhak menggunakan desain untuk portofolio</li>
                  <li>Klien bertanggung jawab atas hak cipta desain yang disediakan</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Desain CV BAROKAH SQUAD:</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Desain yang kami buat dilindungi hak cipta</li>
                  <li>Penggunaan desain memerlukan izin tertulis</li>
                  <li>Desain dapat digunakan kembali untuk proyek lain</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Warranty */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <CheckCircle className="h-6 w-6 text-blue-600 mr-3" />
                Garansi
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Garansi yang Kami Berikan:</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Garansi jahitan rapi 30 hari</li>
                  <li>Garanti warna tidak luntur (sesuai perawatan)</li>
                  <li>Garanti ukuran sesuai kesepakatan</li>
                  <li>Garanti bahan sesuai spesifikasi</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Garansi Tidak Berlaku Untuk:</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Kesalahan penggunaan dan perawatan</li>
                  <li>Kerusakan akibat faktor eksternal</li>
                  <li>Modifikasi produk tanpa persetujuan</li>
                  <li>Pemakaian normal (pudar karena usia)</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Limitation of Liability */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertTriangle className="h-6 w-6 text-orange-600 mr-3" />
                Pembatasan Tanggung Jawab
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  <strong>CV BAROKAH SQUAD</strong> tidak bertanggung jawab atas:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Keterlambatan pengiriman yang disebabkan oleh pihak ketiga</li>
                  <li>Kerusakan produk selama pengiriman</li>
                  <li>Kehilangan produk selama pengiriman</li>
                  <li>Kerugian tidak langsung atau konsekuensial</li>
                  <li>Force majeure (bencana alam, huru hara, dll)</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Confidentiality */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="h-6 w-6 text-blue-600 mr-3" />
                Kerahasiaan
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                <strong>CV BAROKAH SQUAD</strong> berkomitmen untuk menjaga kerahasiaan:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 mt-2">
                <li>Informasi pribadi klien</li>
                <li>Desain dan spesifikasi produk</li>
                <li>Detail bisnis dan keuangan</li>
                <li>Informasi lain yang dianggap rahasia</li>
              </ul>
            </CardContent>
          </Card>

          {/* Dispute Resolution */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="h-6 w-6 text-orange-600 mr-3" />
                Penyelesaian Sengketa
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Prosedur Penyelesaian Sengketa:</h3>
                <ol className="list-decimal list-inside text-gray-700 space-y-1">
                  <li>Negosiasi damai antara kedua belah pihak</li>
                  <li>Mediasi dengan pihak ketiga netral</li>
                  <li>Arbitrase jika mediasi gagal</li>
                  <li>Pengadilan sebagai upaya terakhir</li>
                </ol>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Yurisdiksi:</h3>
                <p className="text-gray-700">
                  Semua sengketa akan diselesaikan berdasarkan hukum yang berlaku di Indonesia 
                  dan yurisdiksi pengadilan di Kabupaten Bandung Barat.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Changes to Terms */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertTriangle className="h-6 w-6 text-blue-600 mr-3" />
                Perubahan Syarat & Ketentuan
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                <strong>CV BAROKAH SQUAD</strong> berhak mengubah syarat dan ketentuan ini kapan saja. 
                Perubahan akan berlaku efektif setelah diposting di website. 
                Penggunaan layanan setelah perubahan berarti Anda menyetujui syarat yang baru.
              </p>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="h-6 w-6 text-orange-600 mr-3" />
                Hubungi Kami
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Jika Anda memiliki pertanyaan tentang Syarat & Ketentuan ini, 
                silakan hubungi kami:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-semibold text-gray-900"><strong>CV BAROKAH SQUAD</strong></p>
                <p className="text-gray-700">Email: legal@barokahsquad.com</p>
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