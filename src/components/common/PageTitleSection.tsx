import type { ReactNode } from "react";
import Image from "next/image";
import singaporeAttractionsGrey from "src/assets/singaporeAttractionsGrey.png";
import ContentContainer from "./ContentContainer";

type PageTitleSectionProps = {
    title: string;
    children: ReactNode;
};

export default function PageTitleSection({
    title,
    children,
}: PageTitleSectionProps) {
    return (
        <ContentContainer>
            <div className="stack w-full items-center">
                <div>
                    <h1 className="pb-2 text-5xl font-bold uppercase text-black sm:text-7xl ">
                        {title}
                    </h1>
                    {children}
                </div>
                <div className="flex justify-between">
                    <div className="w-0 sm:w-1/3"></div>
                    <Image
                        src={singaporeAttractionsGrey}
                        alt={""}
                        className="w-full max-w-2xl sm:w-2/3"
                    />
                </div>
            </div>
        </ContentContainer>
    );
}
