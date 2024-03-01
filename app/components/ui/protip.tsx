// Protip.tsx
import React from 'react';
import { LightBulbIcon, SparklesIcon, ExclamationTriangleIcon, ExclamationCircleIcon, InformationCircleIcon } from '@heroicons/react/24/outline';
import protipVariants, { ProtipProps } from './protip-variants';
import { cn } from "app/lib/utils";

const iconMap = {
  info: InformationCircleIcon,
  tip: LightBulbIcon,
  warning: ExclamationTriangleIcon,
  error: ExclamationCircleIcon,
  // Add other mappings as needed
};

export const Protip = ({
  className,
  title,
  description,
  type = "tip",
}: ProtipProps & {
  className?: string;
  title?: string;
  description: string;
}) => {
    const Icon = iconMap[type as keyof typeof iconMap]; 
  return (
    <div className={cn(protipVariants({ type }), className)}>
      {title && <p className="text-lg font-bold mb-2">{title}</p>}
      <p className="flex items-center gap-2 text-pixel">
        <Icon className="w-5 h-5 flex-shrink-0" />
        {description}
      </p>
      {/* Sparkles icon positioned at the bottom-right corner of the container */}
      <div className="absolute bottom-3 right-3" style={{ transform: 'rotate(25deg) scale(1.5) scaleX(-1)' }}>
        <SparklesIcon className="w-12 h-12 opacity-25" />
      </div>
    </div>
  );
};
