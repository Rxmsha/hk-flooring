"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const beforeAfterProjects = [
  {
    id: 1,
    title: "Floor Preparation",
    description: "Professional subfloor prep for a flawless installation",
    images: [
      { src: "/images/projects/prep-floor-1.png", label: "Before" },
      { src: "/images/projects/prep-floor-2.png", label: "After" },
    ],
  },
  {
    id: 2,
    title: "Self-Levelling",
    description: "Precision self-levelling for a perfectly flat surface",
    images: [
      { src: "/images/projects/self-levelling-1.png", label: "Before" },
      { src: "/images/projects/self-levelling-2.png", label: "During" },
      { src: "/images/projects/self-levelling-3.png", label: "After" },
    ],
  },
];

export default function BeforeAfter() {
  const [activeProject, setActiveProject] = useState(0);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const currentProject = beforeAfterProjects[activeProject];
  const currentImage = currentProject.images[activeImageIndex];

  // Auto cycle through images
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImageIndex((prev) =>
        prev === currentProject.images.length - 1 ? 0 : prev + 1
      );
    }, 2500);
    return () => clearInterval(interval);
  }, [activeProject, currentProject.images.length]);

  // Reset image index when project changes
  useEffect(() => {
    setActiveImageIndex(0);
  }, [activeProject]);

  const nextProject = () => {
    setActiveProject((prev) =>
      prev === beforeAfterProjects.length - 1 ? 0 : prev + 1
    );
  };

  const prevProject = () => {
    setActiveProject((prev) =>
      prev === 0 ? beforeAfterProjects.length - 1 : prev - 1
    );
  };

  const getLabelColor = (label: string) => {
    switch (label) {
      case "Before": return "bg-white/90 text-black";
      case "During": return "bg-[var(--color-accent)] text-black";
      case "After": return "bg-green-500 text-white";
      default: return "bg-white/90 text-black";
    }
  };

  return (
    <section className="py-20 md:py-28 bg-black overflow-hidden">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[var(--color-accent)] text-sm font-semibold tracking-wider uppercase block mb-4"
          >
            Transformations
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl text-white mb-6"
          >
            Before & <span className="text-[var(--color-accent)]">After</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/60 max-w-2xl mx-auto text-lg"
          >
            See the transformation our professional floor prep makes
          </motion.p>
        </div>

        {/* Project Tabs */}
        <div className="flex justify-center gap-4 mb-8">
          {beforeAfterProjects.map((project, index) => (
            <button
              key={project.id}
              onClick={() => setActiveProject(index)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeProject === index
                  ? "bg-[var(--color-accent)] text-black"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              {project.title}
            </button>
          ))}
        </div>

        {/* Before/After Showcase */}
        <motion.div
          key={activeProject}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-5xl mx-auto"
        >
          {/* Image Container */}
          <div className="relative aspect-[16/10] md:aspect-[16/9] rounded-2xl overflow-hidden">
            
            {/* Image */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeProject}-${activeImageIndex}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('${currentImage.src}')`,
                  }}
                />
              </motion.div>
            </AnimatePresence>

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />

            {/* Label Badge */}
            <div className="absolute top-6 left-6 z-10">
              <motion.div
                key={`${activeProject}-${activeImageIndex}-badge`}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className={`px-5 py-2.5 rounded-full text-sm font-bold ${getLabelColor(currentImage.label)}`}
              >
                {currentImage.label.toUpperCase()}
              </motion.div>
            </div>

            {/* Project Info */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-10">
              <h3 className="text-white text-2xl md:text-3xl font-bold mb-2">
                {currentProject.title}
              </h3>
              <p className="text-white/70 text-lg">
                {currentProject.description}
              </p>
            </div>

            {/* Step indicators */}
            <div className="absolute bottom-6 right-6 md:right-8 flex gap-2 z-10">
              {currentProject.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeImageIndex === index
                      ? `scale-125 ${
                          img.label === "Before" ? "bg-white" :
                          img.label === "During" ? "bg-[var(--color-accent)]" :
                          "bg-green-500"
                        }`
                      : "bg-white/40 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Step Toggle Buttons */}
          <div className="flex justify-center gap-3 mt-8">
            {currentProject.images.map((img, index) => (
              <button
                key={index}
                onClick={() => setActiveImageIndex(index)}
                className={`px-5 py-2.5 rounded-full font-semibold transition-all duration-300 ${
                  activeImageIndex === index
                    ? getLabelColor(img.label)
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                {img.label}
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
