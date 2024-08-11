'use client'
import {
  createContext,
  useContext,
  useEffect,
  useId,
  useRef,
  useState,
} from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { motion, MotionConfig, useReducedMotion, AnimatePresence } from 'framer-motion'
import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { GridPattern } from '@/components/GridPattern'
import Image from 'next/image'
import badge from '@/images/badge.png'

const RootLayoutContext = createContext<{
  logoHovered: boolean
  setLogoHovered: React.Dispatch<React.SetStateAction<boolean>>
  activeHover: string | null
  setActiveHover: React.Dispatch<React.SetStateAction<string | null>>
} | null>(null)

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  const pathname = usePathname()
  const isActive = pathname === href
  const { setActiveHover } = useContext(RootLayoutContext)!

  return (
    <Link
      href={href}
      className={clsx(
        'text-xl font-medium transition relative',
        isActive ? 'text-white' : 'text-blue-100 hover:text-white'
      )}
      onMouseEnter={() => setActiveHover(href)}
      onMouseLeave={() => setActiveHover(null)}
    >
      {children}
    </Link>
  )
}

function MenuIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M2 6h20v2H2zM2 16h20v2H2z" fill="currentColor" />
    </svg>
  )
}

function AnimatedText({ text }: { text: string }) {
  const letters = Array.from(text);

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
  };

  return (
    <motion.h1
      className='text-2xl font-bold'
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          variants={child}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.h1>
  );
}

function Header({ visible }: { visible: boolean }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 1, y: 0 }}
      animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : -100 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className={`absolute w-full z-50 top-0 bg-slate-900 transition-all duration-300 ${
        visible ? '' : 'pointer-events-none'
      }`}
    >
      <Container>
        <div className="flex flex-wrap items-center justify-between bg-slate-900 p-6 text-xl">
          <div className='flex items-center text-white'>
            <Image
              src={badge} 
              width={130}
              height={130}
              alt="Viams Logo"
              className='mr-4'
              loading='eager'
            />
            <AnimatedText text="viams international" />
          </div>
          <nav className="hidden lg:flex space-x-6">
            <NavLink href="/work">Our Work</NavLink>
            <NavLink href="/about">About Us</NavLink>
            <NavLink href="/process">Our Process</NavLink>
            <NavLink href="/blog">Blog</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </nav>
          
          <button
            className="lg:hidden p-1 text-white"
            aria-label="Toggle navigation"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <MenuIcon className="h-6 w-6" />
          </button>
        </div>
      </Container>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-slate-900"
          >
            <Container>
              <nav className="flex flex-col space-y-4 py-4">
                <NavLink href="/work">Our Work</NavLink>
                <NavLink href="/about">About Us</NavLink>
                <NavLink href="/process">Our Process</NavLink>
                <NavLink href="/blog">Blog</NavLink>
                <NavLink href="/contact">Contact</NavLink>
              </nav>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

function FuturisticLoadingAnimation() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <motion.div
        className="relative w-32 h-32"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <motion.span
          className="absolute inset-0 rounded-full border-t-4 border-blue-500 opacity-75"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.75, 1, 0.75],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.span
          className="absolute inset-0 rounded-full border-r-4 border-green-500 opacity-75"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.75, 1, 0.75],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.2
          }}
        />
        <motion.span
          className="absolute inset-0 rounded-full border-b-4 border-purple-500 opacity-75"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.75, 1, 0.75],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.4
          }}
        />
      </motion.div>
    </div>
  )
}

function RootLayoutInner({ children }: { children: React.ReactNode }) {
  let shouldReduceMotion = useReducedMotion()
  const [isNavVisible, setIsNavVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const { activeHover } = useContext(RootLayoutContext)!
  const [isLoading, setIsLoading] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setIsLoading(true)
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 300);

    return () => clearTimeout(timer)
  }, [pathname])

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const scrollDelta = currentScrollY - lastScrollY
      const minScrollDistance = 50

      if (Math.abs(scrollDelta) > minScrollDistance) {
        setIsNavVisible(scrollDelta < 0)
        setLastScrollY(currentScrollY)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [lastScrollY])

  return (
    <MotionConfig transition={shouldReduceMotion ? { duration: 0 } : undefined}>
      <Header visible={isNavVisible} />

      <motion.div
        layout
        className="relative flex flex-auto overflow-hidden bg-white pt-24"
      >
        <motion.div
          layout
          className="relative isolate flex w-full flex-col pt-9"
        >
          <GridPattern
            className="absolute inset-x-0 -top-14 -z-10 h-[1000px] w-full fill-neutral-50 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
            yOffset={-96}
            interactive
          />

          <main className={`w-full flex-auto transition-all duration-300 ${activeHover ? 'blur-none' : ''}`}>
            {children}
          </main>

          <Footer />
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {activeHover && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed z-50 top-20 left-1/2 transform -translate-x-1/2"
          >
            {/* <PagePreview href={activeHover} /> */}
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <FuturisticLoadingAnimation />
          </motion.div>
        )}
      </AnimatePresence>
    </MotionConfig>
  )
}

export function RootLayout({ children }: { children: React.ReactNode }) {
  let pathname = usePathname()
  let [logoHovered, setLogoHovered] = useState(false)
  let [activeHover, setActiveHover] = useState<string | null>(null)

  return (
    <RootLayoutContext.Provider value={{ logoHovered, setLogoHovered, activeHover, setActiveHover }}>
      <RootLayoutInner key={pathname}>{children}</RootLayoutInner>
    </RootLayoutContext.Provider>
  )
}