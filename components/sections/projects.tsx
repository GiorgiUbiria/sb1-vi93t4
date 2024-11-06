"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GithubIcon, ExternalLinkIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FadeIn } from "../animations/fade-in";
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState } from "react";
import Autoplay from 'embla-carousel-autoplay';

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with real-time inventory, payment processing, and admin dashboard.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1600&h=900",
    tags: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
    github: "#",
    demo: "#",
  },
  {
    title: "Task Management System",
    description: "Collaborative project management tool with real-time updates and team collaboration features.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1600&h=900",
    tags: ["React", "NestJS", "MongoDB", "WebSocket"],
    github: "#",
    demo: "#",
  },
  {
    title: "Analytics Dashboard",
    description: "Real-time analytics platform with data visualization and reporting capabilities.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&h=900",
    tags: ["Next.js", "D3.js", "Express", "Redis"],
    github: "#",
    demo: "#",
  },
  {
    title: "AI Content Generator",
    description: "Advanced content generation platform using OpenAI's GPT models and custom fine-tuning.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1600&h=900",
    tags: ["Python", "FastAPI", "OpenAI", "React"],
    github: "#",
    demo: "#",
  },
  {
    title: "Real-time Chat App",
    description: "Modern chat application with real-time messaging, file sharing, and video calls.",
    image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?q=80&w=1600&h=900",
    tags: ["React", "Socket.io", "WebRTC", "Firebase"],
    github: "#",
    demo: "#",
  },
];

const autoplayOptions = {
  delay: 4000,
  rootNode: (emblaRoot: HTMLElement) => emblaRoot.parentElement,
};

export function Projects() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, skipSnaps: false },
    [Autoplay(autoplayOptions)]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section id="projects" className="py-20 w-full flex justify-center">
      <div className="container px-4 md:px-6">
        <FadeIn>
          <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
        </FadeIn>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {projects.map((project, index) => (
                <div
                  className="flex-[0_0_100%] min-w-0 pl-4 md:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
                  key={project.title}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ 
                      opacity: selectedIndex === index ? 1 : 0.5,
                      y: 0,
                      scale: selectedIndex === index ? 1 : 0.95,
                      filter: selectedIndex === index ? 'blur(0px)' : 'blur(2px)'
                    }}
                    transition={{ duration: 0.4 }}
                    className="h-full transform-gpu"
                  >
                    <Card className="overflow-hidden h-full border border-muted-foreground/20 hover:border-muted-foreground/40 transition-all duration-300">
                      <motion.div
                        className="relative h-48"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover"
                        />
                      </motion.div>
                      <div className="p-6">
                        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                        <p className="text-muted-foreground mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.map((tag) => (
                            <Badge key={tag} variant="outline">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex space-x-4">
                          <Button size="sm" variant="outline" asChild>
                            <Link href={project.github}>
                              <GithubIcon className="h-4 w-4 mr-2" />
                              Code
                            </Link>
                          </Button>
                          <Button size="sm" asChild>
                            <Link href={project.demo}>
                              <ExternalLinkIcon className="h-4 w-4 mr-2" />
                              Demo
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {projects.map((_, index) => (
              <Button
                key={index}
                variant={selectedIndex === index ? "default" : "outline"}
                size="icon"
                className="w-2 h-2 rounded-full p-0"
                onClick={() => emblaApi?.scrollTo(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}