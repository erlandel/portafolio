import { dataExperience } from "@/data/dataExperience";
import { UilSuitcase } from "@/icons/icons";

export const ExperienceSection = () => {
   
  return (
    <div>
      <div className="flex items-center justify-center mb-10">
        <UilSuitcase className="mr-2" />
        <h2 className="text-white text-justify text-3xl ">
          Experiencia Laboral
        </h2>
      </div>

      {dataExperience.map((experience) => (
        <div
          className="flex justify-center space-y-10 flex-col items-start lg:flex-row mt-12 xl:mx-48"
          key={experience.id}
        >
          
     
          <div className="w-full lg:w-5/12">
            <h3 className="flex items-center font-bold text-2xl bg-linear-to-tr from-pink-500 to-yellow-500 bg-clip-text text-transparent">
              {experience.appointment}
            </h3>
            <h4 className="text-xl text-white">{experience.agency}</h4>
            <p className="text-lg text-white/70">{experience.date}</p>
          </div>
         

          <div className="w-full lg:w-8/12 text-justify text-white text-2xl">
            <p>{experience.description}</p>
          </div>

        </div>
      ))}
    </div>
  );
};

export default ExperienceSection;
