import ContentContainer from "~/components/common/ContentContainer";
import PageLayout from "~/components/common/PageLayout";
import PageTitleSection from "~/components/common/PageTitleSection";
import ABYAExploreCarousel from "~/components/event/ABYAExploreCarousel";
import ABYALeapCarousel from "~/components/event/ABYALeapCarousel";
import ABYAExploreSection from "~/components/event/ABYALeaps/ABYAExploreSection";
import ABYALeapsSection from "~/components/event/ABYALeapsSection";
import EventTitleSection from "~/components/event/EventTitleSection";
import LeapsValues from "~/components/event/LeapsValues";

function AboutUsButton() {
    return (
        <a
            type="button"
            className="w-fit rounded-xl bg-brandBlue px-4 py-2 text-white
            hover:bg-slate-700"
        >
            <p className="text-xl font-bold">Upcoming LEAPS</p>
        </a>
    );
}

export default function event() {
    return (
        <PageLayout>
            <EventTitleSection />
            <ABYALeapsSection />
            <ContentContainer>
                <div className="mb-12 flex flex-col items-center justify-between sm:flex-row ">
                    <h1 className="w-full pb-6 text-4xl sm:w-1/3 sm:pb-0">
                        Want to find out more about how the previous years of
                        LEAPS went?
                    </h1>
                    <div className="flex w-full justify-end sm:w-2/3">
                        <ABYALeapCarousel />
                    </div>
                </div>
            </ContentContainer>
            <ABYAExploreSection />
            <ContentContainer>
                <div className="mb-12 flex flex-col items-center justify-between sm:flex-row ">
                    <h1 className="w-full pb-6 text-4xl sm:w-1/3 sm:pb-0">
                        Interested in finding out how the previous ABYA Explore
                        Series went?
                    </h1>
                    <div className="flex w-full justify-end sm:w-2/3">
                        <ABYAExploreCarousel />
                    </div>
                </div>
            </ContentContainer>
        </PageLayout>
    );
}
