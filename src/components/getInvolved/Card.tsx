import Button from "~/components/common/Button";

type CardProps = {
    title: string;
    description: string;
    href: string;
};
// TODO: Add image to Card
export const Card: React.FC<CardProps> = ({ title, description, href }) => {
    return (
        <div className="card w-full border border-brandBlue bg-base-100 px-4 pt-6 shadow-xl lg:px-7 lg:pt-8">
            <figure className="aspect-[4/3] w-full rounded-xl bg-gray-300"></figure>
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
