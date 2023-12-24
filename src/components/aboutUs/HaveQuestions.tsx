import WhiteBorderButton from "../common/buttons/WhiteBorderButton"
import Heading1 from "../common/textStyles/Heading1"

function ContactUsButton() {
    return (
        <WhiteBorderButton
            href={""}
            type={"button"}>
            <p className="uppercase">
                Contact Us
            </p>
        </WhiteBorderButton>
    )
}

export default function HaveQuestions() {
    return (
        <div>
            <div
                className="hero h-screen max-h-screen bg-cover sm:max-h-[36rem]"
                style={{ backgroundImage: "url(https://firebasestorage.googleapis.com/v0/b/abyawebsite-11d1c.appspot.com/o/HaveAnyQuestions.jpg?alt=media&token=6cc195fd-dd8e-4c01-a060-8b73ecbec263)" }}
            >
                <div className="hero-content">
                    <div className="flex flex-col gap-5 items-center">
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