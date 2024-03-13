import Image from "next/image";
import Heading1 from "../textStyles/Heading1";
import Paragraph from "../textStyles/Paragraph";
import ContentContainer from "./ContentContainer";

export default function PageTitleSection({
  title,
  children,
}: PageTitleSectionProps) {
  return (
    <ContentContainer>
      <div className="flex items-center justify-center py-12 pt-24">
        <div className="relative w-full max-w-7xl">
          <div className="absolute">
            <Heading1 className="justify pb-4 text-6xl font-bold uppercase ">
              {title}
            </Heading1>
            <Paragraph className="line-clamp-4">{children}</Paragraph>
          </div>
          <div className="flex justify-between">
            <div className="w-0 sm:w-1/3"></div>
            <Image
              src={"/singaporeAttractionsGrey.png"}
              alt={""}
              width={400}
              height={400}
              className="w-full max-w-2xl sm:w-2/3"
            />
          </div>
        </div>
      </div>
    </ContentContainer>
  );
}

type PageTitleSectionProps = {
  title: string;
  children: string;
};
