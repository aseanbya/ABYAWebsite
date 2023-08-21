import Image from "next/image"
import { ReactNode } from "react"
import singaporeAttractionsGrey from "src/assets/singaporeAttractionsGrey.png"

type PageTitleSectionProps = {
    title: string,
    children: ReactNode,
}

export default function PageTitleSection({ title, children }: PageTitleSectionProps) {
    return (
        <div className="p-9 stack items-center w-full">
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
                {children}
            </div>
        </div>
    )
}