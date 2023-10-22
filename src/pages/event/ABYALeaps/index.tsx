import PageLayout from "~/components/common/PageLayout";
import LeapsIntroSection from "~/components/event/ABYALeaps/LeapsIntroSection";
import LeapsOurValueSection from "~/components/event/ABYALeaps/LeapsOurValueSection";
import LeapsPreviousEventsSection from "~/components/event/ABYALeaps/LeapsPreviousEventsSection";
import LeapsTitleSection from "~/components/event/ABYALeaps/LeapsTitleSection";

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
