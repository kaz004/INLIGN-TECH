"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Users,
  Mail,
  Phone,
  MapPin,
  Star,
  Play,
  Target,
  MessageCircle,
  X,
  Brain,
  Code,
  Database,
  Shield,
  Sparkles,
  Menu,
  Send,
  Bot,
  User,
  Moon,
  Sun,
} from "lucide-react"

// Enhanced Skeleton Components with Advanced Shimmer Effects
const SkeletonCard = ({ theme }: { theme: "dark" | "light" }) => (
  <Card
    className={`relative overflow-hidden h-full ${
      theme === "dark"
        ? "bg-black/60 backdrop-blur-2xl border border-white/10"
        : "bg-white/80 backdrop-blur-2xl border border-emerald-200/50"
    }`}
  >
    <CardContent className="p-10">
      {/* Advanced Multi-layer Shimmer Effect */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-r ${
          theme === "dark"
            ? "from-transparent via-cyan-400/20 to-transparent"
            : "from-transparent via-emerald-400/30 to-transparent"
        }`}
        animate={{
          x: ["-100%", "100%"],
          skewX: [-15, 15, -15],
        }}
        transition={{
          duration: 2.5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      {/* Secondary Shimmer Layer */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-r ${
          theme === "dark"
            ? "from-transparent via-purple-400/15 to-transparent"
            : "from-transparent via-blue-400/25 to-transparent"
        }`}
        animate={{
          x: ["100%", "-100%"],
          skewX: [15, -15, 15],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />

      {/* 3D Icon Skeleton with Complex Animation */}
      <motion.div
        className={`w-20 h-20 rounded-3xl mb-8 relative overflow-hidden ${
          theme === "dark"
            ? "bg-gradient-to-br from-cyan-400/20 via-blue-500/20 to-purple-600/20"
            : "bg-gradient-to-br from-emerald-400/30 via-green-500/30 to-teal-600/30"
        }`}
        animate={{
          opacity: [0.4, 0.8, 0.4],
          scale: [1, 1.05, 1],
          rotateY: [0, 180, 360],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
        }}
      >
        <motion.div
          className={`absolute inset-0 rounded-3xl ${
            theme === "dark"
              ? "bg-gradient-to-r from-cyan-400/30 to-purple-400/30"
              : "bg-gradient-to-r from-emerald-500/40 to-blue-500/40"
          }`}
          animate={{
            rotate: [0, 360],
            borderRadius: ["30%", "50%", "30%"],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
          }}
        />
      </motion.div>

      {/* Content Skeletons with Wave Animation */}
      <div className="space-y-6">
        {[100, 85, 90, 70].map((width, i) => (
          <motion.div
            key={i}
            className={`h-4 rounded-lg ${theme === "dark" ? "bg-white/15" : "bg-emerald-200/50"}`}
            style={{ width: `${width}%` }}
            animate={{
              opacity: [0.2, 0.6, 0.2],
              scaleX: [1, 1.02, 1],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      {/* Skills Tags Skeleton */}
      <div className="flex flex-wrap gap-3 mt-8">
        {[60, 80, 70, 90, 65].map((width, i) => (
          <motion.div
            key={i}
            className={`h-6 rounded-full ${theme === "dark" ? "bg-white/10" : "bg-emerald-200/40"}`}
            style={{ width: `${width}px` }}
            animate={{
              opacity: [0.3, 0.7, 0.3],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>
    </CardContent>
  </Card>
)

// Simple Hero Component without Spline
const Hero3D = ({ theme }: { theme: "dark" | "light" }) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [loadingProgress, setLoadingProgress] = useState(0)
  const [SplineComponent, setSplineComponent] = useState<any>(null)

  useEffect(() => {
    // Realistic loading progress simulation
    const interval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setIsLoaded(true)
          return 100
        }
        return prev + Math.random() * 12 + 3
      })
    }, 150)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    import("@splinetool/react-spline").then((module) => {
      setSplineComponent(() => module.default)
    })
  }, [])

  return (
    <div
      className={`relative w-full h-screen overflow-hidden ${
        theme === "dark" ? "bg-[#0F1E1E]" : "bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50"
      }`}
    >
      {/* Advanced Loading Overlay */}
      <AnimatePresence>
        {!isLoaded && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center z-20"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, filter: "blur(10px)" }}
            transition={{ duration: 1.5 }}
          >
            <div className="text-center">
              {/* Cinematic Loading Animation */}
              <motion.div className="relative w-32 h-32 mx-auto mb-12">
                <motion.div
                  className={`absolute inset-0 border-4 rounded-full ${
                    theme === "dark" ? "border-cyan-400/30" : "border-emerald-400/30"
                  }`}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                />
                <motion.div
                  className={`absolute inset-2 border-4 rounded-full ${
                    theme === "dark" ? "border-purple-400/50" : "border-green-400/50"
                  }`}
                  animate={{ rotate: -360 }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                />
                <motion.div
                  className={`absolute inset-4 border-4 rounded-full ${
                    theme === "dark" ? "border-blue-400/70" : "border-teal-400/70"
                  }`}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                />

                {/* Central Glow */}
                <motion.div
                  className={`absolute inset-8 rounded-full ${
                    theme === "dark"
                      ? "bg-gradient-to-r from-cyan-400 to-purple-400"
                      : "bg-gradient-to-r from-emerald-400 to-teal-400"
                  }`}
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.6, 1, 0.6],
                    boxShadow:
                      theme === "dark"
                        ? [
                            "0 0 20px rgba(6, 182, 212, 0.5)",
                            "0 0 40px rgba(139, 92, 246, 0.8)",
                            "0 0 20px rgba(6, 182, 212, 0.5)",
                          ]
                        : [
                            "0 0 20px rgba(16, 185, 129, 0.5)",
                            "0 0 40px rgba(20, 184, 166, 0.8)",
                            "0 0 20px rgba(16, 185, 129, 0.5)",
                          ],
                  }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                />
              </motion.div>

              {/* Kinetic Typography Loading */}
              <motion.h1
                className={`text-4xl md:text-6xl font-bold font-mono tracking-wider mb-6 ${
                  theme === "dark" ? "text-white" : "text-gray-800"
                }`}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2 }}
              >
                {["I", "N", "L", "I", "G", "H", "N", " ", "T", "E", "C", "H"].map((letter, index) => (
                  <motion.span
                    key={index}
                    className={`inline-block ${
                      theme === "dark"
                        ? "bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
                        : "bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent"
                    }`}
                    animate={{
                      y: [0, -20, 0],
                      rotateX: [0, 360, 0],
                    }}
                    transition={{
                      delay: index * 0.1,
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatDelay: 3,
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </motion.h1>

              <motion.div
                className={`font-mono text-sm tracking-[0.5em] uppercase mb-8 ${
                  theme === "dark" ? "text-cyan-400/80" : "text-emerald-600/80"
                }`}
                animate={{
                  opacity: [0.5, 1, 0.5],
                  filter: ["blur(0px)", "blur(1px)", "blur(0px)"],
                }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                Initializing Immersive Experience...
              </motion.div>

              {/* Advanced Progress Bar */}
              <div
                className={`w-64 h-2 rounded-full mx-auto overflow-hidden ${
                  theme === "dark" ? "bg-white/10" : "bg-emerald-200/50"
                }`}
              >
                <motion.div
                  className={`h-full ${
                    theme === "dark"
                      ? "bg-gradient-to-r from-cyan-400 to-purple-400"
                      : "bg-gradient-to-r from-emerald-500 to-teal-500"
                  }`}
                  style={{ width: `${loadingProgress}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              <div className={`mt-4 text-lg font-mono ${theme === "dark" ? "text-white/70" : "text-gray-700"}`}>
                {Math.round(loadingProgress)}%
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Theme-based Environmental Effects */}
      {theme === "light" && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-emerald-100/40 via-transparent to-teal-100/40 pointer-events-none"
          animate={{
            opacity: [0.3, 0.7, 0.3],
            background: [
              "radial-gradient(circle at 20% 20%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 80%, rgba(20, 184, 166, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 20%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY }}
        />
      )}

      {/* Hero Content Overlay with Advanced Blur */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center z-10"
        initial={{ opacity: 0, filter: "blur(20px)" }}
        animate={{ opacity: isLoaded ? 1 : 0, filter: isLoaded ? "blur(0px)" : "blur(20px)" }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        <div className={`text-center px-8 max-w-5xl ${theme === "dark" ? "text-white" : "text-gray-800"}`}>
          <motion.h1
            className="text-5xl md:text-8xl font-bold mb-8 leading-tight"
            style={{
              textShadow:
                theme === "dark"
                  ? "0 0 30px rgba(0,0,0,0.8), 0 0 60px rgba(6, 182, 212, 0.3)"
                  : "0 0 30px rgba(255,255,255,0.9), 0 0 60px rgba(16, 185, 129, 0.2)",
            }}
            initial={{ opacity: 0, y: 100, filter: "blur(20px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.5, delay: 1 }}
          >
            We Provide the Best
            <br />
            <span
              className={`${
                theme === "dark"
                  ? "bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
                  : "bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 bg-clip-text text-transparent"
              }`}
            >
              Internship for You
            </span>
          </motion.h1>

          <motion.p
            className={`text-xl md:text-2xl mb-12 leading-relaxed ${
              theme === "dark" ? "text-white/80" : "text-gray-700"
            }`}
            style={{
              textShadow: theme === "dark" ? "0 0 20px rgba(0,0,0,0.6)" : "0 0 20px rgba(255,255,255,0.8)",
            }}
            initial={{ opacity: 0, y: 50, filter: "blur(15px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.2, delay: 1.5 }}
          >
            Transform your career with cutting-edge technology education
            <br />
            <span className={`${theme === "dark" ? "text-cyan-400" : "text-emerald-600"}`}>
              Master the future of tech today
            </span>
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center"
            initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 2 }}
          >
            <motion.div
              whileHover={{ scale: 1.05, filter: "drop-shadow(0 0 30px rgba(6, 182, 212, 0.6))" }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className={`relative overflow-hidden px-12 py-6 text-xl font-medium border-0 ${
                  theme === "dark"
                    ? "bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 hover:from-cyan-700 hover:via-blue-700 hover:to-purple-700"
                    : "bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 hover:from-emerald-600 hover:via-green-600 hover:to-teal-600"
                } text-white`}
              >
                {/* Liquid Animation Background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/20 via-cyan-400/20 to-purple-400/20"
                  initial={{ x: "-100%", skewX: -15 }}
                  whileHover={{ x: "100%", skewX: 15 }}
                  transition={{ duration: 0.8 }}
                />
                <span className="relative z-10 flex items-center">
                  ENTER THE MATRIX
                  <ArrowRight className="ml-3 h-6 w-6" />
                </span>
              </Button>
            </motion.div>

            <motion.div
              className={`flex items-center space-x-4 cursor-pointer group ${
                theme === "dark" ? "text-white/70 hover:text-cyan-400" : "text-gray-700 hover:text-emerald-600"
              }`}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className={`w-16 h-16 border-2 rounded-full flex items-center justify-center backdrop-blur-sm relative overflow-hidden ${
                  theme === "dark"
                    ? "border-white/30 group-hover:border-cyan-400/60"
                    : "border-gray-400/50 group-hover:border-emerald-500/60"
                }`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 1 }}
              >
                <Play className="h-6 w-6 ml-1 relative z-10" />
              </motion.div>
              <div className="text-left">
                <div className="font-mono text-lg tracking-wider">EXPERIENCE DEMO</div>
                <div
                  className={`font-mono text-sm tracking-wide ${theme === "dark" ? "text-white/50" : "text-gray-500"}`}
                >
                  Interactive Journey
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
      {SplineComponent && (
        <SplineComponent
          scene="https://prod.spline.design/5kuFiJPvH6-4rS7M/scene.splinecode"
          onLoad={() => {
            setIsLoaded(true)
            setLoadingProgress(100)
          }}
        />
      )}
    </div>
  )
}

// Enhanced Chatbot Component with Professional Design
const EnhancedChatbot = ({
  isOpen,
  onToggle,
  theme,
}: {
  isOpen: boolean
  onToggle: () => void
  theme: "dark" | "light"
}) => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm here to help you learn about our programs. What interests you?",
      isBot: true,
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)

  const handleSend = () => {
    if (!inputValue.trim()) return

    const userMessage = {
      id: Date.now(),
      text: inputValue,
      isBot: false,
      timestamp: new Date(),
    }
    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    setTimeout(() => {
      const botResponse = {
        id: Date.now() + 1,
        text: "Thanks for your interest! Our programs are designed to give you hands-on experience. Would you like to know more about our AI & Neural Networks or Full-Stack Development programs?",
        isBot: true,
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botResponse])
      setIsTyping(false)
    }, 1500)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={`fixed bottom-24 right-6 w-80 h-96 backdrop-blur-2xl border rounded-2xl shadow-2xl z-50 overflow-hidden ${
            theme === "dark" ? "bg-black/90 border-cyan-400/30" : "bg-white/95 border-emerald-400/40"
          }`}
          initial={{ opacity: 0, scale: 0.8, y: 20, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, scale: 0.8, y: 20, filter: "blur(10px)" }}
          transition={{ duration: 0.4, type: "spring" }}
        >
          {/* Header */}
          <div
            className={`flex items-center justify-between p-4 border-b ${
              theme === "dark" ? "border-cyan-400/20" : "border-emerald-400/30"
            }`}
          >
            <div className="flex items-center space-x-3">
              <motion.div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  theme === "dark"
                    ? "bg-gradient-to-r from-cyan-500 to-purple-500"
                    : "bg-gradient-to-r from-emerald-500 to-teal-500"
                }`}
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <Bot className="h-4 w-4 text-white" />
              </motion.div>
              <div>
                <h3 className={`font-medium ${theme === "dark" ? "text-white" : "text-gray-800"}`}>InlighnBot</h3>
                <p className={`text-xs ${theme === "dark" ? "text-cyan-400" : "text-emerald-600"}`}>Online</p>
              </div>
            </div>
            <motion.button
              onClick={onToggle}
              className={`transition-colors ${
                theme === "dark" ? "text-gray-400 hover:text-white" : "text-gray-500 hover:text-gray-700"
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X className="h-5 w-5" />
            </motion.button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 space-y-3 overflow-y-auto max-h-64">
            {messages.map((message) => (
              <motion.div
                key={message.id}
                className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}
                initial={{ opacity: 0, y: 10, filter: "blur(5px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.4 }}
              >
                <div
                  className={`flex items-start space-x-2 max-w-[80%] ${
                    message.isBot ? "" : "flex-row-reverse space-x-reverse"
                  }`}
                >
                  <motion.div
                    className={`w-6 h-6 rounded-full flex items-center justify-center ${
                      message.isBot
                        ? theme === "dark"
                          ? "bg-gradient-to-r from-cyan-500 to-purple-500"
                          : "bg-gradient-to-r from-emerald-500 to-teal-500"
                        : "bg-gradient-to-r from-blue-500 to-purple-500"
                    }`}
                    whileHover={{ scale: 1.1 }}
                  >
                    {message.isBot ? <Bot className="h-3 w-3 text-white" /> : <User className="h-3 w-3 text-white" />}
                  </motion.div>
                  <motion.div
                    className={`px-3 py-2 rounded-2xl text-sm ${
                      message.isBot
                        ? theme === "dark"
                          ? "bg-gray-800/80 text-gray-200 rounded-bl-sm"
                          : "bg-gray-100 text-gray-800 rounded-bl-sm"
                        : theme === "dark"
                          ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-br-sm"
                          : "bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-br-sm"
                    }`}
                    whileHover={{ scale: 1.02 }}
                  >
                    {message.text}
                  </motion.div>
                </div>
              </motion.div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <motion.div className="flex justify-start" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                <div className="flex items-center space-x-2">
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center ${
                      theme === "dark"
                        ? "bg-gradient-to-r from-cyan-500 to-purple-500"
                        : "bg-gradient-to-r from-emerald-500 to-teal-500"
                    }`}
                  >
                    <Bot className="h-3 w-3 text-white" />
                  </div>
                  <div
                    className={`px-3 py-2 rounded-2xl rounded-bl-sm ${
                      theme === "dark" ? "bg-gray-800/80" : "bg-gray-100"
                    }`}
                  >
                    <div className="flex space-x-1">
                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          className={`w-2 h-2 rounded-full ${theme === "dark" ? "bg-cyan-400" : "bg-emerald-500"}`}
                          animate={{ opacity: [0.3, 1, 0.3] }}
                          transition={{
                            duration: 1,
                            repeat: Number.POSITIVE_INFINITY,
                            delay: i * 0.2,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {/* Input */}
          <div className={`p-4 border-t ${theme === "dark" ? "border-cyan-400/20" : "border-emerald-400/30"}`}>
            <div className="flex space-x-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                placeholder="Ask about our programs..."
                className={`flex-1 ${
                  theme === "dark"
                    ? "bg-gray-800/50 border-cyan-400/30 text-white placeholder:text-gray-400 focus:border-cyan-400/50"
                    : "bg-white/50 border-emerald-400/40 text-gray-800 placeholder:text-gray-500 focus:border-emerald-500/50"
                }`}
              />
              <motion.button
                onClick={handleSend}
                className={`px-3 py-2 rounded-lg text-white ${
                  theme === "dark"
                    ? "bg-gradient-to-r from-cyan-500 to-purple-500"
                    : "bg-gradient-to-r from-emerald-500 to-teal-500"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Send className="h-4 w-4" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default function CinematicInlighnTech() {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { scrollYProgress } = useScroll({ target: containerRef })

  // Advanced 3D Camera Controls
  const cameraX = useSpring(0, { stiffness: 300, damping: 30 })
  const cameraY = useSpring(0, { stiffness: 300, damping: 30 })
  const cameraZ = useTransform(scrollYProgress, [0, 1], [0, -100])

  // Physics-based Mouse Tracking
  const mouseX = useSpring(0, { stiffness: 100, damping: 20 })
  const mouseY = useSpring(0, { stiffness: 100, damping: 20 })

  // Theme Management
  const [theme, setTheme] = useState<"dark" | "light">("dark")
  const [chatbotOpen, setChatbotOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [currentSection, setCurrentSection] = useState(0)
  const [programsLoading, setProgramsLoading] = useState(true)
  const [isLoading, setIsLoading] = useState(true)

  // Cinematic Scroll Controls with Blur Effects
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.8])
  const heroRotateX = useTransform(scrollYProgress, [0, 0.3], [0, 15])
  const heroBlur = useTransform(scrollYProgress, [0, 0.2, 0.4], [0, 5, 15])

  // Section-based 3D Transformations
  const section1Y = useTransform(scrollYProgress, [0.1, 0.3], [100, 0])
  const section2Y = useTransform(scrollYProgress, [0.3, 0.5], [100, 0])
  const section3Y = useTransform(scrollYProgress, [0.5, 0.7], [100, 0])
  const section4Y = useTransform(scrollYProgress, [0.7, 0.9], [100, 0])

  // 3D Particle System Setup
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Advanced 3D Particle System
    const particles: Array<{
      x: number
      y: number
      z: number
      vx: number
      vy: number
      vz: number
      size: number
      opacity: number
      color: string
    }> = []

    for (let i = 0; i < 200; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        z: Math.random() * 1000,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        vz: (Math.random() - 0.5) * 5,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.8 + 0.2,
        color:
          theme === "dark"
            ? Math.random() > 0.5
              ? "#06b6d4"
              : "#8b5cf6"
            : Math.random() > 0.5
              ? "#10b981"
              : "#14b8a6",
      })
    }

    let animationId: number
    let time = 0

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      time += 0.01

      // Dynamic grid background
      ctx.strokeStyle = theme === "dark" ? "rgba(6, 182, 212, 0.1)" : "rgba(16, 185, 129, 0.1)"
      ctx.lineWidth = 1

      for (let i = 0; i < canvas.width; i += 100) {
        ctx.beginPath()
        ctx.moveTo(i, 0)
        ctx.lineTo(i, canvas.height)
        ctx.stroke()
      }

      for (let i = 0; i < canvas.height; i += 100) {
        ctx.beginPath()
        ctx.moveTo(0, i)
        ctx.lineTo(canvas.width, i)
        ctx.stroke()
      }

      // Animate particles in 3D space
      particles.forEach((particle, index) => {
        particle.x += particle.vx + Math.sin(time + index * 0.1) * 0.5
        particle.y += particle.vy + Math.cos(time + index * 0.1) * 0.5
        particle.z += particle.vz

        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0
        if (particle.z < 0) particle.z = 1000
        if (particle.z > 1000) particle.z = 0

        const scale = 1000 / (1000 + particle.z)
        const projectedX = particle.x * scale
        const projectedY = particle.y * scale
        const projectedSize = particle.size * scale

        // Enhanced glow effect
        const gradient = ctx.createRadialGradient(projectedX, projectedY, 0, projectedX, projectedY, projectedSize * 3)
        gradient.addColorStop(
          0,
          particle.color +
            Math.floor(particle.opacity * 255)
              .toString(16)
              .padStart(2, "0"),
        )
        gradient.addColorStop(1, particle.color + "00")

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(projectedX, projectedY, projectedSize * 3, 0, Math.PI * 2)
        ctx.fill()

        ctx.fillStyle = particle.color
        ctx.beginPath()
        ctx.arc(projectedX, projectedY, projectedSize, 0, Math.PI * 2)
        ctx.fill()
      })

      // Connection lines
      ctx.strokeStyle = theme === "dark" ? "rgba(6, 182, 212, 0.2)" : "rgba(16, 185, 129, 0.2)"
      ctx.lineWidth = 0.5

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {
            const scale1 = 1000 / (1000 + particles[i].z)
            const scale2 = 1000 / (1000 + particles[j].z)

            ctx.beginPath()
            ctx.moveTo(particles[i].x * scale1, particles[i].y * scale1)
            ctx.lineTo(particles[j].x * scale2, particles[j].y * scale2)
            ctx.stroke()
          }
        }
      }

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationId)
    }
  }, [theme])

  // Advanced Mouse Tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window
      const normalizedX = (clientX - innerWidth / 2) / (innerWidth / 2)
      const normalizedY = (clientY - innerHeight / 2) / (innerHeight / 2)

      mouseX.set(normalizedX * 50)
      mouseY.set(normalizedY * 50)
      cameraX.set(normalizedX * 10)
      cameraY.set(normalizedY * 10)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY, cameraX, cameraY])

  // Loading Sequence
  useEffect(() => {
    const loadingSequence = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      await new Promise((resolve) => setTimeout(resolve, 800))
      await new Promise((resolve) => setTimeout(resolve, 600))
      setIsLoading(false)
    }
    loadingSequence()
  }, [])

  // Content Loading Simulation
  useEffect(() => {
    const timer = setTimeout(() => {
      setProgramsLoading(false)
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  // Scroll-based Section Detection
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      if (latest < 0.15) setCurrentSection(0)
      else if (latest < 0.35) setCurrentSection(1)
      else if (latest < 0.55) setCurrentSection(2)
      else if (latest < 0.75) setCurrentSection(3)
      else setCurrentSection(4)
    })
    return unsubscribe
  }, [scrollYProgress])

  const programs = [
    {
      title: "AI & Neural Networks",
      description: "Master deep learning, neural architectures, and AI model deployment in production environments",
      duration: "16 Weeks",
      level: "Advanced",
      students: "2,500+",
      skills: ["TensorFlow", "PyTorch", "Computer Vision", "NLP", "MLOps"],
      icon: Brain,
    },
    {
      title: "Full-Stack Engineering",
      description: "Build scalable applications with modern frameworks, microservices, and cloud architecture",
      duration: "20 Weeks",
      level: "Intermediate",
      students: "3,200+",
      skills: ["React", "Node.js", "Docker", "AWS", "GraphQL"],
      icon: Code,
    },
    {
      title: "Data Engineering",
      description: "Design robust data pipelines, real-time analytics, and distributed computing systems",
      duration: "18 Weeks",
      level: "Advanced",
      students: "1,800+",
      skills: ["Apache Spark", "Kafka", "Snowflake", "Python", "Kubernetes"],
      icon: Database,
    },
    {
      title: "Cybersecurity",
      description: "Advanced threat detection, ethical hacking, and security architecture design",
      duration: "14 Weeks",
      level: "Expert",
      students: "1,200+",
      skills: ["Penetration Testing", "SIEM", "Cloud Security", "Forensics", "Compliance"],
      icon: Shield,
    },
  ]

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  // Loading Screen
  if (isLoading) {
    return (
      <div
        className={`min-h-screen flex items-center justify-center relative overflow-hidden ${
          theme === "dark" ? "bg-black" : "bg-gradient-to-br from-emerald-50 to-teal-50"
        }`}
      >
        {/* Animated Loading Background */}
        <div className="absolute inset-0">
          <motion.div
            className={`absolute inset-0 ${
              theme === "dark"
                ? "bg-gradient-to-br from-cyan-900/20 via-black to-purple-900/20"
                : "bg-gradient-to-br from-emerald-100/30 via-transparent to-teal-100/30"
            }`}
            animate={{
              background:
                theme === "dark"
                  ? [
                      "linear-gradient(45deg, rgba(6, 182, 212, 0.1) 0%, rgba(0, 0, 0, 1) 50%, rgba(139, 92, 246, 0.1) 100%)",
                      "linear-gradient(225deg, rgba(139, 92, 246, 0.1) 0%, rgba(0, 0, 0, 1) 50%, rgba(6, 182, 212, 0.1) 100%)",
                      "linear-gradient(45deg, rgba(6, 182, 212, 0.1) 0%, rgba(0, 0, 0, 1) 50%, rgba(139, 92, 246, 0.1) 100%)",
                    ]
                  : [
                      "linear-gradient(45deg, rgba(16, 185, 129, 0.1) 0%, rgba(255, 255, 255, 0.9) 50%, rgba(20, 184, 166, 0.1) 100%)",
                      "linear-gradient(225deg, rgba(20, 184, 166, 0.1) 0%, rgba(255, 255, 255, 0.9) 50%, rgba(16, 185, 129, 0.1) 100%)",
                      "linear-gradient(45deg, rgba(16, 185, 129, 0.1) 0%, rgba(255, 255, 255, 0.9) 50%, rgba(20, 184, 166, 0.1) 100%)",
                    ],
            }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
          />
        </div>

        {/* Cinematic Loading Animation */}
        <motion.div
          className="relative z-10 text-center"
          initial={{ opacity: 0, scale: 0.5, filter: "blur(20px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 2 }}
        >
          <Hero3D theme={theme} />
        </motion.div>
      </div>
    )
  }

  return (
    <div
      ref={containerRef}
      className={`min-h-screen overflow-hidden relative transition-all duration-700 ${
        theme === "dark" ? "bg-black text-white" : "bg-gradient-to-br from-emerald-50 to-teal-50 text-gray-800"
      }`}
    >
      {/* 3D Canvas Background */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          filter: "blur(0px)",
          transition: "filter 0.5s ease",
        }}
      />

      {/* Main Content with 3D Transforms and Blur Effects */}
      <motion.div
        style={{
          filter: "blur(0px)",
          transform: `perspective(1000px) rotateX(${heroRotateX}deg)`,
        }}
        transition={{ duration: 0.5 }}
      >
        {/* Cinematic Navigation */}
        <motion.nav
          className="fixed top-0 left-0 right-0 z-40 p-6"
          initial={{ y: -100, opacity: 0, filter: "blur(20px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.5, delay: 0.5 }}
          style={{
            transform: `translateZ(${cameraZ.get() * 0.1}px)`,
          }}
        >
          <div className="max-w-7xl mx-auto">
            <motion.div
              className={`backdrop-blur-2xl border rounded-3xl px-8 py-4 relative overflow-hidden ${
                theme === "dark" ? "bg-black/30 border-white/20" : "bg-white/90 border-emerald-200/50"
              }`}
              whileHover={{
                backdropFilter: "blur(32px)",
                borderColor: theme === "dark" ? "rgba(6, 182, 212, 0.4)" : "rgba(16, 185, 129, 0.4)",
                boxShadow: theme === "dark" ? "0 0 40px rgba(6, 182, 212, 0.2)" : "0 0 40px rgba(16, 185, 129, 0.2)",
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex justify-between items-center relative z-10">
                <motion.div
                  className="font-mono text-2xl font-bold tracking-wider cursor-pointer"
                  whileHover={{
                    scale: 1.05,
                    filter:
                      theme === "dark"
                        ? "drop-shadow(0 0 20px rgba(6, 182, 212, 0.6))"
                        : "drop-shadow(0 0 20px rgba(16, 185, 129, 0.6))",
                  }}
                >
                  <span
                    className={`${
                      theme === "dark"
                        ? "bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
                        : "bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 bg-clip-text text-transparent"
                    }`}
                  >
                    INLIGHN
                  </span>
                  <span className={`ml-2 ${theme === "dark" ? "text-white" : "text-gray-800"}`}>TECH</span>
                </motion.div>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center space-x-8">
                  {[
                    { name: "HOME", target: "home" },
                    { name: "ABOUT", target: "about" },
                    { name: "PROGRAMS", target: "programs" },
                    { name: "VERIFY CERTIFICATE", target: "verify" },
                    { name: "CONTACT US", target: "contact" },
                  ].map((item, index) => (
                    <motion.button
                      key={item.name}
                      className={`relative font-mono text-sm transition-colors tracking-wider cursor-pointer ${
                        theme === "dark" ? "text-white/70 hover:text-cyan-400" : "text-gray-600 hover:text-emerald-600"
                      }`}
                      initial={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                      whileHover={{
                        y: -3,
                        filter:
                          theme === "dark"
                            ? "drop-shadow(0 0 10px rgba(6, 182, 212, 0.4))"
                            : "drop-shadow(0 0 10px rgba(16, 185, 129, 0.4))",
                      }}
                    >
                      {item.name}
                      <motion.div
                        className={`absolute -bottom-2 left-0 h-0.5 ${
                          theme === "dark"
                            ? "bg-gradient-to-r from-cyan-400 to-purple-400"
                            : "bg-gradient-to-r from-emerald-500 to-teal-500"
                        }`}
                        initial={{ width: 0 }}
                        whileHover={{ width: "100%" }}
                        transition={{ duration: 0.3 }}
                      />

                      {index === currentSection && (
                        <motion.div
                          className={`absolute -bottom-2 left-0 h-0.5 ${
                            theme === "dark"
                              ? "bg-gradient-to-r from-cyan-400 to-purple-400"
                              : "bg-gradient-to-r from-emerald-500 to-teal-500"
                          }`}
                          layoutId="activeNav"
                          initial={{ width: 0 }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 0.5 }}
                        />
                      )}
                    </motion.button>
                  ))}

                  {/* Theme Toggle */}
                  <motion.button
                    onClick={toggleTheme}
                    className={`p-2 rounded-lg transition-colors ${
                      theme === "dark"
                        ? "bg-gray-800 text-yellow-400 hover:bg-gray-700"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div animate={{ rotate: theme === "dark" ? 0 : 180 }} transition={{ duration: 0.5 }}>
                      {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                    </motion.div>
                  </motion.button>

                  <motion.div
                    whileHover={{
                      scale: 1.05,
                      filter:
                        theme === "dark"
                          ? "drop-shadow(0 0 20px rgba(6, 182, 212, 0.5))"
                          : "drop-shadow(0 0 20px rgba(16, 185, 129, 0.5))",
                    }}
                  >
                    <Button
                      className={`font-mono tracking-wider border-0 relative overflow-hidden group ${
                        theme === "dark"
                          ? "bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white"
                          : "bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white"
                      }`}
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.6 }}
                      />
                      <span className="relative z-10">PORTAL ACCESS</span>
                    </Button>
                  </motion.div>
                </div>

                {/* Mobile Navigation Toggle */}
                <div className="flex items-center space-x-3 lg:hidden">
                  <motion.button
                    onClick={toggleTheme}
                    className={`p-2 rounded-lg ${
                      theme === "dark" ? "bg-gray-800 text-yellow-400" : "bg-gray-100 text-gray-600"
                    }`}
                    whileTap={{ scale: 0.95 }}
                  >
                    {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                  </motion.button>

                  <button
                    className={`focus:outline-none ${
                      theme === "dark" ? "text-white hover:text-cyan-400" : "text-gray-800 hover:text-emerald-600"
                    }`}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  >
                    {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                  </button>
                </div>
              </div>

              {/* Mobile Navigation with Blur Effects */}
              <AnimatePresence>
                {mobileMenuOpen && (
                  <motion.div
                    className={`lg:hidden mt-6 pt-6 border-t ${
                      theme === "dark" ? "border-white/10" : "border-emerald-200/50"
                    }`}
                    initial={{ opacity: 0, height: 0, filter: "blur(10px)" }}
                    animate={{ opacity: 1, height: "auto", filter: "blur(0px)" }}
                    exit={{ opacity: 0, height: 0, filter: "blur(10px)" }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="flex flex-col space-y-4">
                      {[
                        { name: "HOME", target: "home" },
                        { name: "ABOUT", target: "about" },
                        { name: "PROGRAMS", target: "programs" },
                        { name: "VERIFY CERTIFICATE", target: "verify" },
                        { name: "CONTACT US", target: "contact" },
                      ].map((item, index) => (
                        <motion.button
                          key={item.name}
                          className={`font-mono text-sm transition-colors tracking-wider text-left ${
                            theme === "dark"
                              ? "text-white/60 hover:text-cyan-400"
                              : "text-gray-600 hover:text-emerald-600"
                          }`}
                          initial={{ opacity: 0, x: -20, filter: "blur(5px)" }}
                          animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                          transition={{ delay: index * 0.1 }}
                          whileHover={{
                            filter:
                              theme === "dark"
                                ? "drop-shadow(0 0 5px rgba(6, 182, 212, 0.3))"
                                : "drop-shadow(0 0 5px rgba(16, 185, 129, 0.3))",
                          }}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </motion.button>
                      ))}
                      <Button
                        className={`font-mono tracking-wider mt-4 ${
                          theme === "dark"
                            ? "bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700"
                            : "bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600"
                        } text-white`}
                      >
                        PORTAL ACCESS
                      </Button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </motion.nav>

        {/* Hero Section with 3D Spline */}
        <section id="home">
          <Hero3D theme={theme} />
        </section>

        {/* Programs Section with Enhanced 3D Cards */}
        <motion.section
          id="programs"
          className="py-32 px-8 relative"
          style={{
            y: section1Y,
            transform: `translateZ(${cameraZ.get() * 0.2}px)`,
          }}
        >
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-24"
              initial={{ opacity: 0, y: 100, filter: "blur(20px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
            >
              <motion.div
                className={`font-mono text-lg tracking-[0.5em] uppercase mb-8 ${
                  theme === "dark" ? "text-cyan-400/60" : "text-emerald-600/60"
                }`}
                initial={{ opacity: 0, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ delay: 0.3 }}
              >
                Neural Programs
              </motion.div>

              <h2 className="text-6xl md:text-8xl font-bold font-mono tracking-tight mb-12">
                {["NEXT-GEN", "LEARNING"].map((word, index) => (
                  <motion.div
                    key={word}
                    className="block overflow-hidden"
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.2, duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    {word.split("").map((letter, letterIndex) => (
                      <motion.span
                        key={letterIndex}
                        className="inline-block"
                        style={{
                          background:
                            index === 1
                              ? theme === "dark"
                                ? "linear-gradient(45deg, #06b6d4, #8b5cf6)"
                                : "linear-gradient(45deg, #10b981, #14b8a6)"
                              : theme === "dark"
                                ? "linear-gradient(45deg, #ffffff, #e5e7eb)"
                                : "linear-gradient(45deg, #1f2937, #374151)",
                          backgroundClip: "text",
                          WebkitBackgroundClip: "text",
                          color: "transparent",
                        }}
                        whileInView={{
                          y: [0, -20, 0],
                          rotateX: [0, 360, 0],
                        }}
                        transition={{
                          delay: letterIndex * 0.1,
                          duration: 1,
                          repeat: Number.POSITIVE_INFINITY,
                          repeatDelay: 5,
                        }}
                        viewport={{ once: true }}
                      >
                        {letter}
                      </motion.span>
                    ))}
                  </motion.div>
                ))}
              </h2>
            </motion.div>

            {/* 3D Program Cards Grid */}
            <div className="grid md:grid-cols-2 gap-12">
              {programsLoading
                ? [...Array(4)].map((_, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 100, rotateX: 45, filter: "blur(20px)" }}
                      animate={{ opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)" }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                    >
                      <SkeletonCard theme={theme} />
                    </motion.div>
                  ))
                : programs.map((program, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 100, rotateX: 45, filter: "blur(20px)" }}
                      whileInView={{ opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)" }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                      viewport={{ once: true }}
                      className="group cursor-pointer"
                      whileHover={{
                        scale: 1.02,
                        rotateY: 5,
                        rotateX: -5,
                        z: 50,
                      }}
                      style={{
                        transformStyle: "preserve-3d",
                        perspective: "1000px",
                      }}
                    >
                      <Card
                        className={`relative overflow-hidden h-full group-hover:border-cyan-400/40 transition-all duration-700 ${
                          theme === "dark"
                            ? "bg-black/60 backdrop-blur-2xl border border-white/10"
                            : "bg-white/80 backdrop-blur-2xl border border-emerald-200/50"
                        }`}
                      >
                        {/* 3D Depth Layers */}
                        <motion.div
                          className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ${
                            theme === "dark"
                              ? "bg-gradient-to-br from-cyan-400/20 via-blue-500/20 to-purple-600/20"
                              : "bg-gradient-to-br from-emerald-400/30 via-green-500/30 to-teal-600/30"
                          }`}
                          style={{
                            transform: "translateZ(10px)",
                          }}
                        />

                        {/* Animated Glow Effect */}
                        <motion.div
                          className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                          animate={{
                            boxShadow:
                              theme === "dark"
                                ? [
                                    "0 0 30px rgba(6, 182, 212, 0.4)",
                                    "0 0 60px rgba(6, 182, 212, 0.6)",
                                    "0 0 30px rgba(6, 182, 212, 0.4)",
                                  ]
                                : [
                                    "0 0 30px rgba(16, 185, 129, 0.4)",
                                    "0 0 60px rgba(16, 185, 129, 0.6)",
                                    "0 0 30px rgba(16, 185, 129, 0.4)",
                                  ],
                          }}
                          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                        />

                        {/* Liquid Ripple Effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100"
                          animate={{
                            x: ["-100%", "100%"],
                            skewX: [-15, 15],
                          }}
                          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatDelay: 2 }}
                        />

                        <CardContent className="p-10 relative z-10">
                          {/* 3D Icon */}
                          <motion.div
                            className="relative mb-8"
                            style={{
                              transformStyle: "preserve-3d",
                            }}
                            whileHover={{
                              rotateY: 180,
                              rotateX: 15,
                            }}
                            transition={{ duration: 0.8 }}
                          >
                            <div
                              className={`w-20 h-20 rounded-3xl backdrop-blur-sm border flex items-center justify-center relative overflow-hidden ${
                                theme === "dark"
                                  ? "bg-gradient-to-br from-cyan-400/20 via-blue-500/20 to-purple-600/20 border-white/20"
                                  : "bg-gradient-to-br from-emerald-400/30 via-green-500/30 to-teal-600/30 border-emerald-200/50"
                              }`}
                              style={{
                                transform: "translateZ(20px)",
                              }}
                            >
                              <program.icon
                                className={`h-10 w-10 relative z-10 ${
                                  theme === "dark" ? "text-cyan-400" : "text-emerald-600"
                                }`}
                              />

                              {/* Icon Glow */}
                              <motion.div
                                className={`absolute inset-0 rounded-3xl ${
                                  theme === "dark"
                                    ? "bg-gradient-to-r from-cyan-400/20 to-purple-400/20"
                                    : "bg-gradient-to-r from-emerald-400/20 to-teal-400/20"
                                }`}
                                animate={{
                                  scale: [1, 1.2, 1],
                                  opacity: [0.5, 1, 0.5],
                                }}
                                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                              />
                            </div>
                          </motion.div>

                          {/* Program Details */}
                          <div className="flex justify-between items-start mb-6">
                            <Badge
                              className={`text-xs tracking-wider ${
                                theme === "dark"
                                  ? "bg-cyan-400/20 text-cyan-400 border-cyan-400/30"
                                  : "bg-emerald-400/20 text-emerald-600 border-emerald-400/30"
                              }`}
                            >
                              {program.duration}
                            </Badge>
                            <Badge
                              variant="outline"
                              className={`text-xs ${
                                theme === "dark"
                                  ? "border-purple-400/30 text-purple-400"
                                  : "border-teal-400/30 text-teal-600"
                              }`}
                            >
                              {program.level}
                            </Badge>
                          </div>

                          <motion.h3
                            className={`text-3xl font-bold font-mono tracking-wide mb-6 transition-colors duration-300 ${
                              theme === "dark"
                                ? "text-white group-hover:text-cyan-400"
                                : "text-gray-800 group-hover:text-emerald-600"
                            }`}
                            style={{
                              transform: "translateZ(15px)",
                            }}
                          >
                            {program.title}
                          </motion.h3>

                          <motion.p
                            className={`mb-8 leading-relaxed font-mono text-sm tracking-wide ${
                              theme === "dark" ? "text-white/70" : "text-gray-600"
                            }`}
                            style={{
                              transform: "translateZ(10px)",
                            }}
                          >
                            {program.description}
                          </motion.p>

                          {/* Skills Tags */}
                          <div className="flex flex-wrap gap-3 mb-8">
                            {program.skills.map((skill, skillIndex) => (
                              <motion.div
                                key={skillIndex}
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: skillIndex * 0.1 }}
                                viewport={{ once: true }}
                              >
                                <Badge
                                  variant="outline"
                                  className={`text-xs font-mono cursor-pointer transition-colors ${
                                    theme === "dark"
                                      ? "border-white/20 text-white/80 hover:border-cyan-400/40 hover:text-cyan-400"
                                      : "border-gray-300/50 text-gray-600 hover:border-emerald-400/40 hover:text-emerald-600"
                                  }`}
                                  style={{
                                    transform: "translateZ(5px)",
                                  }}
                                >
                                  {skill}
                                </Badge>
                              </motion.div>
                            ))}
                          </div>

                          {/* Stats */}
                          <div className="flex justify-between items-center mb-8">
                            <div
                              className={`flex items-center space-x-2 font-mono text-sm ${
                                theme === "dark" ? "text-white/50" : "text-gray-500"
                              }`}
                            >
                              <Users className="h-4 w-4" />
                              <span>{program.students} enrolled</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              ))}
                            </div>
                          </div>

                          {/* CTA */}
                          <motion.div
                            className={`flex items-center font-mono text-sm tracking-wider cursor-pointer group-hover:translate-x-3 transition-transform duration-300 ${
                              theme === "dark" ? "text-cyan-400" : "text-emerald-600"
                            }`}
                            whileHover={{
                              x: 10,
                              filter:
                                theme === "dark"
                                  ? "drop-shadow(0 0 10px rgba(6, 182, 212, 0.6))"
                                  : "drop-shadow(0 0 10px rgba(16, 185, 129, 0.6))",
                            }}
                            style={{
                              transform: "translateZ(20px)",
                            }}
                          >
                            EXPLORE CURRICULUM
                            <ArrowRight className="ml-3 h-5 w-5" />
                          </motion.div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
            </div>
          </div>
        </motion.section>

        {/* Experience Section with Parallax */}
        <motion.section
          id="experience"
          className="py-32 px-8 relative"
          style={{
            y: section2Y,
            transform: `translateZ(${cameraZ.get() * 0.15}px)`,
          }}
        >
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-20"
              initial={{ opacity: 0, y: 100, filter: "blur(20px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <h2
                className={`text-6xl font-bold font-mono tracking-tight mb-8 ${
                  theme === "dark" ? "text-white" : "text-gray-800"
                }`}
              >
                IMMERSIVE
                <br />
                <span
                  className={`${
                    theme === "dark"
                      ? "bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
                      : "bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent"
                  }`}
                >
                  EXPERIENCE
                </span>
              </h2>
            </motion.div>

            {/* Stats with 3D Effects */}
            <div
              className={`backdrop-blur-2xl border rounded-3xl p-16 relative overflow-hidden ${
                theme === "dark" ? "bg-black/30 border-white/10" : "bg-white/60 border-emerald-200/30"
              }`}
            >
              {/* Animated Background */}
              <motion.div
                className={`absolute inset-0 ${
                  theme === "dark"
                    ? "bg-gradient-to-br from-cyan-400/5 via-transparent to-purple-400/5"
                    : "bg-gradient-to-br from-emerald-400/5 via-transparent to-teal-400/5"
                }`}
                animate={{
                  background:
                    theme === "dark"
                      ? [
                          "linear-gradient(45deg, rgba(6, 182, 212, 0.05) 0%, transparent 50%, rgba(139, 92, 246, 0.05) 100%)",
                          "linear-gradient(225deg, rgba(139, 92, 246, 0.05) 0%, transparent 50%, rgba(6, 182, 212, 0.05) 100%)",
                          "linear-gradient(45deg, rgba(6, 182, 212, 0.05) 0%, transparent 50%, rgba(139, 92, 246, 0.05) 100%)",
                        ]
                      : [
                          "linear-gradient(45deg, rgba(16, 185, 129, 0.05) 0%, transparent 50%, rgba(20, 184, 166, 0.05) 100%)",
                          "linear-gradient(225deg, rgba(20, 184, 166, 0.05) 0%, transparent 50%, rgba(16, 185, 129, 0.05) 100%)",
                          "linear-gradient(45deg, rgba(16, 185, 129, 0.05) 0%, transparent 50%, rgba(20, 184, 166, 0.05) 100%)",
                        ],
                }}
                transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY }}
              />

              <div className="grid md:grid-cols-4 gap-12 relative z-10">
                {[
                  { number: "15K+", label: "NEURAL GRADUATES", icon: Brain },
                  { number: "98%", label: "REALITY PLACEMENT", icon: Target },
                  { number: "1000+", label: "TECH PARTNERS", icon: Sparkles },
                  { number: "5.0/5", label: "MATRIX RATING", icon: Star },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center group cursor-pointer"
                    initial={{ opacity: 0, scale: 0.5, rotateY: 90, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, scale: 1, rotateY: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    whileHover={{
                      y: -15,
                      scale: 1.05,
                      rotateY: 10,
                      filter:
                        theme === "dark"
                          ? "drop-shadow(0 0 30px rgba(6, 182, 212, 0.4))"
                          : "drop-shadow(0 0 30px rgba(16, 185, 129, 0.4))",
                    }}
                    style={{
                      transformStyle: "preserve-3d",
                    }}
                  >
                    <motion.div
                      className={`w-24 h-24 mx-auto mb-8 rounded-3xl flex items-center justify-center backdrop-blur-sm border relative overflow-hidden ${
                        theme === "dark"
                          ? "bg-gradient-to-br from-cyan-400/20 to-purple-500/20 border-white/10"
                          : "bg-gradient-to-br from-emerald-400/30 to-teal-500/30 border-emerald-200/20"
                      }`}
                      whileHover={{
                        rotateX: 360,
                        rotateY: 180,
                      }}
                      transition={{ duration: 1 }}
                      style={{
                        transform: "translateZ(30px)",
                      }}
                    >
                      <stat.icon
                        className={`h-12 w-12 relative z-10 ${theme === "dark" ? "text-cyan-400" : "text-emerald-600"}`}
                      />

                      {/* Icon Pulse */}
                      <motion.div
                        className={`absolute inset-0 rounded-3xl ${
                          theme === "dark"
                            ? "bg-gradient-to-r from-cyan-400/10 to-purple-400/10"
                            : "bg-gradient-to-r from-emerald-400/10 to-teal-400/10"
                        }`}
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [0.3, 0.8, 0.3],
                        }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.5 }}
                      />
                    </motion.div>

                    <motion.div
                      className={`text-6xl font-bold font-mono tracking-wider mb-4 ${
                        theme === "dark" ? "text-white" : "text-gray-800"
                      }`}
                      style={{
                        transform: "translateZ(20px)",
                      }}
                      animate={{
                        textShadow:
                          theme === "dark"
                            ? [
                                "0 0 10px rgba(6, 182, 212, 0.3)",
                                "0 0 20px rgba(6, 182, 212, 0.6)",
                                "0 0 10px rgba(6, 182, 212, 0.3)",
                              ]
                            : [
                                "0 0 10px rgba(16, 185, 129, 0.3)",
                                "0 0 20px rgba(16, 185, 129, 0.6)",
                                "0 0 10px rgba(16, 185, 129, 0.3)",
                              ],
                      }}
                      transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: index * 0.5 }}
                    >
                      {stat.number}
                    </motion.div>

                    <motion.div
                      className={`font-mono text-sm tracking-[0.3em] ${
                        theme === "dark" ? "text-white/40" : "text-gray-500"
                      }`}
                      style={{
                        transform: "translateZ(10px)",
                      }}
                    >
                      {stat.label}
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Certificate Verification with Advanced Effects */}
        <motion.section
          id="verify"
          className="py-32 px-8 relative"
          style={{
            y: section3Y,
            transform: `translateZ(${cameraZ.get() * 0.1}px)`,
          }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 100, filter: "blur(20px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <motion.div
                className={`font-mono text-lg tracking-[0.5em] uppercase mb-8 ${
                  theme === "dark" ? "text-cyan-400/60" : "text-emerald-600/60"
                }`}
                initial={{ opacity: 0, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ delay: 0.3 }}
              >
                Neural Verification
              </motion.div>

              <h2
                className={`text-6xl font-bold font-mono tracking-tight mb-8 ${
                  theme === "dark" ? "text-white" : "text-gray-800"
                }`}
              >
                QUANTUM
                <br />
                <span
                  className={`${
                    theme === "dark"
                      ? "bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
                      : "bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent"
                  }`}
                >
                  CERTIFICATE
                </span>
              </h2>

              <p
                className={`text-xl mb-16 font-mono leading-relaxed ${
                  theme === "dark" ? "text-white/60" : "text-gray-600"
                }`}
              >
                Verify authenticity through our quantum-encrypted blockchain system
              </p>

              <motion.div
                className={`backdrop-blur-2xl border rounded-3xl p-12 max-w-lg mx-auto relative overflow-hidden ${
                  theme === "dark" ? "bg-black/40 border-white/20" : "bg-white/60 border-emerald-200/40"
                }`}
                whileHover={{
                  scale: 1.02,
                  backdropFilter: "blur(32px)",
                  borderColor: theme === "dark" ? "rgba(6, 182, 212, 0.4)" : "rgba(16, 185, 129, 0.4)",
                  boxShadow: theme === "dark" ? "0 0 50px rgba(6, 182, 212, 0.3)" : "0 0 50px rgba(16, 185, 129, 0.3)",
                }}
                transition={{ duration: 0.3 }}
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Scanning Animation */}
                <motion.div
                  className={`absolute inset-0 ${
                    theme === "dark"
                      ? "bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent"
                      : "bg-gradient-to-r from-transparent via-emerald-400/10 to-transparent"
                  }`}
                  animate={{
                    x: ["-100%", "100%"],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatDelay: 2,
                  }}
                />

                <motion.div
                  className="relative z-10"
                  style={{
                    transform: "translateZ(20px)",
                  }}
                >
                  <Input
                    placeholder="Enter Certificate Quantum ID"
                    className={`backdrop-blur-sm font-mono tracking-wider h-16 text-lg mb-8 ${
                      theme === "dark"
                        ? "bg-white/5 border-white/20 text-white placeholder:text-white/40 focus:border-cyan-400/50"
                        : "bg-white/30 border-emerald-200/50 text-gray-800 placeholder:text-gray-500 focus:border-emerald-500/50"
                    }`}
                  />

                  <motion.div
                    whileHover={{
                      scale: 1.05,
                      filter:
                        theme === "dark"
                          ? "drop-shadow(0 0 25px rgba(6, 182, 212, 0.6))"
                          : "drop-shadow(0 0 25px rgba(16, 185, 129, 0.6))",
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      className={`w-full py-4 font-mono tracking-wider text-lg relative overflow-hidden group border-0 ${
                        theme === "dark"
                          ? "bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700"
                          : "bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600"
                      } text-white`}
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.8 }}
                      />
                      <span className="relative z-10">QUANTUM VERIFY</span>
                    </Button>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          id="contact"
          className="py-32 px-8 relative"
          style={{
            y: section4Y,
            transform: `translateZ(${cameraZ.get() * 0.05}px)`,
          }}
        >
          <div className="max-w-5xl mx-auto">
            <motion.div
              className="text-center mb-20"
              initial={{ opacity: 0, y: 100, filter: "blur(20px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <motion.div
                className={`font-mono text-lg tracking-[0.5em] uppercase mb-8 ${
                  theme === "dark" ? "text-cyan-400/60" : "text-emerald-600/60"
                }`}
                initial={{ opacity: 0, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ delay: 0.3 }}
              >
                Neural Connection
              </motion.div>

              <h2
                className={`text-6xl font-bold font-mono tracking-tight mb-8 ${
                  theme === "dark" ? "text-white" : "text-gray-800"
                }`}
              >
                ESTABLISH
                <br />
                <span
                  className={`${
                    theme === "dark"
                      ? "bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
                      : "bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent"
                  }`}
                >
                  CONTACT
                </span>
              </h2>

              <p
                className={`text-xl font-mono leading-relaxed ${theme === "dark" ? "text-white/60" : "text-gray-600"}`}
              >
                Ready to jack into the matrix? Initialize connection protocol
              </p>
            </motion.div>

            <motion.div
              className={`backdrop-blur-2xl rounded-3xl p-16 border relative overflow-hidden ${
                theme === "dark" ? "bg-black/40 border-white/20" : "bg-white/60 border-emerald-200/40"
              }`}
              initial={{ opacity: 0, y: 100, filter: "blur(20px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              {/* Animated Circuit Background */}
              <motion.div
                className="absolute inset-0 opacity-20"
                animate={{
                  background:
                    theme === "dark"
                      ? [
                          "radial-gradient(circle at 20% 20%, rgba(6, 182, 212, 0.1) 0%, transparent 50%)",
                          "radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)",
                          "radial-gradient(circle at 20% 20%, rgba(6, 182, 212, 0.1) 0%, transparent 50%)",
                        ]
                      : [
                          "radial-gradient(circle at 20% 20%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)",
                          "radial-gradient(circle at 80% 80%, rgba(20, 184, 166, 0.1) 0%, transparent 50%)",
                          "radial-gradient(circle at 20% 20%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)",
                        ],
                }}
                transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
              />

              <div className="grid md:grid-cols-2 gap-16 relative z-10">
                <div className="space-y-10">
                  <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, filter: "blur(0px)" }}
                    transition={{ delay: 0.4 }}
                    style={{
                      transform: "translateZ(20px)",
                    }}
                  >
                    <h3
                      className={`text-3xl font-bold font-mono mb-4 ${
                        theme === "dark" ? "text-white" : "text-gray-800"
                      }`}
                    >
                      BENGALURU NEXUS
                    </h3>
                    <p className={`font-mono text-sm ${theme === "dark" ? "text-white/60" : "text-gray-600"}`}>
                      Primary neural hub location
                    </p>
                  </motion.div>

                  {[
                    { icon: Mail, label: "NEURAL MAIL", value: "connect@inlighntech.matrix" },
                    { icon: Phone, label: "QUANTUM LINK", value: "+91 80 MATRIX-TECH" },
                    { icon: MapPin, label: "PHYSICAL NODE", value: "Bengaluru Cyber District, India" },
                  ].map((contact, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-8 group cursor-pointer"
                      whileHover={{
                        x: 15,
                        scale: 1.02,
                        filter:
                          theme === "dark"
                            ? "drop-shadow(0 0 20px rgba(6, 182, 212, 0.4))"
                            : "drop-shadow(0 0 20px rgba(16, 185, 129, 0.4))",
                      }}
                      initial={{ opacity: 0, x: -50, filter: "blur(15px)" }}
                      whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                      transition={{ delay: 0.4 + index * 0.2 }}
                      style={{
                        transformStyle: "preserve-3d",
                      }}
                    >
                      <motion.div
                        className={`w-20 h-20 rounded-3xl flex items-center justify-center backdrop-blur-sm border group-hover:border-cyan-400/40 transition-colors relative overflow-hidden ${
                          theme === "dark"
                            ? "bg-gradient-to-br from-cyan-400/20 to-purple-500/20 border-white/10"
                            : "bg-gradient-to-br from-emerald-400/30 to-teal-500/30 border-emerald-200/20"
                        }`}
                        whileHover={{
                          rotateY: 180,
                          rotateX: 15,
                        }}
                        transition={{ duration: 0.8 }}
                        style={{
                          transform: "translateZ(30px)",
                        }}
                      >
                        <contact.icon
                          className={`h-10 w-10 relative z-10 ${
                            theme === "dark" ? "text-cyan-400" : "text-emerald-600"
                          }`}
                        />

                        {/* Pulsing Glow */}
                        <motion.div
                          className={`absolute inset-0 rounded-3xl ${
                            theme === "dark"
                              ? "bg-gradient-to-r from-cyan-400/10 to-purple-400/10"
                              : "bg-gradient-to-r from-emerald-400/10 to-teal-400/10"
                          }`}
                          animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.3, 0.7, 0.3],
                          }}
                          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.5 }}
                        />
                      </motion.div>

                      <div style={{ transform: "translateZ(15px)" }}>
                        <div
                          className={`font-mono text-xs tracking-[0.3em] uppercase mb-2 ${
                            theme === "dark" ? "text-white/40" : "text-gray-500"
                          }`}
                        >
                          {contact.label}
                        </div>
                        <div
                          className={`font-mono text-lg tracking-wide group-hover:text-cyan-400 transition-colors ${
                            theme === "dark" ? "text-white" : "text-gray-800"
                          }`}
                        >
                          {contact.value}
                        </div>
                      </div>
                    </motion.div>
                  ))}

                  <motion.div
                    className="pt-12"
                    initial={{ opacity: 0, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, filter: "blur(0px)" }}
                    transition={{ delay: 1 }}
                    style={{
                      transform: "translateZ(10px)",
                    }}
                  >
                    <div className="flex items-center space-x-6 group cursor-pointer">
                      <motion.div
                        className={`w-16 h-16 rounded-2xl flex items-center justify-center backdrop-blur-sm border relative overflow-hidden ${
                          theme === "dark"
                            ? "bg-gradient-to-br from-green-400/20 to-green-500/20 border-green-400/20"
                            : "bg-gradient-to-br from-emerald-400/30 to-green-500/30 border-emerald-400/30"
                        }`}
                        whileHover={{
                          scale: 1.1,
                          rotate: 360,
                        }}
                        transition={{ duration: 0.8 }}
                      >
                        <MessageCircle className="h-8 w-8 text-green-400" />

                        <motion.div
                          className="absolute inset-0 bg-green-400/10 rounded-2xl"
                          animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.2, 0.6, 0.2],
                          }}
                          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                        />
                      </motion.div>

                      <div>
                        <div
                          className={`font-mono text-xs tracking-[0.3em] uppercase mb-1 ${
                            theme === "dark" ? "text-white/40" : "text-gray-500"
                          }`}
                        >
                          INSTANT NEURAL LINK
                        </div>
                        <div className="text-green-400 font-mono text-sm tracking-wide cursor-pointer hover:text-green-300 transition-colors">
                          Connect via Quantum WhatsApp
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Contact Form */}
                <div className="space-y-8">
                  {[
                    { id: "name", placeholder: "NEURAL ID", type: "text" },
                    { id: "email", placeholder: "QUANTUM EMAIL", type: "email" },
                    { id: "phone", placeholder: "MATRIX PHONE", type: "tel" },
                  ].map((field, index) => (
                    <motion.div
                      key={field.id}
                      initial={{ opacity: 0, y: 30, filter: "blur(15px)" }}
                      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      whileFocus={{ scale: 1.02 }}
                      style={{
                        transformStyle: "preserve-3d",
                      }}
                    >
                      <Input
                        placeholder={field.placeholder}
                        type={field.type}
                        className={`backdrop-blur-sm font-mono tracking-wider h-16 text-lg ${
                          theme === "dark"
                            ? "bg-white/5 border-white/20 text-white placeholder:text-white/40 focus:border-cyan-400/50"
                            : "bg-white/30 border-emerald-200/50 text-gray-800 placeholder:text-gray-500 focus:border-emerald-500/50"
                        }`}
                        style={{
                          transform: "translateZ(10px)",
                        }}
                      />
                    </motion.div>
                  ))}

                  <motion.div
                    initial={{ opacity: 0, y: 30, filter: "blur(15px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ delay: 0.9 }}
                    whileFocus={{ scale: 1.02 }}
                    style={{
                      transformStyle: "preserve-3d",
                    }}
                  >
                    <Textarea
                      placeholder="NEURAL MESSAGE TRANSMISSION"
                      rows={6}
                      className={`backdrop-blur-sm font-mono tracking-wider resize-none text-lg ${
                        theme === "dark"
                          ? "bg-white/5 border-white/20 text-white placeholder:text-white/40 focus:border-cyan-400/50"
                          : "bg-white/30 border-emerald-200/50 text-gray-800 placeholder:text-gray-500 focus:border-emerald-500/50"
                      }`}
                      style={{
                        transform: "translateZ(10px)",
                      }}
                    />
                  </motion.div>

                  <motion.div
                    whileHover={{
                      scale: 1.05,
                      filter:
                        theme === "dark"
                          ? "drop-shadow(0 0 30px rgba(6, 182, 212, 0.6))"
                          : "drop-shadow(0 0 30px rgba(16, 185, 129, 0.6))",
                    }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 30, filter: "blur(15px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ delay: 1 }}
                    style={{
                      transform: "translateZ(20px)",
                    }}
                  >
                    <Button
                      className={`w-full py-6 relative overflow-hidden group font-mono tracking-wider text-lg border-0 ${
                        theme === "dark"
                          ? "bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 hover:from-cyan-700 hover:via-blue-700 hover:to-purple-700"
                          : "bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 hover:from-emerald-600 hover:via-green-600 hover:to-teal-600"
                      } text-white`}
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-white/20 via-cyan-400/20 to-purple-400/20"
                        initial={{ x: "-100%", skewX: -15 }}
                        whileHover={{ x: "100%", skewX: 15 }}
                        transition={{ duration: 0.8 }}
                      />
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                        animate={{
                          x: ["-100%", "100%"],
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Number.POSITIVE_INFINITY,
                          repeatDelay: 2,
                        }}
                      />
                      <span className="relative z-10">TRANSMIT MESSAGE</span>
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Footer */}
        <footer
          className={`py-20 px-8 border-t relative ${theme === "dark" ? "border-white/10" : "border-emerald-200/50"}`}
        >
          <div className="max-w-7xl mx-auto">
            <motion.div
              className={`backdrop-blur-2xl rounded-3xl p-12 relative overflow-hidden ${
                theme === "dark" ? "bg-black/30 border border-white/10" : "bg-white/60 border border-emerald-200/30"
              }`}
              initial={{ opacity: 0, filter: "blur(20px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              {/* Animated Grid Background */}
              <motion.div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage:
                    theme === "dark"
                      ? `
                      linear-gradient(rgba(6, 182, 212, 0.3) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(6, 182, 212, 0.3) 1px, transparent 1px)
                    `
                      : `
                      linear-gradient(rgba(16, 185, 129, 0.3) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(16, 185, 129, 0.3) 1px, transparent 1px)
                    `,
                  backgroundSize: "50px 50px",
                }}
                animate={{
                  backgroundPosition: ["0px 0px", "50px 50px"],
                }}
                transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              />

              <div className="grid md:grid-cols-4 gap-12 mb-12 relative z-10">
                <div>
                  <motion.div
                    className="font-mono text-3xl font-bold tracking-wider mb-6 cursor-pointer"
                    whileHover={{
                      scale: 1.05,
                      filter:
                        theme === "dark"
                          ? "drop-shadow(0 0 20px rgba(6, 182, 212, 0.6))"
                          : "drop-shadow(0 0 20px rgba(16, 185, 129, 0.6))",
                    }}
                  >
                    <span
                      className={`${
                        theme === "dark"
                          ? "bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
                          : "bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 bg-clip-text text-transparent"
                      }`}
                    >
                      INLIGHN
                    </span>
                    <span className={`ml-2 ${theme === "dark" ? "text-white" : "text-gray-800"}`}>TECH</span>
                  </motion.div>
                  <p
                    className={`font-mono text-sm leading-relaxed tracking-wide ${
                      theme === "dark" ? "text-white/50" : "text-gray-600"
                    }`}
                  >
                    Pioneering the future of neural education through immersive technology and quantum learning
                    protocols.
                  </p>
                </div>

                <div>
                  <h4
                    className={`font-mono font-semibold mb-6 tracking-wider text-lg ${
                      theme === "dark" ? "text-white" : "text-gray-800"
                    }`}
                  >
                    NEURAL LINKS
                  </h4>
                  <div className="space-y-3">
                    {["Privacy Matrix", "FAQ Database", "Terms Protocol"].map((link, index) => (
                      <motion.a
                        key={link}
                        href="#"
                        className={`block font-mono text-sm tracking-wide transition-colors cursor-pointer ${
                          theme === "dark"
                            ? "text-white/60 hover:text-cyan-400"
                            : "text-gray-600 hover:text-emerald-600"
                        }`}
                        whileHover={{
                          x: 5,
                          filter:
                            theme === "dark"
                              ? "drop-shadow(0 0 10px rgba(6, 182, 212, 0.4))"
                              : "drop-shadow(0 0 10px rgba(16, 185, 129, 0.4))",
                        }}
                      >
                        {link}
                      </motion.a>
                    ))}
                  </div>
                </div>

                <div>
                  <h4
                    className={`font-mono font-semibold mb-6 tracking-wider text-lg ${
                      theme === "dark" ? "text-white" : "text-gray-800"
                    }`}
                  >
                    NEURAL PROGRAMS
                  </h4>
                  <div className="space-y-3">
                    {["AI Neural Networks", "Quantum Computing", "Cyber Security", "Data Engineering"].map(
                      (program, index) => (
                        <motion.a
                          key={program}
                          href="#"
                          className={`block font-mono text-sm tracking-wide transition-colors cursor-pointer ${
                            theme === "dark"
                              ? "text-white/60 hover:text-cyan-400"
                              : "text-gray-600 hover:text-emerald-600"
                          }`}
                          whileHover={{
                            x: 5,
                            filter:
                              theme === "dark"
                                ? "drop-shadow(0 0 10px rgba(6, 182, 212, 0.4))"
                                : "drop-shadow(0 0 10px rgba(16, 185, 129, 0.4))",
                          }}
                        >
                          {program}
                        </motion.a>
                      ),
                    )}
                  </div>
                </div>

                <div>
                  <h4
                    className={`font-mono font-semibold mb-6 tracking-wider text-lg ${
                      theme === "dark" ? "text-white" : "text-gray-800"
                    }`}
                  >
                    MATRIX CONNECTION
                  </h4>
                  <div className="space-y-3">
                    <div
                      className={`font-mono text-sm tracking-wide ${
                        theme === "dark" ? "text-white/60" : "text-gray-600"
                      }`}
                    >
                      Bengaluru Cyber District
                    </div>
                    <div
                      className={`font-mono text-sm tracking-wide ${
                        theme === "dark" ? "text-white/60" : "text-gray-600"
                      }`}
                    >
                      connect@inlighntech.matrix
                    </div>
                    <div
                      className={`font-mono text-sm tracking-wide ${
                        theme === "dark" ? "text-white/60" : "text-gray-600"
                      }`}
                    >
                      +91 80 MATRIX-TECH
                    </div>
                  </div>
                </div>
              </div>

              <div
                className={`border-t pt-12 text-center relative z-10 ${
                  theme === "dark" ? "border-white/10" : "border-emerald-200/50"
                }`}
              >
                <motion.p
                  className={`font-mono text-sm tracking-wide ${theme === "dark" ? "text-white/40" : "text-gray-500"}`}
                  animate={{
                    opacity: [0.4, 0.8, 0.4],
                  }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                >
                  © 2024 INLIGHN TECH NEURAL MATRIX. ALL QUANTUM RIGHTS RESERVED.
                  <br />
                  TRANSFORMING REALITY THROUGH IMMERSIVE TECHNOLOGY EDUCATION.
                </motion.p>
              </div>
            </motion.div>
          </div>
        </footer>

        {/* Floating Chat Widget */}
        <motion.div
          className="fixed bottom-8 right-8 z-50"
          initial={{ scale: 0, opacity: 0, filter: "blur(20px)" }}
          animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
          transition={{ delay: 4, duration: 0.8 }}
        >
          <motion.button
            onClick={() => setChatbotOpen(!chatbotOpen)}
            className={`w-20 h-20 rounded-full flex items-center justify-center text-white shadow-lg backdrop-blur-sm border-2 cursor-pointer relative overflow-hidden ${
              theme === "dark"
                ? "bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 border-cyan-400/30"
                : "bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 border-emerald-400/40"
            }`}
            whileHover={{
              scale: 1.1,
              filter:
                theme === "dark"
                  ? "drop-shadow(0 0 30px rgba(6, 182, 212, 0.8))"
                  : "drop-shadow(0 0 30px rgba(16, 185, 129, 0.8))",
              rotate: 360,
            }}
            whileTap={{ scale: 0.9 }}
            animate={{
              boxShadow:
                theme === "dark"
                  ? [
                      "0 0 20px rgba(6, 182, 212, 0.3)",
                      "0 0 40px rgba(6, 182, 212, 0.6)",
                      "0 0 20px rgba(6, 182, 212, 0.3)",
                    ]
                  : [
                      "0 0 20px rgba(16, 185, 129, 0.3)",
                      "0 0 40px rgba(16, 185, 129, 0.6)",
                      "0 0 20px rgba(16, 185, 129, 0.3)",
                    ],
            }}
            transition={{
              boxShadow: { duration: 2, repeat: Number.POSITIVE_INFINITY },
              rotate: { duration: 1 },
            }}
          >
            {/* Rotating Border */}
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{
                background:
                  theme === "dark"
                    ? "conic-gradient(from 0deg, transparent, rgba(6, 182, 212, 0.8), transparent)"
                    : "conic-gradient(from 0deg, transparent, rgba(16, 185, 129, 0.8), transparent)",
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            />

            <motion.div animate={{ rotate: chatbotOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
              {chatbotOpen ? (
                <X className="h-8 w-8 relative z-10" />
              ) : (
                <MessageCircle className="h-8 w-8 relative z-10" />
              )}
            </motion.div>

            {/* Pulse Effect */}
            <motion.div
              className={`absolute inset-0 rounded-full ${theme === "dark" ? "bg-cyan-400/20" : "bg-emerald-400/20"}`}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            />
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Enhanced Chatbot */}
      <EnhancedChatbot isOpen={chatbotOpen} onToggle={() => setChatbotOpen(!chatbotOpen)} theme={theme} />
    </div>
  )
}
