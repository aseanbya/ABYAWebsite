import ContentContainer from "../common/ContentContainer";
import { LEAPS_VALUES_DETAILS } from "../details/LeapsValueDetails";
import type { ValueContent } from "./ABYALeaps/LeapsOurValueSection";

export default function LeapsValues() {
    return (

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            {LEAPS_VALUES_DETAILS.map((value) => (
                <LeapsOurValueCards
                    key={value.title}
                    title={value.title}
                    content={value.content}
                ></LeapsOurValueCards>
            ))}
        </div>

    );
}

function LeapsOurValueCards({ title, content }: ValueContent) {
    return (
        <div className="card border-2 border-brandBlue">
            <div className="card-body">
                <h2 className="card-title text-4xl font-semibold uppercase">
                    {title}
                </h2>
                <p>{content}</p>
            </div>
        </div>
    );
}
