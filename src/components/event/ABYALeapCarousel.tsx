import { Carousel } from "flowbite-react";
import Button from "~/components/common/Button";
import Image from "next/image"
import { AiOutlineLeftCircle, AiOutlineRightCircle } from "react-icons/ai";

const cardData = [
    {
        name: "Abya Leaps 2022",
        href: "",
        imageUrl: "/ABYAteam.jpg",
    },
    {
        name: "Abya Leaps 2022",
        href: "",
        imageUrl: "/ABYAteam.jpg",
    },
];

type CardCarouselComponentProps = {
    name: string;
    href: string;
    imageUrl: string;
};

function CardCarouselComponent({
    name,
    href,
    imageUrl,
}: CardCarouselComponentProps) {
    return (
        <div className="flex justify-center">
            <div
                className="
                    card p-8
                    grid grid-cols-2 gap-5
                    border-2 border-brandBlue-50 bg-transparent items-center
                    "
            >
                <Image src={imageUrl} alt={""} width={800} height={800} className="rounded-lg" />
                <div className="flex-col flex justify-center">
                    <div>
                        <h1 className="text-4xl font-bold pb-3 uppercase">
                            {name}
                        </h1>
                        <Button href={href}>Learn More</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function ABYALeapCarousel() {
    return (
        <div className="px-20">
            <Carousel
                slideInterval={5000}
                indicators={false}
                leftControl={
                    <div className="relative -left-20">
                        <AiOutlineLeftCircle className="w-14 h-14 hover:fill-gray-400 transition duration-150" />
                    </div>
                }
                rightControl={
                    <div className="relative -right-20">
                        <AiOutlineRightCircle className="w-14 h-14 hover:fill-gray-400 transition duration-150" />
                    </div>
                }
                className=" max-w-4xl"
            >
                {cardData.map((componentDetails, i) => (
                    <CardCarouselComponent
                        key={i}
                        {...componentDetails}
                    />
                ))}
            </Carousel>
        </div >
    );
}
