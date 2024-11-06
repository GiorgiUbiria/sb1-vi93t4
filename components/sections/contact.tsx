"use client";

import { Button } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon, MailIcon } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FadeIn } from "../animations/fade-in";

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-muted/50 w-full flex justify-center">
      <div className="container px-4 md:px-6">
        <FadeIn>
          <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
        </FadeIn>
        
        <FadeIn delay={0.2}>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
              <Button variant="outline" size="lg" className="w-full sm:w-auto" asChild>
                <Link href="https://github.com">
                  <GithubIcon className="h-5 w-5 mr-2" />
                  GitHub
                </Link>
              </Button>
            </motion.div>
            
            <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
              <Button variant="outline" size="lg" className="w-full sm:w-auto" asChild>
                <Link href="https://linkedin.com">
                  <LinkedinIcon className="h-5 w-5 mr-2" />
                  LinkedIn
                </Link>
              </Button>
            </motion.div>
            
            <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
              <Button variant="outline" size="lg" className="w-full sm:w-auto" asChild>
                <Link href="mailto:contact@example.com">
                  <MailIcon className="h-5 w-5 mr-2" />
                  Email
                </Link>
              </Button>
            </motion.div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}