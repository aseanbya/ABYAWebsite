import { ReactNode } from "react";
import ContentContainer from "~/components/common/ContentContainer";
import PageLayout from "~/components/common/PageLayout";
import Image, { StaticImageData } from "next/image"
import test from "src/assets/annualImpactReport.png"

type BlogTemplateProps = {
    title?: string,
    image?: string | StaticImageData,
    children: ReactNode;
}

export default function BlogTemplate({ title, image, children }: BlogTemplateProps) {
    return (
        <PageLayout>
            <ContentContainer>
                <div className="grid grid-cols-1 sm:grid-cols-2 items-center pb-8">
                    <h1 className="text-5xl sm:text-7xl font-bold text-black pb-2 capitalize">
                        {title ?? "Blog's Title Goes Here"}
                    </h1>
                    <Image src={image ?? test} alt={""} className="h-full w-full bg-neutral-200" />
                </div>
                {children}
            </ContentContainer>
        </PageLayout>
    );
}