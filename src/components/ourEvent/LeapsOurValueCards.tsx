import Heading3 from "~/components/common/textStyles/Heading3";

type ValueContent = {
    title: string;
    content: string;
};

export function LeapsOurValueCards({ title, content }: ValueContent) {
    return (
        <div className="card border-2 border-brandBlue">
            <div className="card-body">
                <Heading3>{title}</Heading3>
                <p>{content}</p>
            </div>
        </div>
    );
}

export const LEAPS_VALUES_DETAILS: ValueContent[] = [
    {
        title: "LEADERSHIP",
        content:
            "Our community seeks to bring together youths who seek to develop their competencies in becoming business savvy with a future in ASEAN.",
    },
    {
        title: "EXPLORATION",
        content:
            "Our community seeks to bring together youths who seek to develop their competencies in becoming business savvy with a future in ASEAN.",
    },
    {
        title: "PROGRESSION",
        content:
            "Our community seeks to bring together youths who seek to develop their competencies in becoming business savvy with a future in ASEAN.",
    },
];
