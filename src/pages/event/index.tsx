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
        </PageLayout>
    );
}
