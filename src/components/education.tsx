import BlurFade from "@/components/magicui/blur-fade";
import { ResumeCard } from "@/components/resume-card";
import { getT } from "@/i18n/index";

interface EducationProps {
  delay?: number;
}

export async function Education({ delay = 0 }: EducationProps) {
  const { t } = await getT();
  return (
    <section id="education">
      <div className="flex min-h-0 flex-col gap-y-3">
        <BlurFade delay={delay}>
          <h2 className="text-xl font-bold">{t("education")}</h2>
        </BlurFade>
        {t("educationData", { returnObjects: true }).map(
          (education: Record<string, any>, id: number) => (
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
          ),
        )}
      </div>
    </section>
  );
}
