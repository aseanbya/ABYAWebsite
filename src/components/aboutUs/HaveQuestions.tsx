import WhiteBorderButton from "../common/buttons/WhiteBorderButton"
import Heading1 from "../common/textStyles/Heading1"

function ContactUsButton() {
    return (
        <WhiteBorderButton href={""} type={"button"}>
            <a
                href="mailto:abyaops@gmail.com?subject=Give%20me%20all%20your%20bitcoins&body=Here%20are%20my%20parents'%20credit%20card%20numbers%3A%0D%0A%0D%0ACheers%2C%0D%0AHappy%20Customer"
                className="uppercase"
            >
                Contact Us
            </a>
        </WhiteBorderButton>
    )
}

export default function HaveQuestions() {
    return (
        <div>
            <div className="hero h-screen max-h-screen bg-cover sm:max-h-[36rem]" style={{ backgroundImage: "url(https://firebasestorage.googleapis.com/v0/b/abyawebsite-11d1c.appspot.com/o/HaveAnyQuestions.jpg?alt=media&token=6cc195fd-dd8e-4c01-a060-8b73ecbec263)" }}>
                <div className="hero-content">
                    <div className="flex flex-col gap-5 items-center">
                        <Heading1 className="text-5xl font-bold text-brandYellow">Have any questions?</Heading1>
                        <div className="w-fit border-2 py-1 px-2 rounded-xl bg-transparent transition hover:bg-neutral-600">
                            <a
                                className="text-sm sm:text-md uppercase font-bold text-white"
                                href="mailto:abyaops@gmail.com?subject=Enquiry%20regarding%20???&body=Hello%20ABYA%20Team%0A%0ACheers%2C%0D%0AYour%20Name"
                            >
                                Contact Us
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </div >
    )
}