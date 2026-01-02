import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  index: number;
  isReversed: boolean;
}

export function ServiceCard({ title, description, image, index, isReversed }: ServiceCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.8]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
      className="relative"
    >
      <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
        {/* Image Column */}
        <motion.div 
          className={`relative overflow-hidden rounded-2xl group ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}
          style={{ y }}
        >
          <div className="aspect-[16/10] overflow-hidden rounded-2xl">
            <motion.img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105"
              loading="lazy"
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
          </div>
          
          {/* Premium shadow effect */}
          <div className="absolute -inset-4 bg-primary/5 rounded-3xl -z-10 group-hover:bg-primary/10 transition-colors duration-500 blur-xl" />
          
          {/* Service number indicator */}
          <div className="absolute top-6 left-6 bg-secondary/90 backdrop-blur-sm rounded-lg px-4 py-2">
            <span className="text-primary font-bold text-lg">0{index + 1}</span>
          </div>
        </motion.div>

        {/* Content Column */}
        <motion.div 
          className={`space-y-6 ${isReversed ? 'lg:order-1 lg:text-right' : 'lg:order-2'}`}
          style={{ opacity }}
        >
          {/* Title */}
          <div className={`space-y-4 ${isReversed ? 'lg:items-end' : ''}`}>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "80px" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className={`h-1 bg-primary rounded-full ${isReversed ? 'lg:ml-auto' : ''}`}
            />
            <h3 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
              {title}
            </h3>
          </div>

          {/* Description */}
          <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
            {description}
          </p>

          {/* Decorative element */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className={`flex items-center gap-3 pt-4 ${isReversed ? 'lg:justify-end' : ''}`}
          >
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Enterprise-Grade Solution
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* Separator line */}
      <motion.div 
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-16 lg:mt-24 h-px bg-gradient-to-r from-transparent via-border to-transparent origin-left"
      />
    </motion.div>
  );
}
