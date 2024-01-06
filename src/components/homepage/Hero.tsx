import Image from "next/image"
import singaporeAttractions from "src/assets/singaporeAttractions.png"
import ContentContainer from "../common/ContentContainer"
import BlueFilledButton from "../common/buttons/BlueFilledButton"
import Heading1 from "../common/textStyles/Heading1"

function GetInvolvedButton() {
    return (
        <BlueFilledButton
            href="/getInvolved"
            type={"button"}>
            <p className="uppercase">
                Get Involved
            </p>
        </BlueFilledButton>
    )
}

export default function Hero() {
    return (
        <ContentContainer className="bg-neutral-100">
            <div className="text-start">
                <div className="py-8">
                    <Heading1 className="uppercase tracking-wide">
                        Shaping the future
                    </Heading1>
                    <div className="flex flex-col sm:flex-row">
                        <div className="w-full sm:w-1/2">
                            <p className="py-4">
                                We believe in supporting Youths in ASEAN as we navigate through diverse cultures and the future of business opportunity
                            </p>
                            <GetInvolvedButton />
                        </div>
                        <Image src={singaporeAttractions} alt={""} className="hidden sm:flex sm:w-1/2" />
                    </div>
                </div>
            </div>
        </ContentContainer>
    )
}