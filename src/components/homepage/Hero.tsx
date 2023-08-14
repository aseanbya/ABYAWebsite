import Image from "next/image"
import heroImage from "src/assets/heroImage.png"

function GetInvolvedButton() {
    return (
        <button
            className="bg-brandBlue text-white rounded-xl py-2 px-4 text-sm
                hover:bg-slate-700 uppercase"
        >
            <p className="font-bold text-xl">
                Get Involved
            </p>
        </button>
    )
}

export default function Hero() {
    return (
        <div className="hero bg-base-200">
            <div className="hero-content text-start">
                <div className="py-8">
                    <h1 className=" text-7xl font-bold uppercase tracking-wide text-black">Shaping the future</h1>
                    <div className="flex flex-row">
                        <div>
                            <p className="py-4 text-xl">We believe in supporting Youths in ASEAN as we navigate through diverse cultures and the future of business opportunity</p>
                            <GetInvolvedButton />
                        </div>
                        <Image
                            src={heroImage}
                            alt={""}
                            className="w-1/2"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}