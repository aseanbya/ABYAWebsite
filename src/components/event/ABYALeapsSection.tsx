import ContentContainer from "../common/ContentContainer";
import Heading2 from "../common/textStyles/Heading2";
import LeapsValues from "./LeapsValues";

export default function ABYALeapsSection() {
    return (
        <ContentContainer>
            <Heading2 className="uppercase">ABYA Leaps</Heading2>
            <div className="pb-12 pt-5">
                <p>
                    LEAPS (Leadership, Exploration and Progress) is an
                    ASEAN-focused industry immersion programme, designed to
                    equip and groom students to become industry-relevant future
                    ASEAN- savvy talents.
                </p>
                <br />
                <p>
                    Powered by Young NTUC and the National Youth Council, ABYA
                    LEAPS aims to provide a platform for ASEAN youths to deepen
                    their interest in the ASEAN market and sharpen their
                    technical & soft skills that would be relevant in ASEAN.
                </p>
                <br />
                <p>
                    Any tertiary student/ institute of higher learning from all
                    majors who was a citizen of the ASEAN member countries
                    (includes Brunei, Cambodia, Laos, Malaysia, Myanmar,
                    Philippines, Singapore, Thailand, Indonesia and Vietnam) are
                    invited to the challenge!
                </p>
            </div>
            <LeapsValues />
        </ContentContainer>
    );
}
