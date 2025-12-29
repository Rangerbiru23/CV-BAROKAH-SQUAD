'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Phone, Mail, MapPin, Clock, CheckCircle, Star, Users, Scissors, Package, Truck } from 'lucide-react'

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    alert('Terima kasih! Pesan Anda telah kami terima.')
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

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
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">Beranda</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">Tentang</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Layanan</a>
              <a href="#portfolio" className="text-gray-700 hover:text-blue-600 transition-colors">Portofolio</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Kontak</a>
              <a href="/privacy" className="text-gray-700 hover:text-blue-600 transition-colors">Privacy</a>
              <a href="/terms" className="text-gray-700 hover:text-blue-600 transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-orange-100 text-orange-800 hover:bg-orange-200">
                🧵 Industri Konveksi Tekstil Terpercaya
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                <span className="text-blue-600">CV BAROKAH SQUAD</span>
                <br />
                Solusi Konveksi
                <br />
                <span className="text-orange-500">Profesional</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Mitra terpercaya untuk kebutuhan konveksi tekstil Anda. 
                Kualitas terbaik, harga kompetitif, dan pengiriman tepat waktu.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Phone className="mr-2 h-4 w-4" />
                  Hubungi Kami
                </Button>
                <Button size="lg" variant="outline" className="border-orange-500 text-orange-600 hover:bg-orange-50">
                  Lihat Portofolio
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-orange-100 rounded-2xl p-8 shadow-2xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <Scissors className="h-8 w-8 text-blue-600 mb-3" />
                    <h3 className="font-semibold text-gray-900">Jahitan Rapi</h3>
                    <p className="text-sm text-gray-600">Kualitas terbaik</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <Package className="h-8 w-8 text-orange-600 mb-3" />
                    <h3 className="font-semibold text-gray-900">Produk Lengkap</h3>
                    <p className="text-sm text-gray-600">Berbagai pilihan</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <Truck className="h-8 w-8 text-blue-600 mb-3" />
                    <h3 className="font-semibold text-gray-900">Pengiriman</h3>
                    <p className="text-sm text-gray-600">Tepat waktu</p>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <Users className="h-8 w-8 text-orange-600 mb-3" />
                    <h3 className="font-semibold text-gray-900">Tim Profesional</h3>
                    <p className="text-sm text-gray-600">Berpengalaman</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Tentang <span className="text-blue-600">CV BAROKAH SQUAD</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Perusahaan konveksi tekstil yang berkomitmen menyediakan produk berkualitas tinggi 
              dengan harga yang kompetitif untuk memenuhi kebutuhan fashion Anda.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Mengapa Memilih Kami?</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Kualitas Terjamin</h4>
                    <p className="text-gray-600">Setiap produk melalui quality control ketat</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Harga Kompetitif</h4>
                    <p className="text-gray-600">Penawaran terbaik untuk kualitas premium</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Pengerjaan Tepat Waktu</h4>
                    <p className="text-gray-600">Deadline adalah prioritas kami</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Bahan Berkualitas</h4>
                    <p className="text-gray-600">Menggunakan bahan tekstil terbaik</p>
                  </div>
                </div>
              </div>
            </div>
            <Card className="bg-gradient-to-br from-blue-50 to-orange-50 border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-900">Informasi Perusahaan</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-blue-600 mr-3" />
                  <div>
                    <p className="font-semibold">Alamat</p>
                    <p className="text-sm text-gray-600">
                      SETIABUDHI REGENCY BLOK B BARU NOMOR 3<br />
                      Desa/Kelurahan Ciwaruga, Kec. Parongpong<br />
                      Kab. Bandung Barat, Provinsi Jawa Barat<br />
                      Kode Pos: 40559
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-orange-600 mr-3" />
                  <div>
                    <p className="font-semibold">Telepon</p>
                    <p className="text-sm text-gray-600">082382466172</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-blue-600 mr-3" />
                  <div>
                    <p className="font-semibold">Jam Operasional</p>
                    <p className="text-sm text-gray-600">Senin - Sabtu: 08:00 - 17:00</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Layanan <span className="text-orange-600">Konveksi</span> Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Berbagai layanan konveksi tekstil untuk memenuhi kebutuhan fashion dan apparel Anda
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-2xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Scissors className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle>Konveksi Kaos</CardTitle>
                <CardDescription>
                  Produksi kaos berkualitas dengan berbagai model dan bahan
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Kaos Oblong</li>
                  <li>• Kaos Polo</li>
                  <li>• Kaos Raglan</li>
                  <li>• Kaos Custom Design</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-2xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                  <Package className="h-8 w-8 text-orange-600" />
                </div>
                <CardTitle>Konveksi Seragam</CardTitle>
                <CardDescription>
                  Produksi seragam untuk kantor, sekolah, dan komunitas
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Seragam Kantor</li>
                  <li>• Seragam Sekolah</li>
                  <li>• Seragam Komunitas</li>
                  <li>• Wearpack</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-2xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle>Konveksi Fashion</CardTitle>
                <CardDescription>
                  Produksi pakaian fashion wanita dan pria modern
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Kemeja</li>
                  <li>• Jaket</li>
                  <li>• Celana</li>
                  <li>• Dress</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Portofolio <span className="text-blue-600">Produk</span> Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hasil karya terbaik yang telah kami produksi untuk berbagai klien
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <Card key={item} className="overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <div className="aspect-square bg-gradient-to-br from-blue-100 to-orange-100 flex items-center justify-center">
                  <Package className="h-16 w-16 text-blue-600" />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-gray-900">Produk {item}</h3>
                  <p className="text-sm text-gray-600">Kategori Konveksi</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Apa Kata <span className="text-orange-600">Klien</span> Kami
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6">
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Kualitas jahitan sangat rapi dan pengiriman tepat waktu. 
                Sangat recommended untuk kebutuhan konveksi!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-200 rounded-full mr-3"></div>
                <div>
                  <p className="font-semibold">Budi Santoso</p>
                  <p className="text-sm text-gray-600">CEO Perusahaan Fashion</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Harga sangat kompetitif dengan kualitas premium. 
                CV BAROKAH SQUAD memang partner terpercaya."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-orange-200 rounded-full mr-3"></div>
                <div>
                  <p className="font-semibold">Siti Nurhaliza</p>
                  <p className="text-sm text-gray-600">Owner Butik</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Pelayanan sangat memuaskan dan hasil produk sesuai ekspektasi. 
                Terima kasih CV BAROKAH SQUAD!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-green-200 rounded-full mr-3"></div>
                <div>
                  <p className="font-semibold">Ahmad Fauzi</p>
                  <p className="text-sm text-gray-600">Manajer Procurement</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Hubungi <span className="text-blue-600">CV BAROKAH SQUAD</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Siap melayani kebutuhan konveksi tekstil Anda dengan profesional
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Kirim Pesan</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Nama Lengkap</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Nomor Telepon</Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="message">Pesan</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="mt-1"
                  />
                </div>
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                  Kirim Pesan
                </Button>
              </form>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Informasi Kontak</h3>
              <div className="space-y-6">
                <Card className="p-6">
                  <div className="flex items-center">
                    <MapPin className="h-6 w-6 text-blue-600 mr-4" />
                    <div>
                      <h4 className="font-semibold">Alamat</h4>
                      <p className="text-gray-600">
                        SETIABUDHI REGENCY BLOK B BARU NOMOR 3<br />
                        Desa/Kelurahan Ciwaruga, Kec. Parongpong<br />
                        Kab. Bandung Barat, Provinsi Jawa Barat<br />
                        Kode Pos: 40559
                      </p>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-6">
                  <div className="flex items-center">
                    <Phone className="h-6 w-6 text-orange-600 mr-4" />
                    <div>
                      <h4 className="font-semibold">Telepon</h4>
                      <p className="text-gray-600">082382466172</p>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-6">
                  <div className="flex items-center">
                    <Mail className="h-6 w-6 text-blue-600 mr-4" />
                    <div>
                      <h4 className="font-semibold">Email</h4>
                      <p className="text-gray-600">info@barokahsquad.com</p>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-6">
                  <div className="flex items-center">
                    <Clock className="h-6 w-6 text-orange-600 mr-4" />
                    <div>
                      <h4 className="font-semibold">Jam Operasional</h4>
                      <p className="text-gray-600">
                        Senin - Sabtu: 08:00 - 17:00<br />
                        Minggu: Tutup
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
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
                <li><a href="#about" className="hover:text-white">Tentang Kami</a></li>
                <li><a href="#portfolio" className="hover:text-white">Portofolio</a></li>
                <li><a href="/privacy" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-white">Terms & Conditions</a></li>
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