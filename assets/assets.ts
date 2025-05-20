import user_image from "./user-image.png";
import code_icon from "./code-icon.png";
import code_icon_dark from "./code-icon-dark.png";
import edu_icon from "./edu-icon.png";
import edu_icon_dark from "./edu-icon-dark.png";
import project_icon from "./project-icon.png";
import project_icon_dark from "./project-icon-dark.png";
import vscode from "./vscode.svg";
import github_white from "./github-white.png";
import github from "./github.svg";
import figma from "./figma.png";
import cursor from "./cursor.svg";
import supabase from "./supabase.svg";
import right_arrow_white from "./right-arrow-white.png";
import logo from "./logo.svg";
import logo_dark from "./logo_dark.svg";
import mail_icon from "./mail_icon.png";
import mail_icon_dark from "./mail_icon_dark.png";
import profile_img from "./profile-img.png";
import download_icon from "./download-icon.png";
import hand_icon from "./hand-icon.png";
import header_bg_color from "./header-bg-color.png";
import moon_icon from "./moon_icon.png";
import sun_icon from "./sun_icon.png";
import arrow_icon from "./arrow-icon.png";
import arrow_icon_dark from "./arrow-icon-dark.png";
import menu_black from "./menu-black.png";
import menu_white from "./menu-white.png";
import close_black from "./close-black.png";
import close_white from "./close-white.png";
import web_icon from "./web-icon.png";
import wordpress_icon from "./wordpress-icon.png";
import backend_icon from "./backend-icon.svg";
import right_arrow from "./right-arrow.png";
import send_icon from "./send-icon.png";
import right_arrow_bold from "./right-arrow-bold.png";
import right_arrow_bold_dark from "./right-arrow-bold-dark.png";
import css from "./css3.svg";
import html from "./html.svg";
import react from "./react.svg";
import wordpress from "./wordpress.svg";
import typescript from "./typescript.svg";
import nextjs from "./nextjs.svg";
import work1 from "./work-1.png";
import work2 from "./work-2.png";
import work3 from "./work-3.png";
import work4 from "./work-4.png";
import { StaticImageData } from "next/image";

export const assets = {
  user_image,
  code_icon,
  code_icon_dark,
  edu_icon,
  edu_icon_dark,
  project_icon,
  project_icon_dark,
  vscode,
  github_white,
  cursor,
  figma,
  supabase,
  right_arrow_white,
  logo,
  logo_dark,
  mail_icon,
  mail_icon_dark,
  profile_img,
  download_icon,
  hand_icon,
  header_bg_color,
  moon_icon,
  sun_icon,
  arrow_icon,
  arrow_icon_dark,
  menu_black,
  menu_white,
  close_black,
  close_white,
  web_icon,
  wordpress_icon,
  wordpress,
  right_arrow,
  send_icon,
  right_arrow_bold,
  right_arrow_bold_dark,
  backend_icon,
  css,
  html,
  react,
  nextjs,
  typescript,
  github,
  work1,
  work2,
  work3,
  work4,
};

export const workData = [
  {
    title: "Frontend project",
    description: "Web Development",
    bgImage: "/work-1.png",
    slug: "project1",
  },
  {
    title: "Backend project",
    description: "Build API",
    bgImage: assets.work2,
    slug: "project2",
  },
  {
    title: "Wordpress site",
    description: "Wordpress Theme",
    bgImage: "/work-3.png",
    slug: "project-alpha",
  },
  {
    title: "Web designing",
    description: "Web Design by Figma",
    bgImage: "/work-4.png",
    slug: "project4",
  },
];

export const serviceData = [
  {
    icon: assets.web_icon,
    title: "Frontend development",
    description:
      "Frontend development involves designing and implementing the parts of applications that users interact with directly, using technologies such as React, Next.js, and TypeScript. This includes creating visual elements, optimizing user interfaces, and enhancing the overall user experience.",
    link: "",
  },
  {
    icon: assets.backend_icon,
    title: "Backend Development",
    description:
      "Web application development involves building APIs and databases using technologies such as TypeScript, Node.js, TypeORM, and Express. This process includes creating the backend infrastructure that supports the functionality of web applications, ensuring data management and communication between the server and client.",
    link: "",
  },
  {
    icon: assets.wordpress_icon,
    title: "WordPress Theme Development",
    description:
      "WordPress theme development involves creating custom themes for WordPress websites, allowing for unique designs and functionalities tailored to specific needs. This process includes understanding the WordPress architecture, utilizing PHP, HTML, CSS, and JavaScript to build responsive and user-friendly themes that enhance the overall website experience.",
    link: "",
  },
];

export const stackData = [
  {
    icon: assets.html,
    title: "HTML5",
  },
  {
    icon: assets.css,
    title: "CSS3",
  },
  {
    icon: assets.typescript,
    title: "TypeScript",
  },
  {
    icon: assets.react,
    title: "React",
  },
  {
    icon: assets.nextjs,
    title: "Next.Js",
  },
  {
    icon: assets.wordpress,
    title: "Wordpress",
  },
  {
    icon: assets.vscode,
    title: "VSCode",
  },
  {
    icon: assets.cursor,
    title: "Cursor",
  },
  {
    icon: assets.github,
    title: "Github",
  },
  {
    icon: assets.figma,
    title: "Figma",
  },
];
export type Project = {
  slug: string;
  title: string;
  thumbnailUrl: StaticImageData;
  mainImageUrl: StaticImageData;
  imageGallery?: StaticImageData[];
  description: string;
  longDescription: string;
  technologies: string[];
  learnings?: string;
  projectUrl?: string;
  startDate?: string;
  endDate?: string;
};
// プロジェクトデータ
export const projectsData: Project[] = [
  {
    slug: "project-alpha",
    title: "プロジェクトAlpha",
    thumbnailUrl: assets.work2,
    mainImageUrl: assets.work2,
    imageGallery: [assets.work2, assets.work2],
    description: "革新的なUI/UXを実現した次世代型Eコマースプラットフォーム。",
    longDescription: `
          <p>プロジェクトAlphaは、ユーザー中心設計に基づき、最高のショッピング体験を提供することを目的として開発されました。</p>
          <p>最新のフロントエンド技術を駆使し、高速かつインタラクティブなインターフェースを実現しています。</p>
        `,
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Stripe API",
      "Firebase",
    ],
    learnings:
      "パフォーマンス最適化の重要性と、チーム内での効果的なコミュニケーション戦略について深く学びました。",
    projectUrl: "https://example.com/project-alpha",
    startDate: "2023-01",
    endDate: "2023-06",
  },
  {
    slug: "project-beta",
    title: "プロジェクトBeta",
    thumbnailUrl: assets.work1,
    mainImageUrl: assets.work1,
    description: "中小企業向けの業務効率化SaaSアプリケーション。",
    longDescription: `
          <p>プロジェクトBetaは、日常業務の自動化と効率化を目指す企業向けに開発されたSaaSです。</p>
          <p>直感的な操作性と高いカスタマイズ性を両立させています。</p>
        `,
    technologies: ["Vue.js", "Nuxt.js", "TypeScript", "Node.js", "PostgreSQL"],
    projectUrl: "https://example.com/project-beta",
    startDate: "2022-05",
    endDate: "2022-12",
  },
  // 他のプロジェクト...
];
