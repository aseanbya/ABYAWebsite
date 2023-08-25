import React from "react";
import PageLayout from "~/components/common/PageLayout";
import PageTitleSection from "~/components/common/PageTitleSection";
import { ImpactReportSection } from "../components/blog/ImpactReportSection";
import { ExperiencesSection } from "../components/blog/ExperiencesSection";
import { FutureInAseanSection } from "../components/blog/FutureInAseanSection";

export default function blog() {
    return (
        <PageLayout>
            <PageTitleSection title={"Blog"}>
                <h2>
                    Amet ex ipsum adipisicing. Consectetur veniam officia
                    pariatur officia in et dolor ex sint consectetur. Dolor
                    aliqua ipsum et labore est. Enim ea tempor quis sint eu non
                    commodo non id anim id non laborum labore. Veniam consequat
                    pariatur duis. Dolor ut laborum in et esse anim commodo eu
                    minim pariatur officia pariatur sit non. Sit aliquip anim
                    sunt eiusmod proident labore Lorem est sit aliqua sunt minim
                    minim occaecat ut.
                </h2>
            </PageTitleSection>
            <div className="mb-8 flex flex-col gap-8 lg:mb-24 lg:gap-24">
                <ImpactReportSection />
                <ExperiencesSection />
                <FutureInAseanSection />
            </div>
        </PageLayout>
    );
}
