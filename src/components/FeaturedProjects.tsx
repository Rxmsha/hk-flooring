"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X, Play } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Residential Renovation",
    location: "Edmonton",
    images: Array.from({ length: 10 }, (_, i) => `/images/projects/project1/${i + 1}.jpg`),
  },
  {
    id: 2,
    title: "Modern Home Install",
    location: "Sherwood Park",
    images: Array.from({ length: 10 }, (_, i) => `/images/projects/project2/${i + 1}.jpg`),
  },
  {
    id: 3,
    title: "Complete Floor Makeover",
    location: "St. Albert",
    images: Array.from({ length: 7 }, (_, i) => `/images/projects/project3/${i + 1}.jpg`),
  },
  {
    id: 4,
    title: "Kitchen & Living Area",
    location: "Edmonton",
    images: Array.from({ length: 4 }, (_, i) => `/images/projects/project4/${i + 1}.jpg`),
  },
  {
    id: 5,
    title: "Full Home Flooring",
    location: "Spruce Grove",
    images: Array.from({ length: 9 }, (_, i) => `/images/projects/project5/${i + 1}.jpg`),
  },
];

// Individual work photos (from Gallery)
const workPhotos = [
  {
    id: 101,
    title: "Self-Levelling - Before",
    category: "Floor Prep",
    image: "/images/projects/self-levelling-1.png",
    type: "image",
  },
  {
    id: 102,
    title: "Self-Levelling - During",
    category: "Floor Prep",
    image: "/images/projects/self-levelling-2.png",
    type: "image",
  },
  {
    id: 103,
    title: "Self-Levelling - After",
    category: "Floor Prep",
    image: "/images/projects/self-levelling-3.png",
    type: "image",
  },
  {
    id: 104,
    title: "Floor Prep - Before",
    category: "Floor Prep",
    image: "/images/projects/prep-floor-1.png",
    type: "image",
  },
  {
    id: 105,
    title: "Floor Prep - After",
    category: "Floor Prep",
    image: "/images/projects/prep-floor-2.png",
    type: "image",
  },
  {
    id: 106,
    title: "Floor Grinding",
    category: "Floor Prep",
    image: "/images/projects/grinder-flooring-1.png",
    type: "image",
  },
  {
    id: 107,
    title: "Floor Grinding Process",
    category: "Floor Prep",
    image: "/images/projects/grinder-flooring-2.mov",
    type: "video",
  },
  {
    id: 108,
    title: "Vinyl Plank Installation",
    category: "Vinyl",
    image: "/images/projects/vinyl-1.jpg",
    type: "image",
  },
  {
    id: 109,
    title: "Vinyl Plank Flooring",
    category: "Vinyl",
    image: "/images/projects/vinyl-2.jpg",
    type: "image",
  },
  {
    id: 110,
    title: "Vinyl Click Flooring",
    category: "Vinyl",
    image: "/images/projects/vinyl-3.jpg",
    type: "image",
  },
  {
    id: 111,
    title: "Vinyl Plank Complete",
    category: "Vinyl",
    image: "/images/projects/vinyl-4.jpg",
    type: "image",
  },
];

export default function FeaturedProjects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

  const openProject = (projectId: number) => {
    setSelectedProject(projectId);
    setCurrentImageIndex(0);
  };

  const closeProject = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const currentProject = projects.find((p) => p.id === selectedProject);

  const nextImage = () => {
    if (!currentProject) return;
    setCurrentImageIndex((prev) =>
      prev === currentProject.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    if (!currentProject) return;
    setCurrentImageIndex((prev) =>
      prev === 0 ? currentProject.images.length - 1 : prev - 1
    );
  };

  return (
    <section id="gallery" className="section bg-white overflow-hidden">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="label block mb-4"
          >
            Our Work
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl mb-6"
          >
            Featured <span className="text-[var(--color-accent)]">Projects</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[var(--color-warm-gray)] max-w-2xl mx-auto"
          >
            Take a look at some of our recent installations. Click on any project
            to see the full gallery.
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => openProject(project.id)}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-4">
                {/* Main Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url('${project.images[0]}')` }}
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-[var(--color-primary)]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-semibold text-lg">
                    View {project.images.length} Photos
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-semibold group-hover:text-[var(--color-accent)] transition-colors">
                {project.title}
              </h3>
              <p className="text-[var(--color-warm-gray)] text-sm">
                {project.location}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Work Photos Section */}
        <div className="mt-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl text-center mb-8"
          >
            More of Our <span className="text-[var(--color-accent)]">Work</span>
          </motion.h3>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {workPhotos.map((photo, index) => (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                onClick={() => setSelectedPhoto(photo.id)}
                className="group cursor-pointer relative aspect-square rounded-lg overflow-hidden"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url('${photo.image}')` }}
                />
                <div className="absolute inset-0 bg-[var(--color-primary)]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-[var(--color-primary)] to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white text-sm font-medium">{photo.title}</p>
                  <p className="text-white/60 text-xs">{photo.category}</p>
                </div>
                {photo.type === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 bg-[var(--color-accent)] rounded-full flex items-center justify-center">
                      <Play size={20} className="text-[var(--color-primary)] ml-1" />
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Instagram CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-[var(--color-warm-gray)] mb-4">
              See more of our work on Instagram
            </p>
            <a
              href="https://instagram.com/hk_flooring.ltd"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[var(--color-accent)] font-semibold hover:underline"
            >
              @hk_flooring.ltd
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
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
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedProject !== null && currentProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[var(--color-primary)]/95 flex items-center justify-center"
            onClick={closeProject}
          >
            {/* Close button */}
            <button
              onClick={closeProject}
              className="absolute top-6 right-6 text-white/80 hover:text-white z-10"
            >
              <X size={32} />
            </button>

            {/* Project info */}
            <div className="absolute top-6 left-6 text-white z-10">
              <h3 className="text-2xl font-semibold">{currentProject.title}</h3>
              <p className="text-white/60">{currentProject.location}</p>
            </div>

            {/* Navigation arrows */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-4 md:left-8 text-white/80 hover:text-white z-10 p-2"
            >
              <ChevronLeft size={48} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 md:right-8 text-white/80 hover:text-white z-10 p-2"
            >
              <ChevronRight size={48} />
            </button>

            {/* Main image */}
            <motion.img
              key={currentImageIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              src={currentProject.images[currentImageIndex]}
              alt={`${currentProject.title} - Image ${currentImageIndex + 1}`}
              className="max-w-[90vw] max-h-[75vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Thumbnail strip */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 max-w-[90vw] overflow-x-auto p-2">
              {currentProject.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImageIndex(idx);
                  }}
                  className={`flex-shrink-0 w-16 h-16 rounded-md overflow-hidden border-2 transition-all ${
                    idx === currentImageIndex
                      ? "border-[var(--color-accent)] scale-110"
                      : "border-transparent opacity-60 hover:opacity-100"
                  }`}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Image counter */}
            <div className="absolute bottom-24 left-1/2 -translate-x-1/2 text-white/60 text-sm">
              {currentImageIndex + 1} / {currentProject.images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Work Photo Lightbox */}
      <AnimatePresence>
        {selectedPhoto !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[var(--color-primary)]/95 flex items-center justify-center p-4"
            onClick={() => setSelectedPhoto(null)}
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-6 right-6 text-white/80 hover:text-white z-10"
            >
              <X size={32} />
            </button>

            {(() => {
              const photo = workPhotos.find((p) => p.id === selectedPhoto);
              if (!photo) return null;

              const currentIndex = workPhotos.findIndex((p) => p.id === selectedPhoto);
              const prevPhoto = () => {
                const prevIndex = currentIndex === 0 ? workPhotos.length - 1 : currentIndex - 1;
                setSelectedPhoto(workPhotos[prevIndex].id);
              };
              const nextPhoto = () => {
                const nextIndex = currentIndex === workPhotos.length - 1 ? 0 : currentIndex + 1;
                setSelectedPhoto(workPhotos[nextIndex].id);
              };

              return (
                <>
                  <div className="absolute top-6 left-6 text-white z-10">
                    <h3 className="text-xl font-semibold">{photo.title}</h3>
                    <p className="text-white/60">{photo.category}</p>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      prevPhoto();
                    }}
                    className="absolute left-4 md:left-8 text-white/80 hover:text-white z-10 p-2"
                  >
                    <ChevronLeft size={48} />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      nextPhoto();
                    }}
                    className="absolute right-4 md:right-8 text-white/80 hover:text-white z-10 p-2"
                  >
                    <ChevronRight size={48} />
                  </button>

                  {photo.type === "video" ? (
                    <video
                      src={photo.image}
                      controls
                      autoPlay
                      className="max-w-[90vw] max-h-[80vh] rounded-lg"
                      onClick={(e) => e.stopPropagation()}
                    />
                  ) : (
                    <motion.img
                      key={selectedPhoto}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      src={photo.image}
                      alt={photo.title}
                      className="max-w-[90vw] max-h-[80vh] object-contain rounded-lg"
                      onClick={(e) => e.stopPropagation()}
                    />
                  )}

                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-sm">
                    {currentIndex + 1} / {workPhotos.length}
                  </div>
                </>
              );
            })()}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
