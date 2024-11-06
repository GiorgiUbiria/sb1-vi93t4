"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BrainCircuit, Code2, Server, Database } from "lucide-react";
import { FadeIn } from "../animations/fade-in";
import { motion } from "framer-motion";

const skills = [
  { category: "Frontend", icon: Code2, items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { category: "Backend", icon: Server, items: ["Node.js", "Express", "NestJS", "REST APIs"] },
  { category: "Database", icon: Database, items: ["PostgreSQL", "MongoDB", "Redis", "Prisma"] },
  { category: "DevOps", icon: BrainCircuit, items: ["Docker", "AWS", "CI/CD", "Git"] },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-muted/50 w-full flex justify-center">
      <div className="container px-4 md:px-6">
        <FadeIn>
          <h2 className="text-3xl font-bold text-center mb-12">Technical Skills</h2>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <FadeIn key={skill.category} delay={index * 0.1} direction="up">
                <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
                  <Card className="p-6 h-full border border-muted-foreground/20 hover:border-muted-foreground/40 transition-colors duration-300">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-semibold">{skill.category}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skill.items.map((item) => (
                        <Badge key={item} variant="secondary" className="px-2 py-1">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}