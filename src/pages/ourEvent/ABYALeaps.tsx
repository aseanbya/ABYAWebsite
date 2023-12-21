import PageLayout from "~/components/common/PageLayout";
import LeapsIntroSection from "~/components/ourEvent/ABYALeaps/LeapsIntroSection";
import LeapsOurValueSection from "~/components/ourEvent/ABYALeaps/LeapsOurValueSection";
import LeapsPreviousEventsSection from "~/components/ourEvent/ABYALeaps/LeapsPreviousEventsSection";
import LeapsTitleSection from "~/components/ourEvent/ABYALeaps/LeapsTitleSection";

export default function ABYALeaps() {
    return (
        <PageLayout>
            <LeapsTitleSection />
            <LeapsIntroSection />
            <LeapsOurValueSection />
            <LeapsPreviousEventsSection />
        </PageLayout>
    );
}
