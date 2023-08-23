// Hear from Our Community component

import { Carousel } from "flowbite-react";

const cardData = [
    {
        name: "Udin",
        quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor magna aliquet mollis accumsan. Mauris faucibus molestie fringilla. Ut quis sodales lorem, eu dictum turpis. Mauris consectetur lacus non risus sodales, at dictum nisi dapibus. Aenean vehicula eleifend ante luctus feugiat. Phasellus lacinia nisi vitae lectus rhoncus elementum. Morbi vehicula fringilla vulputate.",
        title: "ABYA Member",
    },
    {
        name: "Nadia",
        quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor magna aliquet mollis accumsan. Mauris faucibus molestie fringilla. Ut quis sodales lorem, eu dictum turpis. Mauris consectetur lacus non risus sodales, at dictum nisi dapibus. Aenean vehicula eleifend ante luctus feugiat. Phasellus lacinia nisi vitae lectus rhoncus elementum. Morbi vehicula fringilla vulputate.",
        title: "ABYA Member",
    },
    {
        name: "Lyssa",
        quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor magna aliquet mollis accumsan. Mauris faucibus molestie fringilla. Ut quis sodales lorem, eu dictum turpis. Mauris consectetur lacus non risus sodales, at dictum nisi dapibus. Aenean vehicula eleifend ante luctus feugiat. Phasellus lacinia nisi vitae lectus rhoncus elementum. Morbi vehicula fringilla vulputate.",
        title: "ABYA Executive",
    },
];

type CardCarouselComponentProps = {
    name: string;
    quote: string;
    title: string;
};

function CardCarouselComponent({
    name,
    quote,
    title,
}: CardCarouselComponentProps) {
    return (
        <div className="flex justify-center pb-24">
            <div className="card flex h-1/2 w-2/3 justify-center justify-center border border-brandYellow bg-transparent">
                <div className="overflow-hidden p-8 text-center">
                    <p className="text-white">{quote}</p>
                    <p className="mt-6 text-xl font-bold text-white">{name}</p>
                    <p className="text-sm text-brandYellow">{title}</p>
                </div>
            </div>
        </div>
    );
}

export default function OurCommunity() {
    return (
        <div
            className="relative bg-cover bg-center pb-4 pt-16"
            style={{ backgroundImage: "url('testimonialBG.png')" }}
        >
            <div className="absolute inset-0 h-full w-full bg-black opacity-70"></div>
            <div className="relative z-10 w-full">
                <div>
                    <p className="text-center text-4xl font-bold text-brandYellow">
                        Hear from Our Community
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
        </div>
    );
}
