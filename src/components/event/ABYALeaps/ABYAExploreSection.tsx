import ContentContainer from "~/components/common/ContentContainer";
import Heading1 from "~/components/common/textStyles/Heading1";

export default function ABYAExploreSection() {
    return (
        <ContentContainer>
            <div className="flex flex-row">
                <Heading1>ABYA Explore</Heading1>
                <div className="pl-0 sm:pl-12">
                    <p>
                        ABYA Explore provides a series of sharing and networking
                        sessions that enable ASEAN youths to engage with, and be
                        inspired, by industry professionals.
                    </p>
                    <br />
                    <p>
                        In line with ABYA’s commitment to its vision and
                        mission, ABYA Explore was conducted in the form of
                        webinars, small-group networking sessions with
                        professionals and business leaders in ASEAN. ABYA
                        Explore imparts insights and knowledge to the youth on
                        current industry trends across ASEAN. By gaining
                        different perspectives on these issues, ABYA hopes to
                        broaden the youths’ macro-knowledge of business and
                        cultures of the region.
                    </p>
                </div>
            </div>
        </ContentContainer>
    );
}