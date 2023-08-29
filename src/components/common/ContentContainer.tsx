import type { ReactNode } from "react";
import React from "react";

type PageContentContainerProps = {
    children: ReactNode;
    className?: string;
};

export default function ContentContainer({ children, className }: PageContentContainerProps) {
    return (
        <div className={`flex justify-center ${className || ""}`}>
            <div className="p-9 items-center w-full max-w-7xl">
                {children}
            </div>
        </div>
    );
}
