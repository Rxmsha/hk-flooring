"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const areas = [
  { name: "Edmonton", main: true },
  { name: "Sherwood Park", main: false },
  { name: "St. Albert", main: false },
  { name: "Spruce Grove", main: false },
  { name: "Stony Plain", main: false },
  { name: "Leduc", main: false },
  { name: "Red Deer", main: false },
  { name: "Westlock", main: false },
  { name: "Athabasca", main: false },
  { name: "Fort Saskatchewan", main: false },
];

export default function ServiceAreas() {
  return (
    <section className="section section-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="label block mb-4"
          >
            Service Areas
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl text-white mb-6"
          >
            Serving{" "}
            <span className="text-[var(--color-accent)]">Edmonton</span>
            <br />& Surrounding Areas
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/60 max-w-2xl mx-auto"
          >
            We proudly serve Edmonton and communities throughout central
            Alberta. Travel availability depends on job scope - contact us to
            confirm service in your area.
          </motion.p>
        </div>

        {/* Areas Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto"
        >
          {areas.map((area, index) => (
            <motion.div
              key={area.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + index * 0.05 }}
              className={`flex items-center gap-2 px-6 py-3 rounded-full ${
                area.main
                  ? "bg-[var(--color-accent)] text-[var(--color-primary)]"
                  : "bg-white/10 text-white/80 hover:bg-white/20"
              } transition-colors`}
            >
              <MapPin size={16} />
              <span className="font-medium">{area.name}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-white/60 mb-4">Don't see your area listed?</p>
          <a
            href="#contact"
            className="text-[var(--color-accent)] font-semibold hover:underline"
          >
            Contact us to check availability
          </a>
        </motion.div>
      </div>
    </section>
  );
}
