import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import Link from 'next/link';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


export default function HomeAdvertSliderComponent() {
  return (
    <>
        <section className='w-full hidden lg:flex justify-center -mt-8'>
            <div className='container-fluid'>
                <Swiper
                    spaceBetween={30}
                    slidesPerView={5}
                    navigation
                    pagination={{ clickable: true }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                <SwiperSlide>
                    <Link href="/" className='h-[202px] w-full bg-white rounded-xl flex flex-col items-center'>
                        <Image 
                            src="https://img.imageus.dev/https://depo.isbul.net/v2/general/45ae6ec6-31d1-44db-823d-db21cce9bbb1.jpg?width=125&height=80&mode=contain&background=ffffff"
                            height={100}
                            width={200}
                            alt='Company logo'
                            className='rounded-xl'
                        />
                        <p className='font-bold text-black mt-2'>Bakicibul.net</p>
                        <p className='text-zinc-500 mt-1'>Yazılım firması</p>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href="/" className='h-[202px] w-full bg-white rounded-xl flex flex-col items-center'>
                        <Image 
                            src="https://img.imageus.dev/https://depo.isbul.net/v2/general/45ae6ec6-31d1-44db-823d-db21cce9bbb1.jpg?width=125&height=80&mode=contain&background=ffffff"
                            height={100}
                            width={200}
                            alt='Company logo'
                            className='rounded-xl'
                        />
                        <p className='font-bold text-black mt-2'>Bakicibul.net</p>
                        <p className='text-zinc-500 mt-1'>Yazılım firması</p>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href="/" className='h-[202px] w-full bg-white rounded-xl flex flex-col items-center'>
                        <Image 
                            src="https://img.imageus.dev/https://depo.isbul.net/v2/general/45ae6ec6-31d1-44db-823d-db21cce9bbb1.jpg?width=125&height=80&mode=contain&background=ffffff"
                            height={100}
                            width={200}
                            alt='Company logo'
                            className='rounded-xl'
                        />
                        <p className='font-bold text-black mt-2'>Bakicibul.net</p>
                        <p className='text-zinc-500 mt-1'>Yazılım firması</p>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href="/" className='h-[202px] w-full bg-white rounded-xl flex flex-col items-center'>
                        <Image 
                            src="https://img.imageus.dev/https://depo.isbul.net/v2/general/45ae6ec6-31d1-44db-823d-db21cce9bbb1.jpg?width=125&height=80&mode=contain&background=ffffff"
                            height={100}
                            width={200}
                            alt='Company logo'
                            className='rounded-xl'
                        />
                        <p className='font-bold text-black mt-2'>Bakicibul.net</p>
                        <p className='text-zinc-500 mt-1'>Yazılım firması</p>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href="/" className='h-[202px] w-full bg-white rounded-xl flex flex-col items-center'>
                        <Image 
                            src="https://img.imageus.dev/https://depo.isbul.net/v2/general/45ae6ec6-31d1-44db-823d-db21cce9bbb1.jpg?width=125&height=80&mode=contain&background=ffffff"
                            height={100}
                            width={200}
                            alt='Company logo'
                            className='rounded-xl'
                        />
                        <p className='font-bold text-black mt-2'>Bakicibul.net</p>
                        <p className='text-zinc-500 mt-1'>Yazılım firması</p>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href="/" className='h-[202px] w-full bg-white rounded-xl flex flex-col items-center'>
                        <Image 
                            src="https://img.imageus.dev/https://depo.isbul.net/v2/general/45ae6ec6-31d1-44db-823d-db21cce9bbb1.jpg?width=125&height=80&mode=contain&background=ffffff"
                            height={100}
                            width={200}
                            alt='Company logo'
                            className='rounded-xl'
                        />
                        <p className='font-bold text-black mt-2'>Bakicibul.net</p>
                        <p className='text-zinc-500 mt-1'>Yazılım firması</p>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href="/" className='h-[202px] w-full bg-white rounded-xl flex flex-col items-center'>
                        <Image 
                            src="https://img.imageus.dev/https://depo.isbul.net/v2/general/45ae6ec6-31d1-44db-823d-db21cce9bbb1.jpg?width=125&height=80&mode=contain&background=ffffff"
                            height={100}
                            width={200}
                            alt='Company logo'
                            className='rounded-xl'
                        />
                        <p className='font-bold text-black mt-2'>Bakicibul.net</p>
                        <p className='text-zinc-500 mt-1'>Yazılım firması</p>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href="/" className='h-[202px] w-full bg-white rounded-xl flex flex-col items-center'>
                        <Image 
                            src="https://img.imageus.dev/https://depo.isbul.net/v2/general/45ae6ec6-31d1-44db-823d-db21cce9bbb1.jpg?width=125&height=80&mode=contain&background=ffffff"
                            height={100}
                            width={200}
                            alt='Company logo'
                            className='rounded-xl'
                        />
                        <p className='font-bold text-black mt-2'>Bakicibul.net</p>
                        <p className='text-zinc-500 mt-1'>Yazılım firması</p>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href="/" className='h-[202px] w-full bg-white rounded-xl flex flex-col items-center'>
                        <Image 
                            src="https://img.imageus.dev/https://depo.isbul.net/v2/general/45ae6ec6-31d1-44db-823d-db21cce9bbb1.jpg?width=125&height=80&mode=contain&background=ffffff"
                            height={100}
                            width={200}
                            alt='Company logo'
                            className='rounded-xl'
                        />
                        <p className='font-bold text-black mt-2'>Bakicibul.net</p>
                        <p className='text-zinc-500 mt-1'>Yazılım firması</p>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href="/" className='h-[202px] w-full bg-white rounded-xl flex flex-col items-center'>
                        <Image 
                            src="https://img.imageus.dev/https://depo.isbul.net/v2/general/45ae6ec6-31d1-44db-823d-db21cce9bbb1.jpg?width=125&height=80&mode=contain&background=ffffff"
                            height={100}
                            width={200}
                            alt='Company logo'
                            className='rounded-xl'
                        />
                        <p className='font-bold text-black mt-2'>Bakicibul.net</p>
                        <p className='text-zinc-500 mt-1'>Yazılım firması</p>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href="/" className='h-[202px] w-full bg-white rounded-xl flex flex-col items-center'>
                        <Image 
                            src="https://img.imageus.dev/https://depo.isbul.net/v2/general/45ae6ec6-31d1-44db-823d-db21cce9bbb1.jpg?width=125&height=80&mode=contain&background=ffffff"
                            height={100}
                            width={200}
                            alt='Company logo'
                            className='rounded-xl'
                        />
                        <p className='font-bold text-black mt-2'>Bakicibul.net</p>
                        <p className='text-zinc-500 mt-1'>Yazılım firması</p>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href="/" className='h-[202px] w-full bg-white rounded-xl flex flex-col items-center'>
                        <Image 
                            src="https://img.imageus.dev/https://depo.isbul.net/v2/general/45ae6ec6-31d1-44db-823d-db21cce9bbb1.jpg?width=125&height=80&mode=contain&background=ffffff"
                            height={100}
                            width={200}
                            alt='Company logo'
                            className='rounded-xl'
                        />
                        <p className='font-bold text-black mt-2'>Bakicibul.net</p>
                        <p className='text-zinc-500 mt-1'>Yazılım firması</p>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link href="/" className='h-[202px] w-full bg-white rounded-xl flex flex-col items-center'>
                        <Image 
                            src="https://img.imageus.dev/https://depo.isbul.net/v2/general/45ae6ec6-31d1-44db-823d-db21cce9bbb1.jpg?width=125&height=80&mode=contain&background=ffffff"
                            height={100}
                            width={200}
                            alt='Company logo'
                            className='rounded-xl'
                        />
                        <p className='font-bold text-black mt-2'>Bakicibul.net</p>
                        <p className='text-zinc-500 mt-1'>Yazılım firması</p>
                    </Link>
                </SwiperSlide>
                </Swiper>
            </div>
        </section>
        <section className='w-full flex lg:hidden justify-center mt-2'>
            <div className='container-fluid overflow-x-scroll flex'>
                <div className='min-w-[160px] max-w-[160px] h-[148px] bg-white rounded-2xl flex flex-col items-center'>
                    <Image 
                        src="https://img.imageus.dev/https://depo.isbul.net/v2/general/bc561558-6d14-414d-91c3-0e6f9f18beac.jpg?width=125&height=80&mode=contain&background=ffffff"
                        width={160}
                        height={80}
                        alt='company logo'
                        className='rounded-t-2xl'
                    />
                    <p className='text-[14px] font-semibold'>Bakicibul.net</p>
                    <p className='text-[14px] text-black/50'>Yazılım Firması</p>
                </div>
                <div className='min-w-[160px] ml-2 max-w-[160px] h-[148px] bg-white rounded-2xl flex flex-col items-center'>
                    <Image 
                        src="https://img.imageus.dev/https://depo.isbul.net/v2/general/bc561558-6d14-414d-91c3-0e6f9f18beac.jpg?width=125&height=80&mode=contain&background=ffffff"
                        width={160}
                        height={80}
                        alt='company logo'
                        className='rounded-t-2xl'
                    />
                    <p className='text-[14px] font-semibold'>Bakicibul.net</p>
                    <p className='text-[14px] text-black/50'>Yazılım Firması</p>
                </div>
                <div className='min-w-[160px] ml-2 max-w-[160px] h-[148px] bg-white rounded-2xl flex flex-col items-center'>
                    <Image 
                        src="https://img.imageus.dev/https://depo.isbul.net/v2/general/bc561558-6d14-414d-91c3-0e6f9f18beac.jpg?width=125&height=80&mode=contain&background=ffffff"
                        width={160}
                        height={80}
                        alt='company logo'
                        className='rounded-t-2xl'
                    />
                    <p className='text-[14px] font-semibold'>Bakicibul.net</p>
                    <p className='text-[14px] text-black/50'>Yazılım Firması</p>
                </div>
                <div className='min-w-[160px] ml-2 max-w-[160px] h-[148px] bg-white rounded-2xl flex flex-col items-center'>
                    <Image 
                        src="https://img.imageus.dev/https://depo.isbul.net/v2/general/bc561558-6d14-414d-91c3-0e6f9f18beac.jpg?width=125&height=80&mode=contain&background=ffffff"
                        width={160}
                        height={80}
                        alt='company logo'
                        className='rounded-t-2xl'
                    />
                    <p className='text-[14px] font-semibold'>Bakicibul.net</p>
                    <p className='text-[14px] text-black/50'>Yazılım Firması</p>
                </div>
                <div className='min-w-[160px] ml-2 max-w-[160px] h-[148px] bg-white rounded-2xl flex flex-col items-center'>
                    <Image 
                        src="https://img.imageus.dev/https://depo.isbul.net/v2/general/bc561558-6d14-414d-91c3-0e6f9f18beac.jpg?width=125&height=80&mode=contain&background=ffffff"
                        width={160}
                        height={80}
                        alt='company logo'
                        className='rounded-t-2xl'
                    />
                    <p className='text-[14px] font-semibold'>Bakicibul.net</p>
                    <p className='text-[14px] text-black/50'>Yazılım Firması</p>
                </div>
                <div className='min-w-[160px] ml-2 max-w-[160px] h-[148px] bg-white rounded-2xl flex flex-col items-center'>
                    <Image 
                        src="https://img.imageus.dev/https://depo.isbul.net/v2/general/bc561558-6d14-414d-91c3-0e6f9f18beac.jpg?width=125&height=80&mode=contain&background=ffffff"
                        width={160}
                        height={80}
                        alt='company logo'
                        className='rounded-t-2xl'
                    />
                    <p className='text-[14px] font-semibold'>Bakicibul.net</p>
                    <p className='text-[14px] text-black/50'>Yazılım Firması</p>
                </div>
            </div>
        </section>
    </>
  )
}
