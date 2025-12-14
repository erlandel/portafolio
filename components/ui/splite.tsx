"use client";

import { useEffect, useState } from "react";
import Spline from "@splinetool/react-spline";
import { cn } from "@/lib/utils";

interface SplineSceneProps {
  scene: string;
  className?: string;
}

export default function SplineScene({ scene, className }: SplineSceneProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div
      className={cn(
        "relative w-full min-h-[400px] lg:min-h-[600px]",
        className
      )}
    >
      <Spline scene={scene} />
    </div>
  );
}
