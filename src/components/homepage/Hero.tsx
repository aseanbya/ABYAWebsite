import Image from "next/image"
import singaporeAttractions from "src/assets/singaporeAttractions.png"
import ContentContainer from "../common/ContentContainer"

function GetInvolvedButton() {
    return (
        <button
            className="bg-brandBlue text-white rounded-xl py-2 px-4
                hover:bg-slate-700"
        >
            <p className="font-bold text-xl uppercase">
                Get Involved
            </p>
        </button>
    )
}

export default function Hero() {
    return (
        <ContentContainer className="bg-neutral-100">
            <div className="text-start">
                <div className="py-8">
                    <h1 className=" text-7xl font-bold uppercase tracking-wide text-black">Shaping the future</h1>
                    <div className="flex flex-row">
                        <div>
                            <p className="py-4 text-xl">We believe in supporting Youths in ASEAN as we navigate through diverse cultures and the future of business opportunity</p>
                            <GetInvolvedButton />
                        </div>
                        <Image
                            src={singaporeAttractions}
                            alt={""}
                            className="w-1/2"
                        />
                    </div>
                </div>
            </div>
        </ContentContainer>
    )
}