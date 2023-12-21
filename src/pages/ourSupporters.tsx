import PageLayout from "~/components/common/PageLayout";
import PageTitleSection from "~/components/common/PageTitleSection";
import EventSection from "../components/ourSupporters/EventSection";
import Testimonials from "../components/ourSupporters/Testimonials";
import ContentContainer from "~/components/common/ContentContainer";

export default function OurSupporters() {
    return (
        <PageLayout>
            <PageTitleSection title={"Our Partners"}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ipsum mauris, scelerisque sed justo vel, hendrerit sagittis odio. Vestibulum quis convallis augue. Pellentesque vel viverra neque, eget aliquet nunc. Vivamus ornare sit amet ipsum ac consequat. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
            </PageTitleSection>
            <ContentContainer>
                <EventSection events={eventData} />
            </ContentContainer>
            <Testimonials />
        </PageLayout >
    );
}

const eventData = [
    {
        title: "2021 LEAPS PARTNERS",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ipsum mauris, scelerisque sed justo vel, hendrerit sagittis odio. Vestibulum quis convallis augue. Pellentesque vel viverra neque, eget aliquet nunc. Vivamus ornare sit amet ipsum ac consequat. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
        partnerImageRef: [
            "https://firebasestorage.googleapis.com/v0/b/abyawebsite-11d1c.appspot.com/o/Organisation%20Logo%2FYoungNTUCLogo.png?alt=media&token=c8cd1d75-b478-4e4c-8bf7-6fff066afb38",
        ],
    },
    {
        title: "2021 ABYA EXPLORE",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ipsum mauris, scelerisque sed justo vel, hendrerit sagittis odio. Vestibulum quis convallis augue. Pellentesque vel viverra neque, eget aliquet nunc. Vivamus ornare sit amet ipsum ac consequat. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
        partnerImageRef: [
            "https://firebasestorage.googleapis.com/v0/b/abyawebsite-11d1c.appspot.com/o/Organisation%20Logo%2FSGGlobalNetworkLogo.png?alt=media&token=5d301f27-d88b-4982-ba1e-7ab20d0c1f57",
            "https://firebasestorage.googleapis.com/v0/b/abyawebsite-11d1c.appspot.com/o/Organisation%20Logo%2FScapeLogo.png?alt=media&token=c8dc85dc-8a58-4297-8c8d-ea2437eed2f2",
            "https://firebasestorage.googleapis.com/v0/b/abyawebsite-11d1c.appspot.com/o/Organisation%20Logo%2FYoungNTUCLogo.png?alt=media&token=c8cd1d75-b478-4e4c-8bf7-6fff066afb38",
            "https://firebasestorage.googleapis.com/v0/b/abyawebsite-11d1c.appspot.com/o/Organisation%20Logo%2FYoungNTUCLogo.png?alt=media&token=c8cd1d75-b478-4e4c-8bf7-6fff066afb38",
            "https://firebasestorage.googleapis.com/v0/b/abyawebsite-11d1c.appspot.com/o/Organisation%20Logo%2FYoungNTUCLogo.png?alt=media&token=c8cd1d75-b478-4e4c-8bf7-6fff066afb38",
        ],
    },
];
