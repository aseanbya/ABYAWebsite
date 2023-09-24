import React from "react";
import Image from "next/image";
import annualImpactReportImg from "src/assets/annualImpactReport.png";
import { PageSubSection } from "../common/PageSubSection";

// removed PageSubSection, not sure if necessary
export const ImpactReportSection = () => {
    return (
        <div className="flex items-center justify-center">
            <Image
                src={annualImpactReportImg}
                alt={"Annual impact report"}
                className="w-full max-w-2xl sm:w-2/3"
            />
        </div>
    );
};
