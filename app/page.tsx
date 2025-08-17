import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Heart, Users, Target } from "lucide-react"

export default function MerdekaBukuLanding() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-bold text-lg sm:text-xl">Logos ID</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#tentang" className="text-muted-foreground hover:text-foreground transition-colors">
              Tentang
            </a>
            <a href="#dampak" className="text-muted-foreground hover:text-foreground transition-colors">
              Dampak
            </a>
            <a href="#terlibat" className="text-muted-foreground hover:text-foreground transition-colors">
              Terlibat
            </a>
            <Button size="lg">
            <a href="https://logos-id.myr.id/galang-dana/v2/urundana-penerjemahan-dan-distribusi-buku-how-we-think-karya-john-dewey-merdekabuku" target="_blank" rel="noopener noreferrer">
                    Urun Dana
                  </a></Button>
          </nav>
          <Button variant="ghost" size="sm" className="md:hidden">
            <span className="sr-only">Menu</span>
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-to-br from-card to-background">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
              <Badge variant="secondary" className="w-fit mx-auto lg:mx-0">
                Inisiatif #MerdekaBuku
              </Badge>
              <div className="space-y-4 lg:space-y-6">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                  <span className="text-primary">1000 Buku</span>
                  <br />
                  <span className="text-foreground">Gratis untuk</span>
                  <br />
                  <span className="text-secondary">Indonesia</span>
                </h1>
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Pemerintah memotong Rp335 triliun anggaran pendidikan. Kami berkomitmen menerjemahkan 1000 buku
                  pendidikan ke Bahasa Indonesia dan mendistribusikannya gratis ke daerah terpencil.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="text-base sm:text-lg px-6 sm:px-8" asChild>
                  <a href="https://logos-id.myr.id/galang-dana/v2/urundana-penerjemahan-dan-distribusi-buku-how-we-think-karya-john-dewey-merdekabuku" target="_blank" rel="noopener noreferrer">
                    Dukung Sekarang
                    <Heart className="ml-2 h-4 h-5 w-4 sm:w-5" />
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative mt-8 lg:mt-0">
              <div className="bg-card rounded-2xl p-6 sm:p-8 shadow-xl border">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <Heart className="h-6 w-6 sm:h-8 sm:w-8 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-base sm:text-lg">Donasi</h3>
                      <p className="text-sm sm:text-base text-muted-foreground">
                        Dukung penerjemahan dan pencetakan buku
                      </p>
                    </div>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between items-center p-3 bg-background rounded-lg">
                      <span>Tier 1 (Ebook Gratis)</span>
                      <span className="font-semibold text-primary">Rp5K-100K</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-background rounded-lg">
                      <span>Tier 2 (1 Buku Fisik + Ebook Gratis)</span>
                      <span className="font-semibold text-secondary">Rp100K-250K</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-background rounded-lg">
                      <span>Tier 3 (3 Buku Fisik + Ebook Gratis)</span>
                      <span className="font-semibold text-accent">Rp250K+</span>
                    </div>
                  </div>
                  <Button className="w-full" asChild>
                    <a href="https://logos-id.myr.id/galang-dana/v2/urundana-penerjemahan-dan-distribusi-buku-how-we-think-karya-john-dewey-merdekabuku" target="_blank" rel="noopener noreferrer">
                      Urun Dana Sekarang
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section id="tentang" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-secondary/5">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="space-y-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">Krisis Pendidikan Indonesia</h2>
            <div className="bg-card rounded-2xl p-6 sm:p-8 border shadow-sm">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary mb-4">Rp335 Triliun</div>
              <p className="text-lg sm:text-xl text-muted-foreground mb-6">
                Anggaran pendidikan yang dipotong pemerintah untuk program Makan Bergizi Gratis
              </p>
              <div className="grid sm:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <Target className="h-10 w-10 sm:h-12 sm:w-12 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Akses Terbatas</h3>
                  <p className="text-sm text-muted-foreground">
                    Buku pendidikan berkualitas sulit diakses di daerah terpencil
                  </p>
                </div>
                <div className="text-center">
                  <BookOpen className="h-10 w-10 sm:h-12 sm:w-12 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Rintangan Bahasa</h3>
                  <p className="text-sm text-muted-foreground">
                    Sangat banyak buku pendidikan berkualitas masih dalam bahasa asing
                  </p>
                </div>
                <div className="text-center">
                  <Users className="h-10 w-10 sm:h-12 sm:w-12 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Kesenjangan Digital</h3>
                  <p className="text-sm text-muted-foreground">
                    Tidak semua daerah memiliki akses internet yang memadai
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution & Impact */}
      <section id="dampak" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">Solusi Kami: #MerdekaBuku</h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Menerjemahkan, menerbitkan, dan mendistribusikan 1000 buku pendidikan berkualitas secara gratis (baik yang ditulis oleh akademisi luar negeri maupun dalam negeri) ke seluruh
              Indonesia
            </p>
          </div>

          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">Proyek Pilot: Buku Saku Dewey</h3>
              <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto lg:mx-0">
                Memulai dengan menerjemahkan "How We Think" karya John Dewey menjadi 3 buku saku yang mudah diakses dan
                dipahami.
              </p>
            </div>

            <div className="space-y-6 lg:space-y-8">
              <Card className="p-4 sm:p-6">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-start sm:items-center gap-3 text-base sm:text-lg">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-foreground text-sm font-bold">I</span>
                    </div>
                    <div>
                      <div>Buku Saku I: Masalah Pelatihan Berpikir</div>
                      <div className="text-sm text-muted-foreground font-normal mt-1">
                        Berdasarkan Part I: The Problem of Training Thought
                      </div>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-semibold min-w-[20px] mt-0.5">1.</span>
                      <span>Apa Itu Berpikir? (What is Thought?)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-semibold min-w-[20px] mt-0.5">2.</span>
                      <span>Kebutuhan akan Pelatihan Berpikir (The Need for Training Thought)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-semibold min-w-[20px] mt-0.5">3.</span>
                      <span>
                        Sumber Daya Alami dalam Pelatihan Berpikir (Natural Resources in the Training of Thought)
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-semibold min-w-[20px] mt-0.5">4.</span>
                      <span>
                        Kondisi Sekolah dan Pelatihan Berpikir (School Conditions and the Training of Thought)
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-semibold min-w-[20px] mt-0.5">5.</span>
                      <span>
                        Sarana dan Tujuan Pelatihan Mental: Psikologis vs Logis (The Means and End of Mental Training:
                        The Psychological and the Logical)
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="p-4 sm:p-6">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-start sm:items-center gap-3 text-base sm:text-lg">
                    <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-secondary-foreground text-sm font-bold">II</span>
                    </div>
                    <div>
                      <div>Buku Saku II: Logika dalam Berpikir</div>
                      <div className="text-sm text-muted-foreground font-normal mt-1">
                        Berdasarkan Part II: Logical Considerations
                      </div>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-3">
                      <span className="text-secondary font-semibold min-w-[20px] mt-0.5">1.</span>
                      <span>Analisis Proses Berpikir Utuh (The Analysis of a Complete Act of Thought)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-secondary font-semibold min-w-[20px] mt-0.5">2.</span>
                      <span>
                        Inferensi Sistematis: Induksi dan Deduksi (Systematic Inference: Induction and Deduction)
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-secondary font-semibold min-w-[20px] mt-0.5">3.</span>
                      <span>Penilaian: Menginterpretasi Fakta (Judgment: The Interpretation of Facts)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-secondary font-semibold min-w-[20px] mt-0.5">4.</span>
                      <span>Makna: Konsepsi dan Pemahaman (Meaning: Or Conceptions and Understanding)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-secondary font-semibold min-w-[20px] mt-0.5">5.</span>
                      <span>Berpikir Konkret dan Abstrak (Concrete and Abstract Thinking)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-secondary font-semibold min-w-[20px] mt-0.5">6.</span>
                      <span>Berpikir Empiris dan Ilmiah (Empirical and Scientific Thinking)</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="p-4 sm:p-6">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-start sm:items-center gap-3 text-base sm:text-lg">
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-accent-foreground text-sm font-bold">III</span>
                    </div>
                    <div>
                      <div>Buku Saku III: Praktik Pelatihan Berpikir</div>
                      <div className="text-sm text-muted-foreground font-normal mt-1">
                        Berdasarkan Part III: The Training of Thought
                      </div>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-semibold min-w-[20px] mt-0.5">1.</span>
                      <span>Aktivitas dan Pelatihan Berpikir (Activity and the Training of Thought)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-semibold min-w-[20px] mt-0.5">2.</span>
                      <span>Bahasa dan Pelatihan Berpikir (Language and the Training of Thought)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-semibold min-w-[20px] mt-0.5">3.</span>
                      <span>
                        Observasi dan Informasi dalam Pelatihan Pikiran (Observation and Information in the Training of
                        Mind)
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-semibold min-w-[20px] mt-0.5">4.</span>
                      <span>Sesi Tanya Jawab dan Pelatihan Berpikir (The Recitation and the Training of Thought)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-semibold min-w-[20px] mt-0.5">5.</span>
                      <span>Kesimpulan Umum (Some General Conclusions)</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section id="terlibat" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-card">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
              Bergabunglah dengan Gerakan #MerdekaBuku
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground">
              Setiap kontribusi Anda membawa Indonesia lebih dekat pada pendidikan yang merata dan berkualitas
            </p>
          </div>

          <div className="flex justify-center mb-12">
            <Card className="text-center p-4 sm:p-6 hover:shadow-lg transition-shadow max-w-md w-full">
              <CardHeader>
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                </div>
                <CardTitle className="text-lg sm:text-xl">Donasi</CardTitle>
                <CardDescription>Dukung penerjemahan dan pencetakan buku</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Tier 1 (Ebook Gratis)</span>
                    <span className="font-semibold">Rp5K-100K</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tier 2 (1 Buku Fisik + Ebook Gratis)</span>
                    <span className="font-semibold">Rp100K-250K</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tier 3 (3 Buku Fisik + Ebook Gratis)</span>
                    <span className="font-semibold">Rp250K+</span>
                  </div>
                </div>
                <Button className="w-full" asChild>
                  <a href="https://logos-id.myr.id/galang-dana/v2/urundana-penerjemahan-dan-distribusi-buku-how-we-think-karya-john-dewey-merdekabuku" target="_blank" rel="noopener noreferrer">
                    Donasi Sekarang
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <p className="text-muted-foreground mb-6">Punya pertanyaan atau ingin berkolaborasi? Hubungi kami di</p>
            <Button size="lg" variant="outline">
              logosid.2020@gmail.com
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 sm:py-12 px-4 sm:px-6 border-t border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div className="space-y-4 sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">L</span>
                </div>
                <span className="font-bold text-lg sm:text-xl">Logos ID</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Platform pembelajaran yang memberdayakan pikiran
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Kontak</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="mailto:logosid.2020@gmail.com" className="hover:text-foreground transition-colors">
                    logosid.2020@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com/_logosid"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-foreground transition-colors"
                  >
                    Instagram: @_logosid
                  </a>
                </li>
                <li>
                  <a
                    href="https://x.com/logos_id"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-foreground transition-colors"
                  >
                    Twitter: @logos_id
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 Logos ID. Semua hak cipta dilindungi. #MerdekaBuku untuk Indonesia yang lebih cerdas.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
