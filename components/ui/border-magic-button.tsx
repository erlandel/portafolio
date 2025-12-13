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
  const getConicGradient = () => {
    // Color que rota alrededor del borde
    const rotatingColor =
      borderColor === "blue"
        ? "#2802ff" // Azul para el botón de GitHub
        : borderColor === "purple"
        ? "#c0005d" // Rojo para el botón de Currículo
        : "#10b981"; // Verde por defecto
    
    // Gradiente cónico con color que rota solo en el borde
    return `conic-gradient(from 0deg, transparent 0deg, transparent 200deg, ${rotatingColor} 250deg, ${rotatingColor} 260deg, transparent 270deg, transparent 360deg)`;
  };

  return (
    <button
      className={cn(
        "group relative inline-flex items-center justify-center gap-2 rounded-full p-[2px] font-medium text-white transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden",
        className
      )}
      style={{
        background: "transparent",
      }}
      {...props}
    >
      {/* Borde animado con pseudo-elemento */}
      <span
        className="absolute inset-0 rounded-full"
        style={{
          background: getConicGradient(),
          animation: "rotate-border 3s linear infinite",
          zIndex: 0,
        }}
      />
      {/* Inner button */}
      <span className="relative z-10 flex items-center gap-4 rounded-full bg-slate-950 px-5 py-2.5 sm:px-6 sm:py-3 text-base">
        {icon && <span className="text-lg">{icon}</span>}
        {children}
      </span>
    </button>
  );
};
