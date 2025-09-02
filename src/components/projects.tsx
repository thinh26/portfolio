"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { projectsData } from "@/data/data";

interface ProjectsProps {
  delay?: number;
}

export function Projects({ delay = 0 }: ProjectsProps) {
  return (
    <section id="projects">
      <div className="space-y-12 w-full py-12">
        <BlurFade delay={delay}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter">My Projects</h2>
          </div>
        </BlurFade>
        <div className="grid gap-5 max-w-[800px] mx-auto">
          {projectsData.map((project, id) => (
            <BlurFade key={project.title} delay={delay + 0.01 + id * 0.05}>
              <ProjectCard
                href={project.href}
                key={project.title}
                title={project.title}
                description={project.description}
                dates={project.dates}
                tags={project.technologies}
                image={project.image}
                video={project.video}
                links={project.links}
              />
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
