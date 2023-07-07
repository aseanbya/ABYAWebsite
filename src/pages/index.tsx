import Hero from "~/components/Hero";
import Navbar from "~/components/Navbar";
import Statistics from "~/components/Statistics";

export default function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <Statistics />
        </>
    );
}
