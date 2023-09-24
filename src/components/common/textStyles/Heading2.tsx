import type { ReactNode } from "react";

type Heading2Props = {
    children: ReactNode;
    className?: string;
};

export default function Heading2(props: Heading2Props) {
    return (
        <h1 className={`text-5xl font-bold sm:text-6xl ${props.className ?? ""}`}>
            {props.children}
        </h1>
    )
}