import HearFromOurCommunity from "~/components/HearFromOurCommunity";
import PageLayout from "~/components/common/PageLayout";
import PageTitleSection from "~/components/common/PageTitleSection";
import {
  GlobeEuropeAfricaIcon,
  BuildingOfficeIcon,
  FaceSmileIcon,
} from "@heroicons/react/24/solid";
import Heading1 from "~/components/textStyles/Heading1";
import Heading4 from "~/components/textStyles/Heading4";
import ContentContainer from "~/components/common/ContentContainer";
import Image from "next/image";
import Paragraph from "~/components/textStyles/Paragraph";
import { Button } from "~/components/ui/button";

export default function GetInvolved() {
  return (
    <PageLayout>
      <PageTitleSection title={"Get Involved"}>
        At the ASEAN Business Youth Association, we&apos;re always on the
        lookout for synergies – whether you&apos;re an undergraduate, young
        professional, or in senior management, we&apos;ve got a place for you.
      </PageTitleSection>
      <ContentContainer>
        <div className="grid grid-cols-1 grid-rows-3 py-8 sm:grid-cols-3 sm:grid-rows-1 sm:py-0">
          <div className="flex flex-col items-center justify-start text-center duration-200 hover:scale-110">
            <GlobeEuropeAfricaIcon className="w-32" />
            <Heading1 className="pb-4 text-brandBlue">10</Heading1>
            <Heading4>
              Member&apos;s <br /> Countries
            </Heading4>
          </div>
          <div className="sm:border-x-2">
            <div className="flex flex-col items-center justify-start text-center duration-200 hover:scale-110">
              <FaceSmileIcon className="w-32" />
              <Heading1 className="pb-4 text-brandBlue">520</Heading1>
              <Heading4>Members</Heading4>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start text-center duration-200 hover:scale-110">
            <BuildingOfficeIcon className="w-32" />
            <Heading1 className="pb-4 text-brandBlue">40</Heading1>
            <Heading4>
              Affiliated <br /> Companies
            </Heading4>
          </div>
        </div>
      </ContentContainer>
      <ContentContainer>
        <div className="grid grid-rows-3 gap-4 py-8">
          <div className="group flex w-full items-center gap-4 rounded-xl border-2 border-brandBlue p-4 duration-200 hover:bg-brandBlue-10">
            <div className="w-1/3 overflow-hidden object-cover">
              <Image
                src={"/HaveAnyQuestion.jpg"}
                alt={""}
                width={300}
                height={300}
                className="w-full duration-200 group-hover:scale-110"
              />
            </div>
            <div className="flex w-2/3 flex-col gap-3">
              <Heading4>As a member</Heading4>
              <Paragraph>
                Our community seeks to bring together youths who seek to develop
                their competencies in becoming business savvy with a future in
                ASEAN.
              </Paragraph>
              <Button className="w-fit">Learn More</Button>
            </div>
          </div>

          <div className="group flex w-full items-center gap-4 rounded-xl border-2 border-brandYellow p-4 duration-200 hover:bg-brandYellow-10">
            <div className="flex w-2/3 flex-col items-end gap-3 text-end">
              <Heading4>As an executive</Heading4>
              <Paragraph>
                Our community seeks to bring together youths who seek to develop
                their competencies in becoming business savvy with a future in
                ASEAN.
              </Paragraph>
              <Button className="w-fit">Learn More</Button>
            </div>
            <div className="w-1/3 overflow-hidden object-cover">
              <Image
                src={"/HaveAnyQuestion.jpg"}
                alt={""}
                width={300}
                height={300}
                className="w-full duration-200 group-hover:scale-110"
              />
            </div>
          </div>

          <div className="group flex w-full items-center gap-4 rounded-xl border-2 border-brandRed p-4 duration-200 hover:bg-brandRed-10">
            <div className="w-1/3 overflow-hidden object-cover">
              <Image
                src={"/HaveAnyQuestion.jpg"}
                alt={""}
                width={300}
                height={300}
                className="w-full duration-200 group-hover:scale-110"
              />
            </div>
            <div className="flex w-2/3 flex-col gap-3">
              <Heading4>Partner Us</Heading4>
              <Paragraph>
                Our community seeks to bring together youths who seek to develop
                their competencies in becoming business savvy with a future in
                ASEAN.
              </Paragraph>
              <Button className="w-fit">Learn More</Button>
            </div>
          </div>
        </div>
      </ContentContainer>
      <HearFromOurCommunity />
    </PageLayout>
  );
}
