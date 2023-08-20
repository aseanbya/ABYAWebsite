import Quotes from "./Quotes";

export default function OurCommunity() {
    return (
        <Quotes title="Hear from Our Community" cardData={testimonialData} />
    );
}

const testimonialData = [
    {
        name: "Udin",
        quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor magna aliquet mollis accumsan. Mauris faucibus molestie fringilla. Ut quis sodales lorem, eu dictum turpis. Mauris consectetur lacus non risus sodales, at dictum nisi dapibus. Aenean vehicula eleifend ante luctus feugiat. Phasellus lacinia nisi vitae lectus rhoncus elementum. Morbi vehicula fringilla vulputate.",
        title: "ABYA Member",
    },
    {
        name: "Nadia",
        quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor magna aliquet mollis accumsan. Mauris faucibus molestie fringilla. Ut quis sodales lorem, eu dictum turpis. Mauris consectetur lacus non risus sodales, at dictum nisi dapibus. Aenean vehicula eleifend ante luctus feugiat. Phasellus lacinia nisi vitae lectus rhoncus elementum. Morbi vehicula fringilla vulputate.",
        title: "ABYA Member",
    },
    {
        name: "Lyssa",
        quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor magna aliquet mollis accumsan. Mauris faucibus molestie fringilla. Ut quis sodales lorem, eu dictum turpis. Mauris consectetur lacus non risus sodales, at dictum nisi dapibus. Aenean vehicula eleifend ante luctus feugiat. Phasellus lacinia nisi vitae lectus rhoncus elementum. Morbi vehicula fringilla vulputate.",
        title: "ABYA Executive",
    },
];
