// app/portfolio/[workId]/page.tsx
import { notFound } from "next/navigation";
import { Project, projectsData } from "@/assets/assets";
import Link from "next/link";
import Image from "next/image";
import { FaLightbulb, FaImages } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import { GrTechnology } from "react-icons/gr";
import { PiProjectorScreen } from "react-icons/pi";
import MotionImageGrid from "@/app/components/Motion/MotionImageGrid";
import MotionLinkButton from "@/app/components/Motion/MotionLinkButton";
import MotionSection from "@/app/components/Motion/MotionSection";
import MotionTagList from "@/app/components/Motion/MotionTagList";
import MotionText from "@/app/components/Motion/MotionText";

export const generateStaticParams = async () => {
  return projectsData.map((project) => ({
    workId: project.slug,
  }));
};

const getProjectBySlug = (slug: string): Project | undefined => {
  return projectsData.find((project) => project.slug === slug);
};

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ workId: string }>;
}) {
  const { workId } = await params;
  const project = getProjectBySlug(workId);
  if (!project) notFound();

  return (
    <div className="container mx-auto px-4 pt-[100px] pb-20">
      <MotionText as="div" className="mb-5">
        <Link
          href="/"
          className="inline-flex items-center transition-all duration-500 text-xs gap-2 hover:gap-1"
        >
          ← <span>Back to Portfolio</span>
        </Link>
      </MotionText>

      {/* Hero Section */}
      <MotionText
        as="div"
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
          <h1 className="text-4xl md:text-5xl font-bold drop-shadow-lg">
            {project.title}
          </h1>
          {(project.startDate || project.endDate) && (
            <p className="text-gray-300 mt-3 text-sm flex gap-2 items-center">
              📅 {project.startDate || "?"} ~ {project.endDate || "?"}
            </p>
          )}
        </div>
      </MotionText>

      {/* Description */}
      <MotionSection
        title="Project Details"
        icon={<PiProjectorScreen size={20} />}
      >
        <MotionText
          as="div"
          className="prose dark:prose-invert max-w-none leading-relaxed font-Ovo text-xs"
          dangerouslySetInnerHTML={{ __html: project.longDescription }}
        />
      </MotionSection>

      {/* Technology */}
      <MotionSection
        title="Technology Stacks"
        icon={<GrTechnology size={20} />}
      >
        <MotionTagList items={project.technologies} />
      </MotionSection>

      {/* Roles */}
      <MotionSection
        title="Roles and Responsibilities"
        icon={<IoMdPerson size={20} />}
      >
        <MotionText className="text-white opacity-80 font-Ovo text-xs">
          ※ ここに具体的な業務内容を記述してください。
        </MotionText>
      </MotionSection>

      {/* Learnings */}
      {project.learnings && (
        <MotionSection
          title="Learnings and Innovations"
          icon={<FaLightbulb size={20} />}
        >
          <MotionText className="whitespace-pre-line leading-loose font-Ovo text-xs">
            {project.learnings}
          </MotionText>
        </MotionSection>
      )}

      {/* Gallery */}
      {project.imageGallery && project.imageGallery?.length > 0 && (
        <MotionSection title="Gallery" icon={<FaImages size={20} />}>
          <MotionImageGrid
            images={project.imageGallery}
            altBase={project.title}
          />
        </MotionSection>
      )}

      {/* Link Button */}
      {project.projectUrl && (
        <MotionLinkButton href={project.projectUrl}>
          view project
        </MotionLinkButton>
      )}
    </div>
  );
}
