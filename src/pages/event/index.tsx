import ContentContainer from "~/components/common/ContentContainer";
import Heading1 from "~/components/common/textStyles/Heading1";
import PageLayout from "~/components/common/PageLayout";
import PageTitleSection from "~/components/common/PageTitleSection";
import ABYAExploreCarousel from "~/components/event/ABYAExploreCarousel";
import ABYALeapCarousel from "~/components/event/ABYALeapCarousel";
import UpcomingLeapsButton from "~/components/event/UpcomingLeapsButton";

export default function event() {
    return (
        <PageLayout>
            <PageTitleSection title={"ABYA LEAPS"}>
                <div className="grid grid-rows-2">
                    <h2>Discover connections with every new LEAP</h2>
                    <UpcomingLeapsButton />
                </div>
            </PageTitleSection>
            <ContentContainer>
                <div className="pb-12">
                    <p>
                        LEAPS (Leadership, Exploration and Progress) is an
                        ASEAN-focused industry immersion programme, designed to
                        equip and groom students to become industry-relevant
                        future ASEAN- savvy talents.
                    </p>
                    <br />
                    <p>
                        Powered by Young NTUC and the National Youth Council,
                        ABYA LEAPS aims to provide a platform for ASEAN youths
                        to deepen their interest in the ASEAN market and sharpen
                        their technical & soft skills that would be relevant in
                        ASEAN.
                    </p>
                    <br />
                    <p>
                        Any tertiary student/ institute of higher learning from
                        all majors who was a citizen of the ASEAN member
                        countries (includes Brunei, Cambodia, Laos, Malaysia,
                        Myanmar, Philippines, Singapore, Thailand, Indonesia and
                        Vietnam) are invited to the challenge!
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-4 pb-12 lg:grid-cols-3">
                    <div className="card border border-brandBlue">
                        <div className="card-body">
                            <h2 className="card-title text-4xl font-semibold uppercase">
                                Leadership
                            </h2>
                            <p>
                                Our community seeks to bring together youths who
                                seek to develop their competencies in becoming
                                business savvy with a future in ASEAN.
                            </p>
                        </div>
                    </div>
                    <div className="card border border-brandBlue">
                        <div className="card-body">
                            <h2 className="card-title text-4xl font-semibold uppercase">
                                Leadership
                            </h2>
                            <p>
                                Our community seeks to bring together youths who
                                seek to develop their competencies in becoming
                                business savvy with a future in ASEAN.
                            </p>
                        </div>
                    </div>
                    <div className="card border border-brandBlue">
                        <div className="card-body">
                            <h2 className="card-title text-4xl font-semibold uppercase">
                                Leadership
                            </h2>
                            <p>
                                Our community seeks to bring together youths who
                                seek to develop their competencies in becoming
                                business savvy with a future in ASEAN.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mb-12 flex flex-col items-center justify-between sm:flex-row ">
                    <h1 className="w-full pb-6 text-4xl sm:w-1/3 sm:pb-0">
                        Want to find out more about how the previous years of
                        LEAPS went?
                    </h1>
                    <div className="flex w-full justify-end sm:w-2/3">
                        <ABYALeapCarousel />
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row">
                    <Heading1>
                        ABYA Explore
                    </Heading1>
                    <div className="pl-0 sm:pl-12">
                        <p>
                            ABYA Explore provides a series of sharing and
                            networking sessions that enable ASEAN youths to
                            engage with, and be inspired, by industry
                            professionals.
                        </p>
                        <br />
                        <p>
                            In line with ABYA’s commitment to its vision and
                            mission, ABYA Explore was conducted in the form of
                            webinars, small-group networking sessions with
                            professionals and business leaders in ASEAN. ABYA
                            Explore imparts insights and knowledge to the youth
                            on current industry trends across ASEAN. By gaining
                            different perspectives on these issues, ABYA hopes
                            to broaden the youths’ macro-knowledge of business
                            and cultures of the region.
                        </p>
                    </div>
                </div>

                <h2 className="py-12 text-center text-3xl font-semibold">
                    Interested in finding out how the previous ABYA Explore
                    Series went?
                </h2>

                <div className="flex flex-col pb-12">
                    <div className="flex justify-center">
                        <div className="flex w-full justify-center sm:w-2/3">
                            <ABYAExploreCarousel />
                        </div>
                    </div>
                </div>
            </ContentContainer>
        </PageLayout>
    );
}
