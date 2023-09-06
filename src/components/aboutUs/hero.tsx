export default function Hero() {
    return (
        <div
            className="hero h-screen max-h-screen bg-cover sm:max-h-[36rem]"
            style={{ backgroundImage: "url(ABYAteam2.png)" }}
        >
            <div
                className="hero-overlay"
                style={{
                    background:
                        "linear-gradient(180deg, #E51414 0%, #E51414 0.01%, rgba(58, 43, 123, 0.0781257) 92.19%, rgba(43, 45, 132, 0) 100%)",
                    opacity: "0.45",
                }}
            ></div>

            <div className="hero-content py-16 text-center">
                <div className="flex flex-wrap justify-center gap-4 text-white">
                    <div
                        className="
                        flex max-w-sm items-center rounded-xl border border-white"
                    >
                        <div className="p-6">
                            <h1 className="text-5xl font-bold uppercase">
                                Vision
                            </h1>
                            <hr className="m-2 mx-9" />
                            <p className="h-36">
                                To be the leading youth organisation that
                                nurtures future ASEAN business leaders
                            </p>
                        </div>
                    </div>
                    <div
                        className="
                        flex max-w-sm items-center rounded-xl border border-white"
                    >
                        <div className="p-6">
                            <h1 className="text-5xl font-bold uppercase">
                                Mission
                            </h1>
                            <hr className="m-2 mx-9" />
                            <p className="h-36">
                                Empower a community of ASEAN youth to work and
                                communicate effectively with people regionally,
                                through cross-cultural training, exposure,
                                application and networking.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
