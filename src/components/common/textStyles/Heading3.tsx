import type { ReactNode } from "react";

type Heading3Props = {
    children: ReactNode;
    className?: string;
};

export default function Heading3(props: Heading3Props) {
    return (
        <h1 className={`text-3xl font-bold sm:text-4xl ${props.className ?? ""}`}>
            {props.children}
        </h1>
    )
}