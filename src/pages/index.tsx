import PageLayout from "~/components/common/PageLayout";
import AboutUs from "~/components/homepage/AboutUs";
import Hero from "~/components/homepage/Hero";
import Statistics from "~/components/homepage/Statistics";
import OurCommunity from "~/components/common/OurCommunity";

export default function Home() {
    return (
        <PageLayout>
            <Hero />
            <Statistics />
            <AboutUs />
            <OurCommunity />
        </PageLayout>
    );
}
