import type { ReactNode } from "react";

export default function Heading4(props: Heading4Props) {
    return (
        <p className={`text-lg font-bold sm:text-xl md:text-2xl ${props.className ?? ""}`}>
            {props.children}
        </p>
    )
};

type Heading4Props = {
    children: ReactNode;
    className?: string;
}