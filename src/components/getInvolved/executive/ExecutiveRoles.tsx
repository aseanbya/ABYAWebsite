import { useState } from "react";
import Heading3 from "../../common/textStyles/Heading3";
import Collapse from "./Collapse";

// Allow for one layer of bullet point nesting
type BulletPoint = string | string[];

type RoleDetails = {
    heading: string;
    bulletPoints: BulletPoint[];
};

type Role = {
    department: string;
    name: string;
    details: RoleDetails[];
};

const testDetails = [
    {
        heading: "Responsibilities",
        bulletPoints: [
            "Overseeing the ABYA’s ongoing operations and procedures. The goal of the Deputy COO position is to secure the functionality of ABYA to drive extensive and sustainable growth.",
            "Assist the COO in overseeing all operation & technology matters",
            [
                "Take charge of ABYA correspondence to members, executives, and external parties (for example, responding to external enquiries on social media and email.)",
                "Oversee the performance management procedure that tracks and assesses the organization’s progress toward its objectives.",
                "Creation and implementation of reporting and measurement systems",
                "Determine the next level of information technology systems that will support the expansion of certain programs and ABYA as a whole by analyzing the current technology infrastructure.",
            ],
            "Determine the next level of information technology systems that will support the expansion of certain programs and ABYA as a whole by analyzing the current technology infrastructure.",
            [
                "Recruitment & onboarding matters of members & executives",
                "Monitor performance of executives & ExCo",
                "Introduce a human capital development strategy, and improve all aspects of human resources management, such as hiring, training, and benefits.",
            ],
        ],
    },
    {
        heading: "Commitment Period",
        bulletPoints: ["2 years, at least 3 to 4 hours per week"],
    },
];

const allTestRoles: Role[] = [
    {
        department: "Operations and Human Resources",
        name: "Deputy Chief Operating Officer",
        details: testDetails,
    },
    {
        department: "Operations and Human Resources",
        name: "Human Resource Officer",
        details: testDetails,
    },
    {
        department: "Operations and Human Resources",
        name: "Community Building Executive",
        details: testDetails,
    },
    {
        department: "Operations and Human Resources",
        name: "Operations Executive",
        details: testDetails,
    },
    {
        department: "Operations and Human Resources",
        name: "Automation Specialist",
        details: testDetails,
    },
    {
        department: "Operations and Human Resources",
        name: "Website Manager",
        details: testDetails,
    },
    {
        department: "Programmes and Events",
        name: "Head",
        details: testDetails,
    },
    {
        department: "Partnership Development",
        name: "Head",
        details: testDetails,
    },
    {
        department: "Marketing",
        name: "Head",
        details: testDetails,
    },
];

const departments: string[] = [
    ...new Set(allTestRoles.map((role) => role.department)),
];

// Generate <ul> with nested <li> elements up to one level deep
// Generate bullet points for a role in the right column
function generateBulletPoints(bulletPoints: BulletPoint[]) {
    return (
        <ul className="ml-6 list-disc">
            {bulletPoints.map((bulletPoint) => {
                if (typeof bulletPoint === "string") {
                    return <li key={bulletPoint}>{bulletPoint}</li>;
                } else {
                    return (
                        <ul
                            key={JSON.stringify(bulletPoint)}
                            className="ml-10 list-disc"
                        >
                            {bulletPoint.map((subpoint) => {
                                return <li key={subpoint}>{subpoint}</li>;
                            })}
                        </ul>
                    );
                }
            })}
        </ul>
    );
}

export default function ExecutiveRoles() {
    const [selectedRole, setSelectedRole] = useState<Role>(
        allTestRoles[0] as Role
    );

    // Generate clickable list of roles for a department in the left column
    const generateRolesForDepartment = (department: string) => {
        return allTestRoles
            .filter((role) => role.department === department)
            .map((role) => (
                <div
                    key={role.name}
                    className={`cursor-pointer ${
                        Object.is(selectedRole, role)
                            ? "text-neutral-100"
                            : "text-neutral-400"
                    }`}
                    onClick={() => setSelectedRole(role)}
                >
                    {role.name}
                </div>
            ));
    };

    return (
        <div className="my-8 grid grid-cols-4 border border-neutral-400">
            <div className="col-span-1 bg-brandBlue-70 px-6 py-8 transition duration-300">
                <Heading3 className="font-medium text-neutral-100 underline">
                    Departments
                </Heading3>
                {departments.map((department, i) => (
                    <Collapse
                        heading={department}
                        key={department}
                        initialOpen={i === 0}
                    >
                        {generateRolesForDepartment(department)}
                    </Collapse>
                ))}
            </div>

            <div className="col-span-3 px-6 py-8">
                {selectedRole.details.map(({ heading, bulletPoints }) => (
                    <div
                        key={heading + "-container"}
                        className="mb-4 flex flex-col gap-4"
                    >
                        <Heading3 key={heading} className="font-medium">
                            {heading}
                        </Heading3>
                        {generateBulletPoints(bulletPoints)}
                    </div>
                ))}
            </div>
        </div>
    );
}
