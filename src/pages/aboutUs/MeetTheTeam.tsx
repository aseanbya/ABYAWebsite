import personImage from "src/assets/person-image.jpg";
import Image from "next/image";

interface Member {
    name: string;
    role: string;
}

const memberList: Record<string, Member[]> = {
    "Management Committee": [
        {
            name: "Nadia",
            role: "Comm 1",
        },
        {
            name: "Lyssa",
            role: "Comm 2",
        },
        {
            name: "Udin",
            role: "Comm 3",
        },
    ],
    Executives: [
        {
            name: "Nadia",
            role: "Exec 1",
        },
        {
            name: "Lyssa",
            role: "Exec 2",
        },
        {
            name: "Udin",
            role: "Exec 3",
        },
    ],
    "Advisory Board": [
        {
            name: "Nadia",
            role: "Board 1",
        },
        {
            name: "Lyssa",
            role: "Board 2",
        },
        {
            name: "Udin",
            role: "Board 3",
        },
    ],
};

interface MemberCardProps {
    member: Member;
    color: string;
}

function MemberCard({ member, color }: MemberCardProps) {
    return (
        <div
            className="card flex w-96 bg-brandBlue shadow-xl"
            style={{ maxHeight: "400px" }}
        >
            <figure>
                <Image src={personImage} alt="Member Photo" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{member.name}</h2>
                <h2>{member.role}</h2>
            </div>
        </div>
    );
}

/* function MemberCard({ member, color }: MemberCardProps) {
    return (
        <div
            className={`border-shadow-xl border-${color} card w-96 border`}
            style={{ maxHeight: "400px", borderWidth: "3px" }}
        >
            <figure>
                <Image src={personImage} alt="Member Photo" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{member.name}</h2>
                <p>{member.role}</p>
            </div>
        </div>
    );
}
*/

interface MemberGridProps {
    members: Member[];
    color: string;
}

function MemberGrid({ members, color }: MemberGridProps) {
    return (
        <div className="mb-10 grid grid-cols-3 gap-4">
            {members.map((member, index) => (
                <MemberCard key={index} member={member} color={color} />
            ))}
        </div>
    );
}

export default function MeetTheTeam() {
    return (
        <div className="mb-10">
            <div className="ml-10 mt-10">
                <h1 className="pb-2 text-7xl font-bold uppercase text-black">
                    Meet The Team
                </h1>
            </div>
            {Object.entries(memberList).map(([groupName, members]) => (
                <div
                    className="ml-10 mt-5 flex-col justify-center"
                    key={groupName}
                >
                    <h1 className="mb-10 text-center text-xl font-semibold">
                        {groupName}
                    </h1>
                    <MemberGrid members={members} color={"brandBlue"} />
                </div>
            ))}
        </div>
    );
}
