import type { StaticImageData } from "next/image"
import Button from "~/components/common/buttons/CommonButton";
import Image from "next/image"

type CardProps = {
    title: string;
    description: string;
    href: string;
    borderColor: string;
    image?: string | StaticImageData;
};

export const Card: React.FC<CardProps> = ({ title, description, href, borderColor, image }) => {
    return (
        <div className={`card  border-2 bg-base-100 px-4 pt-6 shadow-xl lg:px-7 lg:pt-8 bg-slate ${borderColor}`}>
            <Image
                src={image ?? ""}
                alt={""}
                width={800}
                height={800}
                className="aspect-[4/3] w-full rounded-xl bg-gray-300 object-cover"
            />

            <div className="card-body px-0">
                <h2 className="card-title text-2xl font-bold uppercase">
                    {title}
                </h2>
                <p>{description}</p>
                <div className="card-actions mt-4 justify-stretch">
                    <Button
                        href={href}
                        type={"button"}
                        className="hover:bg-brandBlue hover:text-white border-brandBlue text-brandBlue">
                        Learn More
                    </Button>
                </div>
            </div>
        </div>
    );
};
