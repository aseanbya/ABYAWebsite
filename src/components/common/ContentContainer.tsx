import type { ReactNode } from "react";
import React from "react";

type PageContentContainerProps = {
  children: ReactNode;
  className?: string;
};

export default function ContentContainer({
  children,
  className,
}: PageContentContainerProps) {
  return (
    <div className={`flex justify-center ${className ?? ""}`}>
      <div className="w-full max-w-7xl items-center p-9">{children}</div>
    </div>
  );
}
