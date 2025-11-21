"use client"
import { useState, useEffect } from "react"
import { StickyFooter } from "@/components/sticky-footer"

export default function DevsPage() {
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

  const teamMembers = [
    {
      name: "Maria Santos",
      role: "Research Lead",
      image: "/professional-portrait-black-white.jpg",
      selfCare: "Morning yoga & meditation",
    },
    {
      name: "Juan Dela Cruz",
      role: "Data Analyst",
      image: "/professional-portrait-black-white.jpg",
      selfCare: "Reading & hiking",
    },
    {
      name: "Ana Rodriguez",
      role: "Communications",
      image: "/professional-portrait-black-white.jpg",
      selfCare: "Art & creative writing",
    },
    {
      name: "Carlos Mendoza",
      role: "Designer",
      image: "/professional-portrait-black-white.jpg",
      selfCare: "Photography & cooking",
    },
    {
      name: "Lisa Wong",
      role: "Developer",
      image: "/professional-portrait-black-white.jpg",
      selfCare: "Gaming & music production",
    },
    {
      name: "Miguel Torres",
      role: "Researcher",
      image: "/professional-portrait-black-white.jpg",
      selfCare: "Fitness & volunteering",
    },
    {
      name: "Sophie Kim",
      role: "Project Manager",
      image: "/professional-portrait-black-white.jpg",
      selfCare: "Journaling & cooking",
    },
    {
      name: "Nina Valdez",
      role: "Frontend Engineer",
      image: "/professional-portrait-black-white.jpg",
      selfCare: "Weekend pottery classes",
    },
    {
      name: "Miguel Navarro",
      role: "Data Scientist",
      image: "/professional-portrait-black-white.jpg",
      selfCare: "Writing short stories",
    },
    {
      name: "Patricia Gomez",
      role: "Community Manager",
      image: "/professional-portrait-black-white.jpg",
      selfCare: "Weekend beach cleanups",
    },
  ]

  const leadMember = teamMembers[0]
  const restMembers = teamMembers.slice(1)
  const groupedMembers = []
  for (let i = 0; i < restMembers.length; i += 3) {
    groupedMembers.push(restMembers.slice(i, i + 3))
  }

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
                item.href === "/devs" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
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
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">Our Team</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Meet the dedicated team members working to address poverty and create meaningful impact in the Philippines.
          </p>
        </div>

        {/* Team Grid */}
        <div className="space-y-12 mb-20">
          {leadMember && (
            <div
              className="group relative"
              style={{
                animation: "fadeInUp 0.6s ease-out 0s backwards",
              }}
            >
              <div className="bg-card border border-border/50 rounded-2xl overflow-hidden transition-all duration-300 hover:border-border hover:shadow-xl md:flex md:items-center">
                <div className="relative overflow-hidden bg-background w-full md:w-1/2 aspect-video md:aspect-[4/3]">
                  <img
                    src={leadMember.image || "/placeholder.svg"}
                    alt={leadMember.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>

                <div className="p-6 md:w-1/2 md:p-10">
                  <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">Lead</p>
                  <h3 className="text-3xl font-bold text-foreground mb-2">{leadMember.name}</h3>
                  <p className="text-muted-foreground mb-6">{leadMember.role}</p>

                  <div className="border-t border-border/50 pt-6">
                    <p className="text-sm text-muted-foreground mb-2 font-semibold">Self-Care Practice</p>
                    <p className="text-foreground">{leadMember.selfCare}</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {groupedMembers.map((row, rowIndex) => (
            <div key={`row-${rowIndex}`} className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {row.map((member, index) => (
                <div
                  key={member.name}
                  className="group relative"
                  style={{
                    animation: `fadeInUp 0.6s ease-out ${(rowIndex * 3 + index + 1) * 0.1}s backwards`,
                  }}
                >
                  <div className="bg-card border border-border/50 rounded-xl overflow-hidden transition-all duration-300 hover:border-border hover:shadow-xl">
                    <div className="relative overflow-hidden bg-background aspect-video">
                      <img
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                      />
                    </div>

                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-foreground mb-1">{member.name}</h3>
                      <p className="text-muted-foreground mb-4">{member.role}</p>

                      <div className="border-t border-border/50 pt-4">
                        <p className="text-sm text-muted-foreground mb-2 font-semibold">Self-Care Practice</p>
                        <p className="text-foreground">{member.selfCare}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
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
