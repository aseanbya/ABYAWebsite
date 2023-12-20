import React, { type PropsWithChildren } from "react";
import Link from "next/link";
import Heading2 from "./textStyles/Heading2";

type PageSubSectionProps = {
    title: string;
    titleLink?: string;
};
export const PageSubSection = ({
    children,
    title,
    titleLink,
}: PropsWithChildren<PageSubSectionProps>) => {
    return (
        <>
            <Heading2 className="uppercase">
                {titleLink ? (
                    <Link
                        href={titleLink}
                        className="transition-all duration-300 hover:text-brandBlue-40"
                    >
                        {title}
                    </Link>
                ) : (
                    title
                )}
            </Heading2>
            {children}
        </>
    );
};
