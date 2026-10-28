import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { EASE_OUT, WordReveal } from '@/components/motion/Reveal';

interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

const SectionHeader = ({
  label,
  title,
  description,
  centered = true,
  light = false,
  className,
}: SectionHeaderProps) => {
  return (
    <div
      className={cn(
        'mb-12 md:mb-16',
        centered && 'text-center max-w-3xl mx-auto',
        className
      )}
    >
      {label && (
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE_OUT }}
          className="eyebrow mb-5"
        >
          {label}
        </motion.span>
      )}
      <h2
        className={cn(
          'font-playfair text-3xl md:text-4xl lg:text-5xl font-semibold mb-5 leading-tight',
          light ? 'text-white' : 'text-primary'
        )}
      >
        <WordReveal text={title} />
      </h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: EASE_OUT }}
          className={cn(
            'text-lg leading-relaxed',
            light ? 'text-white/70' : 'text-muted-foreground'
          )}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeader;
