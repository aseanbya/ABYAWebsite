import type { ReactNode } from "react";

type HeadlineProps = {
    children: ReactNode;
    className?: string;
};

export default function Headline(props: HeadlineProps) {
    return (
        <h1 className={`text-2xl font-semibold sm:text-3xl ${props.className ?? ""}`}>
            {props.children}
        </h1>
    )
}