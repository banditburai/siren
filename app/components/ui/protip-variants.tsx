// protipVariants.js
import { cva, type VariantProps } from 'class-variance-authority';

const protipVariants = cva(
  "relative flex flex-col items-start p-6 rounded-lg overflow-hidden my-4",
  {
    variants: {
      type: {
        info: "bg-retro-info bg-opacity-50 text-retro-darkslate dark:text-retro-palecream border-l-4 border-retro-border-info",
        tip: "bg-retro-tip bg-opacity-50 text-retro-darkslate dark:text-retro-palecream border-l-4 border-retro-border-tip",
        warning: "bg-retro-warning bg-opacity-50 text-retro-darkslate dark:text-retro-palecream border-l-4 border-retro-border-warning",
        error: "bg-retro-error bg-opacity-50 text-retro-darkslate dark:text-retro-palecream border-l-4 border-retro-border-error",
        
      },
    },
    defaultVariants: {
      type: "tip",
    },
  }
);

export type ProtipProps = VariantProps<typeof protipVariants>;

export default protipVariants;
