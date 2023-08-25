import Image from "next/image"
import singaporeAttractions from "src/assets/singaporeAttractions.png"

function GetInvolvedButton() {
    return (
        <button
            className="bg-brandBlue text-white rounded-xl py-2 px-4
            hover:bg-slate-700"
        >
            <p className="font-bold text-md sm:text-xl uppercase">
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
                    <h1 className="text-5xl sm:text-7xl font-bold uppercase tracking-wide text-black">Shaping the future</h1>
                    <div className="flex flex-col sm:flex-row">
                        <div className="w-full sm:w-1/2">
                            <p className="py-4 text-md sm:text-xl">We believe in supporting Youths in ASEAN as we navigate through diverse cultures and the future of business opportunity</p>
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
        </div>
    )
}