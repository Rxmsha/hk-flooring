"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Star } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?q=80&w=2574')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)]/95 via-[var(--color-primary)]/80 to-[var(--color-primary)]/40" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-72 h-72 border border-[var(--color-accent)]/20 rounded-full hidden lg:block" />
      <div className="absolute bottom-20 right-40 w-48 h-48 border border-[var(--color-accent)]/10 rounded-full hidden lg:block" />

      {/* Content */}
      <div className="container relative z-10 pt-32 pb-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  className="text-[var(--color-accent)] fill-[var(--color-accent)]"
                />
              ))}
            </div>
            <span className="text-white/60 text-sm">
              Trusted by Edmonton Homeowners
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-[1.1]"
          >
            <span className="text-[var(--color-accent)]">18 Years</span> of
            <br />
            Flooring Excellence
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-white/70 mb-10 max-w-xl leading-relaxed"
          >
            From elegant hardwood to modern vinyl, we transform Edmonton homes
            with precision craftsmanship and a commitment to quality that's
            built to last.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <a href="#contact" className="btn-primary">
              Get Free Estimate
              <ArrowRight size={18} />
            </a>
            <a href="#gallery" className="btn-secondary">
              <Play size={18} />
              View Our Work
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-12 mt-16 pt-16 border-t border-white/10"
          >
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[var(--color-accent)]">
                18+
              </div>
              <div className="text-white/60 text-sm mt-1">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[var(--color-accent)]">
                100+
              </div>
              <div className="text-white/60 text-sm mt-1">
                Projects Completed
              </div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[var(--color-accent)]">
                15+
              </div>
              <div className="text-white/60 text-sm mt-1">
                Year Client Relationships
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
      >
        <span className="text-white/40 text-xs tracking-widest uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-5 h-8 border-2 border-white/20 rounded-full flex justify-center pt-1"
        >
          <div className="w-1 h-2 bg-[var(--color-accent)] rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
