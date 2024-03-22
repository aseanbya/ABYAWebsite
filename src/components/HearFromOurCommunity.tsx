import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export default function HearFromOurCommunity() {
  return (
    <div className="relative flex flex-col items-center justify-center overflow-hidden bg-neutral-600 antialiased">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
        header={"Hear From Our Community"}
      />
    </div>
  );
}

const testimonials = [
  {
    Quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    Name: "Charles Dickens",
    Postition: "A Tale of Two Cities",
  },
  {
    Quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    Name: "Charles Dickens",
    Postition: "A Tale of Two Cities",
  },
  {
    Quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    Name: "Charles Dickens",
    Postition: "A Tale of Two Cities",
  },
  {
    Quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    Name: "Charles Dickens",
    Postition: "A Tale of Two Cities",
  },
];
