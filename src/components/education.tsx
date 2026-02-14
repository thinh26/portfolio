import BlurFade from "@/components/magicui/blur-fade";
import { ResumeCard } from "@/components/resume-card";
import { getTranslations } from "next-intl/server";
interface EducationProps {
  delay?: number;
}

export async function Education({ delay = 0 }: EducationProps) {
  const t = await getTranslations();
  const i18nEducationData = t.raw("educationData");
  return (
    <section id="education">
      <div className="flex min-h-0 flex-col gap-y-3">
        <BlurFade delay={delay}>
          <h2 className="text-xl font-bold">{t("education")}</h2>
        </BlurFade>
        {i18nEducationData.map((education: Record<string, any>, id: number) => (
          <BlurFade key={education.school} delay={delay + 0.01 + id * 0.05}>
            <ResumeCard
              key={education.school}
              href={education.href}
              logoUrl={education.logoUrl}
              altText={education.school}
              title={education.school}
              subtitle={education.degree}
              period={`${education.start} - ${education.end}`}
              description={education.description}
            />
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
