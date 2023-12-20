import ContentContainer from "~/components/common/ContentContainer";
import PageLayout from "~/components/common/PageLayout";
import ABYAExploreCarousel from "~/components/ourEvent/ABYAExploreCarousel";
import ABYALeapCarousel from "~/components/ourEvent/ABYALeapCarousel";
import ABYAExploreSection from "~/components/ourEvent/ABYALeaps/ABYAExploreSection";
import ABYALeapsSection from "~/components/ourEvent/ABYALeapsSection";
import EventTitleSection from "~/components/ourEvent/EventTitleSection";
import Heading3 from "~/components/common/textStyles/Heading3";
import CommonButton from "~/components/common/buttons/BlueFilledButton";

export default function OurEvent() {
    return (
        <PageLayout>
            <EventTitleSection />
            <ABYALeapsSection />
            <ContentContainer>
                <div className="mb-12 flex flex-col items-center justify-between sm:flex-row ">
                    <div>
                        <Heading3>See how the programs go each year</Heading3>
                        <CommonButton type={"button"} className="rounded-xl bg-brandBlue px-4 py-2 text-white hover:bg-slate-700 mt-4">
                            Upcomming Leaps
                        </CommonButton>
                    </div>
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