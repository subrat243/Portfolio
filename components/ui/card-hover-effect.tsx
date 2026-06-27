"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { LockClosedIcon, ShieldCheckIcon } from "@heroicons/react/24/solid";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description?: string;
    practices?: string[];
    link?: string;
    principles?: string[];
    fullWidth?: boolean;
    items?: string[];
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 gap-4",
        className
      )}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      {items.map((item, idx) => {
        const content = (
          <>
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  key="hoverBackground"
                  className="absolute inset-0 h-full w-full bg-[#9BA4B5]/30 block rounded-3xl"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15 },
                  }}
                  transition={{
                    layout: { duration: 0.25, ease: "easeOut" },
                  }}
                />
              )}
            </AnimatePresence>
            <Card
              className={
                item.principles
                  ? "p-6 md:p-8 bg-white border-[#9BA4B5]/40 shadow-sm hover:shadow-md transition-all duration-300 w-full text-center"
                  : item.items
                  ? "bg-white border border-[#9BA4B5]/40 rounded-2xl p-7 min-h-[240px] text-[#212A3E] shadow-sm hover:shadow-md hover:border-[#212A3E]/50 transition-all duration-300 z-20"
                  : item.practices
                  ? "p-3 bg-white border-[#9BA4B5]/40 shadow-sm hover:shadow-md transition-all duration-300 min-h-[320px]"
                  : "bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700"
              }
            >
              {item.principles ? (
                <>
                  <motion.div whileHover={{ scale: 1.05 }} className="mb-6">
                    <ShieldCheckIcon className="w-16 h-16 text-[#212A3E] mx-auto mb-4" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-[#212A3E] mb-4">
                    <span>{item.title}</span>
                  </h3>
                  <p className="text-[#394867] leading-relaxed max-w-2xl mx-auto text-lg">
                    {item.description}
                  </p>
                  {/* Key Principles */}
                  <div className="flex flex-wrap justify-center gap-4 mt-6">
                    {item.principles.map((principle, index) => (
                      <motion.span
                        key={principle}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 + 0.2 }}
                        whileHover={{ scale: 1.05 }}
                        className="px-4 py-2 bg-white border border-[#9BA4B5]/40 rounded-full text-sm text-[#212A3E] hover:border-[#212A3E] hover:bg-[#212A3E]/5 transition-all duration-300 font-medium"
                      >
                        {principle}
                      </motion.span>
                    ))}
                  </div>
                </>
              ) : item.items ? (
                <>
                  <h3 className="text-2xl font-bold mb-6 text-[#212A3E]">
                    {item.title}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {item.items.map((name, i) => (
                      <motion.span
                        key={`${item.title}-${name}`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 + 0.3 }}
                        whileHover={{ scale: 1.1 }}
                        className="text-sm px-4 py-2 rounded-full bg-[#F1F6F9] border border-[#9BA4B5]/30 text-[#394867] hover:border-[#212A3E] hover:bg-[#212A3E]/5 transition-all duration-200 cursor-default font-medium"
                      >
                        {name}
                      </motion.span>
                    ))}
                  </div>
                </>
              ) : item.practices ? (
                <>
                  <div className="flex items-center mb-6">
                    <div className="p-2 rounded-lg bg-[#F1F6F9] border border-[#9BA4B5]/30 mr-4">
                      <LockClosedIcon className="w-6 h-6 text-[#212A3E]" />
                    </div>
                    <h3 className="text-xl font-bold text-[#212A3E]">
                      {item.title}
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {item.practices.map((practice) => (
                      <div
                        key={practice}
                        className="flex items-start gap-3 group/item cursor-default"
                      >
                        <div className="flex-shrink-0 mt-2">
                          <div className="w-2 h-2 rounded-full bg-[#394867] group-hover/item:scale-125 transition-transform duration-200" />
                        </div>
                        <span className="text-sm text-[#394867]/95 leading-relaxed group-hover/item:text-[#212A3E] transition-colors duration-200">
                          {practice}
                        </span>
                      </div>
                    ))}
                  </div>
                  {/* Decorative Elements */}
                  <motion.div
                    animate={{
                      opacity: [0.3, 0.6, 0.3],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: idx * 0.5,
                    }}
                    className="absolute top-4 right-4 w-2 h-2 bg-[#9BA4B5] rounded-full"
                  />
                </>
              ) : (
                <>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </>
              )}
            </Card>
          </>
        );

        const wrapperClass = cn(
          "relative group block p-2 h-full w-full",
          item.fullWidth ? "md:col-span-2 lg:col-span-3" : ""
        );

        if (item.link) {
          return (
            <a
              href={item.link}
              key={item.link}
              className={wrapperClass}
              onMouseEnter={() => setHoveredIndex(idx)}
            >
              {content}
            </a>
          );
        }

        return (
          <div
            key={item.title}
            className={wrapperClass}
            onMouseEnter={() => setHoveredIndex(idx)}
          >
            {content}
          </div>
        );
      })}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
