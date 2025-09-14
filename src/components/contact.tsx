import BlurFade from "@/components/magicui/blur-fade";
import { SubmitButton } from "@/components/SubmitButton";
import { sendEmail } from "@/lib/sendEmail";
import { toast } from "react-hot-toast";
import { Card, CardContent, CardHeader } from "./ui/card";
import { ProjectCard } from "./project-card";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { getT } from "@/i18n";

interface ContactProps {
  delay?: number;
}

export async function Contact({ delay = 0 }: ContactProps) {
  const { t } = await getT();
  return (
    <section id="contact">
      <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
        <BlurFade delay={delay}>
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter">
              {t("contactMe.title")}
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              {t("contactMe.subtitle")}
            </p>
          </div>
        </BlurFade>

        <BlurFade delay={delay + 0.01}>
          <div className="grid md:grid-cols-3 grid-cols-3 gap-3 w-full max-w-4xl">
            <Link href="https://m.me/Th1nh26" target="_blank">
              <Card className=" py-4 flex justify-center items-center bg-gray-100 hover:bg-gray-200 dark:bg-white/10 dark:hover:bg-white/20  border border-gray-200 dark:border-gray-700 transition-colors w-full h-full ">
                <Icon icon="logos:messenger" className="text-4xl" />
              </Card>
            </Link>
            <Link href="http://zaloapp.com/qr/p/1o3b3ozfl136" target="_blank">
              <Card className="py-4 flex justify-center items-center bg-gray-100 hover:bg-gray-200 dark:bg-white/10 dark:hover:bg-white/20  border border-gray-200 dark:border-gray-700 transition-colors w-full h-full ">
                <Icon
                  icon="simple-icons:zalo"
                  className=" text-5xl text-[#008aff]"
                />
              </Card>
            </Link>
            <Link href="mailto:ducthinh4420+work@gmail.com" target="_blank">
              <Card className="py-4 flex justify-center items-center bg-gray-100 hover:bg-gray-200 dark:bg-white/10 dark:hover:bg-white/20  border border-gray-200 dark:border-gray-700 transition-colors  w-full h-full ">
                <Icon icon="logos:google-gmail" className="text-4xl" />
              </Card>
            </Link>
            {/* <Card className="p-4 flex justify-center items-center bg-gray-100 hover:bg-gray-200 dark:bg-white/10 dark:hover:bg-white/20  border border-gray-200 dark:border-gray-700 transition-colors ">
              <Icon icon="skill-icons:instagram" className="text-4xl" />
            </Card>
            <Card className="p-4 flex justify-center items-center bg-gray-100 hover:bg-gray-200 dark:bg-white/10 dark:hover:bg-white/20  border border-gray-200 dark:border-gray-700 transition-colors ">
              <Icon icon="bi:twitter-x" className="text-4xl" />
            </Card>
            <Card className="p-4 flex justify-center items-center bg-gray-100 hover:bg-gray-200 dark:bg-white/10 dark:hover:bg-white/20  border border-gray-200 dark:border-gray-700 transition-colors ">
              <Icon icon="bi:threads" className="text-4xl" />
            </Card> */}
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
