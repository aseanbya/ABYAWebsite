import Button from "~/components/common/Button";
import PageLayout from "~/components/common/PageLayout";

type CardProps = {
    title: string;
    description: string;
    href: string;
};

// TODO: Add image to Card
const Card: React.FC<CardProps> = ({ title, description, href }) => {
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

export default function getInvolved() {
    return (
        <PageLayout>
            <div className="hero bg-base-200">
                <div className="hero-content flex-col items-start text-start">
                    <h1 className="text-5xl font-bold uppercase tracking-wide">
                        Get Involved
                    </h1>
                    <p className="text-md py-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Curabitur ipsum mauris, scelerisque sed justo vel,
                        hendrerit sagittis odio. Vestibulum quis convallis
                        augue. Pellentesque vel viverra neque, eget aliquet
                        nunc. Vivamus ornare sit amet ipsum ac consequat.
                        Interdum et malesuada fames ac ante ipsum primis in
                        faucibus.
                    </p>
                </div>
            </div>
            <section className="my-4 flex w-screen flex-col justify-center gap-5 px-2 lg:flex-row lg:px-10">
                <Card
                    title="As a member"
                    description="Our community seeks to bring together youths who seek to develop their competencies in becoming business savvy with a future in ASEAN."
                    href="/getInvolved/member"
                />
                <Card
                    title="As an executive"
                    description="Our community seeks to bring together youths who seek to develop their competencies in becoming business savvy with a future in ASEAN."
                    href="/getInvolved/executive"
                />
                <Card
                    title="As a partner"
                    description="Our community seeks to bring together youths who seek to develop their competencies in becoming business savvy with a future in ASEAN."
                    href="/getInvolved/partner"
                />
            </section>
        </PageLayout>
    );
}
