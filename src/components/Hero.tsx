function GetInvolvedButton() {
    return (
        <button
            className="bg-slate-900 text-white rounded-lg py-1 px-2 text-sm
                hover:bg-slate-700 uppercase"
        >
            Get Involved
        </button>
    )
}

export default function Hero() {
    return (
        <div className="hero bg-base-200">
            <div className="hero-content text-start">
                <div className="p-5">
                    <h1 className="text-3xl font-bold uppercase tracking-wide">Shaping the future</h1>
                    <div className="w-3/5">
                        <p className="py-4 text-sm">We believe in supporting Youths in ASEAN as we navigate through diverse cultures and the future of business opportunity</p>
                    </div>
                    <GetInvolvedButton />
                </div>
            </div>
        </div>
    )
}