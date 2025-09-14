import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const personalData = {
  name: "Thịnh",
  fullname: "Nguyen Duc Thinh",
  username: "thinh26",
  initials: "DT",
  url: "https://thinh26.com",
  location: "Nha Trang, Khanh Hoa, Viet Nam",
  locationLink:
    "https://www.google.com/maps/place/Nha+Trang,+Kh%C3%A1nh+H%C3%B2a/",
  description:
    "I'm an aspiring Software Developer passionate about building scalable, user-friendly applications.",
  summary:
    "I'm a Software Engineer with **2 years of experience**. I specialise in building scalable systems, improving developer experience, and solving platform-wide productivity and performance challenges across products. I hold a **Bachelor's degree in Information Technology** from Nha Trang University. I enjoy exploring new tech in my free time.",
  avatarUrl: "/assets/image/me.jpg",
} as const;

export const skillsData = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML5", icon: "logos:html-5" },
      { name: "CSS3", icon: "logos:css-3" },
      { name: "Tailwind CSS", icon: "devicon:tailwindcss" },
      { name: "JavaScript", icon: "logos:javascript" },
      { name: "TypeScript", icon: "logos:typescript-icon" },
      { name: "React.js", icon: "logos:react" },
      { name: "React Native", icon: "devicon:reactnative-wordmark" },
      { name: "Vite", icon: "logos:vitejs" },
      { name: "Next.js", icon: "logos:nextjs-icon" },
      { name: "Redux", icon: "logos:redux" },
      { name: "Webpack", icon: "logos:webpack" },
      { name: "Rollup", icon: "devicon:rollup" },
      { name: "Single Page Applications", icon: "material-symbols:web" },
      { name: "Responsive Design", icon: "material-symbols:responsive-layout" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: "logos:nodejs-icon" },
      { name: "TypeScript", icon: "logos:typescript-icon" },
      { name: "NestJS", icon: "logos:nestjs" },
      { name: "Java", icon: "logos:java" },
      { name: "Spring Boot", icon: "logos:spring-icon" },
      { name: "SQL", icon: "devicon:azuresqldatabase" },
      { name: "MySQL", icon: "logos:mysql-icon" },
      { name: "SQL Server", icon: "devicon:microsoftsqlserver" },
      { name: "REST APIs", icon: "lucide:cloud-cog" },
      { name: "Elasticsearch", icon: "logos:elasticsearch" },
    ],
  },

  {
    category: "DevOps",
    skills: [
      { name: "AWS", icon: "logos:aws" },
      { name: "Docker", icon: "logos:docker-icon" },
      { name: "Kubernetes", icon: "logos:kubernetes" },
      { name: "Jenkins", icon: "logos:jenkins" },
      { name: "GitHub Actions", icon: "logos:github-actions" },
      { name: "CI/CD", icon: "material-symbols:sync" },
      { name: "Infrastructure as Code", icon: "material-symbols:code" },
    ],
  },
  {
    category: "Practices",
    skills: [
      { name: "Database design", icon: "material-symbols:database" },
      { name: "Event‑driven architecture", icon: "lucide:share-2" },
      { name: "Agile", icon: "lucide:repeat" },
      { name: "Scrum", icon: "material-symbols:group" },
      {
        name: "OOP",
        icon: "material-symbols:code",
      },
      {
        name: "TDD",
        icon: "lucide:flask-conical",
      },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "VS Code", icon: "logos:visual-studio-code" },
      { name: "WebStorm", icon: "devicon:webstorm" },
      { name: "InteliJ IDEA", icon: "devicon:intellij" },
      { name: "Android Studio", icon: "devicon:androidstudio" },
      { name: "DataGrip", icon: "devicon:datagrip" },
      { name: "Windows", icon: "devicon:windows11" },
      { name: "Ubuntu", icon: "devicon:ubuntu" },
    ],
  },
] as const;

export const navbarData = [
  { href: "/", icon: HomeIcon, label: "Home" },
  { href: "/blog", icon: NotebookIcon, label: "Blog" },
] as const;

export const contactData = {
  email: "hello@example.com",
  tel: "+123456789",
  social: {
    GitHub: {
      name: "GitHub",
      url: "https://github.com/thinh26",
      icon: Icons.github,
      navbar: true,
    },
    LinkedIn: {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/thinh26/",
      icon: Icons.linkedin,
      navbar: true,
    },
    Email: {
      name: "Email",
      url: "/#contact",
      icon: Icons.email,
      navbar: true,
    },
  },
} as const;

export const experiencesData = [
  {
    company: "FPT Software",
    href: "https://fptsoftware.com/",
    location: "Nha Trang",
    title: "Frontend Developer",
    logoUrl: "/assets/image/fsoft.png",
    start: "Dec 2023",
    end: "May 2025",
    description: [
      "Participated in insurance-related projects utilizing ReactJS for web applications and React Native for mobile platforms.",
      "Analyzed UI designs and user stories, collaborated closely with Backend teams to ensure timely delivery of features, and coordinated with Quality Control teams to resolve defects, including performing hotfixes when necessary.",
      "Attended daily team meetings to report development progress, address blockers, and align on project goals.",
    ],
  },
] as const;

export const educationData = [
  {
    school: "Nha Trang University (NTU)",
    href: "https://ntu.edu.vn/",
    degree: "Bachelor of Information Technology",
    logoUrl: "/assets/image/ntu.png",
    start: "Nov 2020",
    end: "Jul 2024",
    description: [
      "Major in Software Engineer",
      "Minor in Networks and Security",
      "Minor in Mobile Applications",
    ],
  },
] as const;

export const projectsData = [
  {
    title: "Developer Job Portal",
    href: "https://github.com/ben04rogers/ozdevs-v2",
    dates: "2023",
    active: true,
    description:
      "Job portal for companies looking to hire developers in Australia. Filter by experience, location and keyboards. Companies can pay a monthly fee to be able to message developers on the site and view their information. Built with Laravel.",
    technologies: ["PHP", "Laravel", "JavaScript", "Tailwind", "MySQL"],
    links: [
      {
        type: "Github",
        href: "https://github.com/ben04rogers/ozdevs-v2",
        icon: "github",
      },
    ],
    image: "/job-portal.png",
    video: "",
  },
] as const;
