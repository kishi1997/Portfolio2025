import { sampleProjects } from "@/assets/assets";
import { motion } from "motion/react";
import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import TechTag from "../TechTag";

type Project = {
  slug: string;
  title: string;
  category: string;
  mainImageUrl: string;
  description: string;
  technologies: string[];
  liveUrl: string;
  repoUrl: string;
};
// animate() function
const WorkItemList = () => {
  const ProjectCard = ({ project }: { project: Project }) => {
    // 説明文を短縮（例：100文字）
    const shortDescription =
      project.description.length > 100
        ? project.description.substring(0, 100) + "..."
        : project.description;
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`
        rounded-lg overflow-hidden
        border border-clr-border
        p-4
        flex flex-col h-full
      `}
      >
        {/* --- Main Image --- */}
        <div className="aspect-video overflow-hidden">
          {" "}
          {/* 画像のアスペクト比を固定 */}
          <img
            src={project.mainImageUrl}
            alt={`${project.title} main image`}
            className="w-full h-full object-cover" // 画像がコンテナに合わせてカバーされるように
          />
        </div>
        {/* --- Card Content --- */}
        <div className="pt-5 flex flex-col flex-grow">
          <p
            className={`
            text-sm font-Outfit mb-1
            text-clr-text-secondary  dark:text-clr-text-secondary-dark 
          `}
          >
            {project.category}
          </p>
          {/* --- Project Title --- */}
          <h3
            className={`
            text-xl sm:text-2xl font-Ovo font-bold mb-3
            text-clr-text-primary  dark:text-clr-text-primary-dark 
            line-clamp-2 // タイトルが長すぎる場合に2行で切り詰める
          `}
          >
            {project.title}
          </h3>
          {/* --- Short Description --- */}
          <p
            className={`
            text-sm font-Outfit leading-relaxed mb-4 flex-grow
            text-clr-text-primary  dark:text-clr-text-primary-dark 
            line-clamp-3
          `}
          >
            {shortDescription}
          </p>
          {/* --- Technologies --- */}
          <div className="mb-4">
            <h4 className="text-xs font-Outfit font-semibold mb-2 uppercase tracking-wider text-clr-text-secondary  dark:text-clr-text-secondary-dark ">
              Technologies
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.slice(0, 5).map(
                (
                  tech // 表示する技術数を制限 (例: 5つ)
                ) => (
                  <TechTag key={tech} techName={tech} />
                )
              )}
              {project.technologies.length > 5 && (
                <span className="text-xs font-Outfit text-clr-text-secondary  dark:text-clr-text-secondary-dark ">
                  ...
                </span>
              )}
            </div>
          </div>
          {/* --- Links --- */}
          <div className="mt-auto border-t border-clr-border dark:border-clr-border-dark pt-3 flex justify-end space-x-3">
            {project.liveUrl && (
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="View Live Site" // ツールチップ追加
                className="text-clr-link dark:text-clr-link-dark  hover:text-clr-accent  dark:hover:text-clr-accent-dark  transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaExternalLinkAlt size={20} /> {/* アイコンサイズ調整 */}
              </motion.a>
            )}
            {!project.liveUrl && !project.repoUrl && (
              <p className="text-xs font-Outfit italic text-clr-text-secondary  dark:text-clr-text-secondary-dark ">
                No links.
              </p>
            )}
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
      {sampleProjects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
};

export default WorkItemList;
