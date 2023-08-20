import React, { type PropsWithChildren } from "react";

type PageSubSectionProps = {
    title: string;
};
export const PageSubSection = ({
    children,
    title,
}: PropsWithChildren<PageSubSectionProps>) => {
    return (
        <section className="px-4 lg:px-20">
            <h2 className="mb-4 text-5xl font-semibold uppercase text-black lg:mb-12">
                {title}
            </h2>
            {children}
        </section>
    );
};
