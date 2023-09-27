import type { ReactNode } from "react";

type CaptionProps = {
    children: ReactNode;
    className?: string;
};

export default function Caption(props: CaptionProps) {
    return (
        <h1 className={`text-sm font-normal sm:text-base ${props.className ?? ""}`}>
            {props.children}
        </h1>
    )
}