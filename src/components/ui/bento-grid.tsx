import { cn } from "~/utils/cn";
import Image from "next/image";

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
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3 ",
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
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: string;
}) => {
  return (
    <div
      className={cn(
        "group/bento shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-transparent bg-white p-4 transition duration-200 hover:shadow-xl",
        className,
      )}
    >
      <div className="flex h-3/4 w-full overflow-hidden">
        <Image
          src={header ?? ""}
          alt={""}
          height={300}
          width={300}
          className="w-full object-cover duration-200 group-hover/bento:scale-105"
        />
      </div>
      <div className="transition duration-200 group-hover/bento:translate-x-2">
        <div className="mb-2 font-bold text-neutral-600 dark:text-neutral-200">
          {title}
        </div>
        <div className="text-xs font-normal text-neutral-600 dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};
