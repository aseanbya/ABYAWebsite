import type { ReactNode } from "react";

type Heading1Props = {
    children: ReactNode;
    className?: string;
};

export default function Heading1(props: Heading1Props) {
    return (
        <h1 className={`pb-4 text-6xl font-bold uppercase sm:pb-0 sm:text-7xl ${props.className}`}>
            {props.children}
        </h1>
    )
}