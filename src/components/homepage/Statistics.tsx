import { PlusIcon } from '@heroicons/react/24/solid'

function LearnMoreButton() {
    return (
        <button
            className="bg-transparent border-2 text-white rounded-xl py-2 px-4 "
        >
            <p className='font-bold text-xl uppercase'>
                Learn More About Our Impact
            </p>
        </button>
    )
}

export default function Statistics() {
    return (
        <div
            className="hero min-h-screen bg-cover"
            style={{ backgroundImage: 'url(ABYAteam.jpg)' }}
        >
            <div
                className="hero-overlay"
                style={{
                    background: "linear-gradient(180deg, #E51414 0%, #E51414 0.01%, rgba(58, 43, 123, 0.0781257) 92.19%, rgba(43, 45, 132, 0) 100%)",
                    opacity: "0.45"
                }}
            ></div>

            <div className="hero-content text-center py-16">
                <div className='text-white'>
                    <h1 className="text-7xl pb-8 font-bold">
                        With your support,
                        <br />
                        Here&apos;s what we have achieved!
                    </h1>
                    <div className='w-full flex justify-center pb-10'>
                        <div className='flex items-center gap-3 w-fit px-6 border-b-white border-b-2 pb-8'>
                            <div className="text-end font-bold text-8xl">
                                <p>
                                    3500+
                                </p>
                            </div>
                            <div className="text-start font-semibold text-2xl">
                                <p>
                                    ASEAN Youth
                                    <br />
                                    Impacted
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-4 pb-12">
                        <div className="flex flex-col">
                            <p className="font-bold text-8xl pb-3">
                                520
                            </p>
                            <p className='font-semibold text-2xl'>
                                ABYA
                                <br />
                                Members
                            </p>
                        </div>
                        <div className="flex flex-col">
                            <p className="font-bold text-8xl pb-3">
                                35
                            </p>
                            <p className='font-semibold text-2xl'>
                                ABYA
                                <br />
                                Executives
                            </p>
                        </div>
                        <div className="flex flex-col">
                            <p className="font-bold text-8xl pb-3">
                                11
                            </p>
                            <p className='font-semibold text-2xl'>
                                ASEAN member
                                <br />
                                nations covered
                            </p>
                        </div>
                        <div className="flex flex-col">
                            <p className="font-bold text-8xl pb-3">
                                40
                            </p>
                            <p className='font-semibold text-2xl'>
                                Supporting
                                <br />
                                Organisations
                            </p>
                        </div>
                    </div>
                    <LearnMoreButton />
                </div>
            </div>
        </div >
    )
}