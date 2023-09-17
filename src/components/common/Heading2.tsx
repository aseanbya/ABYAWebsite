import type { ReactNode } from "react";

type Heading2Props = {
    children: ReactNode;
    className?: string;
};

export default function Heading2(props: Heading2Props) {
    return (
        <h1 className={`pb-4 text-6xl font-bold uppercase sm:pb-0 sm:text-7xl ${props.className}`}>
            {props.children}
        </h1>
    )
}