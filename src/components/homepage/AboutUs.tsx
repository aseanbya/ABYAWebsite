import ContentContainer from "../common/ContentContainer";
import BlueBorderButton from "../common/buttons/BlueBorderButton";
import Heading2 from "../common/textStyles/Heading2";
import Heading3 from "../common/textStyles/Heading3";
import Image from "next/image"

const CARD_DETAILS = [
    {
        title: "Cultural Awareness",
        quote: "Exposure to peers across the region from culturally diverse backgrounds, enabling understanding and more synergised work environments",
    },
    {
        title: "Network Facilitation",
        quote: "Create Networking connections and opportunities between ABYA members, professionals and partners",
    },
    {
        title: "COMPETENCY BUILDING",
        quote: "Provide a platform to nurture surrounding business & cross-cultural competence in the ASEAN region",
    },
];

export default function AboutUs() {
    return (
        <ContentContainer className="py-12">
            <div className="flex flex-col gap-4 pb-12 sm:flex-row">
                <Image src={"https://firebasestorage.googleapis.com/v0/b/abyawebsite-11d1c.appspot.com/o/IndexEstablishedDate.png?alt=media&token=311fe441-2f50-4c38-93b3-fb4ecec1eaba"} width={1600} height={1600} alt={""} />
                <div className="gap-3 flex flex-col justify-center">
                    <Heading2 className="font-semibold">
                        Established in 2021
                    </Heading2>
                    <p>
                        ABYA aims to be the bridge for youths to
                        increase their knowledge and gain a foothold in ASEAN through participating 
                        in our programmes. With a focus on three main pillars – Political, Economic and Cultural (PEC)
                        , ABYA actively works with corporate partners and industry experts to provide opportunities for
                        youths to learn about and work on projects according to the latest industry trends

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

function AboutUsButton() {
    return (<BlueBorderButton type="button" href="/aboutUs">About Us</ BlueBorderButton >);
}

function LearnMoreButton() {
    return (<BlueBorderButton type="button">Learn More</BlueBorderButton>);
}

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
            {/* <div className="flex items-end pt-2">
                <LearnMoreButton />
            </div> */}
        </div>
    );
}