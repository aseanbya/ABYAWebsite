import PageLayout from "~/components/common/PageLayout";
import ExplorePreviousEventsSection from "~/components/ourEvent/ABYAExplore/ExplorePreviousEventsSection";
import ExploreTitleSection from "~/components/ourEvent/ABYAExplore/ExploreTitleSection";
import WhatIsABYAExploreSection from "~/components/ourEvent/ABYAExplore/WhatIsABYAExploreSection";

export default function ABYAExplore() {
    return (
        <PageLayout>
            <ExploreTitleSection />
            <WhatIsABYAExploreSection />
            <ExplorePreviousEventsSection />
        </PageLayout>
    );
}
