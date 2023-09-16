import ContentContainer from "~/components/common/ContentContainer";
import { PageSubSection } from "~/components/common/PageSubSection";
import { VALUE_DETAILS } from "~/components/details/LeapsValueDetails";

export type ValueContent = {
    title: string;
    content: string;
};

export default function LeapsOurValueSection({
    values,
}: {
    values: ValueContent[];
}) {
    return (
        <ContentContainer>
            <PageSubSection title="Our value">
                <div className="grid grid-cols-1 gap-4 pb-12 lg:grid-cols-3">
                    {values.map((value) => (
                        <LeapsOurValueCards
                            title={value.title}
                            content={value.content}
                        ></LeapsOurValueCards>
                    ))}
                </div>
            </PageSubSection>
        </ContentContainer>
    );
}

function LeapsOurValueCards({ title, content }: ValueContent) {
    return (
        <div className="card border border-brandBlue">
            <div className="card-body">
                <h2 className="card-title text-4xl font-semibold uppercase">
                    {title}
                </h2>
                <p>{content}</p>
            </div>
        </div>
    );
}
