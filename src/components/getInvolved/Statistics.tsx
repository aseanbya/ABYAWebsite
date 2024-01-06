import Image from "next/image";

import World from "src/assets/World.png";
import Member from "src/assets/Member.png";
import Building from "src/assets/Building.png";

import Heading1 from "../common/textStyles/Heading1";
import Heading4 from "../common/textStyles/Heading4";

export default function Statistics() {
    return (
        <div className="flex flex-col">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-7 pt-4 pb-12">
                <div className="flex flex-col gap-3 justify-top items-center">
                    <Image src={World} alt={"the world"} />
                    <Heading1 className="text-brandBlue">10</Heading1>
                    <Heading4 className="font-semibold text-center">Member&apos;s<br />Countries</Heading4>
                </div>
                <div className="flex flex-col gap-3 justify-top items-center sm:border-r-2 sm:border-l-2 border-neutral-400">
                    <Image src={Member} alt={"Members"} />
                    <Heading1 className="text-brandBlue">520</Heading1>
                    <Heading4 className="font-semibold text-center">Member&apos;s</Heading4>
                </div>
                <div className="flex flex-col gap-3 justify-top items-center">
                    <Image src={Building} alt={"Building"} />
                    <Heading1 className="text-brandBlue">40</Heading1>
                    <Heading4 className="font-semibold text-center">Affiliated<br />Companies</Heading4>
                </div>
            </div>
        </div>
    )
}