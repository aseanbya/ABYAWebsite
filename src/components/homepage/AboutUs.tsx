function AboutUsButton() {
    return (
        <a
            type="button"
            className="bg-brandBlue text-white rounded-xl py-2 px-4
            hover:bg-slate-700"
        >
            <p className="font-bold text-md sm:text-xl uppercase">
                About Us
            </p>
        </a >
    )
}

function LearnMoreButton() {
    return (
        <a
            type="button"
            className="flex justify-center border-brandBlue border w-fit py-1 px-3 rounded-lg uppercase font-bold text-brandBlue"
        >
            <p className="text-md sm:text-xl">
                Learn More
            </p>
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
            <div className="flex flex-col justify-center border border-brandYellow-50 rounded-2xl p-4">
                <p className="font-semibold text-3xl text-center h-16 text-brandBlue uppercase">
                    {title}
                </p>
                <p>
                    {quote}
                </p>
                <div className="py-6">
                    <LearnMoreButton />
                </div>
            </div>
        </div>
    )
}

export default function AboutUs() {
    return (
        <div className="py-12">
            <div className="grid grid-cols-1 grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 gap-4">
                <div>
                    <div className="bg-[#C5C5C5] h-full">
                    </div>
                </div>
                <div>
                    <h1 className="text-3xl sm:text-5xl font-semibold">
                        Established in XXXX
                    </h1>
                    <p className="py-4">
                        Proident nisi enim aute aliquip ullamco duis eiusmod sunt id et in voluptate laborum sint. Minim et nisi eu officia dolor. Fugiat exercitation veniam proident ex esse minim reprehenderit ex aute nostrud sunt mollit duis. Qui eiusmod exercitation aliquip magna aute ex dolor do proident excepteur.
                    </p>
                    <AboutUsButton />
                </div>
            </div>
            {/* <div className="grid grid-cols-3 gap-4 pt-12">
                {CARD_DETAILS.map((componentDetails, i) => (
                    <CardComponent key={i} {...componentDetails} />
                ))}
            </div> */}
        </div>
    )
}