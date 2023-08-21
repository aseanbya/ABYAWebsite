import PageContentContainer from "~/components/common/PageContentContainer";
import PageLayout from "~/components/common/PageLayout";
import PageTitleSection from "~/components/common/PageTitleSection";

function AboutUsButton() {
    return (
        <a
            type="button"
            className="bg-brandBlue text-white rounded-xl py-2 px-4 w-fit
            hover:bg-slate-700"
        >
            <p className="font-bold text-xl">
                Upcoming LEAPS
            </p>
        </a >
    )
}

export default function event() {
    return (
        <PageLayout>
            <PageTitleSection title={"ABYA LEAPS"}>
                <div className="grid grid-rows-2">
                    <h2>
                        Discover connections with every new LEAP
                    </h2>
                    <AboutUsButton />
                </div>
            </PageTitleSection>
            <PageContentContainer>
                <div className="pb-5">
                    <p>
                        LEAPS (Leadership, Exploration and Progress) is an ASEAN-focused industry immersion programme, designed to equip and groom students to become industry-relevant future ASEAN- savvy talents.
                    </p>
                    <br />
                    <p>
                        Powered by Young NTUC and the National Youth Council, ABYA LEAPS aims to provide a platform for ASEAN youths to deepen their interest in the ASEAN market and sharpen their technical & soft skills that would be relevant in ASEAN.
                    </p>
                    <br />
                    <p>
                        Any tertiary student/ institute of higher learning from all majors who was a citizen of the ASEAN member countries (includes Brunei, Cambodia, Laos, Malaysia, Myanmar, Philippines, Singapore, Thailand, Indonesia and Vietnam) are invited to the challenge!
                    </p>
                </div>
                <div className="flex justify-center">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                        <div className="border border-brandBlue card max-w-md">
                            <div className="card-body">
                                <h2 className="card-title uppercase">Leadership</h2>
                                <p>Our community seeks to bring together youths who seek to develop their competencies in becoming business savvy with a future in ASEAN.</p>
                            </div>
                        </div>
                        <div className="border border-brandBlue card max-w-md">
                            <div className="card-body">
                                <h2 className="card-title uppercase">Leadership</h2>
                                <p>Our community seeks to bring together youths who seek to develop their competencies in becoming business savvy with a future in ASEAN.</p>
                            </div>
                        </div>
                        <div className="border border-brandBlue card max-w-md">
                            <div className="card-body">
                                <h2 className="card-title uppercase">Leadership</h2>
                                <p>Our community seeks to bring together youths who seek to develop their competencies in becoming business savvy with a future in ASEAN.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </PageContentContainer>
        </PageLayout>
    );
}
