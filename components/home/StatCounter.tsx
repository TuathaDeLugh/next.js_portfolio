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
  className = "p-4 rounded-2xl bg-plate border border-white/5",
  numberClassName = "text-2xl font-bold font-mono text-pearl",
  labelClassName = "text-xs font-mono text-pearl-dim mt-1",
}) => {
  const [displayValue, setDisplayValue] = useState<number>(value);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
    const obj = { val: 0 };
    const tween = gsap.to(obj, {
      val: value,
      duration: 1.2,
      ease: "power2.out",
      delay: 0.1,
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
      <div suppressHydrationWarning className={numberClassName}>
        {mounted ? displayValue : value}
        {suffix}
      </div>
      <div className={labelClassName}>{label}</div>
    </div>
  );
};

export default StatCounter;
