import { FluentColorCode16 } from "@/icons/icons";
import { ProjectCard } from "../ui/project-card";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Gestión de Estudiantes - SIGIES",
      description:
        "Submódulo de Gestión de Estudiantes con integración a la Ficha Única del Ciudadano (FUC) para validación automática de datos. ",
      image: "/image/proyects/sigies.webp",
      githubUrl: "https://github.com/erlandel/frontend-sigies",
      tags: ["Angular", "NestJS", "PostgreSQL", "Sass"],
    },
    {
      title: "Plataforma de Boletos Aéreos",
      description:
        "Aplicación web para gestión de boletos aéreos y servicios de viajes con arquitectura de componentes reutilizables.",
      image: "/image/proyects/eclipse.webp",
      demoUrl: "https://eclipse-frontend-six.vercel.app/",
      githubUrl: "https://github.com/erlandel/Eclipse-Frontend",
      tags: ["Next.js", "React", "TailwindCSS", "HeroUI"],
    },
  ];

  return (
    <div className="py-12">
      <div className="flex items-center justify-center mb-10">
        <FluentColorCode16 className="mr-2" />
        <h2 className="text-white text-justify text-3xl">Proyectos</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
