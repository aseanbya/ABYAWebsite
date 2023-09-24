import PageLayout from "~/components/common/PageLayout";
import PageTitleSection from "~/components/common/PageTitleSection";
import ContentContainer from "~/components/common/ContentContainer";
import ABYALeapCarousel from "~/components/event/ABYALeapCarousel";
import UpcomingLeapsButton from "~/components/event/UpcomingLeapsButton";

export default function index() {
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
            </ContentContainer>
        </PageLayout>
    );
}
