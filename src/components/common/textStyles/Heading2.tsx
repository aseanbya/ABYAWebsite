import type { ReactNode } from "react";

type Heading2Props = {
    children: ReactNode;
    className?: string;
};

export default function Heading2(props: Heading2Props) {
    return (
        <p className={`text-3xl font-bold sm:text-4xl md:text-5xl ${props.className ?? ""}`}>
            {props.children}
        </p>
    )
}