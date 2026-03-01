"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import gsap from "gsap";

// Collect all project images
const allImages = [
  // Project 1
  ...Array.from({ length: 10 }, (_, i) => ({
    src: `/images/projects/project1/${i + 1}.jpg`,
    project: "Project 1",
  })),
  // Project 2
  ...Array.from({ length: 10 }, (_, i) => ({
    src: `/images/projects/project2/${i + 1}.jpg`,
    project: "Project 2",
  })),
  // Project 3
  ...Array.from({ length: 7 }, (_, i) => ({
    src: `/images/projects/project3/${i + 1}.jpg`,
    project: "Project 3",
  })),
  // Project 4
  ...Array.from({ length: 4 }, (_, i) => ({
    src: `/images/projects/project4/${i + 1}.jpg`,
    project: "Project 4",
  })),
  // Project 5
  ...Array.from({ length: 9 }, (_, i) => ({
    src: `/images/projects/project5/${i + 1}.jpg`,
    project: "Project 5",
  })),
  // Vinyl projects
  { src: "/images/projects/vinyl-1.jpg", project: "Vinyl Installation" },
  { src: "/images/projects/vinyl-2.jpg", project: "Vinyl Installation" },
  { src: "/images/projects/vinyl-3.jpg", project: "Vinyl Installation" },
  { src: "/images/projects/vinyl-4.jpg", project: "Vinyl Installation" },
  // Floor prep
  { src: "/images/projects/self-levelling-1.png", project: "Floor Leveling" },
  { src: "/images/projects/self-levelling-2.png", project: "Floor Leveling" },
  { src: "/images/projects/self-levelling-3.png", project: "Floor Leveling" },
  { src: "/images/projects/prep-floor-1.png", project: "Floor Prep" },
  { src: "/images/projects/prep-floor-2.png", project: "Floor Prep" },
  { src: "/images/projects/grinder-flooring-1.png", project: "Floor Grinding" },
];

export default function Gallery() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Number of visible cards on each side
  const visibleCards = 3;

  const getVisibleImages = () => {
    const images = [];
    for (let i = -visibleCards; i <= visibleCards; i++) {
      const index = (currentIndex + i + allImages.length) % allImages.length;
      images.push({ ...allImages[index], offset: i, actualIndex: index });
    }
    return images;
  };

  const animateCards = () => {
    if (!cardsRef.current.length) return;

    cardsRef.current.forEach((card, i) => {
      if (!card) return;

      const offset = i - visibleCards;
      const absOffset = Math.abs(offset);

      // Calculate position, scale, and opacity based on offset
      const xPos = offset * 280;
      const zPos = -absOffset * 150;
      const rotateY = offset * -15;
      const scale = 1 - absOffset * 0.15;
      const opacity = 1 - absOffset * 0.25;

      gsap.to(card, {
        x: xPos,
        z: zPos,
        rotateY: rotateY,
        scale: Math.max(scale, 0.5),
        opacity: Math.max(opacity, 0.2),
        duration: 0.6,
        ease: "power3.out",
      });
    });
  };

  useEffect(() => {
    animateCards();
  }, [currentIndex]);

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % allImages.length);
    setTimeout(() => setIsAnimating(false), 600);
  };

  // Auto-play
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        handleNext();
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [isAnimating]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isAnimating]);

  const visibleImages = getVisibleImages();

  return (
    <section id="gallery" className="section section-dark overflow-hidden">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="label block mb-4"
          >
            Our Portfolio
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl text-white mb-6"
          >
            Featured <span className="text-[var(--color-accent)]">Projects</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/60 max-w-2xl mx-auto"
          >
            Browse through our {allImages.length}+ project photos. Use arrows or swipe to explore.
          </motion.p>
        </div>

        {/* 3D Slider */}
        <div className="relative h-[500px] md:h-[600px] lg:h-[700px]" style={{ perspective: "1500px" }}>
          {/* Slider Container */}
          <div
            ref={sliderRef}
            className="absolute inset-0 flex items-center justify-center"
            style={{ transformStyle: "preserve-3d" }}
          >
            {visibleImages.map((image, index) => (
              <div
                key={`${image.actualIndex}-${index}`}
                ref={(el) => {
                  if (el) cardsRef.current[index] = el;
                }}
                className="absolute w-[300px] md:w-[400px] lg:w-[500px] aspect-[4/3] rounded-xl overflow-hidden shadow-2xl cursor-pointer"
                style={{
                  transformStyle: "preserve-3d",
                  backfaceVisibility: "hidden",
                }}
                onClick={() => {
                  if (image.offset < 0) handlePrev();
                  if (image.offset > 0) handleNext();
                }}
              >
                {/* Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url('${image.src}')` }}
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                {/* Project Label */}
                {image.offset === 0 && (
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-white font-semibold text-lg">{image.project}</p>
                    <p className="text-white/60 text-sm">
                      {image.actualIndex + 1} of {allImages.length}
                    </p>
                  </div>
                )}

                {/* Reflection effect for center card */}
                {image.offset === 0 && (
                  <div className="absolute inset-0 border-2 border-[var(--color-accent)]/30 rounded-xl" />
                )}
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-[var(--color-accent)] hover:text-[var(--color-primary)] transition-all duration-300 group"
          >
            <ChevronLeft size={28} className="group-hover:scale-110 transition-transform" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-[var(--color-accent)] hover:text-[var(--color-primary)] transition-all duration-300 group"
          >
            <ChevronRight size={28} className="group-hover:scale-110 transition-transform" />
          </button>

          {/* Progress Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
            {Array.from({ length: Math.min(10, allImages.length) }).map((_, i) => {
              const dotIndex = Math.floor((currentIndex / allImages.length) * 10);
              return (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === dotIndex
                      ? "bg-[var(--color-accent)] w-6"
                      : "bg-white/30"
                  }`}
                />
              );
            })}
          </div>
        </div>

        {/* Instagram CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-white/60 mb-4">
            See more of our work on Instagram
          </p>
          <a
            href="https://www.instagram.com/hk_plus_flooring.ltd/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[var(--color-accent)] font-semibold hover:underline"
          >
            @hk_plus_flooring.ltd
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
