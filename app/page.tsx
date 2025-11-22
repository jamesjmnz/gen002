"use client"
import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { Sparkles } from "lucide-react"
import { motion } from "framer-motion"
import { Marquee } from "@/components/magicui/marquee"
import { InitialLoading } from "@/components/initial-loading"
import kenneth from "@/public/kenneth.png"
import james from "@/public/james.png"

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart"
import { Line, LineChart, CartesianGrid, XAxis, YAxis } from "recharts"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    // Hide loading screen after progress reaches 100% plus a small delay
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3500) // Wait for counter to reach 100% (about 3s) + fade out time

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Check which section is currently in view
      const sections = ["home", "devs", "issue", "recommendations", "sources"]
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace("#", "")
    const element = document.getElementById(targetId)
    if (element) {
      const offset = 100 // Offset for sticky header
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      })
    }
  }

  const navItems = [
    { label: "Home", href: "#home", id: "home" },
    { label: "Devs", href: "#devs", id: "devs" },
    { label: "The Issue", href: "#issue", id: "issue" },
    { label: "Recommendations", href: "#recommendations", id: "recommendations" },
    { label: "Sources", href: "#sources", id: "sources" },
  ]

  const povertyTrendData = [
    { year: "2018", rate: 21.1 },
    { year: "2021", rate: 18.1 },
    { year: "2023", rate: 18.1 },
    { year: "2025", rate: 13.2 },
  ]

  const povertyChartConfig = {
    rate: { label: "Poverty Rate (%)", color: "hsl(0 84% 60%)" }, // Red
    target: { label: "2025 Target", color: "hsl(142 76% 36%)" }, // Green
  }

  const inflationData = [
    { year: "2023", rate: 6.0 },
    { year: "2024", rate: 3.6 },
    { year: "2025", rate: 1.7 },
  ]

  const inflationChartConfig = {
    rate: { label: "Inflation Rate (%)", color: "hsl(38 92% 50%)" }, // Orange/Amber
  }

  const recommendationImpactData = [
    { year: "2024", baseline: 16.4, withInterventions: 16.4, target: 12.0 },
    { year: "2025", baseline: 16.8, withInterventions: 15.2, target: 11.5 },
    { year: "2026", baseline: 17.1, withInterventions: 13.8, target: 11.0 },
    { year: "2027", baseline: 17.3, withInterventions: 12.5, target: 10.5 },
    { year: "2028", baseline: 17.5, withInterventions: 11.2, target: 10.0 },
    { year: "2029", baseline: 17.7, withInterventions: 10.0, target: 9.5 },
  ]

  const recommendationChartConfig = {
    baseline: { label: "Baseline Projection", color: "hsl(0 84% 60%)" }, // Red
    withInterventions: { label: "With Interventions", color: "hsl(142 76% 36%)" }, // Green
    target: { label: "Target Goal", color: "hsl(217 91% 60%)" }, // Blue
  }

  const sourceEntries = [
    {
      title: "National Socioeconomic Pulse – Poverty Baseline 2024 (Dummy)",
      description: "Synthetic longitudinal dataset powering the poverty trend chart.",
    },
    {
      title: "MetroPulse Analytics – Urban Vulnerability Model (Dummy)",
      description: "Hypothetical scoring model for urban–rural hardship gaps.",
    },
    {
      title: "CivicWell Insights – Education Access Simulation (Dummy)",
      description: "Modeled dropout and completion rates for secondary learners.",
    },
    {
      title: "HealthEquity Lab – Welfare Stress Test (Dummy)",
      description: "Simulated nutrition and healthcare affordability indicators.",
    },
    {
      title: "CommunityConnect Survey – Social Resilience 2024 (Dummy)",
      description: "Composite view of social safety-net uptake and labor precarity.",
    },
    {
      title: "Adaptive Cash Transfer Lab – Shock Response Notes (Dummy)",
      description: "Scenario design for rainfall-triggered voucher deployment across flood-prone provinces.",
    },
    {
      title: "Learning Continuity Pods Playbook (Dummy)",
      description: "Prototype blueprint for mobile classrooms with blended instruction kits.",
    },
    {
      title: "Health Tasker Telemetry Brief (Dummy)",
      description: "Generated dataset tracking volunteer wellness visits and nutrition packs delivered.",
    },
  ]

  const teamMembers = [
    {
      name: "James Jimenez",
      role: "Research Lead",
      img: james.src,
      selfCare: "Morning yoga & meditation",
    },
    {
      name: "Queen Ynah Suratos",
      role: "Data Analyst",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=face",
      selfCare: "Reading & hiking",
    },
    {
      name: "Kenneth Peralta",
      role: "Communications",
      img: kenneth.src,
      selfCare: "Art & creative writing",
    },
    {
      name: "Carlos Mendoza",
      role: "Designer",
      img: "https://images.unsplash.com/photo-1500648767791-0a1dd7228f2e?w=400&h=300&fit=crop&crop=face",
      selfCare: "Photography & cooking",
    },
    {
      name: "Lisa Wong",
      role: "Developer",
      img: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=400&h=300&fit=crop&crop=face",
      selfCare: "Gaming & music production",
    },
    {
      name: "Miguel Torres",
      role: "Researcher",
      img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=300&fit=crop&crop=face",
      selfCare: "Fitness & volunteering",
    },
    {
      name: "Sophie Kim",
      role: "Project Manager",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=face",
      selfCare: "Journaling & cooking",
    },
    {
      name: "Nina Valdez",
      role: "Frontend Engineer",
      img: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=400&h=300&fit=crop&crop=face",
      selfCare: "Weekend pottery classes",
    },
    {
      name: "Miguel Navarro",
      role: "Data Scientist",
      img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=300&fit=crop&crop=face",
      selfCare: "Writing short stories",
    },
    {
      name: "Patricia Gomez",
      role: "Community Manager",
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=300&fit=crop&crop=face",
      selfCare: "Weekend beach cleanups",
    },
  ]

  const homeStats = [
    {
      numerical: "55%",
      data: "of Filipino families consider themselves poor as of Q2 2025",
      value: 55,
      suffix: "%"
    },
    {
      numerical: "₱12,323",
      data: "monthly poverty threshold for a family of five",
      value: 12323,
      suffix: "",
      isCurrency: true
    },
    {
      numerical: "1.7%",
      data: "national inflation rate as of October 2025",
      value: 1.7,
      suffix: "%"
    }
  ]

  const [countedStats, setCountedStats] = useState(homeStats.map(() => 0))
  const [hasCounted, setHasCounted] = useState(false)

  useEffect(() => {
    if (!isLoading && !hasCounted) {
      const duration = 2000 // 2 seconds
      const steps = 60
      const interval = duration / steps
      const intervals: NodeJS.Timeout[] = []

      homeStats.forEach((stat, index) => {
        let currentStep = 0
        const increment = stat.value / steps

        const counter = setInterval(() => {
          currentStep++
          setCountedStats((prev) => {
            const newStats = [...prev]
            if (currentStep >= steps) {
              newStats[index] = stat.value
              if (index === homeStats.length - 1) {
                setHasCounted(true)
              }
            } else {
              newStats[index] = Math.min(increment * currentStep, stat.value)
            }
            return newStats
          })
        }, interval)
        
        intervals.push(counter)
      })

      return () => {
        intervals.forEach(interval => clearInterval(interval))
      }
    }
  }, [isLoading, hasCounted])

  const leadMember = teamMembers[0]
  const restMembers = teamMembers.slice(1)
  const groupedMembers = []
  for (let i = 0; i < restMembers.length; i += 3) {
    groupedMembers.push(restMembers.slice(i, i + 3))
  }

  const interactiveCardClasses =
    "group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.01] hover:border-white/30 hover:bg-white/10 hover:shadow-[0_20px_45px_rgba(0,0,0,0.35)]"
  
    const blackinteractiveCardClasses =
    "group relative bg-black/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.01] hover:border-white/30 hover:bg-white/10 hover:shadow-[0_20px_45px_rgba(0,0,0,0.35)]"
  const listCardClasses =
    "group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 space-y-3 transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.01] hover:border-white/30 hover:bg-white/10 hover:shadow-[0_20px_45px_rgba(0,0,0,0.35)]"

  const TeamCard = ({ name, role, img, selfCare }: any) => {
    return (
      <div className="relative w-full max-w-sm overflow-hidden rounded-3xl group transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_20px_45px_rgba(0,0,0,0.35)]">
        <img
          src={img || "/placeholder.svg"}
          alt={name}
          className="h-100 w-104 object-cover aspect-video grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300 flex flex-col justify-end p-4">
          <h3 className="text-white font-bold text-lg">{name}</h3>
          <p className="text-white/80 text-sm">{role}</p>
          <p className="text-white/70 text-xs mt-2">{selfCare}</p>
        </div>
      </div>
    )
  }

  return (
    <>
      {isLoading && <InitialLoading />}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="min-h-screen w-full relative bg-black"
      >
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `
            radial-gradient(ellipse 50% 35% at 50% 0%, rgba(226, 232, 240, 0.12), transparent 60%),
            repeating-linear-gradient(
              0deg,
              rgba(255, 255, 255, 0.03) 0px,
              rgba(255, 255, 255, 0.03) 1px,
              transparent 1px,
              transparent 40px
            ),
            repeating-linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.03) 0px,
              rgba(255, 255, 255, 0.03) 1px,
              transparent 1px,
              transparent 40px
            ),
            #000000
          `,
        }}
      />

      {/* Desktop Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isLoading ? 0 : 1, y: isLoading ? -20 : 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className={`sticky top-4 z-[9999] mx-auto hidden w-full flex-row items-center justify-between self-start rounded-full bg-background/80 md:flex backdrop-blur-md border border-white/10 shadow-lg transition-all duration-500 ${
          isScrolled ? "max-w-3xl px-2 shadow-2xl border-white/20" : "max-w-5xl px-4"
        } py-2`}
      >
        <a
          className="z-50 flex items-center justify-center gap-2 transition-all duration-300 hover:opacity-80 group"
          href="#home"
          onClick={(e) => handleSmoothScroll(e, "#home")}
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-white to-gray-400 flex items-center justify-center font-bold text-black text-sm">
            P
          </div>
        </a>

        <nav className="absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-2 text-sm font-medium text-muted-foreground md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleSmoothScroll(e, item.href)}
              className={`relative px-4 py-2 transition-colors duration-300 ${
                activeSection === item.id ? "text-white font-semibold" : "text-muted-foreground hover:text-foreground"
              } group`}
            >
              {item.label}
              <span
                className={`absolute bottom-0 left-1/2 h-0.5 bg-white transition-all duration-300 -translate-x-1/2 ${
                  activeSection === item.id ? "w-3/4" : "w-0 group-hover:w-3/4"
                }`}
              ></span>
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4"></div>
      </motion.header>

      {/* Mobile Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isLoading ? 0 : 1, y: isLoading ? -20 : 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="sticky top-4 z-[9999] mx-4 flex w-auto flex-row items-center justify-between rounded-full bg-background/80 backdrop-blur-md border border-white/10 shadow-lg md:hidden px-4 py-3 transition-all duration-300"
      >
        <a href="#home" onClick={(e) => handleSmoothScroll(e, "#home")} className="flex items-center justify-center gap-2 hover:opacity-80 transition-opacity">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-white to-gray-400 flex items-center justify-center font-bold text-black text-sm">
            P
          </div>
        </a>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-background/50 border border-white/10 hover:border-white/30 transition-all duration-300"
        >
          <div className="flex flex-col items-center justify-center w-5 h-5 space-y-1">
            <span
              className={`block w-4 h-0.5 bg-foreground transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""}`}
            ></span>
            <span
              className={`block w-4 h-0.5 bg-foreground transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`}
            ></span>
            <span
              className={`block w-4 h-0.5 bg-foreground transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
            ></span>
          </div>
        </button>
      </motion.header>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[9998] bg-black/50 backdrop-blur-sm md:hidden animate-in fade-in duration-300">
          <motion.div
            className="absolute top-20 left-4 right-4 bg-background/95 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl p-6"
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col space-y-2">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    setIsMobileMenuOpen(false)
                    setActiveSection(item.id)
                    handleSmoothScroll(e, item.href)
                  }}
                  className={`text-left px-4 py-3 text-lg font-medium rounded-lg transition-all duration-200 ${
                    activeSection === item.id
                      ? "text-white bg-white/10 font-semibold"
                      : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                  }`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        </div>
      )}

      {/* HOME SECTION */}
      <section id="home" className="relative z-10 overflow-hidden min-h-screen flex flex-col">
        <div className="container mx-auto px-4 py-24 sm:py-32 relative z-10 flex-1 flex flex-col">
          <div className="mx-auto max-w-4xl text-center flex-1 flex flex-col justify-center overflow-visible">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoading ? 0 : 1, y: isLoading ? 20 : 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mb-8"
            >
              <Badge variant="default" className="inline-flex bg-white/80 items-center gap-2 px-4 py-2 text-sm">
                <Sparkles className="h-4 w-4" />
                Poverty & Inflation in the Philippines
              </Badge>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoading ? 0 : 1, y: isLoading ? 20 : 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mb-4 px-4 sm:px-6 md:px-8 overflow-visible"
            >
              <h1 id="main-title" className="from-foreground/60 via-foreground to-foreground/60 dark:from-muted-foreground/55 dark:via-foreground dark:to-muted-foreground/55 mt-5 bg-gradient-to-r bg-clip-text text-center text-4xl sm:text-5xl md:text-[54px] md:leading-[1.2] lg:text-7xl lg:leading-[1.2] font-bold tracking-tighter text-transparent relative z-10 drop-shadow-[0_0_10px_rgba(255,255,255,0.15)] [text-shadow:0_0_12px_rgba(255,255,255,0.1)] leading-tight sm:leading-normal">
                Rising Costs, Rising <br /> <strong>Struggles</strong>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoading ? 0 : 1, y: isLoading ? 20 : 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mx-auto mb-8 max-w-xl text-base sm:text-lg md:text-xl from-foreground/70 via-foreground/80 to-foreground/70 dark:from-muted-foreground/60 dark:via-foreground/80 dark:to-muted-foreground/60 bg-gradient-to-r bg-clip-text text-transparent font-medium drop-shadow-[0_0_8px_rgba(255,255,255,0.12)] [text-shadow:0_0_10px_rgba(255,255,255,0.1)]"
            >
              Understanding how increasing prices continue to push Filipino families into deeper poverty.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoading ? 0 : 1, y: isLoading ? 20 : 0 }}
              transition={{ duration: 0.6, delay: 0.75 }}
              className="mx-auto mb-12 max-w-2xl text-sm sm:text-base md:text-base text-muted-foreground/90 leading-relaxed"
            >
              Poverty remains one of the most urgent issues in the Philippines. The challenge has intensified because of inflation—the steady rise of prices of basic goods such as food, transportation, fuel, and utilities. Millions of Filipinos feel the impact, especially those with low and fixed incomes.
            </motion.p>

            <motion.div  
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoading ? 0 : 1, y: isLoading ? 20 : 0 }}
              transition={{ duration: 0.6, delay: 0.8 }} 
              className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-4 md:gap-8 mt-8"
            >
              {homeStats.map((h, index) => {
                let displayValue = "0" + (h.suffix || "")
                
                if (hasCounted || countedStats[index] > 0) {
                  if (h.isCurrency) {
                    displayValue = `₱${Math.floor(countedStats[index]).toLocaleString()}${h.suffix}`
                  } else if (h.suffix === "%" && h.value < 10) {
                    // For decimal percentages like 1.7%
                    displayValue = `${countedStats[index].toFixed(1)}${h.suffix}`
                  } else if (h.suffix === "%") {
                    // For whole number percentages like 55%
                    displayValue = `${Math.floor(countedStats[index])}${h.suffix}`
                  } else {
                    displayValue = `${Math.floor(countedStats[index])}${h.suffix}`
                  }
                }
                
                return (
                  <div key={index} className="text-center sm:text-left">
                    <motion.p
                      key={countedStats[index]}
                      initial={{ scale: 1.1, opacity: 0.8 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.2 }}
                      className="text-3xl sm:text-2xl text-center md:text-3xl font-bold text-white drop-shadow-[0_0_25px_rgba(255,255,255,0.5)] [text-shadow:0_0_30px_rgba(255,255,255,0.4)]"
                    >
                      {displayValue}
                    </motion.p>
                    <p className="text-sm text-center sm:text-base text-muted-foreground mt-0 sm:mt-1 px-4 sm:px-0">
                      {h.data}
                    </p>
                  </div>
                )
              })}
            </motion.div>

            

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoading ? 0 : 1, y: isLoading ? 20 : 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex flex-col items-center gap-6"
            >
              <svg
                width="100"
                height="50"
                viewBox="0 0 100 50"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                className="text-foreground mt-8"
              >
                <path d="M68.6958 5.40679C67.3329 12.7082 68.5287 20.1216 68.5197 27.4583C68.5189 29.5382 68.404 31.6054 68.1147 33.682C67.9844 34.592 69.4111 34.751 69.5414 33.8411C70.5618 26.5016 69.2488 19.104 69.4639 11.7325C69.5218 9.65887 69.7222 7.6012 70.0939 5.56265C70.1638 5.1949 69.831 4.81112 69.4601 4.76976C69.0891 4.72841 68.7689 5.01049 68.6958 5.40679Z"></path>
              </svg>

              <a href="#devs" onClick={(e) => handleSmoothScroll(e, "#devs")}>
                <div className="group cursor-pointer border border-border bg-card gap-2 h-[60px] flex items-center p-[10px] rounded-full transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:border-white/40 hover:bg-card/80 hover:shadow-[0_20px_45px_rgba(0,0,0,0.35)]">
                  <div className="border border-border bg-primary h-[40px] rounded-full flex items-center justify-center text-primary-foreground transition-all duration-300 group-hover:border-white/40 group-hover:bg-primary/90">
                    <p className="font-medium tracking-tight mr-3 ml-3 flex items-center gap-2 justify-center text-base">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-globe animate-spin"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                        <path d="m12 5 7 7-7 7"></path>
                      </svg>
                      Learn more
                    </p>
                  </div>
                  <div className="text-muted-foreground group-hover:ml-4 ease-in-out transition-all size-[24px] flex items-center justify-center rounded-full border-2 border-border group-hover:border-white/60 group-hover:text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-arrow-right group-hover:rotate-180 ease-in-out transition-all"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </div>
                </div>
              </a>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isLoading ? 0 : 1, y: isLoading ? 30 : 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="w-full bg-gradient-to-b from-transparent to-background/50 py-16"
        >
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoading ? 0 : 1, y: isLoading ? 20 : 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="from-foreground/60 via-foreground to-foreground/60 dark:from-muted-foreground/55 dark:via-foreground dark:to-muted-foreground/55 mt-5 bg-gradient-to-r bg-clip-text text-center text-6xl font-semibold tracking-tighter text-transparent md:text-6xl md:leading-[60px] relative z-10"
            >
              The Reality of Poverty
            </motion.h2>
            <div className="my-16 flex max-h-[800px] justify-center gap-8 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] group">
              {/* First column */}
              <div>
                <Marquee
                  vertical
                  className="[--duration:20s]"
                >
                  {[
                    "/poverty-situation-philippines-families.jpg",
                    "/urban-poverty-philippines-housing.jpg",
                    "/poverty-philippines-community-struggle.jpg",
                    "/poverty-philippines-women-empowerment.jpg",
                  ].map((img, idx) => (
                    <div key={idx} className="mb-8 flex-shrink-0 w-96 h-80 relative overflow-hidden rounded-lg">
                      <img
                        src={img || "/placeholder.svg"}
                        alt="Poverty situation"
                        className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-[filter] duration-300"
                      />
                    </div>
                  ))}
                </Marquee>
              </div>

              {/* Second column */}
              <div className="hidden md:block">
                <Marquee
                  reverse
                  vertical
                  className="[--duration:25s]"
                >
                  {[
                    "/rural-poverty-philippines-agriculture.jpg",
                    "/poverty-philippines-children-education.jpg",
                    "/poverty-philippines-health-care-access.jpg",
                    "/poverty-philippines-livelihood-programs.jpg",
                  ].map((img, idx) => (
                    <div key={idx} className="mb-8 flex-shrink-0 w-96 h-80 relative overflow-hidden rounded-lg">
                      <img
                        src={img || "/placeholder.svg"}
                        alt="Poverty situation"
                        className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-[filter] duration-300"
                      />
                    </div>
                  ))}
                </Marquee>
              </div>

              {/* Third column */}
              <div className="hidden lg:block">
                <Marquee
                  vertical
                  className="[--duration:20s]"
                >
                  {["/poverty-philippines-children-welfare.jpg", "/poverty-philippines-community-support.jpg"].map(
                    (img, idx) => (
                      <div key={idx} className="mb-8 flex-shrink-0 w-96 h-80 relative overflow-hidden rounded-lg">
                        <img
                          src={img || "/placeholder.svg"}
                          alt="Poverty situation"
                          className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-[filter] duration-300"
                        />
                      </div>
                    ),
                  )}
                </Marquee>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* DEVS SECTION */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: isLoading ? 0 : 1, y: isLoading ? 30 : 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        id="devs"
        className="mb-24 mt-24 relative z-10"
      >
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-[540px]">
            <div className="flex justify-center">
              <button
                type="button"
                className="group relative z-[60] mx-auto rounded-full border border-white/20 bg-white/5 px-6 py-1 text-xs backdrop-blur transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-100 md:text-sm"
              >
                <div className="absolute inset-x-0 -top-px mx-auto h-0.5 w-1/2 bg-gradient-to-r from-transparent via-black to-transparent shadow-2xl transition-all duration-500 group-hover:w-3/4"></div>
                <span className="relative text-white">Our Team</span>
              </button>
            </div>
            <h2 className="from-foreground/60 via-foreground to-foreground/60 dark:from-muted-foreground/55 dark:via-foreground dark:to-muted-foreground/55 mt-5 bg-gradient-to-r bg-clip-text text-center text-4xl font-semibold tracking-tighter text-transparent md:text-[54px] md:leading-[60px] relative z-10">
              Meet the Developers
            </h2>

            <p className="mt-5 relative z-10 text-center text-lg text-zinc-500">
              Dedicated researchers and professionals working towards sustainable solutions.
            </p>
          </div>

          <div className="my-16 space-y-12">
            {leadMember && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
                <div className="hidden md:block" />
                <div className="w-full max-w-sm md:max-w-none">
                  <TeamCard {...leadMember} />
                </div>
                <div className="hidden md:block" />
              </div>
            )}

            {groupedMembers.map((row, idx) => (
              <div key={idx} className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
                {row.map((member) => (
                  <TeamCard key={member.name} {...member} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* THE ISSUE SECTION */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: isLoading ? 0 : 1, y: isLoading ? 30 : 0 }}
        transition={{ duration: 0.8, delay: 1.3 }}
        id="issue"
        className="py-24 relative z-10"
      >
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-[640px] mb-16">
            <div className="flex justify-center">
              <button
                type="button"
                className="group relative z-[60] mx-auto rounded-full border border-white/20 bg-white/5 px-6 py-1 text-xs backdrop-blur transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-100 md:text-sm"
              >
                <div className="absolute inset-x-0 -top-px mx-auto h-0.5 w-1/2 bg-gradient-to-r from-transparent via-black to-transparent shadow-2xl transition-all duration-500 group-hover:w-3/4"></div>
                <span className="relative text-white">Analysis</span>
              </button>
            </div>
            <h2 className="from-foreground/60 via-foreground to-foreground/60 dark:from-muted-foreground/55 dark:via-foreground dark:to-muted-foreground/55 mt-5 bg-gradient-to-r bg-clip-text text-center text-4xl font-semibold tracking-tighter text-transparent md:text-[54px] md:leading-[60px] relative z-10">
              Poverty in the Philippines and Its Connection to Inflation
            </h2>

            <p className="mt-5 relative z-10 text-center text-lg text-white/85">
              Understanding how poverty and inflation affect millions of Filipino families, and exploring different perspectives on the issue.
            </p>
          </div>

          <div className="space-y-12">
            {/* Understanding Poverty Section */}
            <div className={blackinteractiveCardClasses}>
              <h3 className="text-2xl font-semibold text-white mb-4">1. Understanding Poverty in the Philippines</h3>
              <p className="text-white/80 mb-4 leading-relaxed">
                Poverty means the inability of individuals or families to meet basic needs such as food, shelter, healthcare, and education.
              </p>
              <p className="text-white/80 leading-relaxed">
                As of 2023, <strong className="text-white">18.1% of Filipinos—around 19 million people—live below the poverty line</strong>. Despite improvements, many families remain vulnerable due to high living costs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* First Chart - Poverty Rate */}
              <div className={blackinteractiveCardClasses}>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-white/60">Poverty Rate</p>
                    <h3 className="text-2xl font-semibold text-white mt-1">Poverty Rate in the Philippines (2018–2025)</h3>
                  </div>
                  <span className="text-sm text-white/60">Data: 2018–2025</span>
                </div>

                <div className="mt-6 overflow-x-auto">
                  <ChartContainer
                    config={povertyChartConfig}
                    className="h-[280px] sm:h-[320px] md:h-[350px] w-full min-w-[300px] rounded-2xl border border-white/10 bg-black/40 p-2 sm:p-4"
                  >
                    <LineChart data={povertyTrendData}>
                      <CartesianGrid strokeDasharray="4 4" stroke="#ffffff20" />
                      <XAxis dataKey="year" stroke="#d4d4d8" tickLine={false} axisLine={false} />
                      <YAxis stroke="#d4d4d8" tickLine={false} axisLine={false} />
                      <ChartTooltip content={<ChartTooltipContent className="text-white" />} />
                      <ChartLegend content={<ChartLegendContent className="text-xs text-white/70" />} />
                      <Line type="monotone" dataKey="rate" stroke="var(--color-rate)" strokeWidth={3} dot={{ r: 5 }} />
                    </LineChart>
                  </ChartContainer>
                </div>

                <p className="mt-4 text-sm text-white/70">
                  The poverty rate steadily decreased from 2018 to 2021, but improvement slowed afterward. The 2025 value represents the national government's target of lowering poverty to 13.2%. However, rising inflation threatens this goal by increasing the cost of basic goods and services.
                </p>
              </div>

              {/* Second Chart - Inflation Trend */}
              <div className={blackinteractiveCardClasses}>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-white/60">Inflation Trend</p>
                    <h3 className="text-2xl font-semibold text-white mt-1">Inflation Trend in the Philippines (2023–2025)</h3>
                  </div>
                  <span className="text-sm text-white/60">Data: 2023–2025</span>
                </div>

                <div className="mt-6 overflow-x-auto">
                  <ChartContainer
                    config={inflationChartConfig}
                    className="h-[280px] sm:h-[320px] md:h-[350px] w-full min-w-[300px] rounded-2xl border border-white/10 bg-black/40 p-2 sm:p-4"
                  >
                    <LineChart data={inflationData}>
                      <CartesianGrid strokeDasharray="4 4" stroke="#ffffff20" />
                      <XAxis dataKey="year" stroke="#d4d4d8" tickLine={false} axisLine={false} />
                      <YAxis stroke="#d4d4d8" tickLine={false} axisLine={false} />
                      <ChartTooltip content={<ChartTooltipContent className="text-white" />} />
                      <ChartLegend content={<ChartLegendContent className="text-xs text-white/70" />} />
                      <Line type="monotone" dataKey="rate" stroke="var(--color-rate)" strokeWidth={3} dot={{ r: 5 }} />
                    </LineChart>
                  </ChartContainer>
                </div>

                <p className="mt-4 text-sm text-white/70">
                  Inflation significantly decreased from 2023 to 2025, yet vulnerable families still felt its effects because essential items like rice, vegetables, and transportation continued to increase in price. Even with lower national inflation, everyday expenses remained high for millions of Filipinos.
                </p>
              </div>
            </div>

            {/* How Inflation Worsens Poverty Section */}
            <div className={blackinteractiveCardClasses}>
              <h3 className="text-2xl font-semibold text-white mb-4">2. How Inflation Worsens Poverty</h3>
              <p className="text-white/80 mb-4 leading-relaxed">
                Inflation reduces the purchasing power of Filipino families. When prices rise faster than income, poor households suffer the most.
              </p>
              <h4 className="text-lg font-semibold text-white mt-6 mb-3">Impacts of Inflation on Low-Income Families:</h4>
              <ul className="space-y-2 text-white/80">
                <li className="flex gap-3">
                  <span className="text-white font-bold">•</span>
                  <span>Food becomes expensive, forcing families to reduce meals.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-white font-bold">•</span>
                  <span>Transport fare increases, affecting daily workers and students.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-white font-bold">•</span>
                  <span>Wages cannot keep up with the cost of living.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-white font-bold">•</span>
                  <span>Healthcare and education expenses rise, widening inequality.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-white font-bold">•</span>
                  <span>Families are pushed into temporary loans and debt.</span>
                </li>
              </ul>
            </div>

            {/* Different Viewpoints Section */}
            <div className={blackinteractiveCardClasses}>
              <h3 className="text-2xl font-semibold text-white mb-6">3. Different Viewpoints</h3>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className={listCardClasses}>
                  <h4 className="text-lg font-bold text-foreground mb-4">Government Perspective</h4>
                  <ul className="space-y-3 text-muted-foreground text-sm">
                    <li className="flex gap-3">
                      <span className="text-white font-bold">•</span>
                      <span>Inflation was driven by global oil prices, El Niño, and supply-chain disruptions.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-white font-bold">•</span>
                      <span>Programs such as 4Ps, rice price caps, cash subsidies, and food security measures aim to protect poor families.</span>
                    </li>
                  </ul>
                </div>

                <div className={listCardClasses}>
                  <h4 className="text-lg font-bold text-foreground mb-4">Economic Experts' Perspective</h4>
                  <ul className="space-y-3 text-muted-foreground text-sm">
                    <li className="flex gap-3">
                      <span className="text-white font-bold">•</span>
                      <span>Inflation is worsened by low agricultural productivity.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-white font-bold">•</span>
                      <span>Dependence on food imports increases vulnerability to global price shocks.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-white font-bold">•</span>
                      <span>Long-term solutions require strengthening local agriculture and adjusting wages.</span>
                    </li>
                  </ul>
                </div>

                <div className={listCardClasses}>
                  <h4 className="text-lg font-bold text-foreground mb-4">Citizens' Perspective</h4>
                  <ul className="space-y-3 text-muted-foreground text-sm">
                    <li className="flex gap-3">
                      <span className="text-white font-bold">•</span>
                      <span>Majority of Filipinos feel that their income is not enough due to price increases.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-white font-bold">•</span>
                      <span><strong>55% of families self-rated themselves as poor in 2025</strong> (SWS).</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-white font-bold">•</span>
                      <span>Families report skipping meals, taking multiple jobs, or borrowing money just to survive.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* RECOMMENDATIONS SECTION */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: isLoading ? 0 : 1, y: isLoading ? 30 : 0 }}
        transition={{ duration: 0.8, delay: 1.4 }}
        id="recommendations"
        className="py-24 relative z-10"
      >
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-[540px] mb-16">
            <div className="flex justify-center">
              <button
                type="button"
                className="group relative z-[60] mx-auto rounded-full border border-white/20 bg-white/5 px-6 py-1 text-xs backdrop-blur transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-100 md:text-sm"
              >
                <div className="absolute inset-x-0 -top-px mx-auto h-0.5 w-1/2 bg-gradient-to-r from-transparent via-black to-transparent shadow-2xl transition-all duration-500 group-hover:w-3/4"></div>
                <span className="relative text-white">Solutions</span>
              </button>
            </div>
            <h2 className="from-foreground/60 via-foreground to-foreground/60 dark:from-muted-foreground/55 dark:via-foreground dark:to-muted-foreground/55 mt-5 bg-gradient-to-r bg-clip-text text-center text-4xl font-semibold tracking-tighter text-transparent md:text-[54px] md:leading-[60px] relative z-10">
              Actionable Recommendations
            </h2>

            <p className="mt-5 relative z-10 text-center text-lg text-white/85">
              Propose viable solutions that communities, institutions, and policymakers can activate right away.
            </p>
          </div>

          {/* Impact Projection Chart */}
          <div className="mb-16 max-w-6xl mx-auto">
            <div className={blackinteractiveCardClasses}>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-white/60">Projected Impact</p>
                  <h3 className="text-2xl font-semibold text-white mt-1">Expected Poverty Reduction with Interventions</h3>
                </div>
                <span className="text-sm text-white/60">Projection: 2024–2029</span>
              </div>

              <div className="mt-6">
                <ChartContainer
                  config={recommendationChartConfig}
                  className="h-[400px] w-full rounded-2xl border border-white/10 bg-black/40 p-4"
                >
                  <LineChart data={recommendationImpactData}>
                    <CartesianGrid strokeDasharray="4 4" stroke="#ffffff20" />
                    <XAxis dataKey="year" stroke="#d4d4d8" tickLine={false} axisLine={false} />
                    <YAxis stroke="#d4d4d8" tickLine={false} axisLine={false} />
                    <ChartTooltip content={<ChartTooltipContent className="text-white" />} />
                    <ChartLegend content={<ChartLegendContent className="text-xs text-white/70" />} />
                    <Line type="monotone" dataKey="baseline" stroke="var(--color-baseline)" strokeWidth={3} dot={false} />
                    <Line type="monotone" dataKey="withInterventions" stroke="var(--color-withInterventions)" strokeWidth={3} dot={false} />
                    <Line
                      type="monotone"
                      dataKey="target"
                      stroke="var(--color-target)"
                      strokeDasharray="6 4"
                      strokeWidth={2.5}
                      dot={false}
                    />
                  </LineChart>
                </ChartContainer>
              </div>

              <p className="mt-4 text-sm text-white/70">
                This projection shows the expected impact of implementing all recommended interventions. The baseline projection (red) represents the current trajectory without intervention, while the green line shows the projected reduction with full implementation of recommendations. The blue dashed line represents the target goal.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                title: "Economic Development",
                points: [
                  "Create job training programs in rural communities",
                  "Support small business entrepreneurs with microfinance",
                  "Implement fair wage policies across industries",
                  "Develop infrastructure in underserved regions",
                ],
              },
              {
                title: "Education Initiatives",
                points: [
                  "Expand access to quality education nationwide",
                  "Provide scholarships and financial assistance",
                  "Improve school infrastructure and resources",
                  "Offer vocational training programs",
                ],
              },
              {
                title: "Healthcare Solutions",
                points: [
                  "Establish affordable healthcare centers",
                  "Distribute free medications and vaccines",
                  "Improve maternal and child health services",
                  "Address malnutrition through nutrition programs",
                ],
              },
              {
                title: "Social Support",
                points: [
                  "Strengthen social safety nets",
                  "Combat child labor through enforcement",
                  "Promote women's economic empowerment",
                  "Support vulnerable populations",
                ],
              },
              {
                title: "Policy & Governance",
                points: [
                  "Enact progressive taxation policies",
                  "Improve anti-corruption measures",
                  "Strengthen labor law enforcement",
                  "Promote transparent government",
                ],
              },
              {
                title: "Community Engagement",
                points: [
                  "Empower local communities in decision-making",
                  "Support community-based organizations",
                  "Encourage civic participation",
                  "Foster inter-agency collaboration",
                ],
              },
            ].map((rec, idx) => (
              <div key={idx} className={`${interactiveCardClasses}`}>
                <h3 className="text-lg font-bold text-foreground mb-4">{rec.title}</h3>
                <ul className="space-y-2">
                  {rec.points.map((point, i) => (
                    <li key={i} className="flex gap-3 text-sm text-muted-foreground transition-colors duration-300 group-hover:text-white/90">
                      <span className="text-white font-bold">✓</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* SOURCES SECTION */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: isLoading ? 0 : 1, y: isLoading ? 30 : 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        id="sources"
        className="py-24 relative z-10"
      >
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-[540px] mb-16">
            <div className="flex justify-center">
              <button
                type="button"
                className="group relative z-[60] mx-auto rounded-full border border-white/20 bg-white/5 px-6 py-1 text-xs backdrop-blur transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-100 md:text-sm"
              >
                <div className="absolute inset-x-0 -top-px mx-auto h-0.5 w-1/2 bg-gradient-to-r from-transparent via-black to-transparent shadow-2xl transition-all duration-500 group-hover:w-3/4"></div>
                <span className="relative text-white">References</span>
              </button>
            </div>
            <h2 className="from-foreground/60 via-foreground to-foreground/60 dark:from-muted-foreground/55 dark:via-foreground dark:to-muted-foreground/55 mt-5 bg-gradient-to-r bg-clip-text text-center text-4xl font-semibold tracking-tighter text-transparent md:text-[54px] md:leading-[60px] relative z-10">
              Sources & References
            </h2>

            <p className="mt-5 relative z-10 text-center text-lg text-white/85">
              Properly cite every credible (even if dummy) dataset that feeds the insights and solutions above.
            </p>
            <p className="mt-2 text-center text-sm text-white/60">
              Every dummy dataset below is cited so readers can trace which charts, insights, and solutions they power.
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-4">
            {sourceEntries.map((source, idx) => (
                <div key={source.title} className={`${interactiveCardClasses} flex items-start gap-4`}>
                <span className="text-white font-bold text-lg flex-shrink-0 pt-0.5">{idx + 1}.</span>
                <div className="flex-1">
                  <p className="text-foreground font-medium">{source.title}</p>
                  <p className="text-sm text-muted-foreground mt-2">{source.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: isLoading ? 0 : 1, y: isLoading ? 30 : 0 }}
        transition={{ duration: 0.8, delay: 1.6 }}
        className="relative z-10 border-t border-white/10 bg-white/5 backdrop-blur-xl"
      >
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* Brand Section */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-white to-gray-400 flex items-center justify-center font-bold text-black text-lg">
                  P
                </div>
                <span className="text-xl font-semibold text-white">Poverty Analysis</span>
              </div>
              <p className="text-sm text-muted-foreground max-w-md">
                A comprehensive analysis of poverty in the Philippines, exploring root causes, current challenges, and actionable recommendations for sustainable change.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-sm font-semibold text-white mb-4">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#home" onClick={(e) => handleSmoothScroll(e, "#home")} className="text-sm text-muted-foreground hover:text-white transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#devs" onClick={(e) => handleSmoothScroll(e, "#devs")} className="text-sm text-muted-foreground hover:text-white transition-colors">
                    Our Team
                  </a>
                </li>
                <li>
                  <a href="#issue" onClick={(e) => handleSmoothScroll(e, "#issue")} className="text-sm text-muted-foreground hover:text-white transition-colors">
                    The Issue
                  </a>
                </li>
                <li>
                  <a href="#recommendations" onClick={(e) => handleSmoothScroll(e, "#recommendations")} className="text-sm text-muted-foreground hover:text-white transition-colors">
                    Recommendations
                  </a>
                </li>
                <li>
                  <a href="#sources" onClick={(e) => handleSmoothScroll(e, "#sources")} className="text-sm text-muted-foreground hover:text-white transition-colors">
                    Sources
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-sm font-semibold text-white mb-4">Resources</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-white transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-white transition-colors">
                    Research Papers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-white transition-colors">
                    Data Sources
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-muted-foreground hover:text-white transition-colors">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Poverty Analysis. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </motion.footer>
    </motion.div>
    </>
  )
}
