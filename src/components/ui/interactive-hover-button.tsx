"use client"
import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface InteractiveHoverButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
}

const InteractiveHoverButton = React.forwardRef<
  HTMLButtonElement,
  InteractiveHoverButtonProps
>(({ text = "Button", className, onClick, ...props }, ref) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsActive(true);
    setTimeout(() => setIsActive(false), 300);
    onClick?.(e);
  };

  return (
    <button
      ref={ref}
      className={cn(
        "group relative w-32 cursor-pointer overflow-hidden rounded-full border bg-background p-2 text-center font-semibold touch-manipulation",
        className,
      )}
      onClick={handleClick}
      {...props}
    >
      <span className={cn(
        "inline-block translate-x-1 transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0 group-active:translate-x-12 group-active:opacity-0 group-focus:translate-x-12 group-focus:opacity-0",
        isActive && "translate-x-12 opacity-0"
      )}>
        {text}
      </span>
      <div className={cn(
        "absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-primary-foreground opacity-0 transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-100 group-active:-translate-x-1 group-active:opacity-100 group-focus:-translate-x-1 group-focus:opacity-100",
        isActive && "-translate-x-1 opacity-100"
      )}>
        <span>{text}</span>
        <ArrowRight />
      </div>
      <div className={cn(
        "absolute left-[20%] top-[40%] h-2 w-2 scale-[1] rounded-lg bg-primary transition-all duration-300 group-hover:left-[0%] group-hover:top-[0%] group-hover:h-full group-hover:w-full group-hover:scale-[1.8] group-hover:bg-primary group-active:left-[0%] group-active:top-[0%] group-active:h-full group-active:w-full group-active:scale-[1.8] group-active:bg-primary group-focus:left-[0%] group-focus:top-[0%] group-focus:h-full group-focus:w-full group-focus:scale-[1.8] group-focus:bg-primary",
        isActive && "left-[0%] top-[0%] h-full w-full scale-[1.8] bg-primary"
      )}></div>
    </button>
  );
});

InteractiveHoverButton.displayName = "InteractiveHoverButton";

export { InteractiveHoverButton };
