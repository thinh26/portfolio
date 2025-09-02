"use client";

import { Contact } from "@/components/contact";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Education } from "@/components/education";
import { Work } from "@/components/work";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <Hero delay={BLUR_FADE_DELAY} />

      <About delay={BLUR_FADE_DELAY * 3} />

      <Work delay={BLUR_FADE_DELAY * 5} />

      <Education delay={BLUR_FADE_DELAY * 7} />

      {/* <Projects delay={BLUR_FADE_DELAY * 9} /> */}

      {/* <Skills delay={BLUR_FADE_DELAY * 11} /> */}

      {/* <Contact delay={BLUR_FADE_DELAY * 13} /> */}
      <Skills delay={BLUR_FADE_DELAY * 9} />

      <Contact delay={BLUR_FADE_DELAY * 11} />
    </main>
  );
}
