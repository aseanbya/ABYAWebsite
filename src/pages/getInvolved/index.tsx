import PageLayout from "~/components/common/PageLayout";
import OurCommunity from "~/components/common/OurCommunity";
import PageTitleSection from "~/components/common/PageTitleSection";
import { Card } from "../../components/getInvolved/Card";
import ContentContainer from "~/components/common/ContentContainer";
import Image from "next/image";
import World from "src/assets/World.png";

export default function getInvolved() {
    return (
        <PageLayout>
            <PageTitleSection title={"Get Involved"}>
                <h2>
                    Amet ex ipsum adipisicing. Consectetur veniam officia
                    pariatur officia in et dolor ex sint consectetur. Dolor
                    aliqua ipsum et labore est. Enim ea tempor quis sint eu non
                    commodo non id anim id non laborum labore. Veniam consequat
                    pariatur duis. Dolor ut laborum in et esse anim commodo eu
                    minim pariatur officia pariatur sit non. Sit aliquip anim
                    sunt eiusmod proident labore Lorem est sit aliqua sunt minim
                    minim occaecat ut.
                </h2>
            </PageTitleSection>
            <ContentContainer>
                <div className="grid grid-cols-3 grid-rows-3">
                    <div>
                        <Image src={World} alt={"the world"}/> 
                    </div>
                    
                    <div>520 Members</div>
                    <div>40 Affiliated Companies</div>
                    <div>10 Member's Countries</div>
                    <div>520 Members</div>
                    <div>40 Affiliated Companies</div>
                    <div>10 Member's Countries</div>
                    <div>520 Members</div>
                    <div>40 Affiliated Companies</div>
                </div>
                <div className="flex flex-col items-center">
                    <section className="flex flex-col justify-center gap-5 lg:flex-row">
                        <Card
                            title="As a member"
                            description="Our community seeks to bring together youths who seek to develop their competencies in becoming business savvy with a future in ASEAN."
                            href="/getInvolved/member"
                            image=""
                            borderColor="border-brandRed"
                        />
                        <Card
                            title="As an executive"
                            description="Our community seeks to bring together youths who seek to develop their competencies in becoming business savvy with a future in ASEAN."
                            href="/getInvolved/executive"
                            image=""
                            borderColor="border-brandBlue"
                        />
                        <Card
                            title="Partner Us"
                            description="Our community seeks to bring together youths who seek to develop their competencies in becoming business savvy with a future in ASEAN."
                            href="/getInvolved/partner"
                            image="/ABYAteam.jpg"
                            borderColor="border-brandYellow"
                        />
                    </section>
                </div>
            </ContentContainer>
            <OurCommunity />
        </PageLayout>
    );
}
