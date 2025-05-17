import { motion } from "framer-motion";
import { FaLightbulb, FaImages } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { CiLocationArrow1 } from "react-icons/ci";
import { GrTechnology } from "react-icons/gr";
import { IoMdPerson } from "react-icons/io";
import { PiProjectorScreen } from "react-icons/pi";
import { use } from "react";

// 既存のコードの前に追加
export async function generateStaticParams() {
  return projectsData.map((project) => ({
    workId: project.slug,
  }));
}

type SectionProps = {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  delay?: number;
};
type Project = {
  slug: string; // URLに使われる一意の識別子
  title: string;
  thumbnailUrl: string; // 一覧ページやOGPで使う画像
  mainImageUrl: string; // 詳細ページでメインに表示する画像
  imageGallery?: string[]; // その他の画像ギャラリー
  description: string; // 短い説明
  longDescription: string; // 詳細な説明 (HTMLも可)
  technologies: string[];
  learnings?: string; // 学び
  projectUrl?: string; // ライブサイトURL
  startDate?: string; // 開始日 (例: "2023-01")
  endDate?: string; // 終了日 (例: "2023-03" or "現在")
};
// スラッグに合致するデータを取得
const getProjectBySlug = (slug: string): Project | undefined => {
  return projectsData.find((project) => project.slug === slug);
};
// プロジェクトデータ
const projectsData: Project[] = [
  {
    slug: "project-alpha",
    title: "プロジェクトAlpha",
    thumbnailUrl: "/work-2.png",
    mainImageUrl: "/work-2.png",
    imageGallery: ["/work-2.png", "/work-2.png"],
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
    thumbnailUrl: "/images/projects/beta/thumbnail.jpg",
    mainImageUrl: "/images/projects/beta/main.jpg",
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
const Section = ({ title, icon, children }: SectionProps) => (
  <section className="mb-14">
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
      className="text-2xl font-normal flex items-center gap-2 mb-4 "
    >
      {icon} {title}
    </motion.h2>
    {children}
  </section>
);
const ProjectDetailPage = ({
  params,
}: {
  params: Promise<{ workId: string }>;
}) => {
  const { workId } = use(params);
  const project = getProjectBySlug(workId);
  if (project == null) {
    return (
      <div className="text-center text-white py-20">Project not found.</div>
    );
  }
  return (
    <div className="container mx-auto px-4 pt-[100px] pb-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-5"
      >
        <Link
          href="/portfolio"
          className="inline-flex items-center transition-all duration-500 text-xs gap-2 hover:gap-1"
        >
          <span>←</span>
          <span>Back to Portfolio</span>
        </Link>
      </motion.div>

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative h-[60vh] rounded-xl overflow-hidden shadow-2xl mb-12"
      >
        <Image
          src={project.mainImageUrl}
          alt={project.title}
          fill
          className="object-cover brightness-[0.5]"
          priority
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-bold drop-shadow-lg"
          >
            {project.title}
          </motion.h1>
          {(project.startDate || project.endDate) && (
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-gray-300 mt-3 text-sm flex gap-2 items-center"
            >
              <span>📅 </span>
              <span>
                {project.startDate || "?"} ~ {project.endDate || "?"}
              </span>
            </motion.p>
          )}
        </div>
      </motion.div>

      {/* Description */}
      <Section
        title="Project Details"
        icon={
          <PiProjectorScreen
            className="text-black dark:text-white font-Outfit"
            size={20}
          />
        }
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          className="prose dark:prose-invert max-w-none leading-relaxed font-Ovo text-xs"
          dangerouslySetInnerHTML={{ __html: project.longDescription }}
        />
      </Section>

      {/* Technologies */}
      <Section
        title="Technology Stacks"
        icon={<GrTechnology className="text-black dark:text-white" size={20} />}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          className="flex flex-wrap gap-3"
        >
          {project.technologies.map((tech) => (
            <motion.span
              key={tech}
              className="bg-rose-50 text-gray-900 px-4 py-1 rounded-full text-xs font-medium"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </Section>

      {/* Roles */}
      <Section
        title="Roles and Responsibilities"
        icon={<IoMdPerson className="text-black dark:text-white" size={20} />}
      >
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          className="text-white opacity-80 font-Ovo text-xs"
        >
          ※ ここに具体的な業務内容を記述してください。
        </motion.p>
      </Section>

      {/* Learnings */}
      {project.learnings && (
        <Section
          title="Learnings and Innovations"
          icon={
            <FaLightbulb className="text-black dark:text-white" size={20} />
          }
        >
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            className="whitespace-pre-line leading-loose font-Ovo text-xs"
          >
            {project.learnings}
          </motion.p>
        </Section>
      )}

      {/* Gallery */}
      {project.imageGallery && project.imageGallery?.length > 0 && (
        <Section
          title="Gyallery"
          icon={<FaImages className="text-black dark:text-white" size={20} />}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          >
            {project.imageGallery.map((src, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                whileHover={{ scale: 1.02 }}
                className="relative aspect-video rounded-lg overflow-hidden shadow-lg"
              >
                <Image
                  src={src}
                  alt={`${project.title} gallery image ${idx + 1}`}
                  fill
                  className="object-cover "
                />
              </motion.div>
            ))}
          </motion.div>
        </Section>
      )}

      {/* Link Button */}
      {project.projectUrl && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        >
          <Link
            className="max-w-fit mt-16 hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full
              ml-4 font-Outfit transition duration-500 dark:border-white/50 hover:-translate-y-0.5 dark:text-white"
            href="#contact"
          >
            View Site
            <CiLocationArrow1
              size={20}
              className="text-black dark:text-white"
            />
          </Link>
        </motion.div>
      )}
    </div>
  );
};

export default ProjectDetailPage;
