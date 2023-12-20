import React from "react";
import PageLayout from "~/components/common/PageLayout";
import PageTitleSection from "~/components/common/PageTitleSection";
import { ImpactReportSection } from "../../components/blog/ImpactReportSection";
import { ExperiencesSection } from "../../components/blog/ExperiencesSection";
import { FutureInAseanSection } from "../../components/blog/FutureInAseanSection";
import ContentContainer from "~/components/common/ContentContainer";

export default function blog() {
    return (
        <PageLayout>
            <PageTitleSection title={"Blog"}>
                <h2>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ipsum mauris, scelerisque sed justo vel, hendrerit sagittis odio. Vestibulum quis convallis augue. Pellentesque vel viverra neque, eget aliquet nunc. Vivamus ornare sit amet ipsum ac consequat. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                </h2>
            </PageTitleSection>
            <ContentContainer>
                <div className="mb-8 flex flex-col gap-8 lg:mb-24 lg:gap-24">
                    <ImpactReportSection />
                    <ExperiencesSection />
                    <FutureInAseanSection />
                </div>
            </ContentContainer>
        </PageLayout>
    );
}
