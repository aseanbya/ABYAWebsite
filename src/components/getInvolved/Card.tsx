import Button from "~/components/common/Button";

type CardProps = {
    title: string;
    description: string;
    href: string;
};
// TODO: Add image to Card
export const Card: React.FC<CardProps> = ({ title, description, href }) => {
    return (
        <div className="card w-full border border-blue-500 bg-base-100 px-4 pt-6 shadow-xl lg:w-[428px] lg:px-7 lg:pt-8">
            <figure className="h-[270px] w-full rounded-xl bg-gray-300 lg:w-[360px]"></figure>
            <div className="card-body px-0">
                <h2 className="card-title text-2xl font-bold uppercase">
                    {title}
                </h2>
                <p>{description}</p>
                <div className="card-actions mt-4 justify-stretch">
                    <Button href={href}>Learn More</Button>
                </div>
            </div>
        </div>
    );
};
