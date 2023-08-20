import PageLayout from "~/components/common/PageLayout";
import PageTitleSection from "~/components/common/PageTitleSection";
import Quotes from "~/components/common/Quotes";

export default function getInvolved() {
    return (
        <PageLayout>
            <PageTitleSection
                title={"Get Involved"}
                subtitle={
                    "Amet ex ipsum adipisicing. Consectetur veniam officia pariatur officia in et dolor ex sint consectetur. Dolor aliqua ipsum et labore est. Enim ea tempor quis sint eu non commodo non id anim id non laborum labore. Veniam consequat pariatur duis. Dolor ut laborum in et esse anim commodo eu minim pariatur officia pariatur sit non. Sit aliquip anim sunt eiusmod proident labore Lorem est sit aliqua sunt minim minim occaecat ut."
                }
            />
            <Quotes
                title="Hear from Our Community"
                cardData={testimonialData}
            />
        </PageLayout>
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
