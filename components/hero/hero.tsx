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
              <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-tighter leading-none text-foreground dark:text-foreground-dark">
                מהנדסת Full-Stack
                <br />
                <span className="text-accent">+ AI Solutions Architect</span>
              </h1>
            </motion.div>

            <motion.p
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={reduce ? false : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg text-foreground/70 dark:text-foreground-dark/70 leading-relaxed max-w-[65ch]"
            >
              מתמחה בבניית גשרים בין מערכות Backend ארגוניות מורכבות לבין יישומי בינה מלאכותית מתקדמים. עם תואר ראשון במשפטים וניסיון בארכיטקטורת מערכות תפוקה גבוהה.
            </motion.p>

            <motion.div
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={reduce ? false : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <Button size="lg">צפי בפרויקטים</Button>
            </motion.div>
          </motion.div>

          {/* Right side - Visual */}
          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.9 }}
            animate={reduce ? false : { opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="aspect-square relative rounded-3xl overflow-hidden bg-gradient-to-br from-accent/20 to-secondary/30 dark:from-accent/30 dark:to-secondary/40">
              <img
                src="https://picsum.photos/seed/portfolio-hero/800/800"
                alt="Portfolio hero visual"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
