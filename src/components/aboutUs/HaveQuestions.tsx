import CommonButton from "../common/buttons/BlueFilledButton"
import Heading1 from "../common/textStyles/Heading1"

function ContactUsButton() {
    return (
        <CommonButton
            href={""}
            type={"button"}
            className="bg-transparent text-white hover:bg-neutral-600 mt-7">
            <p className="uppercase">
                Contact Us
            </p>
        </CommonButton>
    )
}

export default function HaveQuestions() {
    return (
        <div>
            <div
                className="hero h-screen max-h-screen bg-cover sm:max-h-[36rem]"
                style={{ backgroundImage: "url(testimonialBG2.jpg)" }}
            >
                <div className="hero-content">
                    <div className="flex flex-col items-center">
                        <Heading1 className="text-5xl font-bold text-brandYellow">
                            Have any questions?
                        </Heading1>
                        <ContactUsButton />
                    </div>
                </div>
            </div>
        </div>
    )
}