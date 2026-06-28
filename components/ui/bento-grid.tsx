import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-6 md:auto-rows-[22rem] md:grid-cols-3",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "group/bento shadow-lg row-span-1 flex flex-col justify-between space-y-4 rounded-2xl border border-[#9BA4B5]/40 bg-white p-6 transition-all duration-300 hover:shadow-xl hover:border-[#212A3E] dark:border-white/[0.2] dark:bg-black dark:shadow-none pointer-events-auto",
        className,
      )}
    >
      {header}
      <div className="transition duration-200 group-hover/bento:translate-x-2">
        {icon}
        <div className="mt-4 mb-2 font-sans text-xl font-bold text-[#212A3E] group-hover/bento:text-[#394867] transition-colors duration-300">
          {title}
        </div>
        <div className="font-sans text-sm font-normal text-[#394867]/90 leading-relaxed">
          {description}
        </div>
      </div>
    </div>
  );
};
