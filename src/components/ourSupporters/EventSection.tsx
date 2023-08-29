import EventCard from "./EventCard";
import type { EventCardProps } from "./EventCard";

type EventSectionProps = { events: EventCardProps[] };

export default function EventSection({ events }: EventSectionProps) {
    return (
        <div>
            {events?.map((event, index) => (
                <EventCard
                    key={index}
                    title={event.title}
                    description={event.description}
                    partnerImageRef={event.partnerImageRef}
                />
            ))}
        </div>
    );
}
