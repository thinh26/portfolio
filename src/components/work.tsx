import BlurFade from "@/components/magicui/blur-fade";
import { ResumeCard } from "@/components/resume-card";
import { getT } from "@/i18n/index";

interface WorkProps {
  delay?: number;
}

export async function Work({ delay = 0 }: WorkProps) {
  const { t } = await getT();
  return (
    <section id="work">
      <div className="flex min-h-0 flex-col gap-y-3">
        <BlurFade delay={delay}>
          <h2 className="text-xl font-bold">{t("workExperience")}</h2>
        </BlurFade>
        {t("experiencesData", { returnObjects: true }).map(
          (work: Record<string, any>, id: number) => (
            <BlurFade key={work.company} delay={delay + 0.01 + id * 0.05}>
              <ResumeCard
                key={work.company}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                period={`${work.start} - ${work.end ?? "Present"}`}
                description={work.description}
              />
            </BlurFade>
          ),
        )}
      </div>
    </section>
  );
}
