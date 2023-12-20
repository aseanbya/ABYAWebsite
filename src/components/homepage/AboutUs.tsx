import ContentContainer from "../common/ContentContainer";
import BlueBorderButton from "../common/buttons/BlueBorderButton";
import Heading2 from "../common/textStyles/Heading2";
import Heading3 from "../common/textStyles/Heading3";

function AboutUsButton() {
    return (<BlueBorderButton type="button">About Us</ BlueBorderButton >);
}

function LearnMoreButton() {
    return (<BlueBorderButton type="button">Learn More</BlueBorderButton>);
}

const CARD_DETAILS = [
    {
        title: "Advocacy",
        quote: "Promote interest in business and professional opportunities across Southeast Asia",
    },
    {
        title: "Network Facilitation",
        quote: "Create Networking connections and opportunities between ABYA members, professionals and partners",
    },
    {
        title: "COMPETENCY BUILDING",
        quote: "Provide a platform for exposure surrounding business & cross-cultural competence in the ASEAN region",
    },
];

type CardComponentProps = {
    title: string;
    quote: string;
};

function CardComponent({ quote, title }: CardComponentProps) {
    return (
        <div className="grid grid-col-1 gap-3 rounded-2xl border-2 border-brandYellow-50 p-4">
            <div className="flex w-full justify-center items-center h-20">
                <Heading3 className="text-center font-semibold uppercase text-brandBlue">{title}</Heading3>
            </div>
            <div className="flex items-start">
                <p>{quote}</p>
            </div>
            <div className="flex items-end pt-2">
                <LearnMoreButton />
            </div>
        </div>
    );
}

export default function AboutUs() {
    return (
        <ContentContainer className="py-12">
            <div className="grid grid-cols-1 grid-rows-2 gap-4 pb-12 sm:grid-cols-2 sm:grid-rows-1">
                <div>
                    <div className="h-full bg-[#C5C5C5]"></div>
                </div>
                <div className="gap-3 flex flex-col">
                    <Heading2 className="font-semibold">
                        Established in XXXX
                    </Heading2>
                    <p>
                        Proident nisi enim aute aliquip ullamco duis eiusmod
                        sunt id et in voluptate laborum sint. Minim et nisi eu
                        officia dolor. Fugiat exercitation veniam proident ex
                        esse minim reprehenderit ex aute nostrud sunt mollit
                        duis. Qui eiusmod exercitation aliquip magna aute ex
                        dolor do proident excepteur.
                    </p>
                    <AboutUsButton />
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {CARD_DETAILS.map((componentDetails, i) => (
                    <CardComponent key={i} {...componentDetails} />
                ))}
            </div>
        </ContentContainer>
    );
}
