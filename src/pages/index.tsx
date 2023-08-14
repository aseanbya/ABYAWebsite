import Navbar from "~/components/common/Navbar";
import PageLayout from "~/components/common/PageLayout";
import AboutUs from "~/components/homepage/AboutUs";
import Hero from "~/components/homepage/Hero";
import QuotesCarousel from "~/components/homepage/QuotesCarousel";
import Statistics from "~/components/homepage/Statistics";

export default function Home() {
    return (
        <PageLayout>
            <Hero />
            <Statistics />
            <AboutUs />
            <QuotesCarousel />
        </PageLayout>
    );
}
