import Image from "next/image"
import singaporeAttractions from "src/assets/singaporeAttractions.png"
import ContentContainer from "../common/ContentContainer"
import CommonButton from "../common/buttons/CommonButton"

function GetInvolvedButton() {
    return (
        <CommonButton
            href={""}
            type={"button"}
            className="bg-brandBlue text-white hover:bg-brandBlue-50">
            <p className="uppercase">
                Get Involved
            </p>
        </CommonButton>
    )
}

export default function Hero() {
    return (
        <ContentContainer className="bg-neutral-100">
            <div className="text-start">
                <div className="py-8">
                    <h1 className="text-5xl sm:text-7xl font-bold uppercase tracking-wide text-black">
                        Shaping the future
                    </h1>
                    <div className="flex flex-col sm:flex-row">
                        <div className="w-full sm:w-1/2">
                            <h2 className="py-4 text-md sm:text-xl">
                                We believe in supporting Youths in ASEAN as we navigate through diverse cultures and the future of business opportunity
                            </h2>
                            <GetInvolvedButton />
                        </div>
                        <Image
                            src={singaporeAttractions}
                            alt={""}
                            className="hidden sm:flex sm:w-1/2"
                        />
                    </div>
                </div>
            </div>
        </ContentContainer>
    )
}