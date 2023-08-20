import PageLayout from "~/components/common/PageLayout";
import PageTitleSection from "~/components/common/PageTitleSection";
import Quotes from "~/components/common/Quotes";
import EventSection from "./components/EventSection";
import Testimonials from "./components/Testimonials";

export default function ourSupporters() {
    return (
        <PageLayout>
            <PageTitleSection
                title={"Our Partners"}
                subtitle={
                    "Amet ex ipsum adipisicing. Consectetur veniam officia pariatur officia in et dolor ex sint consectetur. Dolor aliqua ipsum et labore est. Enim ea tempor quis sint eu non commodo non id anim id non laborum labore. Veniam consequat pariatur duis. Dolor ut laborum in et esse anim commodo eu minim pariatur officia pariatur sit non. Sit aliquip anim sunt eiusmod proident labore Lorem est sit aliqua sunt minim minim occaecat ut."
                }
            />
            <EventSection events={eventData} />
            <Testimonials />
        </PageLayout>
    );
}

const eventData = [
    {
        title: "2021 LEAPS PARTNERS",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ipsum mauris, scelerisque sed justo vel, hendrerit sagittis odio. Vestibulum quis convallis augue. Pellentesque vel viverra neque, eget aliquet nunc. Vivamus ornare sit amet ipsum ac consequat. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
        partnerImageRef: ["YoungNTUCLogo.png"],
    },
    {
        title: "2021 ABYA EXPLORE",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ipsum mauris, scelerisque sed justo vel, hendrerit sagittis odio. Vestibulum quis convallis augue. Pellentesque vel viverra neque, eget aliquet nunc. Vivamus ornare sit amet ipsum ac consequat. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
        partnerImageRef: [
            "SGGlobalNetworkLogo.png",
            "ScapeLogo.png",
            "YoungNTUCLogo.png",
            "ABYAteam2.png",
            "ABYAteam3.png",
        ],
    },
];
