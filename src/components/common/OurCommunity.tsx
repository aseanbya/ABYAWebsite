import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

import { api } from '~/utils/api';

import 'swiper/css';
import 'swiper/css/navigation';

export default function OurCommunity() {
    const { data } = api.hearFromOurCommunity.getAll.useQuery();
    return (
        <div
            className="relative bg-cover bg-center pb-24 pt-16"
            style={{ backgroundImage: "url(https://firebasestorage.googleapis.com/v0/b/abyawebsite-11d1c.appspot.com/o/HearFromOurCommunity.png?alt=media&token=9c5977fc-2606-432d-9f79-77e59a2718e9)" }}
        >
            <div className="absolute inset-0 h-full w-full bg-black opacity-70"></div>
            <div className="relative z-10 w-full">
                <div>
                    <p className="text-center text-4xl font-bold text-brandYellow">Hear from Our Community</p>
                </div>
                <div className="flex pt-16">
                    <Swiper
                        navigation={true}
                        modules={[Navigation, Autoplay]}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                    >
                        {data?.map((data) => (
                            <SwiperSlide >
                                <CardCarouselComponent key={data?.id} name={data?.name} quote={data?.quote} title={data?.position} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
}

type CardCarouselComponentProps = {
    name: string;
    quote: string;
    title: string;
};

function CardCarouselComponent({ name, quote, title, }: CardCarouselComponentProps) {
    return (
        <div className="flex justify-center pb-4">
            <div className="card flex h-1/2 w-2/3 justify-center border border-brandYellow">
                <div className="overflow-hidden p-8 text-center">
                    <p className="text-white">{quote}</p>
                    <p className="mt-6 text-xl font-bold text-white">{name}</p>
                    <p className="text-sm text-brandYellow">{title}</p>
                </div>
            </div>
        </div>
    );
}
