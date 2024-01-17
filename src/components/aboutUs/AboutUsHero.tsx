import ContentContainer from "../common/ContentContainer";
import Image from "next/image";
import Heading1 from "~/components/common/textStyles/Heading1";

export default function AboutUsHero() {
    return (
        <ContentContainer>
            <div className="grid gap-3 py-9 sm:grid-cols-2">
                <Image src={"https://firebasestorage.googleapis.com/v0/b/abyawebsite-11d1c.appspot.com/o/OurStory.png?alt=media&token=028dc58b-c1c7-4914-a239-1d2b479f7167"} width={1600} height={1600} alt={""} />
                <div className="flex flex-col justify-center gap-2">
                    <Heading1 className="py-4 text-5xl font-bold uppercase text-black sm:py-0 sm:text-7xl">Our Story</Heading1>
                    <p>Founded in 2020 by a group of seven enthusiastic youth, the ASEAN Business Youth Association (ABYA) aims to be the bridge for youths to increase their knowledge and gain a foothold in ASEAN through participating in our programmes. Officially legalised as a society in 2021, ABYA has a burgeoning network of aspiring entrepreneurs and is focused on fostering sustainable businesses.</p>
                </div>
            </div>
            <div>
                <p>
                    Birthed in the inaugural Spark The Next&apos;s Youth Action Challenge, ABYA emerged as the runner-up team and was awarded with a seed grant to develop and run this initiative. Since then, the network has exponentially expanded to a vibrant community of 500 youth members. As of 2023, the organisation has impacted over 3500 youth in 11 ASEAN member nations. ABYA&apos;s successes in marketing, partnerships, and programmes is credited to the member executives&apos; hard work on initiatives such as ABYA Explore and ABYA Leadership, Exploration, and Progress (LEAPS).
                    <br />
                    <br />
                    In support of the United Nations Sustainable Development Goals (SDGs), ABYA works towards three SDGs, namely decent work and economic growth, sustainable cities and communities, and partnerships for the goals. This helps to achieve higher economic productivity through business collaborations, supports positive economic, social, and environmental links between different regions through national and regional development plnpmanning, as well as encourages and promotes effective partnerships between public, private, and civil societies.
                    <br />
                    <br />
                    Based on our Focus Group Discussions (FGDs) and survey, we have gained insights into the youths&apos; needs and identified the underlying gaps in the market. With the volatile coronavirus pandemic, many youths were left struggling to cope with a rapidly changing and increasingly challenging work environment. ABYA was born in the midst of the coronavirus pandemic and discovered the importance of youths upskilling themselves in these trying times. Our programmes started off to focus on three main pillars — Political, Economic, and Culture (PEC) — of the region.
                </p>
            </div>
        </ContentContainer>
    )
}