import Image from "next/image"
import singaporeAttractionsGrey from "src/assets/singaporeAttractionsGrey.png"

type PageTitleSectionProps = {
    title: string,
    subtitle: string,
}

export default function PageTitleSection({ title, subtitle }: PageTitleSectionProps) {
    return (
        <div className="p-9 stack items-center ">
            <div className="flex justify-between">
                <div className="w-0 sm:w-1/3"></div>
                <Image
                    src={singaporeAttractionsGrey}
                    alt={""}
                    className="w-full sm:w-2/3 max-w-2xl"
                />
            </div>
            <div>
                <h1 className="text-7xl font-bold text-black pb-2 uppercase">
                    {title}
                </h1>
                <h2>
                    {subtitle}
                </h2>
            </div>
        </div>
    )
}