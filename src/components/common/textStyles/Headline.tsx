import type { ReactNode } from "react";

export default function Headline(props: HeadlineProps) {
    return (
        <h1 className={`text-2xl font-semibold sm:text-3xl ${props.className ?? ""}`}>
            {props.children}
        </h1>
    )
}

type HeadlineProps = {
    children: ReactNode;
    className?: string;
};