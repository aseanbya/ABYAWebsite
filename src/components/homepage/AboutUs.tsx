type buttonProps = {
    displayText: string;
}

function PageButton({ displayText }: buttonProps) {
    return (
        <a
            type="button"
            className="flex justify-center bg-blue-950 w-fit text-white py-1 px-3 rounded-lg uppercase font-semibold"
        >
            {displayText}
        </a >
    )
}

const CARD_DETAILS = [
    {
        title: "Advocacy",
        quote: "Quis elit tempor nisi ea consequat occaecat labore magna velit. Ut exercitation ullamco Lorem non magna id laboris ex eu sint velit excepteur. Enim aliqua culpa aliqua proident sint culpa nostrud enim. Ex laboris in enim. Est nulla aliqua excepteur magna consectetur. Esse sunt do deserunt quis anim aliquip nisi velit ex proident qui incididunt ad duis esse. Mollit anim laborum voluptate quis pariatur magna sit aliquip proident consectetur consectetur voluptate aute reprehenderit. Excepteur commodo non voluptate quis ullamco elit dolore.",
    },
    {
        title: "Network Facilitation",
        quote: "Quis elit tempor nisi ea consequat occaecat labore magna velit. Ut exercitation ullamco Lorem non magna id laboris ex eu sint velit excepteur. Enim aliqua culpa aliqua proident sint culpa nostrud enim. Ex laboris in enim. Est nulla aliqua excepteur magna consectetur. Esse sunt do deserunt quis anim aliquip nisi velit ex proident qui incididunt ad duis esse. Mollit anim laborum voluptate quis pariatur magna sit aliquip proident consectetur consectetur voluptate aute reprehenderit. Excepteur commodo non voluptate quis ullamco elit dolore.",
    },
    {
        title: "COMPETENCY BUILDING",
        quote: "Quis elit tempor nisi ea consequat occaecat labore magna velit. Ut exercitation ullamco Lorem non magna id laboris ex eu sint velit excepteur. Enim aliqua culpa aliqua proident sint culpa nostrud enim. Ex laboris in enim. Est nulla aliqua excepteur magna consectetur. Esse sunt do deserunt quis anim aliquip nisi velit ex proident qui incididunt ad duis esse. Mollit anim laborum voluptate quis pariatur magna sit aliquip proident consectetur consectetur voluptate aute reprehenderit. Excepteur commodo non voluptate quis ullamco elit dolore.",
    },
]

type CardComponentProps = {
    title: string;
    quote: string;
}

function CardComponent({ quote, title }: CardComponentProps) {
    return (
        <div className="flex justify-center">
            <div className="flex flex-col justify-center bg-orange-300 p-4">
                <p className="font-bold text-2xl italic text-center p-3 h-24 uppercase">
                    {title}
                </p>
                <p>
                    {quote}
                </p>
                <div className="py-6">
                    <PageButton displayText="Learn more" />
                </div>
            </div>
        </div>
    )
}

export default function AboutUs() {
    return (
        <div className="p-24">
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <div className="bg-orange-100 h-full">
                    </div>
                </div>
                <div>
                    <h1 className=" text-xl">
                        Established in ...
                    </h1>
                    <p className="py-4">
                        Proident nisi enim aute aliquip ullamco duis eiusmod sunt id et in voluptate laborum sint. Minim et nisi eu officia dolor. Fugiat exercitation veniam proident ex esse minim reprehenderit ex aute nostrud sunt mollit duis. Qui eiusmod exercitation aliquip magna aute ex dolor do proident excepteur.
                    </p>
                    <PageButton displayText="about us" />
                </div>
            </div>
            <div className="grid grid-cols-3 gap-4 pt-12">
                {CARD_DETAILS.map((componentDetails, i) => (
                    <CardComponent key={i} {...componentDetails} />
                ))}
            </div>
        </div>
    )
}