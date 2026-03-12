"use client";

import { motion } from "framer-motion";
import { Check, Award, Users, Clock, Shield } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "18+ Years Experience",
    description: "Trusted expertise since 2006",
  },
  {
    icon: Users,
    title: "Long-Term Relationships",
    description: "Clients who trust us for 15+ years",
  },
  {
    icon: Clock,
    title: "Reliable & On Time",
    description: "We respect your schedule",
  },
  {
    icon: Shield,
    title: "Quality Guaranteed",
    description: "Work that lasts for years",
  },
];

const benefits = [
  "Free on-site estimates",
  "Clean, professional work",
  "Residential & commercial",
  "All flooring types",
  "Honest, fair pricing",
  "Fully insured",
];

export default function About() {
  return (
    <section id="about" className="section overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative z-10 rounded-lg overflow-hidden">
              <img
                src="/images/hero-image.jpg"
                alt="HK Flooring at work"
                className="w-full h-[500px] object-cover"
              />
            </div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-[var(--color-accent)]/10 rounded-lg -z-10" />
            <div className="absolute -top-8 -left-8 w-32 h-32 border-2 border-[var(--color-accent)] rounded-lg -z-10" />

            {/* Experience Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, type: "spring" }}
              className="absolute -bottom-6 -right-6 bg-[var(--color-accent)] text-[var(--color-primary)] p-6 rounded-lg shadow-xl z-20"
            >
              <div className="text-4xl font-bold">18+</div>
              <div className="text-sm font-medium">Years of Excellence</div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="label block mb-4">Why Choose Us</span>
            <h2 className="text-4xl md:text-5xl mb-6">
              Edmonton's Trusted
              <br />
              <span className="text-[var(--color-accent)]">Flooring Expert</span>
            </h2>
            <p className="text-[var(--color-warm-gray)] mb-8 text-lg leading-relaxed">
              For over 18 years, HK Flooring has been transforming Edmonton
              homes and businesses with exceptional craftsmanship. We take pride
              in clean work, honest service, and building lasting relationships
              with our clients.
            </p>

            {/* Benefits List */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-[var(--color-accent)]/20 flex items-center justify-center flex-shrink-0">
                    <Check
                      size={12}
                      className="text-[var(--color-accent)]"
                    />
                  </div>
                  <span className="text-sm">{benefit}</span>
                </motion.div>
              ))}
            </div>

            {/* Feature Boxes */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="p-4 bg-[var(--color-cream)] rounded-lg"
                >
                  <feature.icon
                    size={24}
                    className="text-[var(--color-accent)] mb-2"
                  />
                  <h4 className="font-semibold text-sm mb-1">{feature.title}</h4>
                  <p className="text-xs text-[var(--color-warm-gray)]">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
