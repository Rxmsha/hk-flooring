"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Lilit",
    location: "Edmonton",
    rating: 5,
    text: "Love Gabby's work - he's very reliable and completed his projects on time. We've gone back to him for several floor replacement projects now and every time it has been great! Highly recommend.",
    source: "Google Review",
  },
  {
    id: 2,
    name: "Al",
    location: "Edmonton",
    rating: 5,
    text: "Gabi does incredible work, and every project he's quoted on for me has been completed on time and on budget.",
    source: "Google Review",
  },
  {
    id: 3,
    name: "Adam Rawsoll",
    location: "Edmonton",
    rating: 5,
    text: "Gabi showed up on time. Did a great job! Super clean work.. thank you!",
    source: "Google Review",
  },
  {
    id: 4,
    name: "Ronnie MacSween",
    location: "Edmonton",
    rating: 5,
    text: "This man does an excellent job!!!!",
    source: "Google Review",
  },
  {
    id: 5,
    name: "Ali Merhi",
    location: "Edmonton",
    rating: 5,
    text: "Very good flooring clean work nice job. I highly recommend him.",
    source: "Google Review",
  },
  {
    id: 6,
    name: "Nate",
    location: "Edmonton",
    rating: 5,
    text: "Clean work, highly recommend.",
    source: "Google Review",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="section section-cream overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Header */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="label block mb-4"
            >
              Testimonials
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl mb-6"
            >
              What Our
              <br />
              <span className="text-[var(--color-accent)]">Clients Say</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-[var(--color-warm-gray)] mb-8"
            >
              Don't just take our word for it. Here's what homeowners across
              Edmonton have to say about working with HK Flooring.
            </motion.p>

            {/* Google Rating */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm inline-flex"
            >
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="text-[var(--color-accent)] fill-[var(--color-accent)]"
                  />
                ))}
              </div>
              <div>
                <div className="font-semibold">5.0 Rating</div>
                <div className="text-sm text-[var(--color-warm-gray)]">
                  on Google Reviews
                </div>
              </div>
            </motion.div>

            {/* Navigation */}
            <div className="flex gap-4 mt-8">
              <button
                onClick={handlePrev}
                className="w-12 h-12 rounded-full border-2 border-[var(--color-primary)] flex items-center justify-center hover:bg-[var(--color-primary)] hover:text-white transition-colors"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={handleNext}
                className="w-12 h-12 rounded-full border-2 border-[var(--color-primary)] flex items-center justify-center hover:bg-[var(--color-primary)] hover:text-white transition-colors"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Right Side - Testimonial Card */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="bg-white p-8 md:p-10 rounded-lg shadow-lg relative"
              >
                <Quote
                  size={48}
                  className="text-[var(--color-accent)]/20 absolute top-6 right-6"
                />

                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="text-[var(--color-accent)] fill-[var(--color-accent)]"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-lg md:text-xl leading-relaxed mb-8">
                  "{testimonials[currentIndex].text}"
                </p>

                {/* Author */}
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold">
                      {testimonials[currentIndex].name}
                    </div>
                    <div className="text-sm text-[var(--color-warm-gray)]">
                      {testimonials[currentIndex].location}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-[var(--color-accent)] font-medium">
                      {testimonials[currentIndex].source}
                    </div>
                  </div>
                </div>

                {/* Progress Dots */}
                <div className="flex gap-2 mt-8 justify-center">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentIndex
                          ? "w-8 bg-[var(--color-accent)]"
                          : "bg-[var(--color-primary)]/20"
                      }`}
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
