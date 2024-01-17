import type { ReactNode } from "react";

export default function Heading3(props: Heading3Props) {
    return (
        <p className={`text-xl font-bold sm:text-2xl md:text-3xl ${props.className ?? ""}`}>
            {props.children}
        </p>
    )
}

type Heading3Props = {
    children: ReactNode;
    className?: string;
};