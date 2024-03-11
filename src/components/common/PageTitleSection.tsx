import type { ReactNode } from "react";
import Image from "next/image";

export default function PageTitleSection({
  title,
  children,
}: PageTitleSectionProps) {
  return (
    <div className="w-full max-w-7xl items-center">
      <div>
        <h1 className="pb-4 uppercase">{title}</h1>
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
  );
}

type PageTitleSectionProps = {
  title: string;
  children: ReactNode;
};
