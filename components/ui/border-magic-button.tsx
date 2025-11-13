"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface BorderMagicButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  icon?: React.ReactNode;
  borderColor?: "blue" | "purple" | "green";
}

export const BorderMagicButton = ({
  children,
  icon,
  className,
  borderColor = "blue",
  ...props
}: BorderMagicButtonProps) => {
  return (
    <button
      className={cn(
        "group relative inline-flex items-center justify-center gap-2 rounded-full p-[2px] font-medium text-white transition-all duration-300 hover:scale-105 cursor-pointer",
        className
      )}
      style={{
        background:
          borderColor === "blue"
            ? "linear-gradient(90deg, #3b82f6, #06b6d4, #3b82f6, #06b6d4)"
            : borderColor === "purple"
            ? "linear-gradient(90deg, #a855f7, #ec4899, #a855f7, #ec4899)"
            : "linear-gradient(90deg, #10b981, #34d399, #10b981, #34d399)",
        backgroundSize: "300% 100%",
        animation: "gradient-shift 3s linear infinite",
      }}
      {...props}
    >
      {/* Inner button */}
      <span className="flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3">
        {icon && <span className="text-lg">{icon}</span>}
        {children}
      </span>
    </button>
  );
};
