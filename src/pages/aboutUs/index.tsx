import Hero from "~/components/aboutUs/hero";
import PageLayout from "~/components/common/PageLayout";
import PageTitleSection from "~/components/common/PageTitleSection";

export default function aboutUs() {
    return (
        <PageLayout>
            <PageTitleSection title="About Us">
                <h2>
                    Aliquip tempor culpa nulla aliqua ut in commodo non esse
                    mollit quis adipisicing. Ipsum dolor duis pariatur ad Lorem
                    aliquip ex minim aliquip do pariatur ut. Ad sint minim duis
                    mollit culpa. Ea deserunt id ex esse veniam anim et deserunt
                    commodo consectetur laborum id. Reprehenderit exercitation
                    qui dolor magna consectetur proident aliqua nostrud eu
                    aliquip. In consequat amet et deserunt do irure velit tempor
                    ipsum occaecat.
                </h2>
            </PageTitleSection>
            <Hero />
        </PageLayout>
    );
}
