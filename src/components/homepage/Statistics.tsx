import ContentContainer from "../common/ContentContainer";
import CommonButton from "../common/buttons/CommonButton";

function LearnMoreButton() {
    return (
        <CommonButton
            href={""}
            type={"button"}
            className="border-2 bg-transparent text-white hover:bg-neutral-600">
            <p className="uppercase">
                Learn More About <span className="whitespace-nowrap">Our Impact</span>
            </p>
        </CommonButton>
    );
}

export default function Statistics() {
    return (
        <div
            className="hero max-h-fit bg-cover"
            style={{ backgroundImage: "url(ABYAteam.jpg)" }}
        >
            <div
                className="hero-overlay"
                style={{
                    background:
                        "linear-gradient(180deg, #E51414 0%, #E51414 0.01%, rgba(58, 43, 123, 0.0781257) 92.19%, rgba(43, 45, 132, 0) 100%)",
                    opacity: "0.45",
                }}
            />
            <ContentContainer className="z-0 py-16 text-center">
                <div className="text-white">
                    <h1 className="pb-8 text-4xl font-bold sm:text-6xl md:text-7xl">
                        With your support,
                        <br />
                        Here&apos;s what we have achieved!
                    </h1>
                    <div className="flex w-full justify-center pb-10">
                        <div className="flex w-fit items-center gap-3 border-b-2 border-b-white pb-8">
                            <div className="text-end text-5xl font-bold sm:text-7xl md:text-8xl">
                                <p>3500+</p>
                            </div>
                            <div className="text-start text-lg font-semibold sm:text-xl md:text-2xl">
                                <p>
                                    ASEAN Youth
                                    <br />
                                    Impacted
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 pb-12">
                        <div className="flex flex-col">
                            <p className="pb-3 text-4xl font-bold sm:text-7xl md:text-8xl">
                                520
                            </p>
                            <p className="text-md font-semibold sm:text-xl md:text-2xl">
                                ABYA
                                <br />
                                Members
                            </p>
                        </div>
                        <div className="flex flex-col">
                            <p className="pb-3 text-4xl font-bold sm:text-7xl md:text-8xl">
                                35
                            </p>
                            <p className="text-md font-semibold sm:text-xl md:text-2xl">
                                ABYA
                                <br />
                                Executives
                            </p>
                        </div>
                        <div className="flex flex-col">
                            <p className="pb-3 text-4xl font-bold sm:text-7xl md:text-8xl">
                                11
                            </p>
                            <p className="text-md font-semibold sm:text-xl md:text-2xl">
                                ASEAN member
                                <br />
                                nations covered
                            </p>
                        </div>
                        <div className="flex flex-col">
                            <p className="pb-3 text-4xl font-bold sm:text-7xl md:text-8xl">
                                40
                            </p>
                            <p className="text-md font-semibold sm:text-xl md:text-2xl">
                                Supporting
                                <br />
                                Organisations
                            </p>
                        </div>
                    </div>
                    <LearnMoreButton />
                </div>
            </ContentContainer>
        </div>
    );
}
