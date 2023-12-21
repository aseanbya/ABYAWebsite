import { Card } from "../../components/getInvolved/Card";

export default function SignUpSection() {
    return (
        <div className="flex flex-col items-center py-12">
            <section className="flex flex-col justify-center gap-5 lg:flex-row">
                <Card
                    title="As a member"
                    description="Our community seeks to bring together youths who seek to develop their competencies in becoming business savvy with a future in ASEAN."
                    href="/getInvolved/member"
                    image="https://firebasestorage.googleapis.com/v0/b/abyawebsite-11d1c.appspot.com/o/AsAMember.jpg?alt=media&token=b3f0a400-e271-486b-ac29-2d6eded7df65"
                    borderColor="border-brandRed"
                />
                <Card
                    title="As an executive"
                    description="Our community seeks to bring together youths who seek to develop their competencies in becoming business savvy with a future in ASEAN."
                    href="/getInvolved/executive"
                    image="https://firebasestorage.googleapis.com/v0/b/abyawebsite-11d1c.appspot.com/o/AsAnExecutive.jpg?alt=media&token=036bbdd2-5dae-4ef5-8c55-a9f6b30c25c5"
                    borderColor="border-brandBlue"
                />
                <Card
                    title="Partner Us"
                    description="Our community seeks to bring together youths who seek to develop their competencies in becoming business savvy with a future in ASEAN."
                    href="/getInvolved/partner"
                    image="https://firebasestorage.googleapis.com/v0/b/abyawebsite-11d1c.appspot.com/o/PartnerUs.jpg?alt=media&token=de883601-53ae-4bbe-bf19-b351fedd9397"
                    borderColor="border-brandYellow"
                />
            </section>
        </div>
    )
}