import ContentContainer from "../common/ContentContainer";
import WhiteBorderButton from "../common/buttons/WhiteBorderButton";
import Heading1 from "../common/textStyles/Heading1";
import Heading2 from "../common/textStyles/Heading2";
import Heading3 from "../common/textStyles/Heading3";
import Heading4 from "../common/textStyles/Heading4";

export default function Statistics() {
    return (
        <div className="hero max-h-fit bg-cover" style={{ backgroundImage: "url(https://firebasestorage.googleapis.com/v0/b/abyawebsite-11d1c.appspot.com/o/IndexStatistics.jpg?alt=media&token=fd9a8a7e-3835-4aac-a78b-7a3356a5053c)" }}>
            <div
                className="hero-overlay"
                style={{
                    background: "linear-gradient(180deg, #E51414 0%, #E51414 0.01%, rgba(58, 43, 123, 0.0781257) 92.19%, rgba(43, 45, 132, 0) 100%)",
                    opacity: "0.45",
                }}
            />
            <ContentContainer className="z-0 py-16 text-center">
                <div className="flex flex-col text-white gap-5 sm:gap-8">
                    <Heading2>With your support,<br />Here&apos;s what we have achieved!</Heading2>
                    <div className="flex justify-center">
                        <div className="flex flex-row w-fit items-center gap-3 border-b-2 border-b-white pb-3">
                            <Heading2>3600+</Heading2>
                            <Heading3 className="capitalize">ASEAN Youth<br />Impacted</Heading3>
                        </div>
                    </div>

                    <div className="">
                        <div className="w-fit grid grid-cols-2 sm:grid-cols-4 gap-4">
                            <div className="flex flex-col">
                                <Heading1>520</Heading1>
                                <Heading4 className="capitalize font-semibold">ABYA<br />Members</Heading4>
                            </div>
                            <div className="flex flex-col">
                                <Heading1>35</Heading1>
                                <Heading4 className="capitalize font-semibold">ABYA<br />Executives</Heading4>
                            </div>
                            <div className="flex flex-col">
                                <Heading1>11</Heading1>
                                <Heading4 className="capitalize font-semibold">ASEAN member<span className="whitespace-nowrap">nations covered</span>
                                </Heading4>
                            </div>
                            <div className="flex flex-col">
                                <Heading1 className="">40</Heading1>
                                <Heading4 className="capitalize font-semibold">Supporting <span className="whitespace-nowrap">Organisations</span></Heading4>
                            </div>
                        </div>
                    </div>
                    <div className="pt-6">
                        <LearnMoreButton />
                    </div>
                </div>
            </ContentContainer>
        </div>
    );
}

function LearnMoreButton() {
    return (
        <WhiteBorderButton href="/aboutUs/ourImpact" type={"button"}>
            Learn More About <span className="whitespace-nowrap">Our Impact</span>
        </WhiteBorderButton>
    );
}