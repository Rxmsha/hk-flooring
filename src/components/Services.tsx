"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Droplets, Layers, TreeDeciduous, Wrench } from "lucide-react";

const services = [
  {
    icon: Droplets,
    title: "Vinyl Flooring",
    description:
      "Waterproof, durable, and stylish. Perfect for kitchens, bathrooms, and high-traffic areas. Modern designs that mimic natural materials.",
    features: ["Waterproof", "Easy Maintenance", "Pet Friendly"],
  },
  {
    icon: Layers,
    title: "Laminate Flooring",
    description:
      "Cost-effective elegance with impressive durability. Get the look of hardwood without the premium price tag.",
    features: ["Budget Friendly", "Scratch Resistant", "Quick Install"],
  },
  {
    icon: TreeDeciduous,
    title: "Hardwood Flooring",
    description:
      "Timeless beauty that adds value to your home. Professional installation of solid and engineered hardwood in all styles.",
    features: ["Premium Quality", "Adds Home Value", "Classic Appeal"],
  },
  {
    icon: Wrench,
    title: "Floor Prep & Leveling",
    description:
      "Professional subfloor preparation, self-leveling, and grinding services. The foundation for a perfect floor installation.",
    features: ["Self-Leveling", "Grinding", "Subfloor Repair"],
  },
];

export default function Services() {
  return (
    <section id="services" className="section section-cream overflow-hidden">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="label block mb-4"
          >
            What We Do
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl mb-6"
          >
            Our Flooring
            <br />
            <span className="text-[var(--color-accent)]">Services</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[var(--color-warm-gray)] max-w-2xl mx-auto"
          >
            From selection to installation, we handle every step with precision
            and care. Quality materials, expert craftsmanship, 18+ years of experience.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white p-8 lg:p-10 rounded-lg shadow-sm hover:shadow-xl transition-all duration-500 border border-transparent hover:border-[var(--color-accent)]/20"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-[var(--color-primary)] rounded-lg flex items-center justify-center mb-6 group-hover:bg-[var(--color-accent)] transition-colors duration-300">
                <service.icon size={28} className="text-white" />
              </div>

              {/* Content */}
              <h3 className="text-2xl md:text-3xl mb-4 group-hover:text-[var(--color-accent)] transition-colors">
                {service.title}
              </h3>
              <p className="text-[var(--color-warm-gray)] mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-2 mb-6">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="px-3 py-1.5 bg-[var(--color-cream)] rounded-full text-sm text-[var(--color-primary)]"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* Link */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-[var(--color-accent)] font-semibold group/link"
              >
                Get a Quote
                <ArrowUpRight
                  size={18}
                  className="transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1"
                />
              </a>

              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[var(--color-accent)]/5 to-transparent rounded-tr-lg" />
            </motion.div>
          ))}
        </div>

        {/* Additional Services Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 p-8 bg-[var(--color-primary)] rounded-lg text-center"
        >
          <p className="text-white/80">
            We also offer{" "}
            <span className="text-[var(--color-accent)]">stair installation</span>,{" "}
            <span className="text-[var(--color-accent)]">baseboards</span>,{" "}
            <span className="text-[var(--color-accent)]">casing</span>, and{" "}
            <span className="text-[var(--color-accent)]">floor removal</span>
            .
          </p>
          <p className="text-white mt-3">
            Commercial projects welcome - <span className="text-[var(--color-accent)]">gyms</span>, <span className="text-[var(--color-accent)]">schools</span>, and more.
          </p>
          <p className="text-white/60 text-sm mt-2">
            Contact us for a complete assessment of your project needs.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
