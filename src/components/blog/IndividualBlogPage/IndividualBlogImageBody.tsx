import Image, { StaticImageData } from "next/image"
import imag2e from "src/assets/annualImpactReport.png"

type IndividualBlogImageBodyProps = {
    title?: string,
    image?: string | StaticImageData,
}


export default function IndividualBlogImageBody({ title, image }: IndividualBlogImageBodyProps) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 items-center">
            <h1 className="text-5xl sm:text-7xl font-bold text-black pb-2 capitalize">
                {title ?? "Blog's Title Goes Here"}
            </h1>
            <Image src={image ?? imag2e} alt={""} className="" />
        </div>
    )
}