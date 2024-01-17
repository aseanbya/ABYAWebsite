import ContentContainer from "~/components/common/ContentContainer";
import PageLayout from "~/components/common/PageLayout";
import PageTitleSection from "~/components/common/PageTitleSection";

export default function Home() {
    return (
        <PageLayout>
            <PageTitleSection title={"Join Us - Member"}>
                <h2>Amet ex ipsum adipisicing. Consectetur veniam officia Pariatur irure consequat consectetur aliquip ad ea laborum exercitation. Cillum nisi aliquip tempor Lorem. Aliquip est ea non minim. Velit occaecat nulla excepteur dolore nisi sit ex incididunt laborum aliquip. Aliquip esse dolore eiusmod velit ipsum eiusmod incididunt id exercitation voluptate duis adipisicing minim occaecat. minim occaecat ut.</h2>
            </PageTitleSection>
            <ContentContainer>
                <iframe src="https://airtable.com/embed/appt5opZxZjWqQd1s/shrK6MGvmxkufqfO7?backgroundColor=teal" width="100%" height="533"></iframe>
            </ContentContainer>
        </PageLayout>
    );
}
