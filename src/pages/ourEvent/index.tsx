import ContentContainer from "~/components/common/ContentContainer";
import PageLayout from "~/components/common/PageLayout";
import ABYAExploreCarousel from "~/components/ourEvent/ABYAExploreCarousel";
import ABYALeapCarousel from "~/components/ourEvent/ABYALeapCarousel";
import EventTitleSection from "~/components/ourEvent/EventTitleSection";
import Heading3 from "~/components/common/textStyles/Heading3";
import Heading2 from "~/components/common/textStyles/Heading2";
import BlueFilledButton from "~/components/common/buttons/BlueFilledButton";
import { LEAPS_VALUES_DETAILS, LeapsOurValueCards } from "../../components/ourEvent/LeapsOurValueCards";

export default function OurEvent() {
    return (
        <PageLayout>
            <EventTitleSection />
            <ContentContainer>
                <Heading2 className="uppercase">ABYA Leaps</Heading2>
                <div className="flex flex-col gap-4 py-6">
                    <p>
                        LEAPS (Leadership, Exploration and Progress) is an
                        ASEAN-focused industry immersion programme, designed to
                        equip and groom students to become industry-relevant future
                        ASEAN- savvy talents.
                        <br /><br />
                        Powered by Young NTUC and the National Youth Council, ABYA
                        LEAPS aims to provide a platform for ASEAN youths to deepen
                        their interest in the ASEAN market and sharpen their
                        technical & soft skills that would be relevant in ASEAN.
                        <br /><br />
                        Any tertiary student/ institute of higher learning from all
                        majors who was a citizen of the ASEAN member countries
                        (includes Brunei, Cambodia, Laos, Malaysia, Myanmar,
                        Philippines, Singapore, Thailand, Indonesia and Vietnam) are
                        invited to the challenge!
                    </p>
                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
                        {LEAPS_VALUES_DETAILS.map((value) => (<LeapsOurValueCards key={value.title} title={value.title} content={value.content} />))}
                    </div>
                </div>

                <div className="flex flex-col items-center justify-between sm:flex-row gap-4">
                    <div className="w-full sm:w-1/3">
                        <div className="flex flex-col gap-2">
                            <Heading3>See how the programs go each year</Heading3>
                            <BlueFilledButton type={"button"}>Upcomming Leaps</BlueFilledButton>
                        </div>
                    </div>
                    <div className="w-full sm:w-2/3">
                        <ABYALeapCarousel />
                    </div>
                </div>

                <hr className="py-4 mt-8 border-neutral-950" />

                <Heading2 className="uppercase">ABYA Explore</Heading2>
                <div className="py-6">
                    <p>ABYA Explore provides a series of sharing and networking
                        sessions that enable ASEAN youths to engage with, and be
                        inspired, by industry professionals.
                        <br /><br />
                        In line with ABYA’s commitment to its vision and
                        mission, ABYA Explore was conducted in the form of
                        webinars, small-group networking sessions with
                        professionals and business leaders in ASEAN. ABYA
                        Explore imparts insights and knowledge to the youth on
                        current industry trends across ASEAN. By gaining
                        different perspectives on these issues, ABYA hopes to
                        broaden the youths’ macro-knowledge of business and
                        cultures of the region.</p>
                </div>

                <div className="flex flex-col items-center justify-between sm:flex-row gap-4">
                    <div className="w-full sm:w-1/3">
                        <Heading3>Interested in finding out how the previous ABYA Explore Series went?</Heading3>
                    </div>
                    <div className="w-full sm:w-2/3">
                        <ABYAExploreCarousel />
                    </div>
                </div>
            </ContentContainer>
        </PageLayout>
    );
}