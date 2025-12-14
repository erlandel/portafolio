"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface GlowBorderButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const GlowBorderButton = ({
  children,
  className,
  ...props
}: GlowBorderButtonProps) => {
  return (
    <button
      className={cn(
        "group relative inline-flex items-center justify-center gap-2 rounded-full p-px overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105",
        className
      )}
      style={
        {
          "--duration": "2s",
        } as React.CSSProperties
      }
      {...props}
    >
      {/* Spinning gradient border */}
      <span className="absolute inset-[-1000%] animate-[spin_var(--duration)_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#e8e7e9_50%,#fefdff_75%)]" />

      {/* Inner button */}
      <span
        className={cn(
          "inline-flex h-full w-full items-center justify-center rounded-full bg-slate-900 px-5 py-2.5 sm:px-8 sm:py-2.2 text-xs sm:text-sm font-medium text-white backdrop-blur-3xl",
          className
        )}
      >
        <span className="relative flex h-2.5 w-2.5 sm:h-3 sm:w-3 mr-2 sm:mr-3">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex h-full w-full rounded-full bg-green-500 shadow-[0_0_8px_rgba(30, 143, 73, 0.8)]"></span>
        </span>
        {children}
      </span>
    </button>
  );
};
