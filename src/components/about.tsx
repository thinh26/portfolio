import BlurFade from "@/components/magicui/blur-fade";
import { personalData } from "@/data/data";
import Markdown from "react-markdown";
import { getTranslations } from "next-intl/server";

interface AboutProps {
  delay?: number;
}

export async function About({ delay = 0 }: AboutProps) {
  const t = await getTranslations();
  return (
    <section id="about">
      <BlurFade delay={delay}>
        <h2 className="text-xl font-bold">{t("about")}</h2>
      </BlurFade>
      <BlurFade delay={delay + 0.01}>
        <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
          {/*{personalData.summary}*/}
          {t("summary", { summary: t("personalData.summary") })}
        </Markdown>
      </BlurFade>
    </section>
  );
}
