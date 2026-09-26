"use client";

import React, { useEffect, useState } from "react";
import gsap from "gsap";

interface StatCounterProps {
  value: number;
  label: string;
  suffix?: string;
  className?: string;
  numberClassName?: string;
  labelClassName?: string;
}

export const StatCounter: React.FC<StatCounterProps> = ({
  value,
  label,
  suffix = "+",
  className = "group cursor-default interactive-lift p-2 rounded-xl hover:bg-green-50/50",
  numberClassName = "text-2xl font-bold text-gray-900 group-hover:text-green-600 transition-colors",
  labelClassName = "text-xs text-gray-400 font-medium mt-0.5",
}) => {
  const [displayValue, setDisplayValue] = useState<number>(value);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
    const obj = { val: 0 };
    const tween = gsap.to(obj, {
      val: value,
      duration: 1.5,
      ease: "power2.out",
      delay: 0.2,
      onUpdate: () => {
        setDisplayValue(Math.floor(obj.val));
      },
      onComplete: () => {
        setDisplayValue(value);
      },
    });

    return () => {
      tween.kill();
    };
  }, [value]);

  return (
    <div className={className}>
      <div
        suppressHydrationWarning
        className={numberClassName}
      >
        {mounted ? displayValue : value}
        {suffix}
      </div>
      <div className={labelClassName}>{label}</div>
    </div>
  );
};

export default StatCounter;
