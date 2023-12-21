import Heading3 from "../common/textStyles/Heading3";
type EventSectionProps = { events: EventCardProps[] };

export default function EventSection({ events }: EventSectionProps) {
    return (
        <>
            {events?.map((event, index) => (
                <EventCard
                    key={index}
                    title={event.title}
                    description={event.description}
                    partnerImageRef={event.partnerImageRef}
                />
            ))}
        </>
    );
}

type EventCardProps = {
    title: string;
    description: string;
    partnerImageRef: string[];
};

function EventCard({
    title,
    description,
    partnerImageRef,
}: EventCardProps) {
    return (
        <div className="sm:px-24 my-8 flex flex-col items-center justify-center text-center">
            <Heading3>{title}</Heading3>
            <hr className="my-4 w-1/2 border-t-2 border-gray-400" />

            <p className="mb-8">{description}</p>
            <div className="mb-8 flex flex-wrap justify-center gap-8">
                {partnerImageRef?.map((ref, index) => (
                    <div key={index} className="h-[100px] w-[225px]">
                        <img src={ref} className="h-full w-full" alt={description} />
                    </div>
                ))}
            </div>
        </div>
    );
}
