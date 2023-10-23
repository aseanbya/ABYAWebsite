import Image from "next/image";
import Member from "src/assets/Member.png";
import Gear from "src/assets/Gear.png";

export default function ExecutiveStatistics() {
    return (
        <div className="grid grid-cols-2 pb-32 pt-8">
            <div className="justify-top flex flex-col items-center">
                <Image src={Member} alt={"Members"} className="pb-5" />
                <h3 className="pb-2 text-7xl font-bold text-brandBlue">37</h3>
                <h4 className="text-center text-2xl font-semibold text-neutral-900">
                    Executives
                </h4>
            </div>
            <div className="justify-top flex flex-col items-center border-l-2 border-neutral-400">
                <Image src={Gear} alt={"Gear"} className="pb-5" />
                <h3 className="pb-2 text-7xl font-bold text-brandBlue">4</h3>
                <h4 className="text-center text-2xl font-semibold text-neutral-900">
                    Departments
                </h4>
            </div>
        </div>
    );
}
