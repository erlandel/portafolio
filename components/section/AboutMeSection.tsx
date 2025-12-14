import AvatarFrame from "@/components/ui/avatar-frame";
import { TablerUserCheck } from "@/icons/icons";

const AboutMeSection: React.FC = () => {
  return (
    <>
      <div className="">
        <div className="flex flex-col items-center mt:-8 sm:mt-4  xl:flex-row md:justify-center py-12 gap-15">
          <div className="order-2 w-full xl:w-2/3 xl:order-1 text-xl text-white mt-10 xl:mt-0">
            <div className="flex items-center justify-center">
              <TablerUserCheck className="mr-2 " />
              <h2 className="text-3xl ">Sobre mí</h2>
            </div>
            <div className="text-lg  sm:text-2xl space-y-5 mt-5 ">
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
                arquitecturas escalables.
              </p>

              <p className="mt-6">
                Disfruto crear experiencias fluidas, optimizar procesos y
                aportar valor real a cada proyecto en el que participo.
              </p>
            </div>
          </div>

          <div className="order-1 w-full xl:w-1/3 xl:order-2 flex justify-center">
            <AvatarFrame  />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMeSection;
