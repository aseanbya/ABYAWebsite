import ContentContainer from "~/components/common/ContentContainer";
import Heading1 from "~/components/common/textStyles/Heading1";
import PageLayout from "~/components/common/PageLayout";
import ABYAExploreCarousel from "~/components/event/ABYAExploreCarousel";
import ABYALeapCarousel from "~/components/event/ABYALeapCarousel";
import ABYAExploreSection from "~/components/event/ABYALeaps/ABYAExploreSection";
import ABYALeapsSection from "~/components/event/ABYALeapsSection";
import EventTitleSection from "~/components/event/EventTitleSection";
import Heading3 from "~/components/common/textStyles/Heading3";

export default function event() {
    return (
        <PageLayout>
            <EventTitleSection />
            <ABYALeapsSection />
            <ContentContainer>
                <div className="mb-12 flex flex-col items-center justify-between sm:flex-row ">
                    <Heading3>See how the programs go each year</Heading3>
                    <div className="flex w-full justify-end sm:w-2/3">
                        <ABYALeapCarousel />
                    </div>
                </div>
            </ContentContainer>
            <ABYAExploreSection />
            <ContentContainer>
                <div className="mb-12 flex flex-row items-center justify-between sm:flex-row ">
                    <div className="w-1/2">
                        <Heading3>
                            Interested in finding out how the previous ABYA
                            Explore Series went?
                        </Heading3>
                    </div>
                    <div className="flex w-full justify-end sm:w-2/3">
                        <ABYAExploreCarousel />
                    </div>
                </div>
            </ContentContainer>
        </PageLayout>
    );
}
