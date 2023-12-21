import { Carousel } from "flowbite-react";
import ContentContainer from "./ContentContainer";

type QuoteCarouselComponentProps = {
    name: string;
    quote: string;
    title: string;
};

function CardCarouselComponent({
    name,
    quote,
    title,
}: QuoteCarouselComponentProps) {
    return (
        <div className="flex justify-center pb-24">
            <div className="card flex h-1/2 w-2/3 justify-center border border-brandYellow bg-transparent">
                <div className="overflow-hidden p-8 text-center">
                    <p className="text-white">{quote}</p>
                    <p className="mt-6 text-xl font-bold text-white">{name}</p>
                    <p className="text-sm text-brandYellow">{title}</p>
                </div>
            </div>
        </div>
    );
}

type QuoteComponentProps = {
    title: string;
    cardData: QuoteCarouselComponentProps[];
};

export default function Quotes({ title, cardData }: QuoteComponentProps) {
    return (
        <div
            className="relative bg-cover bg-center pb-4 pt-16"
            style={{ backgroundImage: "url(https://firebasestorage.googleapis.com/v0/b/abyawebsite-11d1c.appspot.com/o/HearFromOurCommunity.png?alt=media&token=9c5977fc-2606-432d-9f79-77e59a2718e9)" }}
        >
            <div className="absolute inset-0 h-full w-full bg-black opacity-70"></div>
            <ContentContainer>
                <div className="relative z-10 w-full">
                    <div>
                        <p className="text-center text-5xl font-bold text-brandYellow">
                            {title}
                        </p>
                    </div>
                    <div className="flex pt-16">
                        <Carousel slideInterval={5000}>
                            {cardData.map((componentDetails, i) => (
                                <CardCarouselComponent
                                    key={i}
                                    {...componentDetails}
                                />
                            ))}
                        </Carousel>
                    </div>
                </div>
            </ContentContainer>
        </div>
    );
}
