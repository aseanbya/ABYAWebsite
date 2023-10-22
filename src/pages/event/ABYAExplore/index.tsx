import PageLayout from "~/components/common/PageLayout";
import ExplorePreviousEventsSection from "~/components/event/ABYAExplore/ExplorePreviousEventsSection";
import ExploreTitleSection from "~/components/event/ABYAExplore/ExploreTitleSection";
import WhatIsABYAExploreSection from "~/components/event/ABYAExplore/WhatIsABYAExploreSection";

export default function ABYAExplore() {
    return (
        <PageLayout>
            <ExploreTitleSection />
            <WhatIsABYAExploreSection />
            <ExplorePreviousEventsSection />
        </PageLayout>
    );
}
