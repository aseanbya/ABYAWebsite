import ContentContainer from "~/components/common/ContentContainer";
import PageLayout from "~/components/common/PageLayout";
import { PageSubSection } from "~/components/common/PageSubSection";
import { VALUE_DETAILS } from "~/components/details/LeapsValueDetails";
import LeapsIntroSection from "~/components/event/ABYALeaps/LeapsIntroSection";
import LeapsOurValueSection from "~/components/event/ABYALeaps/LeapsOurValueSection";
import LeapsPreviousEventsSection from "~/components/event/ABYALeaps/LeapsPreviousEventsSection";
import LeapsTitleSection from "~/components/event/ABYALeaps/LeapsTitleSection";

export default function ABYALeaps() {
    return (
        <PageLayout>
            <LeapsTitleSection />
            <LeapsIntroSection />
            <LeapsOurValueSection values={VALUE_DETAILS} />
            <LeapsPreviousEventsSection />
        </PageLayout>
    );
}
