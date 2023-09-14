import Image from "next/image";
import World from "src/assets/World.png";
import Member from "src/assets/Member.png";
import Building from "src/assets/Building.png";

export default function Statistics() {
    return (

        <div className="grid grid-cols-3 pt-8 pb-32">
            <div className="flex flex-col justify-top items-center border-r-2 border-neutral-400">
                <Image src={World} alt={"the world"} className="pb-5" />
                <h3 className="text-brandBlue text-7xl font-bold pb-2">
                    10
                </h3>
                <h4 className="text-neutral-900 text-2xl font-semibold text-center">
                    Member&apos;s <br /> Countries
                </h4>
            </div>
            <div className="flex flex-col justify-top items-center">
                <Image src={Member} alt={"Members"} className="pb-5" />
                <h3 className="text-brandBlue text-7xl font-bold pb-2">
                    520
                </h3>
                <h4 className="text-neutral-900 text-2xl font-semibold text-center">
                    Member&apos;s
                </h4>
            </div>
            <div className="flex flex-col justify-top items-center border-l-2 border-neutral-400">
                <Image src={Building} alt={"Building"} className="pb-5" />
                <h3 className="text-brandBlue text-7xl font-bold pb-2">
                    40
                </h3>
                <h4 className="text-neutral-900 text-2xl font-semibold text-center">
                    Affiliated <br /> Companies
                </h4>
            </div>
        </div>
    )
}