import React, { type ReactNode } from "react";
import PageLayout from "../common/PageLayout";
import PageTitleSection from "../common/PageTitleSection";
import ContentContainer from "../common/ContentContainer";
import Image, { type StaticImageData } from "next/image";

type BlogSubpageTemplateProps = {
    title: string;
    children?: ReactNode;
    description: string;
    src: StaticImageData;
    alt: string;
};

// A template for blog subpages See issue #53
export const BlogSubpageTemplate: React.FC<BlogSubpageTemplateProps> = ({
    children,
    title,
    description,
    src,
    alt,
}) => {
    return (
        <PageLayout>
            <div className="my-2 flex flex-col items-center lg:my-12 lg:flex-row lg:px-8 2xl:my-20 2xl:px-20">
                <div className="basis-2/5">
                    <PageTitleSection title={title}>
                        <h2>{description}</h2>
                    </PageTitleSection>
                </div>
                <div className="basis-3/5">
                    <Image src={src} alt={alt} objectFit="cover" />
                </div>
            </div>
            <ContentContainer className="my-4 lg:my-20">
                {children}
            </ContentContainer>
        </PageLayout>
    );
};
