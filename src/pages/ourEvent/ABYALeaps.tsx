import PageLayout from "~/components/common/PageLayout";
import Heading2 from "~/components/common/textStyles/Heading2";
import ContentContainer from "~/components/common/ContentContainer";
import LeapsTitleSection from "~/components/ourEvent/ABYALeaps/LeapsTitleSection";
import { BlogGrid } from "~/components/blog/BlogGrid";
import { LEAPS_CONTENT } from "~/components/details/LeapsEventDetails";
import { LEAPS_VALUES_DETAILS, LeapsOurValueCards } from "../../components/ourEvent/LeapsOurValueCards";

export default function ABYALeaps() {
    return (
        <PageLayout>
            <LeapsTitleSection />
            <ContentContainer>
                <div className="flex flex-col gap-8">
                    <p>
                        LEAPS (Leadership, Exploration and Progress) is an
                        ASEAN-focused industry immersion program, designed to equip
                        and groom students to become industry-relevant future
                        ASEAN-savvy talents.
                        <br /><br />
                        Powered by Young NTUC and the National Youth Council, ABYA
                        LEAPS aims to provide a platform for ASEAN youths to deepen
                        their interest in the ASEAN market and sharpen their
                        technical & soft skills that would be relevant in ASEAN.
                        <br /><br />
                        Any tertiary student / institute of higher learning from all
                        majors who was a citizen of the ASEAN member countries
                        (includes Brunei, Cambodia, Laos, Malaysia, Myanmar,
                        Philippines, Singapore, Thailand, Indonesia, and Vietnam)
                        are invited to the challenge!
                    </p>
                    <Heading2 className="capitalize">
                        Our Values
                    </Heading2>
                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
                        {LEAPS_VALUES_DETAILS.map((value) => (
                            <LeapsOurValueCards
                                key={value.title}
                                title={value.title}
                                content={value.content} />
                        ))}
                    </div>
                    <Heading2 className="capitalize">
                        See the previous events
                    </Heading2>
                    <BlogGrid
                        content={LEAPS_CONTENT}
                        contentType="leaps"
                        length={3}
                    />
                </div>
            </ContentContainer>
        </PageLayout>
    );
}

