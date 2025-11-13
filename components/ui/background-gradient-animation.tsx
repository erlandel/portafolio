"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

export const BackgroundGradientAnimation = ({
  gradientBackgroundStart = "rgb(108, 0, 162)",
  gradientBackgroundEnd = "rgb(0, 17, 82)",
  firstColor = "18, 113, 255",
  secondColor = "221, 74, 255",
  thirdColor = "100, 220, 255",
  fourthColor = "200, 50, 50",
  fifthColor = "180, 180, 50",
  pointerColor = "140, 100, 255",
  size = "80%",
  blendingValue = "hard-light",
  children,
  className,
  interactive = true,
  containerClassName,
}: {
  gradientBackgroundStart?: string;
  gradientBackgroundEnd?: string;
  firstColor?: string;
  secondColor?: string;
  thirdColor?: string;
  fourthColor?: string;
  fifthColor?: string;
  pointerColor?: string;
  size?: string;
  blendingValue?: string;
  children?: React.ReactNode;
  className?: string;
  interactive?: boolean;
  containerClassName?: string;
}) => {
  const interactiveRef = useRef<HTMLDivElement>(null);
  const [curX, setCurX] = useState(0);
  const [curY, setCurY] = useState(0);
  const [tgX, setTgX] = useState(0);
  const [tgY, setTgY] = useState(0);

  useEffect(() => {
    document.body.style.setProperty(
      "--gradient-background-start",
      gradientBackgroundStart
    );
    document.body.style.setProperty(
      "--gradient-background-end",
      gradientBackgroundEnd
    );
    document.body.style.setProperty("--first-color", firstColor);
    document.body.style.setProperty("--second-color", secondColor);
    document.body.style.setProperty("--third-color", thirdColor);
    document.body.style.setProperty("--fourth-color", fourthColor);
    document.body.style.setProperty("--fifth-color", fifthColor);
    document.body.style.setProperty("--pointer-color", pointerColor);
    document.body.style.setProperty("--size", size);
    document.body.style.setProperty("--blending-value", blendingValue);
  }, []);

  useEffect(() => {
    if (!interactiveRef.current) return;
    setCurX(curX + (tgX - curX) / 20);
    setCurY(curY + (tgY - curY) / 20);
    interactiveRef.current.style.transform = `translate(${Math.round(
      curX
    )}px, ${Math.round(curY)}px)`;
  }, [tgX, tgY]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!interactiveRef.current) return;
    const rect = interactiveRef.current.getBoundingClientRect();
    setTgX(event.clientX - rect.left);
    setTgY(event.clientY - rect.top);
  };

  const [isSafari, setIsSafari] = useState(false);
  useEffect(() => {
    setIsSafari(/^((?!chrome|android).)*safari/i.test(navigator.userAgent));
  }, []);

  return (
    <div
      className={cn(
        "relative min-h-screen w-full bg-[linear-gradient(40deg,var(--gradient-background-start),var(--gradient-background-end))]",
        containerClassName
      )}
    >
      {/* Blur SVG filter */}
      <svg className="hidden">
        <defs>
          <filter id="blurMe">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>

      {/* Content Layer */}
      <div className={cn(className)}>{children}</div>

      {/* Animated Gradients Layer */}
      <div
        className={cn(
          "gradients-container fixed inset-0 h-screen w-screen blur-lg pointer-events-none",
          isSafari ? "blur-2xl" : "filter-[url(#blurMe)_blur(40px)]"
        )}
      >
        {/* Blob 1 */}
        <div
          className={cn(
            "absolute animate-first opacity-100 mix-[var(--blending-value)]",
            "size-(--size) top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)] origin-center",
            "bg-[radial-gradient(circle_at_center,var(--first-color)_0,var(--first-color)_50%)]"
          )}
        />

        {/* Blob 2 */}
        <div
          className={cn(
            "absolute animate-second opacity-100 mix-[var(--blending-value)]",
            "size-(--size) top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)] origin-[calc(50%-400px)]",
            "bg-[radial-gradient(circle_at_center,rgba(var(--second-color),0.8)_0,rgba(var(--second-color),0)_50%)]"
          )}
        />

        {/* Blob 3 */}
        <div
          className={cn(
            "absolute animate-third opacity-100 mix-[var(--blending-value)]",
            "size-(--size) top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)] origin-[calc(50%+400px)]",
            "bg-[radial-gradient(circle_at_center,rgba(var(--third-color),0.8)_0,rgba(var(--third-color),0)_50%)]"
          )}
        />

        {/* Blob 4 */}
        <div
          className={cn(
            "absolute animate-fourth opacity-70 mix-[var(--blending-value)]",
            "size-(--size) top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)] origin-[calc(50%-200px)]",
            "bg-[radial-gradient(circle_at_center,rgba(var(--fourth-color),0.8)_0,rgba(var(--fourth-color),0)_50%)]"
          )}
        />

        {/* Blob 5 */}
        <div
          className={cn(
            "absolute animate-fifth opacity-100 mix-[var(--blending-value)]",
            "size-(--size) top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)] origin-[calc(50%-800px)_calc(50%+800px)]",
            "bg-[radial-gradient(circle_at_center,rgba(var(--fifth-color),0.8)_0,rgba(var(--fifth-color),0)_50%)]"
          )}
        />

        {/* Interactive Pointer Blob */}
        {interactive && (
          <div
            ref={interactiveRef}
            onMouseMove={handleMouseMove}
            className={cn(
              "absolute opacity-70 mix-[var(--blending-value)]",
              "-top-1/2 -left-1/2 h-full w-full",
              "bg-[radial-gradient(circle_at_center,rgba(var(--pointer-color),0.8)_0,rgba(var(--pointer-color),0)_50%)]"
            )}
          />
        )}
      </div>
    </div>
  );
};
