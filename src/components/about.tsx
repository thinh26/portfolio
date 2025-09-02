"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { personalData } from "@/data/data";
import Markdown from "react-markdown";

interface AboutProps {
  delay?: number;
}

export function About({ delay = 0 }: AboutProps) {
  return (
    <section id="about">
      <BlurFade delay={delay}>
        <h2 className="text-xl font-bold">About</h2>
      </BlurFade>
      <BlurFade delay={delay + 0.01}>
        <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
          {personalData.summary}
        </Markdown>
      </BlurFade>
    </section>
  );
}
