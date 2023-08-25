import React from "react";
import Image from "next/image";
import annualImpactReportImg from "src/assets/annualImpactReport.png";
import { PageSubSection } from "../common/PageSubSection";

export const ImpactReportSection = () => {
    return (
        <PageSubSection title={"Annual Impact Report"}>
            <div className="flex items-center justify-center">
                <Image
                    src={annualImpactReportImg}
                    alt={"Annual impact report"}
                    className="w-full max-w-2xl sm:w-2/3"
                />
            </div>
        </PageSubSection>
    );
};
