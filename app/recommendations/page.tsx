"use client"
import { useState, useEffect } from "react"
import { StickyFooter } from "@/components/sticky-footer"

export default function RecommendationsPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove("light", "system")
    root.classList.add("dark")
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Devs", href: "/devs" },
    { label: "The Issue", href: "/the-issue" },
    { label: "Recommendations", href: "/recommendations" },
    { label: "Sources", href: "/sources" },
  ]

  const recommendations = [
    {
      category: "Education",
      items: [
        "Expand access to quality primary and secondary education in rural areas",
        "Implement scholarship programs for underprivileged students",
        "Provide vocational training to develop marketable skills",
        "Invest in teacher training and educational infrastructure",
      ],
    },
    {
      category: "Healthcare",
      items: [
        "Establish healthcare centers in underserved communities",
        "Provide affordable medicine and preventive health programs",
        "Implement mental health support services",
        "Increase accessibility to quality maternal and child health services",
      ],
    },
    {
      category: "Economic Development",
      items: [
        "Support small business development and entrepreneurship",
        "Provide microfinance and credit facilities for the poor",
        "Develop agricultural productivity and market access",
        "Create job opportunities in growing sectors",
      ],
    },
    {
      category: "Social Services",
      items: [
        "Strengthen social safety nets and assistance programs",
        "Provide housing solutions for homeless and displaced families",
        "Establish community development programs",
        "Implement livelihood projects and income generation activities",
      ],
    },
    {
      category: "Governance",
      items: [
        "Improve transparency and reduce corruption",
        "Strengthen policy implementation and monitoring",
        "Increase community participation in decision-making",
        "Ensure equitable resource distribution",
      ],
    },
    {
      category: "Environmental",
      items: [
        "Build resilience to climate change impacts",
        "Promote sustainable agricultural practices",
        "Implement environmental protection programs",
        "Support disaster risk reduction initiatives",
      ],
    },
  ]

  return (
    <div className="min-h-screen w-full relative bg-black">
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "radial-gradient(ellipse 50% 35% at 50% 0%, rgba(226, 232, 240, 0.12), transparent 60%), #000000",
        }}
      />

      {/* Desktop Header */}
      <header
        className={`sticky top-4 z-[9999] mx-auto hidden w-full flex-row items-center justify-between self-start rounded-full bg-background/80 md:flex backdrop-blur-sm border border-border/50 shadow-lg transition-all duration-300 ${
          isScrolled ? "max-w-3xl px-2" : "max-w-5xl px-4"
        } py-2`}
      >
        <a className="z-50 flex items-center justify-center gap-2" href="/">
          <div className="text-xl font-bold text-foreground">Poverty in PH</div>
        </a>

        <nav className="absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-2 text-sm font-medium text-muted-foreground md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`relative px-4 py-2 transition-colors ${
                item.href === "/recommendations" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      {/* Mobile Header */}
      <header className="sticky top-4 z-[9999] mx-4 flex w-auto flex-row items-center justify-between rounded-full bg-background/80 backdrop-blur-sm border border-border/50 shadow-lg md:hidden px-4 py-3">
        <a href="/" className="flex items-center justify-center gap-2">
          <div className="text-lg font-bold text-foreground">Poverty in PH</div>
        </a>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-background/50 border border-border/50"
        >
          <div className="flex flex-col items-center justify-center w-5 h-5 space-y-1">
            <span
              className={`block w-4 h-0.5 bg-foreground transition-all ${isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""}`}
            ></span>
            <span
              className={`block w-4 h-0.5 bg-foreground transition-all ${isMobileMenuOpen ? "opacity-0" : ""}`}
            ></span>
            <span
              className={`block w-4 h-0.5 bg-foreground transition-all ${isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
            ></span>
          </div>
        </button>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[9998] bg-black/50 backdrop-blur-sm md:hidden">
          <div className="absolute top-20 left-4 right-4 bg-background/95 backdrop-blur-md border border-border/50 rounded-2xl shadow-2xl p-6">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-left px-4 py-3 text-lg font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="relative z-10 container mx-auto px-4 py-24">
        {/* Page Title */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">Recommendations</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Strategic solutions and action items to address poverty in the Philippines across multiple sectors.
          </p>
        </div>

        {/* Recommendations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {recommendations.map((rec, index) => (
            <div
              key={index}
              className="bg-card border border-border/50 rounded-xl p-6 hover:border-border transition-all duration-300"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s backwards`,
              }}
            >
              <h3 className="text-2xl font-bold text-foreground mb-6">{rec.category}</h3>
              <ul className="space-y-3">
                {rec.items.map((item, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="text-foreground font-bold min-w-fit">•</span>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </main>

      {/* Sticky Footer */}
      <StickyFooter />

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}
