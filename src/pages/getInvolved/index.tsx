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

export default function GetInvolved() {
  return (
    <PageLayout>
      <PageTitleSection
        title={"Get Involved"}
        children="At the ASEAN Business Youth Association, we're always on the lookout for synergies – whether you're an undergraduate, young professional, or in senior management, we've got a place for you."
      />
      <div className="grid grid-cols-3 px-10">
        <div className="grid grid-rows-3 justify-center border-r-2 text-center">
          <GlobeEuropeAfricaIcon className="w-32" />
          <Heading1>10</Heading1>
          <Heading4>
            Member's <br /> Countries
          </Heading4>
        </div>
        <div className="grid grid-rows-3 justify-center text-center">
          <FaceSmileIcon className="w-32" />
          <Heading1>520</Heading1>
          <Heading4>Members</Heading4>
        </div>
        <div className="flex justify-center border-l-2 text-center">
          <BuildingOfficeIcon className="w-32" />
          <Heading1>40</Heading1>
          <Heading4>
            Affiliated <br /> Companies
          </Heading4>
        </div>
      </div>
      <HearFromOurCommunity />
    </PageLayout>
  );
}
