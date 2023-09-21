import type { ReactNode } from "react";

type Heading1Props = {
    children: ReactNode;
    className?: string;
};

export default function Heading1(props: Heading1Props) {
    return (
        <h1 className={`text-6xl font-bold sm:text-7xl ${props.className ?? ""}`}>
            {props.children}
        </h1>
    )
}