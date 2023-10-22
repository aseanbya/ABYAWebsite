import React, { type ReactNode, useState } from "react";

type CollapseProps = {
    heading: string;
    children: ReactNode;
    initialOpen?: boolean;
};

// Collapse component for executive page
export default function Collapse({
    heading,
    children,
    initialOpen,
}: CollapseProps) {
    const [isOpen, setIsOpen] = useState(initialOpen);
    const toggleCollapse = () => setIsOpen(!isOpen);

    return (
        <div className="my-4 flex flex-col overflow-hidden rounded-md">
            <div
                className="flex cursor-pointer select-none items-center justify-start gap-1 py-2 text-gray-100"
                onClick={toggleCollapse}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className={`mr-2 h-4 w-4 transform transition-all duration-300 ease-in-out ${
                        isOpen ? "rotate-90 text-gray-400" : "text-neutral-100"
                    }`}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                </svg>
                <span className="text-neutral-100">{heading}</span>
            </div>

            <div className="ml-8 flex flex-col gap-2 text-neutral-400">
                {isOpen && children}
            </div>
        </div>
    );
}
