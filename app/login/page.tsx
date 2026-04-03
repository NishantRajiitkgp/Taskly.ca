'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Eye, EyeOff, Sparkles, Github, Mail } from 'lucide-react';

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="min-h-screen w-full bg-cream flex overflow-hidden selection:bg-gold selection:text-rich-black">
      {/* Left Panel - Image & Branding */}
      <div className="relative hidden lg:flex w-1/2 h-screen flex-col justify-between p-12 z-10 overflow-hidden">
        {/* Background Image with Ken Burns effect */}
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1200&auto=format&fit=crop"
            alt="Luxury Interior"
            fill
            className="object-cover brightness-[0.6] contrast-125"
            priority
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-rich-black/30 mix-blend-multiply" />
        </motion.div>

        {/* Branding */}
        <div className="relative z-10 flex justify-between items-start">
          <Link href="/" className="group flex items-center gap-2 text-cream hover:text-gold transition-colors duration-300">
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-mono text-[11px] font-bold uppercase tracking-[0.2em]">Return Home</span>
          </Link>
          <div className="flex items-center gap-2 text-cream">
            <Sparkles className="w-5 h-5 text-gold" />
            <span className="font-sans text-xl font-bold tracking-tighter uppercase">Taskly</span>
          </div>
        </div>

        {/* Editorial Quote */}
        <div className="relative z-10 max-w-md">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-gold mb-6">
              001 — Exclusive Access
            </p>
            <h2 className="font-sans text-5xl md:text-6xl leading-[0.9] font-bold text-cream uppercase tracking-tighter mb-6">
              Elevate <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cream to-cream/50">Your Standard.</span>
            </h2>
            <p className="font-mono text-[12px] uppercase tracking-[0.1em] text-cream/70 leading-relaxed">
              Join the premier network of vetted home service professionals and discerning clientele.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Right Panel - Form */}
      <div className="w-full lg:w-1/2 h-screen overflow-y-auto flex flex-col relative bg-cream">
        {/* Mobile Header */}
        <div className="lg:hidden p-6 flex justify-between items-center absolute top-0 left-0 w-full z-20">
          <Link href="/" className="p-2 bg-rich-black/5 rounded-full hover:bg-rich-black/10 transition-colors">
            <ArrowLeft className="w-5 h-5 text-rich-black" />
          </Link>
          <div className="flex items-center gap-2 text-rich-black">
            <Sparkles className="w-4 h-4 text-gold" />
            <span className="font-sans text-lg font-bold tracking-tighter uppercase">Taskly</span>
          </div>
        </div>

        <div className="flex-1 flex flex-col justify-center px-8 sm:px-16 md:px-24 py-20 lg:py-0 max-w-2xl mx-auto w-full">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Header */}
            <div className="mb-12">
              <h1 className="font-sans text-4xl md:text-5xl font-bold text-rich-black uppercase tracking-tighter mb-4">
                {isLogin ? 'Welcome Back' : 'Join the Elite'}
              </h1>
              <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-warm-gray">
                {isLogin ? 'Enter your details to access your dashboard.' : 'Create an account to book premium services.'}
              </p>
            </div>

            {/* Toggle */}
            <div className="flex p-1 bg-rich-black/5 rounded-none mb-12 relative w-full max-w-sm">
              <div 
                className="absolute top-1 bottom-1 w-[calc(50%-4px)] bg-white shadow-sm transition-transform duration-500 ease-[0.16,1,0.3,1]"
                style={{ transform: isLogin ? 'translateX(0)' : 'translateX(100%)' }}
              />
              <button
                onClick={() => setIsLogin(true)}
                className={`flex-1 py-3 text-[11px] font-mono font-bold uppercase tracking-widest relative z-10 transition-colors duration-300 ${isLogin ? 'text-rich-black' : 'text-warm-gray hover:text-rich-black'}`}
              >
                Sign In
              </button>
              <button
                onClick={() => setIsLogin(false)}
                className={`flex-1 py-3 text-[11px] font-mono font-bold uppercase tracking-widest relative z-10 transition-colors duration-300 ${!isLogin ? 'text-rich-black' : 'text-warm-gray hover:text-rich-black'}`}
              >
                Create Account
              </button>
            </div>

            {/* Form */}
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <AnimatePresence mode="wait">
                {!isLogin && (
                  <motion.div
                    key="name"
                    initial={{ opacity: 0, height: 0, y: -10 }}
                    animate={{ opacity: 1, height: 'auto', y: 0 }}
                    exit={{ opacity: 0, height: 0, y: -10 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="relative group"
                  >
                    <input
                      type="text"
                      id="name"
                      className="w-full bg-transparent border-b border-rich-black/20 py-4 text-rich-black font-sans text-lg focus:outline-none focus:border-gold transition-colors peer placeholder-transparent"
                      placeholder="Full Name"
                    />
                    <label 
                      htmlFor="name"
                      className="absolute left-0 top-4 font-mono text-[10px] font-bold uppercase tracking-widest text-warm-gray transition-all peer-focus:-top-3 peer-focus:text-[9px] peer-focus:text-gold peer-valid:-top-3 peer-valid:text-[9px] peer-valid:text-warm-gray cursor-text"
                    >
                      Full Name
                    </label>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="relative group">
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full bg-transparent border-b border-rich-black/20 py-4 text-rich-black font-sans text-lg focus:outline-none focus:border-gold transition-colors peer placeholder-transparent"
                  placeholder="Email Address"
                />
                <label 
                  htmlFor="email"
                  className="absolute left-0 top-4 font-mono text-[10px] font-bold uppercase tracking-widest text-warm-gray transition-all peer-focus:-top-3 peer-focus:text-[9px] peer-focus:text-gold peer-valid:-top-3 peer-valid:text-[9px] peer-valid:text-warm-gray cursor-text"
                >
                  Email Address
                </label>
              </div>

              <div className="relative group">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  required
                  className="w-full bg-transparent border-b border-rich-black/20 py-4 text-rich-black font-sans text-lg focus:outline-none focus:border-gold transition-colors peer placeholder-transparent pr-10"
                  placeholder="Password"
                />
                <label 
                  htmlFor="password"
                  className="absolute left-0 top-4 font-mono text-[10px] font-bold uppercase tracking-widest text-warm-gray transition-all peer-focus:-top-3 peer-focus:text-[9px] peer-focus:text-gold peer-valid:-top-3 peer-valid:text-[9px] peer-valid:text-warm-gray cursor-text"
                >
                  Password
                </label>
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-0 top-4 text-warm-gray hover:text-rich-black transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>

              {isLogin && (
                <div className="flex justify-end">
                  <button type="button" className="font-mono text-[10px] font-bold uppercase tracking-widest text-warm-gray hover:text-gold transition-colors">
                    Forgot Password?
                  </button>
                </div>
              )}

              <button className="w-full relative overflow-hidden bg-rich-black text-cream p-5 group flex items-center justify-center gap-4 mt-8">
                <div className="absolute inset-0 bg-gold translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
                <span className="relative z-10 font-mono text-[12px] font-bold uppercase tracking-[0.2em] group-hover:text-rich-black transition-colors duration-500">
                  {isLogin ? 'Sign In' : 'Create Account'}
                </span>
                <span className="relative z-10 text-[18px] group-hover:text-rich-black group-hover:translate-x-2 transition-all duration-500">
                  &rarr;
                </span>
              </button>
            </form>

            {/* Social Auth */}
            <div className="mt-12">
              <div className="relative flex items-center justify-center mb-8">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-rich-black/10"></div>
                </div>
                <span className="relative bg-cream px-4 font-mono text-[9px] font-bold uppercase tracking-widest text-warm-gray">
                  Or continue with
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <button className="flex items-center justify-center gap-3 p-4 border border-rich-black/10 hover:border-gold hover:bg-gold/5 transition-all duration-300 group">
                  <Mail className="w-4 h-4 text-rich-black group-hover:text-gold transition-colors" />
                  <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-rich-black">Google</span>
                </button>
                <button className="flex items-center justify-center gap-3 p-4 border border-rich-black/10 hover:border-gold hover:bg-gold/5 transition-all duration-300 group">
                  <Github className="w-4 h-4 text-rich-black group-hover:text-gold transition-colors" />
                  <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-rich-black">Apple</span>
                </button>
              </div>
            </div>

            {/* Footer */}
            <p className="mt-12 text-center font-mono text-[9px] uppercase tracking-widest text-warm-gray">
              By continuing, you agree to our <br className="sm:hidden" />
              <a href="#" className="text-rich-black hover:text-gold transition-colors underline underline-offset-4">Terms of Service</a> and <a href="#" className="text-rich-black hover:text-gold transition-colors underline underline-offset-4">Privacy Policy</a>.
            </p>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
