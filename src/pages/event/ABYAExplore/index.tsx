import ContentContainer from "~/components/common/ContentContainer";
import PageLayout from "~/components/common/PageLayout";
import ExploreIntroSection from "~/components/event/ABYAExplore/ExploreIntroSection";
import ExplorePreviousEvents from "~/components/event/ABYAExplore/ExplorePreviousEvents";
import ExploreTitleSection from "~/components/event/ABYAExplore/ExploreTitleSection";

export default function abyaExplore() {
    return (
        <PageLayout>
            <ExploreTitleSection />
            <ContentContainer>
                <ExploreIntroSection />
                <ExplorePreviousEvents />
            </ContentContainer>
        </PageLayout>
    );
}
