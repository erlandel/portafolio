import { UilSuitcase } from "@/icons/icons";

export const ExperienceSection = () => {
   const dataExperience = [
    {
      id: 1,
      appointment: "Lead FrontEnd Developer",
      agency: "Eclipse Agency",
      date: "Julio 2024 – Octubre 2024",
      description:
        "Lideré el desarrollo del frontend para una plataforma de gestión de boletos aéreos. Coordiné el equipo, reduje tiempos de entrega y diseñé una arquitectura de componentes reutilizables con Next.js, React y TailwindCSS.",
    },
    {
      id: 2,
      appointment: "Full Stack Developer",
      agency: "AudyTax",
      date: "Diciembre 2024 – Junio 2025",
      description:
        "Desarrollé el frontend de un sistema de auditorías con interfaces adaptativas por roles, módulos de gestión documental y dashboards dinámicos. Enfoque en seguridad, escalabilidad y usabilidad.",
    },
    {
      id: 3,
      appointment: "Full Stack Developer",
      agency: "SIGIES - FORTES",
      date: "Febrero 2025 – Julio 2025",
      description:
        "Implementé el submódulo de Gestión de Estudiantes con integración FUC. Desarrollé con Angular, NestJS y PostgreSQL una interfaz moderna con validación automática y generación de reportes.",
    },
  ];
  return (
    <div>
      <div className="flex items-center justify-center">
        <UilSuitcase className="mr-2" />
        <h2 className="text-white text-justify text-3xl">
          Experiencia Laboral
        </h2>
      </div>

      {dataExperience.map((experience) => (
        <div
          className="flex justify-around flex-col items-start md:flex-row md:items-start gap-10 mt-8 mx-4"
          key={experience.id}
        >
          <div>
            <h3 className="flex items-center gap-2 font-bold text-xl bg-linear-to-tr from-pink-500 to-yellow-500 bg-clip-text text-transparent">
              {experience.appointment}
            </h3>
            <h4 className="text-lg text-white">{experience.agency}</h4>
            <p className="text-md text-white/70">{experience.date}</p>
          </div>
          <div className="max-w-xl text-justify text-white text-xl">
            <p>{experience.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExperienceSection;
