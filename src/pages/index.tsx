import Navbar from "~/components/common/Navbar";
import PageLayout from "~/components/common/PageLayout";
import AboutUs from "~/components/homepage/AboutUs";
import Hero from "~/components/homepage/Hero";
import Statistics from "~/components/homepage/Statistics";
import Quotes from "~/components/common/Quotes";

export default function Home() {
    return (
        <PageLayout>
            <Hero />
            <Statistics />
            <AboutUs />
            <Quotes />
        </PageLayout>
    );
}
