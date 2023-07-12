const QUOTES = [
    {
        quote: "Quis elit tempor nisi ea consequat occaecat labore magna velit. Ut exercitation ullamco Lorem non magna id laboris ex eu sint velit excepteur. Enim aliqua culpa aliqua proident sint culpa nostrud enim. Ex laboris in enim. Est nulla aliqua excepteur magna consectetur. Esse sunt do deserunt quis anim aliquip nisi velit ex proident qui incididunt ad duis esse. Mollit anim laborum voluptate quis pariatur magna sit aliquip proident consectetur consectetur voluptate aute reprehenderit. Excepteur commodo non voluptate quis ullamco elit dolore."
    },
    {
        quote: "Quis elit tempor nisi ea consequat occaecat labore magna velit. Ut exercitation ullamco Lorem non magna id laboris ex eu sint velit excepteur. Enim aliqua culpa aliqua proident sint culpa nostrud enim. Ex laboris in enim. Est nulla aliqua excepteur magna consectetur. Esse sunt do deserunt quis anim aliquip nisi velit ex proident qui incididunt ad duis esse. Mollit anim laborum voluptate quis pariatur magna sit aliquip proident consectetur consectetur voluptate aute reprehenderit. Excepteur commodo non voluptate quis ullamco elit dolore."
    },
    {
        quote: "Quis elit tempor nisi ea consequat occaecat labore magna velit. Ut exercitation ullamco Lorem non magna id laboris ex eu sint velit excepteur. Enim aliqua culpa aliqua proident sint culpa nostrud enim. Ex laboris in enim. Est nulla aliqua excepteur magna consectetur. Esse sunt do deserunt quis anim aliquip nisi velit ex proident qui incididunt ad duis esse. Mollit anim laborum voluptate quis pariatur magna sit aliquip proident consectetur consectetur voluptate aute reprehenderit. Excepteur commodo non voluptate quis ullamco elit dolore."
    },
]

type QuotesCarouselComponentProps = {
    quote: string;
}

function QuotesCarouselComponent({ quote }: QuotesCarouselComponentProps) {
    return (
        <div className="carousel-item flex justify-center">
            <div className="w-[50vw] flex justify-center bg-gray-200 card">
                <div className="p-24">
                    <p>
                        {quote}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default function QuotesCarousel() {
    return (
        <div className="flex py-24 bg-yellow-100">
            <div className="carousel carousel-center gap-4">
                {QUOTES.map((componentDetails, i) => (
                    <QuotesCarouselComponent key={i} {...componentDetails} />
                ))}
            </div>
        </div>
    )
}