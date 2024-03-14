import PageLayout from "~/components/common/PageLayout";
import ContentContainer from "~/components/common/ContentContainer";
import PageTitleSection from "~/components/common/PageTitleSection";

export default function Member() {
  return (
    <PageLayout>
      <PageTitleSection title={"JOIN US - MEMBER"}>
        Excepteur id cupidatat esse adipisicing reprehenderit veniam occaecat
        amet fugiat id sit fugiat. Est elit excepteur commodo magna deserunt
        anim nisi irure. Elit magna non quis ipsum adipisicing consectetur et
        excepteur. Nulla in elit amet exercitation officia ea fugiat sint.
        Incididunt dolore irure consequat consequat amet minim aliqua excepteur.
        Deserunt deserunt proident ipsum non cupidatat ex et laborum laboris
        dolor id excepteur ea tempor nulla. Ullamco magna laborum labore aliqua
        incididunt cillum.
      </PageTitleSection>
      <ContentContainer>
        <iframe
          src="https://airtable.com/embed/appt5opZxZjWqQd1s/shrK6MGvmxkufqfO7?backgroundColor=teal"
          width="100%"
          height="533"
        ></iframe>
      </ContentContainer>
    </PageLayout>
  );
}
