import Navbar from "~/components/common/Navbar";
import PageLayout from "~/components/common/PageLayout";
import AboutUs from "~/components/homepage/AboutUs";
import Hero from "~/components/homepage/Hero";
import Statistics from "~/components/homepage/Statistics";
import OurCommunity from "~/components/common/OurCommunity";
import PageContentContainer from "~/components/common/PageContentContainer";

export default function Home() {
    return (
        <PageLayout>
            <Hero />
            <Statistics />
            <PageContentContainer>
                <AboutUs />
            </PageContentContainer>
            <OurCommunity />
        </PageLayout>
    );
}
