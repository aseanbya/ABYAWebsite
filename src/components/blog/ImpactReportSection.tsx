import React from "react";
import { PageSubSection } from "../common/PageSubSection";

export const ImpactReportSection: React.FC = () => {
    return (
        <PageSubSection title={"Annual Impact Report"}>
            <div className="flex items-center justify-center">
                <embed
                    src="/sample.pdf"
                    type="application/pdf"
                    width="100%"
                    height="600px"
                />
            </div>
        </PageSubSection>
    );
};
