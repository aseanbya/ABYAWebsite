import Image from "next/image";
import singaporeAttractionsGrey from "src/assets/singaporeAttractionsGrey.png";

type PageTitleSectionProps = {
    title: string;
    subtitle: string;
};

export default function PageTitleSection({
    title,
    subtitle,
}: PageTitleSectionProps) {
    return (
        <div className="stack items-center p-9">
            <div className="flex justify-between">
                <div className="w-0 sm:w-1/3"></div>
                <Image
                    src={singaporeAttractionsGrey}
                    alt={""}
                    className="w-full max-w-2xl sm:w-2/3"
                />
            </div>
            <div>
                <h1 className="pb-2 text-7xl font-bold uppercase text-black">
                    {title}
                </h1>
                <h2>{subtitle}</h2>
            </div>
        </div>
    );
}
