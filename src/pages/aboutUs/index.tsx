import Hero from "~/components/aboutUs/Hero";
import PageLayout from "~/components/common/PageLayout";
import PageTitleSection from "~/components/common/PageTitleSection";
import MeetTheTeam from "../../components/aboutUs/MeetTheTeam";
import OurCommunity from "~/components/common/OurCommunity";
import AboutUs from "~/components/aboutUs/AboutUs";
import HaveQuestions from "~/components/aboutUs/HaveQuestions";

export default function aboutUs() {
    return (
        <PageLayout>
            <PageTitleSection title="About Us">
                <h2>
                    Minim proident ex ipsum do mollit adipisicing voluptate Lorem ullamco. Aute laboris sit dolor dolor dolore deserunt. Consectetur elit aliqua laborum in aliqua sunt commodo est voluptate qui laborum enim. Do enim sunt consectetur anim. Anim labore nulla id velit incididunt. Est consequat commodo laborum aliquip anim in culpa Lorem dolor. Eu eiusmod incididunt fugiat minim sunt excepteur eiusmod mollit sint labore ullamco pariatur. Exercitation amet voluptate deserunt anim exercitation duis laborum deserunt et laboris mollit cupidatat mollit cillum.
                </h2>
            </PageTitleSection>
            <Hero />
            <AboutUs />
            <OurCommunity />
            <MeetTheTeam />
            <HaveQuestions />
        </PageLayout>
    );
}