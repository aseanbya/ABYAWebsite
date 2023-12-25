import Image from "next/image";
import BlueFilledButton from "~/components/common/buttons/BlueFilledButton";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Heading3 from "../common/textStyles/Heading3";
import { api } from "~/utils/api";

type CardCarouselComponentProps = {
    name: string;
    href: string;
    imageUrl: string;
};

function CardCarouselComponent({
    name,
    href,
    imageUrl,
}: CardCarouselComponentProps) {
    return (
        <div className="card grid grid-cols-1 sm:grid-cols-2 items-center gap-5 border-2 border-brandBlue-50 p-4">
            <Image src={imageUrl} alt={""} width={800} height={800} className="rounded-lg" />
            <div className="flex flex-col justify-center gap-4">
                <Heading3 className="uppercase">{name}</Heading3>
                <BlueFilledButton href={`/blog/${encodeURIComponent(href)}`} type={"button"}>Learn More</BlueFilledButton>
            </div>
        </div>
    );
}

export default function ABYAExploreCarousel() {
    const { data: abyaexploreData } = api.blog.retrieveThree.useQuery({ tag: "ABYA_EXPLORE" });
    return (
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            {abyaexploreData?.map((blog, i) => (
                <SwiperSlide className="px-12">
                    <CardCarouselComponent key={i} name={blog.title} href={blog.title} imageUrl={blog.image ?? ""} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}