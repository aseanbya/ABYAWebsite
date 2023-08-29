import Image, { StaticImageData } from "next/image"
import imag2e from "src/assets/annualImpactReport.png"

type IndividualBlogImageBodyProps = {
    text?: string,
    image?: string | StaticImageData,
    location?: string,
}

export default function IndividualBlogImageBody({ text: text, image, location }: IndividualBlogImageBodyProps) {
    if (location == "left" || location == "right") {
        return (
            <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-4">
                {location == "right" &&
                    <Image src={image ?? imag2e} alt={""} />
                }
                <h1 className="text-black pb-2">
                    {text ?? "Ullamco non laboris aliquip deserunt est laborum Lorem. Ex ullamco voluptate laborum sint non magna duis mollit officia nulla incididunt. Est do aliqua est nisi nostrud ullamco ex adipisicing qui ipsum consequat. Mollit eiusmod sit ex elit ea proident enim est tempor exercitation exercitation. Deserunt dolor eiusmod consequat ullamco eiusmod. Sint dolor enim in officia ut enim eiusmod officia ea consectetur sunt cillum dolor reprehenderit cillum."}
                </h1>
                {location == "left" &&
                    <Image src={image ?? imag2e} alt={""} />
                }
            </div>
        )
    }
    if (location == "top" || location == "bottom") {
        return (
            <div className="flex flex-col items-center gap-4">
                {location == "top" &&
                    <Image src={image ?? imag2e} alt={""} />
                }
                <h1 className="text-black pb-2">
                    {text ?? "Ullamco non laboris aliquip deserunt est laborum Lorem. Ex ullamco voluptate laborum sint non magna duis mollit officia nulla incididunt. Est do aliqua est nisi nostrud ullamco ex adipisicing qui ipsum consequat. Mollit eiusmod sit ex elit ea proident enim est tempor exercitation exercitation. Deserunt dolor eiusmod consequat ullamco eiusmod. Sint dolor enim in officia ut enim eiusmod officia ea consectetur sunt cillum dolor reprehenderit cillum."}
                </h1>
                {location == "bottom" &&
                    <Image src={image ?? imag2e} alt={""} />
                }
            </div>
        )
    }
}