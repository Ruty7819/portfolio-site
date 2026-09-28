"use client";

import { motion } from "motion/react";
import { useReducedMotion } from "motion/react";
import { Button } from "../ui/button";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="min-h-[100dvh] flex items-center pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <motion.div
            initial={reduce ? false : { opacity: 0, x: -50 }}
            animate={reduce ? false : { opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8"
          >
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={reduce ? false : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-tighter leading-none text-foreground">
                מפתחת Fullstack
                <br />
                <span className="text-accent">+ AI/Automation</span>
              </h1>
            </motion.div>

            <motion.p
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={reduce ? false : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg text-foreground/70 leading-relaxed max-w-[65ch]"
            >
              בונה יישומי web מודרניים, מערכות AI חכמות, ופתרונות אוטומציה מתקדמים
            </motion.p>

            <motion.div
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={reduce ? false : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <Button size="lg">צפי בפרויקטים</Button>
            </motion.div>
          </motion.div>

          {/* Right side - Visual placeholder */}
          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.9 }}
            animate={reduce ? false : { opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="aspect-square bg-gradient-to-br from-accent/20 to-secondary/30 rounded-3xl flex items-center justify-center">
              <p className="text-foreground/50">Hero Visual - להוסיף בהמשך</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
