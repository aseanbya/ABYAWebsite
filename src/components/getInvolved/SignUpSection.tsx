import { Card } from "../../components/getInvolved/Card";

export default function SignUpSection() {
    return (
        <div className="flex flex-col items-center py-12">
            <section className="flex flex-col justify-center gap-5 lg:flex-row">
                <Card
                    title="As a member"
                    description="Our community seeks to bring together youths who seek to develop their competencies in becoming business savvy with a future in ASEAN."
                    href="/getInvolved/member"
                    image=""
                    borderColor="border-brandRed"
                />
                <Card
                    title="As an executive"
                    description="Our community seeks to bring together youths who seek to develop their competencies in becoming business savvy with a future in ASEAN."
                    href="/getInvolved/executive"
                    image="https://firebasestorage.googleapis.com/v0/b/abyawebsite-11d1c.appspot.com/o/ABYAteam.jpg?alt=media&token=aac3f059-e3b2-4d63-8e99-431df85349ee"
                    borderColor="border-brandBlue"
                />
                <Card
                    title="Partner Us"
                    description="Our community seeks to bring together youths who seek to develop their competencies in becoming business savvy with a future in ASEAN."
                    href="/getInvolved/partner"
                    image="/ABYAteam.jpg"
                    borderColor="border-brandYellow"
                />
            </section>
        </div>
    )
}