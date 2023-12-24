import Image from "next/image"
import Heading1 from "../common/textStyles/Heading1";
import Heading3 from '../common/textStyles/Heading3';
import ContentContainer from "../common/ContentContainer";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { api } from '~/utils/api';
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';


export default function MeetTheTeam() {

    const { data: managementData } = api.team.getManagement.useQuery();
    const { data: executiveData } = api.team.getExecutives.useQuery();
    const { data: advisoryBoardData } = api.team.getAdvisoryBoard.useQuery();

    const getSizeValue = () => {
        if (typeof window !== 'undefined') {
            const width = window.innerWidth;
            if (width >= 1024) {
                return 3;
            } else if (width >= 768) {
                return 2;
            } else {
                return 1;
            }
        }
        return 1; // Fallback value in case window is not available
    };

    const ScreenSizeComponent = () => {
        const [sizeValue, setSizeValue] = useState(getSizeValue());
        useEffect(() => {
            const handleResize = () => {
                setSizeValue(getSizeValue());
            };

            if (typeof window !== 'undefined') {
                window.addEventListener('resize', handleResize);
                return () => {
                    window.removeEventListener('resize', handleResize);
                };
            }
        }, []);

        return sizeValue;
    };


    return (
        <ContentContainer>
            <Heading1 className="uppercase pb-6">
                Meet The Team
            </Heading1>

            <Heading3 className='text-center'>
                Management Committee
            </Heading3>
            <div>
                <Swiper
                    slidesPerView={ScreenSizeComponent()}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    navigation={true}
                    modules={[Pagination, Navigation, Autoplay]}
                    className="mySwiper h-fit"
                >
                    {managementData?.map((data) => (
                        <SwiperSlide className='pb-12 my-6'>
                            <ProfileCard name={data.name} position={data.position} image={data.image} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <Heading3 className='text-center'>
                Executives
            </Heading3>
            <div>
                <Swiper
                    slidesPerView={ScreenSizeComponent()}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper h-fit"
                >
                    {executiveData?.map((data) => (
                        <SwiperSlide className='pb-12 my-6'>
                            <ProfileCard name={data.name} position={data.position} image={data.image} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <Heading3 className='text-center'>
                Advisory Board
            </Heading3>
            <div>
                <Swiper
                    slidesPerView={ScreenSizeComponent()}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper h-fit"
                >
                    {advisoryBoardData?.map((data) => (
                        <SwiperSlide className='pb-12 my-6'>
                            <ProfileCard name={data.name} position={data.position} image={data.image} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </ContentContainer >
    );
}

type ProfileCardProps = {
    name?: string,
    position?: string,
    image?: string,
}

function ProfileCard({ name, position, image }: ProfileCardProps) {
    return (
        <div className='flex justify-center'>
            <div className={`card h-fit max-w-xs border-2 p-3`}>
                <div className='card'>
                    <div className="h-96 flex">
                        <Image src={image ?? ""} alt={''} width={1600} height={1600} className='object-cover card' />
                    </div>
                    <div className='py-3'>
                        <p className='text-2xl capitalize'>
                            {name}
                        </p>
                        <p className='capitalize text-neutral-500'>
                            {position}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}