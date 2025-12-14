import { FluentColorCode16 } from "@/icons/icons";
import { ProjectCard } from "../ui/project-card";
import { projects } from "@/data/projects";

const ProjectsSection = () => {


  return (
    <div className="py-12 ">
      <div className="flex items-center justify-center mb-10">
        <FluentColorCode16 className="mr-2" />
        <h2 className="text-white text-justify text-3xl">Proyectos</h2>
      </div>
      <div className="grid place-items-center grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-8 lg:gap-12 xl:gap-8 2xl:gap-30">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
