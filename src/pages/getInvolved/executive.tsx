import PageLayout from "~/components/common/PageLayout";
import ContentContainer from "~/components/common/ContentContainer";
import PageTitleSection from "~/components/common/PageTitleSection";
import { Cog6ToothIcon, FaceSmileIcon } from "@heroicons/react/24/solid";
import Heading2 from "~/components/textStyles/Heading2";
import Heading4 from "~/components/textStyles/Heading4";

export default function Executive() {
  return (
    <PageLayout>
      <PageTitleSection title={"JOIN ABYA EXECUTIVE"}>
        Excepteur id cupidatat esse adipisicing reprehenderit veniam occaecat
        amet fugiat id sit fugiat. Est elit excepteur commodo magna deserunt
        anim nisi irure. Elit magna non quis ipsum adipisicing consectetur et
        excepteur. Nulla in elit amet exercitation officia ea fugiat sint.
        Incididunt dolore irure consequat consequat amet minim aliqua excepteur.
        Deserunt deserunt proident ipsum non cupidatat ex et laborum laboris
        dolor id excepteur ea tempor nulla. Ullamco magna laborum labore aliqua
        incididunt cillum.
      </PageTitleSection>
      <ContentContainer>
        <div className="grid grid-cols-2 pb-32 pt-8">
          <div className="justify-top flex flex-col items-center">
            <FaceSmileIcon className="w-32" />
            <Heading2 className="pb-2 font-bold text-brandBlue">37</Heading2>
            <Heading4 className="text-center">Executives</Heading4>
          </div>
          <div className="justify-top flex flex-col items-center border-l-2 border-neutral-400">
            <Cog6ToothIcon className="w-32" />
            <Heading2 className="pb-2 font-bold text-brandBlue">4</Heading2>
            <Heading4 className="text-center">Departments</Heading4>
          </div>
        </div>
      </ContentContainer>
    </PageLayout>
  );
}
