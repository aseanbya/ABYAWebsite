import React, { type PropsWithChildren } from "react";
import Link from "next/link";

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
        <section className="px-4 lg:px-9">
            <h2 className="mb-4 text-5xl font-semibold uppercase text-black lg:mb-12">
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
            </h2>
            {children}
        </section>
    );
};
