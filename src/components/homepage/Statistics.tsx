import { PlusIcon } from '@heroicons/react/24/solid'

function LearnMoreButton() {
    return (
        <button
            className="bg-red-700 text-white rounded-lg py-1 px-2 text-sm
                hover:bg-slate-700 uppercase"
        >
            LEARN MORE ABOUT OUR IMPACT
        </button>
    )
}

export default function Statistics() {
    return (
        <div className="hero min-h-screen bg-red-400">
            <div className="hero-content text-center">
                <div>
                    <h1 className="text-4xl pb-8">
                        With your support,
                        <br />
                        Here&apos;s what we have achieved!
                    </h1>
                    <div className="grid grid-cols-2 gap-3 items items-center">
                        <div className="text-end font-bold text-6xl">
                            3500
                        </div>
                        <div className="text-start">
                            <p>
                                ASEAN Youth
                                <br />
                                Impacted
                            </p>
                        </div>
                    </div>
                    <div className="py-6 flex justify-center">
                        <hr className="border-black w-36" />
                    </div>
                    <div className="grid grid-row-2 grid-cols-3 pb-9">
                        <div className="flex flex-col">
                            <p className=" text-5xl font-bold">
                                894
                            </p>
                            <p>
                                ABYA
                                <br />
                                Members
                            </p>
                        </div>
                        <div className="flex flex-col">
                            <p className=" text-5xl font-bold">
                                894
                            </p>
                            <p>
                                ABYA
                                <br />
                                Members
                            </p>
                        </div>
                        <div className="flex flex-col">
                            <p className=" text-5xl font-bold">
                                894
                            </p>
                            <p>
                                ABYA
                                <br />
                                Members
                            </p>
                        </div>
                        <div className="flex flex-col">
                            <p className=" text-5xl font-bold">
                                894
                            </p>
                            <p>
                                ABYA
                                <br />
                                Members
                            </p>
                        </div>
                        <div className="flex flex-col">
                            <p className=" text-5xl font-bold">
                                894
                            </p>
                            <p>
                                ABYA
                                <br />
                                Members
                            </p>
                        </div>
                        <div className="flex flex-col">
                            <p className=" text-5xl font-bold">
                                894
                            </p>
                            <p>
                                ABYA
                                <br />
                                Members
                            </p>
                        </div>
                    </div>
                    <LearnMoreButton />
                </div>
            </div>
        </div>
    )
}