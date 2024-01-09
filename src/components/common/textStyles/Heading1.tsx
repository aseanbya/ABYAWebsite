import type { ReactNode } from "react";

export default function Heading1(props: Heading1Props) {
    return (
        <p className={`text-5xl font-bold sm:text-6xl md:text-7xl ${props.className ?? ""}`}>
            {props.children}
        </p>
    )
}

type Heading1Props = {
    children: ReactNode;
    className?: string;
};
