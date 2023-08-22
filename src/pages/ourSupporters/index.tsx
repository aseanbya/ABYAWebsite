import PageLayout from "~/components/common/PageLayout";
import PageTitleSection from "~/components/common/PageTitleSection";
import EventSection from "./components/EventSection";
import Testimonials from "./components/Testimonials";

export default function ourSupporters() {
    return (
        <PageLayout>
            <PageTitleSection
                title={"Our Partners"}
            >
                <h2>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ipsum mauris, scelerisque sed justo vel, hendrerit sagittis odio. Vestibulum quis convallis augue. Pellentesque vel viverra neque, eget aliquet nunc. Vivamus ornare sit amet ipsum ac consequat. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                </h2>
            </PageTitleSection>
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
