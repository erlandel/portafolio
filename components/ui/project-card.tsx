"use client";

import { CardBody, CardContainer, CardItem } from "./3d-card";
import { LineiconsGithub } from "@/icons/icons";

export interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  tags?: string[];
}

export const ProjectCard = ({
  title,
  description,
  image,
  demoUrl,
  githubUrl,
  tags,
}: ProjectCardProps) => {
  return (
    <CardContainer className="inter-var">
      <CardBody className="text-white bg-black/30 backdrop-blur-sm relative group/card hover:shadow-2xl hover:shadow-emerald-500/10 border-white/20 w-auto sm:w-120 h-auto rounded-2xl p-6 border">
        <CardItem translateZ="50" className="text-xl font-bold text-white">
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-400 text-md max-w-sm mt-2"
        >
          {description}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src={image}
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt={title}
          />
        </CardItem>
        {tags && tags.length > 0 && (
          <CardItem translateZ="50" className="flex gap-2 mt-4 flex-wrap">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 text-sm rounded-full bg-linear-to-r from-[#c03636] via-[#ce8026] to-[#e7c815]
                text-white"
              >
                {tag}
              </span>
            ))}
          </CardItem>
        )}
        <div className="flex justify-between items-center mt-6">
          {demoUrl && (
            <CardItem translateZ={20}>
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition cursor-pointer text-sm"
              >
                Ver Demo →
              </a>
            </CardItem>
          )}
          {!demoUrl && <div />}
          {githubUrl && (
            <CardItem translateZ={20}>
              <button
                onClick={() => window.open(githubUrl, "_blank")}
                className="px-4 py-2 rounded-xl bg-white text-black text-sm font-semibold hover:bg-gray-200 transition cursor-pointer flex items-center justify-center gap-2"
              >
                <LineiconsGithub className="w-5 h-5" />
                GitHub
              </button>
            </CardItem>
          )}
        </div>
      </CardBody>
    </CardContainer>
  );
};
