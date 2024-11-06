"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { FadeIn } from "../animations/fade-in";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full flex items-center justify-center bg-gradient-to-b from-primary/10 via-background to-background flex justify-center">
      <div className="container px-4 md:px-6 py-10 md:py-14">
        <div className="flex flex-col items-center space-y-8 text-center">
          <FadeIn delay={0.2}>
            <motion.div
              className="rounded-full bg-muted px-3 py-1 text-sm leading-6 ring-1 ring-muted-foreground/10 hover:ring-muted-foreground/20 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              Available for new projects
            </motion.div>
          </FadeIn>

          <div className="space-y-4">
            <FadeIn delay={0.3} direction="up">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                Full Stack Developer
              </h1>
            </FadeIn>
            <FadeIn delay={0.4} direction="up">
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Building robust and scalable web applications with modern technologies
              </p>
            </FadeIn>
          </div>

          <FadeIn delay={0.5}>
            <div className="flex flex-col sm:flex-row gap-4 min-w-[200px]">
              <Button size="lg" asChild>
                <Link href="#contact">Get in touch</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#projects">View Projects</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </div>

      <div className="absolute inset-x-0 -z-10 transform-gpu overflow-hidden blur-3xl" aria-hidden="true">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-secondary opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
      </div>
    </section>
  );
}