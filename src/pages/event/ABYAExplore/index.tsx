import PageLayout from "~/components/common/PageLayout";
import ContentContainer from "~/components/common/ContentContainer";
import PageTitleSection from "~/components/common/PageTitleSection";
import ABYAExploreCarousel from "~/components/event/ABYAExploreCarousel";

export default function index() {
    return (
        <PageLayout>
            <PageTitleSection title={"ABYA EXPLORE"}>
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
                <div className="pb-12">
                    <p>
                        ABYA Explore provides a series of sharing and networking
                        sessions that enable ASEAN youths to engage with, and be
                        inspired, by industry professionals.
                    </p>
                    <br />
                    <p>
                        In line with ABYA’s commitment to its vision and
                        mission, ABYA Explore was conducted in the form of
                        webinars, small-group networking sessions with
                        professionals and business leaders in ASEAN. ABYA
                        Explore imparts insights and knowledge to the youth on
                        current industry trends across ASEAN. By gaining
                        different perspectives on these issues, ABYA hopes to
                        broaden the youths’ macro-knowledge of business and
                        cultures of the region.
                    </p>
                </div>
                <h2 className="py-12 text-center text-3xl font-semibold">
                    Interested in finding out how the previous ABYA Explore
                    Series went?
                </h2>
                <div className="flex flex-col pb-12">
                    <div className="flex justify-center">
                        <div className="flex w-full justify-center sm:w-2/3">
                            <ABYAExploreCarousel />
                        </div>
                    </div>
                </div>
            </ContentContainer>
        </PageLayout>
    );
}
