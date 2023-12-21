import Image from "next/image";
import { useState, useEffect } from "react";
import Heading1 from "../common/textStyles/Heading1";
import ContentContainer from "../common/ContentContainer";

interface Member {
    name: string;
    role: string;
}

// im not sure what the large and small column widths are, are they standard or specified?
const largeScreenWidth = 1024;
const smallScreenWidth = 640;

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
        {
            name: "Nadia",
            role: "Board 4",
        },
        {
            name: "Lyssa",
            role: "Board 5",
        },
        {
            name: "Udin",
            role: "Board 6",
        },
        {
            name: "Nadia",
            role: "Board 7",
        },
        {
            name: "Lyssa",
            role: "Board 8",
        },
        {
            name: "Udin",
            role: "Board 9",
        },
        {
            name: "Nadia",
            role: "Board 10",
        },
        {
            name: "Lyssa",
            role: "Board 11",
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
            className={`card mb-10 flex max-h-[32rem] max-w-sm border-2 shadow-xl ${color}`}
        >
            <figure>
                <Image src={""} alt="Member Photo" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{member.name}</h2>
                <h2>{member.role}</h2>
            </div>
        </div>
    );
}

interface MemberGridProps {
    members: Member[];
    color: string;
    groupName: string;
}

function MemberGrid({ members, color, groupName }: MemberGridProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [numberOfColumns, setNumberOfColumns] = useState(3);

    useEffect(() => {
        // sm display to have 1, md to have 2, lg to have 3
        const handleResize = () => {
            if (window.innerWidth < smallScreenWidth) {
                setNumberOfColumns(1);
            } else if (window.innerWidth < largeScreenWidth) {
                setNumberOfColumns(2);
            } else {
                setNumberOfColumns(3);
            }
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const slicedMembers = [];
    for (let i = 0; i < members.length; i += numberOfColumns) {
        slicedMembers.push(members.slice(i, i + numberOfColumns));
    }
    const handleNextClick = () => {
        if (currentIndex < slicedMembers.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };
    const handlePrevClick = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    return (
        <div>
            <div className="flex items-center justify-center">
                <button
                    className="btn-outline btn-circle btn mr-10"
                    onClick={handlePrevClick}
                    style={{ opacity: currentIndex === 0 ? 0.25 : 1 }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 19l-7-7 7-7"
                        />
                    </svg>
                </button>
                <h1 className="mb-10 mt-10 text-center text-3xl font-semibold">
                    {groupName}
                </h1>
                <button
                    className="btn-outline btn-circle btn ml-10"
                    onClick={handleNextClick}
                    style={{
                        opacity:
                            currentIndex === slicedMembers.length - 1
                                ? 0.25
                                : 1,
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 5l7 7-7 7"
                        />
                    </svg>
                </button>
            </div>
            <div className="grid w-full grid-cols-3 gap-3 sm:grid-cols-1 sm:gap-5 md:grid-cols-2 md:gap-10 lg:grid-cols-3">
                {slicedMembers[currentIndex]?.map((member, index) => (
                    <MemberCard key={index} member={member} color={color} />
                ))}
            </div>
        </div>
    );
}

export default function MeetTheTeam() {
    return (
        <ContentContainer>
            <div className="pt-20 pb-10">
                <Heading1 className="uppercase">
                    Meet The Team
                </Heading1>
                <div className="flex min-h-screen flex-col items-center justify-center">
                    {Object.entries(memberList).map(([groupName, members]) => (
                        <div key={groupName}>
                            <MemberGrid
                                members={members}
                                color={
                                    groupName === "Management Committee"
                                        ? "border-brandBlue"
                                        : groupName === "Executives"
                                            ? "border-brandYellow"
                                            : "border-brandRed"
                                }
                                groupName={groupName}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </ContentContainer>
    );
}
