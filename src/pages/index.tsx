import Navbar from "~/components/common/Navbar";
import Hero from "~/components/index/Hero";
import Statistics from "~/components/index/Statistics";
import AboutUs from "~/components/index/AboutUs";
import QuotesCarousel from "~/components/index/QuotesCarousel";
import Footer from "~/components/common/Footer";

export default function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <Statistics />
            <AboutUs />
            <QuotesCarousel />
            <Footer />
        </>
    );
}
