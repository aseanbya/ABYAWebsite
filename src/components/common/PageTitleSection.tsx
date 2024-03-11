import type { ReactNode } from "react";
import Image from "next/image";

export default function PageTitleSection({
  title,
  children,
}: PageTitleSectionProps) {
  return (
    <div className="flex items-center justify-center py-12 pt-24">
      <div className="relative w-full max-w-7xl">
        <div className="absolute">
          <h1 className="pb-4 text-6xl font-bold uppercase">{title}</h1>
          {children}
        </div>
        <div className="flex justify-between">
          <div className="w-0 sm:w-1/3"></div>
          <Image
            src={"/singaporeAttractionsGrey.png"}
            alt={""}
            width={400}
            height={400}
            className="w-full max-w-2xl sm:w-2/3"
          />
        </div>
      </div>
    </div>
  );
}

type PageTitleSectionProps = {
  title: string;
  children: ReactNode;
};
