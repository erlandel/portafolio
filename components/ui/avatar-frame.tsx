import Image from "next/image";

import { cn } from "@/lib/utils";

type AvatarFrameProps = {
  className?: string;
};

const AvatarFrame: React.FC<AvatarFrameProps> = ({ className }) => {
  return (
    <div
      className={cn(
        "relative isolate w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80",
        className,
      )}
    >
      <div className="absolute inset-0 rounded-[2.0rem] bg-linear-to-br from-[#1a0043] via-[#27035d] to-[#4c1db3] blur-[30px] opacity-70" />

      <div className="relative flex h-full w-full items-center justify-center rounded-4xl bg-[#050016] p-3 shadow-[0px_30px_60px_rgba(5,0,22,0.55)]">
        <div className="relative h-full w-full overflow-hidden rounded-3xl bg-[#080022] transition duration-300 ease-out hover:rotate-0 sm:-rotate-2">
          <Image
            src="/image/avatar/1.webp"
            alt="Retrato de Erlan Delfino"
            fill
            priority
            sizes="(max-width: 640px) 240px, (max-width: 768px) 288px, 320px"
            className="object-cover object-center"
          />
        </div>
        <div className="pointer-events-none absolute inset-0 rounded-4xl" />
      </div>
    </div>
  );
};

export default AvatarFrame;

