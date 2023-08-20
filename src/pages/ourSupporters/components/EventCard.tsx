// A single Event with a title, description and logos of the partners

export type EventCardProps = {
    title: string;
    description: string;
    partnerImageRef: string[];
};

export default function EventCard({
    title,
    description,
    partnerImageRef,
}: EventCardProps) {
    return (
        <div className="mx-24 my-8 flex flex-col items-center justify-center text-center">
            <p className="text-3xl font-bold">{title}</p>

            <hr className="my-4 w-1/2 border-t-2 border-gray-400" />

            <p className="mb-8">{description}</p>
            <div className="mb-8 flex flex-wrap justify-center gap-8">
                {partnerImageRef.map((ref, index) => (
                    <div key={index} className="h-[100px] w-[225px]">
                        <img src={ref} className="h-full w-full" />
                    </div>
                ))}
            </div>
        </div>
    );
}
