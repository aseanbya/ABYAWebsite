import type { ReactNode } from "react";

export default function Caption(props: CaptionProps) {
    return (
        <h1 className={`text-sm font-normal sm:text-base ${props.className ?? ""}`}>
            {props.children}
        </h1>
    )
}

type CaptionProps = {
    children: ReactNode;
    className?: string;
};