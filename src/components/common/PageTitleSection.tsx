import type { ReactNode } from "react";
import Image from "next/image";
import singaporeAttractionsGrey from "src/assets/singaporeAttractionsGrey.png";
import ContentContainer from "./ContentContainer";
import Heading1 from "./textStyles/Heading1";

export default function PageTitleSection({ title, children, }: PageTitleSectionProps) {
    return (
        <ContentContainer>
            <div className="stack w-full items-center">
                <div>
                    <Heading1 className="pb-4 uppercase">{title}</Heading1>
                    {children}
                </div>
                <div className="flex justify-between">
                    <div className="w-0 sm:w-1/3"></div>
                    <Image src={singaporeAttractionsGrey} alt={""} className="w-full max-w-2xl sm:w-2/3" />
                </div>
            </div>
        </ContentContainer>
    );
}

type PageTitleSectionProps = {
    title: string;
    children: ReactNode;
};