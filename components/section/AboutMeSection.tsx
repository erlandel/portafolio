import AvatarFrame from "@/components/ui/avatar-frame";
import { TablerUserCheck } from "@/icons/icons";

const AboutMeSection: React.FC = () => {
  return (
    <>
      <div className="p-5">
        <div className="flex flex-col items-center mt:-8 sm:mt-4 gap-10 text-justify md:flex-row md:justify-center">
          <div className="order-2 w-full md:w-1/2 md:order-1 text-xl text-white">
            <div className="flex items-center justify-center mb-5">
              <TablerUserCheck className="mr-2 " />
              <h2 className="text-3xl ">Sobre mí</h2>
            </div>
            <div>
              <p>
                Me llamo Erlan Delfino. Soy Ingeniero en Ciencias Informáticas y
                descubrí mi pasión por el desarrollo web desde mis primeros años
                de estudio, donde pude combinar creatividad y lógica para
                construir soluciones funcionales.
              </p>

              <p className="mt-6">
                A lo largo de mi carrera he trabajado en{" "}
                <span className="bg-linear-to-tr from-pink-500 to-yellow-500 bg-clip-text text-transparent">
                  proyectos académicos y profesionales
                </span>{" "}
                desarrollando interfaces modernas, sistemas seguros y
                arquitecturas escalables con Next.js, Angular, NestJS y
                PostgreSQL.
              </p>

              <p className="mt-6">
                Disfruto crear experiencias fluidas, optimizar procesos y
                aportar valor real a cada proyecto en el que participo.
              </p>
            </div>
          </div>

          <div className="order-1 w-full md:w-1/2 md:order-2 flex justify-center">
            <AvatarFrame className="mt-8 sm:mt-0" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMeSection;
