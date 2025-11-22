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
    { year: "2019", extreme: 18.5, moderate: 27.1, resilience: 46 },
    { year: "2020", extreme: 19.8, moderate: 28.4, resilience: 44 },
    { year: "2021", extreme: 18.2, moderate: 26.3, resilience: 48 },
    { year: "2022", extreme: 17.6, moderate: 24.9, resilience: 50 },
    { year: "2023", extreme: 17.2, moderate: 24.2, resilience: 52 },
    { year: "2024", extreme: 16.4, moderate: 23.1, resilience: 55 },
  ]

  const povertyChartConfig = {
    extreme: { label: "Extreme Poverty", color: "hsl(0 84% 60%)" }, // Red
    moderate: { label: "Moderate Poverty", color: "hsl(38 92% 50%)" }, // Orange/Amber
    resilience: { label: "Resilience Target", color: "hsl(142 76% 36%)" }, // Green
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
      numerical: "25M",
      data: "Filipinos live below the poverty line"
    },
    {
      numerical: "46%",
      data: "of Filipino Families consider themselves poor"
    },
    {
      numerical: "7 out of 10",
      data: "poor Filipinos live in rural area"
    }
  ]

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
          <div className="mx-auto max-w-4xl text-center flex-1 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoading ? 0 : 1, y: isLoading ? 20 : 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mb-8"
            >
              <Badge variant="default" className="inline-flex bg-white/80 items-center gap-2 px-4 py-2 text-sm">
                <Sparkles className="h-4 w-4" />
                Understanding poverty in the Philippines
              </Badge>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoading ? 0 : 1, y: isLoading ? 20 : 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mb-8"
            >
              <h1 id="main-title"className="from-foreground/60 via-foreground to-foreground/60 dark:from-muted-foreground/55 dark:via-foreground dark:to-muted-foreground/55 mt-5 bg-gradient-to-r bg-clip-text text-center text-4xl font-semibold tracking-tighter text-transparent md:text-[54px] md:leading-[60px] lg:text-7xl sm:text-6xl relative z-10">
                Breaking the <strong>cycle</strong> <br /> of <strong className="border-b text-white/70 border-b-2 border-white/80 p-2">poverty</strong>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoading ? 0 : 1, y: isLoading ? 20 : 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mx-auto mb-12 max-w-xl text-xl text-muted-foreground"
            >
              A comprehensive analysis of poverty in the Philippines, exploring root causes, current challenges, and
              actionable recommendations for sustainable change.
            </motion.p>

            <motion.div  
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoading ? 0 : 1, y: isLoading ? 20 : 0 }}
              transition={{ duration: 0.6, delay: 0.8 }} 
              className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-4 md:gap-8 mt-8"
            >
              {homeStats.map((h, index) => (
                <div key={index} className="text-center sm:text-left">
                  <p className="text-3xl sm:text-2xl text-center md:text-3xl font-bold text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] drop-shadow-[0_0_16px_rgba(255,255,255,0.6)] drop-shadow-[0_0_24px_rgba(255,255,255,0.4)] drop-shadow-[0_0_32px_rgba(255,255,255,0.3)]">
                    {h.numerical}
                  </p>
                  <p className="text-sm text-center sm:text-base text-muted-foreground mt-3 sm:mt-1 px-4 sm:px-0">
                    {h.data}
                  </p>
                </div>
              ))}
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
              <div key={idx} className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
              The Issue: Understanding Poverty in the Philippines
            </h2>

            <p className="mt-5 relative z-10 text-center text-lg text-white/85">
              Analyze and discuss different viewpoints about the crisis on this page. Bullet points and bold callouts keep the complexity readable.
            </p>
          </div>

          <div className="space-y-12">
            <div className="">
              <div className="space-y-6 grid grid-cols-2 gap-5">
               <div className={`${blackinteractiveCardClasses} col-span-2`}>
                 <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <div>
                      <p className="text-sm uppercase tracking-[0.3em] text-white/60">Poverty trajectory</p>
                      <h3 className="text-2xl font-semibold text-white mt-1">Five-year synthetic outlook</h3>
                    </div>
                    <span className="text-sm text-white/60">Data: 2019–2024</span>
                  </div>

                  <div className="mt-6 flex justify-center">
                    <ChartContainer
                      config={povertyChartConfig}
                      className="h-[380px] w-full max-w-4xl rounded-2xl border border-white/10 bg-black/40 p-4"
                    >
                      <LineChart data={povertyTrendData}>
                        <CartesianGrid strokeDasharray="4 4" stroke="#ffffff20" />
                        <XAxis dataKey="year" stroke="#d4d4d8" tickLine={false} axisLine={false} />
                        <YAxis stroke="#d4d4d8" tickLine={false} axisLine={false} />
                        <ChartTooltip content={<ChartTooltipContent className="text-white" />} />
                        <ChartLegend content={<ChartLegendContent className="text-xs text-white/70" />} />
                        <Line type="monotone" dataKey="extreme" stroke="var(--color-extreme)" strokeWidth={3} dot={false} />
                        <Line type="monotone" dataKey="moderate" stroke="var(--color-moderate)" strokeWidth={2.5} dot={false} />
                        <Line
                          type="monotone"
                          dataKey="resilience"
                          stroke="var(--color-resilience)"
                          strokeDasharray="6 4"
                          strokeWidth={2}
                          dot={false}
                        />
                      </LineChart>
                    </ChartContainer>
                  </div>

                  <p className="mt-4 max-w-2xl flex items-center mx-auto text-md text-white/70">
                    Even in this modeled scenario, extreme poverty only dips by 2.1 percentage points in five years—well
                    short of the resilience target line. Moderate poverty closely mirrors the same slow progress.
                  </p>
                </div>

               
              </div>

             
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
              <div className="space-y-6">
                <div className={listCardClasses}>
                  <h3 className="text-xl font-bold text-foreground mb-4">Economic Perspective</h3>
                  <ul className="space-y-3 text-muted-foreground text-sm">
                    <li className="flex gap-3">
                      <span className="text-white font-bold">•</span>
                      <span>
                        <strong>Income Inequality:</strong> Modeled income shares show the top decile capturing 47% of
                        earnings, keeping the poverty curve elevated.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-white font-bold">•</span>
                      <span>
                        <strong>Limited Job Opportunities:</strong> MetroPulse projections flag 2.4 million workers in
                        precarious urban jobs with no savings.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-white font-bold">•</span>
                      <span>
                        <strong>Rising Cost of Living:</strong> Household baskets jumped 11% in the HealthEquity stress
                        test, erasing wage gains.
                      </span>
                    </li>
                  </ul>
                </div>

                <div className={listCardClasses}>
                  <h3 className="text-xl font-bold text-foreground mb-4">Education Challenges</h3>
                  <ul className="space-y-3 text-muted-foreground text-sm">
                    <li className="flex gap-3">
                      <span className="text-white font-bold">•</span>
                      <span>
                        <strong>Limited Access:</strong> CivicWell’s dummy model shows 38% of barangays without reliable
                        secondary schooling.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-white font-bold">•</span>
                      <span>
                        <strong>School Dropouts:</strong> 1.3M learners could exit early to help with income gaps by 2025.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-white font-bold">•</span>
                      <span>
                        <strong>Infrastructure Gaps:</strong> 42% of simulated rural schools still lack stable internet
                        nodes and labs.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <div className={`${interactiveCardClasses}`}>
                  <h3 className="text-xl font-bold text-foreground mb-4">Health & Welfare</h3>
                  <ul className="space-y-3 text-muted-foreground text-sm">
                    <li className="flex gap-3">
                      <span className="text-white font-bold">•</span>
                      <span>
                        <strong>Healthcare Access:</strong> HealthEquity’s dummy survey shows 54% delaying treatment
                        because of upfront costs.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-white font-bold">•</span>
                      <span>
                        <strong>Malnutrition:</strong> 28% of households reported skipping meals in the welfare stress
                        test.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-white font-bold">•</span>
                      <span>
                        <strong>Living Conditions:</strong> 1 in 3 informal-settlement homes lacks safe water hookups.
                      </span>
                    </li>
                  </ul>
                </div>

                <div className={`${interactiveCardClasses}`}>
                  <h3 className="text-xl font-bold text-foreground mb-4">Social Factors</h3>
                  <ul className="space-y-3 text-muted-foreground text-sm">
                    <li className="flex gap-3">
                      <span className="text-white font-bold">•</span>
                      <span>
                        <strong>Generational Poverty:</strong> CommunityConnect’s resilience index shows only 22% of
                        households moving up one income tier.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-white font-bold">•</span>
                      <span>
                        <strong>Gender Inequality:</strong> Simulated labor force data place women’s underemployment at
                        19%.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-white font-bold">•</span>
                      <span>
                        <strong>Child Labor:</strong> Crisis modeling suggests a potential 6% uptick in child labor
                        during shocks without stronger cash aid.
                      </span>
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
