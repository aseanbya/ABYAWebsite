import ContentContainer from "~/components/common/ContentContainer";
import PageLayout from "~/components/common/PageLayout";
import PageTitleSection from "~/components/common/PageTitleSection";
import Heading2 from "~/components/common/textStyles/Heading2";

export default function Home() {
    return (
        <PageLayout>
            <PageTitleSection title={"Partner with Us"}>
                <h2>Amet ex ipsum adipisicing. Consectetur veniam officia Pariatur irure consequat consectetur aliquip ad ea laborum exercitation. Cillum nisi aliquip tempor Lorem. Aliquip est ea non minim. Velit occaecat nulla excepteur dolore nisi sit ex incididunt laborum aliquip. Aliquip esse dolore eiusmod velit ipsum eiusmod incididunt id exercitation voluptate duis adipisicing minim occaecat. minim occaecat ut.</h2>
            </PageTitleSection>
            <ContentContainer>
                <Heading2 className="text-center">Previous Partners</Heading2>
                <div className="flex flex-wrap justify-center gap-8 pt-12">
                    {partnerImageRef?.map((ref, index) => (
                        <div key={index} className="h-[100px] w-[225px]">
                            <img src={ref} className="h-full w-full" />
                        </div>
                    ))}
                </div>
            </ContentContainer>
        </PageLayout>
    );
}

const partnerImageRef = [
    "https://firebasestorage.googleapis.com/v0/b/abyawebsite-11d1c.appspot.com/o/Organisation%20Logo%2FSGGlobalNetworkLogo.png?alt=media&token=5d301f27-d88b-4982-ba1e-7ab20d0c1f57",
    "https://firebasestorage.googleapis.com/v0/b/abyawebsite-11d1c.appspot.com/o/Organisation%20Logo%2FScapeLogo.png?alt=media&token=c8dc85dc-8a58-4297-8c8d-ea2437eed2f2",
    "https://firebasestorage.googleapis.com/v0/b/abyawebsite-11d1c.appspot.com/o/Organisation%20Logo%2FYoungNTUCLogo.png?alt=media&token=c8cd1d75-b478-4e4c-8bf7-6fff066afb38",
    "https://firebasestorage.googleapis.com/v0/b/abyawebsite-11d1c.appspot.com/o/Organisation%20Logo%2FYoungNTUCLogo.png?alt=media&token=c8cd1d75-b478-4e4c-8bf7-6fff066afb38",
    "https://firebasestorage.googleapis.com/v0/b/abyawebsite-11d1c.appspot.com/o/Organisation%20Logo%2FYoungNTUCLogo.png?alt=media&token=c8cd1d75-b478-4e4c-8bf7-6fff066afb38",
]