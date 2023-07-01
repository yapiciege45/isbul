"use client"
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { IconBuilding, IconChevronDown, IconFilePlus, IconList, IconMail, IconMapPinFilled, IconSearch, IconUser } from '@tabler/icons-react'
import ReactSearchBox from 'react-search-box'

import '../../styles/globals.css'

export default function NavbarComponent() {
    const [mobileNav, setMobileNav] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false);
    const [citiesAndDistricts, setCitiesAndDistricts] = useState([
        {
          key: "react",
          value: "İstanbul",
        },
        {
          key: "vue",
          value: "Şehitkamil",
        },
    ]);
    const [isArayanDropdownMobile, setIsArayanDropdownMobile] = useState(false)
    const [isVerenDropdownMobile, setIsVerenDropdownMobile] = useState(false)
    const [kurumsalDropdownMobile, setKurumsalDropdownMobile] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        setIsScrolled(scrollTop > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className={`fixed ${mobileNav ? 'max-w-full p-10' : 'max-w-0'} overflow-x-hidden w-3/4 flex-col lg:hidden h-full bg-black/90 text-white z-20 transition-all`}>
                <div className='flex flex-col w-full'>
                    <div className="flex justify-between items-center w-full" onClick={() => setIsArayanDropdownMobile(!isArayanDropdownMobile)}>
                        <div className='flex items-center'>
                            <IconUser size={20}></IconUser>
                            <p className='text-[16px] ml-2'>İş Arayan</p>
                        </div>
                        <IconChevronDown size={16} style={{transition: '.2s',transform: `${isArayanDropdownMobile ? 'rotate(180deg)' : 'rotate(0deg)'}`}}></IconChevronDown>
                    </div>
                    <div className={`flex flex-col mt-2 ${isArayanDropdownMobile ? 'max-h-full' : 'max-h-0'} overflow-hidden transition-all`}>
                        <Link href="/" className='text-[14px]'>Giriş Yap</Link>
                        <Link href="/" className='text-[14px] mt-1'>Üye Ol</Link>
                    </div>
                </div>
                <div className='flex flex-col w-full mt-4'>
                    <div className="flex justify-between items-center w-full" onClick={() => setIsVerenDropdownMobile(!isVerenDropdownMobile)}>
                        <div className='flex items-center'>
                            <IconBuilding size={20}></IconBuilding>
                            <p className='text-[16px] ml-2'>İş Veren</p>
                        </div>
                        <IconChevronDown size={16} style={{transition: '.2s',transform: `${isVerenDropdownMobile ? 'rotate(180deg)' : 'rotate(0deg)'}`}}></IconChevronDown>
                    </div>
                    <div className={`flex flex-col mt-2 ${isVerenDropdownMobile ? 'max-h-full' : 'max-h-0'} overflow-hidden transition-all`}>
                        <Link href="/" className='text-[14px]'>Giriş Yap</Link>
                        <Link href="/" className='text-[14px] mt-1'>Üye Ol</Link>
                    </div>
                </div>
                <Link href='/is-ilanlari' className='flex items-center mt-2'>
                    <IconList size={20}></IconList>
                    <p className='text-[16px] ml-2'>İş İlanları</p>
                </Link>
                <Link href='/' className='flex items-center mt-4'>
                    <IconFilePlus size={20}></IconFilePlus>
                    <p className='text-[16px] ml-2'>CV Oluştur</p>
                </Link>
                <Link href='/' className='flex items-center mt-4'>
                    <IconFilePlus size={20}></IconFilePlus>
                    <p className='text-[16px] ml-2'>Ücretsiz İlan Ver</p>
                </Link>
                <div className='flex flex-col w-full mt-4'>
                    <div className="flex justify-between items-center w-full" onClick={() => setKurumsalDropdownMobile(!kurumsalDropdownMobile)}>
                        <div className='flex items-center'>
                            <IconBuilding size={20}></IconBuilding>
                            <p className='text-[16px] ml-2'>Kurumsal</p>
                        </div>
                        <IconChevronDown size={16} style={{transition: '.2s',transform: `${kurumsalDropdownMobile ? 'rotate(180deg)' : 'rotate(0deg)'}`}}></IconChevronDown>
                    </div>
                    <div className={`flex flex-col mt-2 ${kurumsalDropdownMobile ? 'max-h-full' : 'max-h-0'} overflow-hidden transition-all`}>
                        <Link href="/" className='text-[14px]'>Kullanım Koşulları</Link>
                        <Link href="/" className='text-[14px] mt-1'>Kredi Kartı Saklama Koşulları</Link>
                        <Link href="/" className='text-[14px] mt-1'>Gizlilik Sözleşmesi</Link>
                        <Link href="/" className='text-[14px] mt-1'>Üyelik Sözleşmesi</Link>
                        <Link href="/" className='text-[14px] mt-1'>Çerezlerin Kullanımı</Link>
                        <Link href="/" className='text-[14px] mt-1'>Kalite Politikası</Link>
                        <Link href="/" className='text-[14px] mt-1'>KVKK Metni</Link>
                        <Link href="/" className='text-[14px] mt-1'>Kullanım Koşulları</Link>
                        <Link href="/" className='text-[14px] mt-1'>Ön Bilgilendirme Formu</Link>
                        <Link href="/" className='text-[14px] mt-1'>Mesafeli Satış Sözleşmesi</Link>
                        <Link href="/" className='text-[14px] mt-1'>Kurumsal Üyelik Sözleşmesi</Link>
                    </div>
                </div>
                <Link href='/' className='flex items-center mt-2'>
                    <IconMail size={20}></IconMail>
                    <p className='text-[16px] ml-2'>İletişim</p>
                </Link>
            </div>
            <div className={`w-full bg-white h-20 fixed ${isScrolled ? 'top-0' : '-top-28'} transition-all z-30 hidden lg:flex justify-center`}>
                <div className='container-fluid h-full flex items-center justify-between'>
                    <Image
                        src="https://isbul.net/theme/images/logo-mavi.png"
                        width={130}
                        height={40}
                        alt="Logo of the company"
                    />
                    <div className='flex h-10'>
                        <ReactSearchBox
                            placeholder="Örnek: Satış, Muhasebe, Mühendislik..."
                            value="ReactScript"
                            data={citiesAndDistricts}
                            callback={(record) => console.log(record)}
                            leftIcon={<IconSearch size={16}></IconSearch>}
                            iconBoxSize="36px"
                            inputFontSize='12px'
                        />
                        <ReactSearchBox
                            placeholder="İl, İlçe Ara..."
                            value="ReactScript"
                            data={citiesAndDistricts}
                            callback={(record) => console.log(record)}
                            leftIcon={<IconMapPinFilled size={16}></IconMapPinFilled>}
                            iconBoxSize="36px"
                            inputFontSize='12px'
                        />
                        <Link href="/" className='flex justify-center items-center h-full w-12 bg-[#194599] rounded-md'>
                            <IconSearch size={24} color='white'></IconSearch>
                        </Link>
                    </div>
                    <div className='flex'>
                        <Link href="/" className="text-white relative h-10 px-5 font-medium bg-[#2857b0] flex items-center hover:text-[#86adf3] text-[14px] ml-1 transition-all group">
                            <p href="/" className="mr-2">İŞ ARAYAN</p>
                            <IconChevronDown size={16} color="white" />
                            <div className="w-full flex-col items-center bg-white absolute top-10 left-0 p-3 hidden group-hover:flex">
                                <Link href="/" className="text-black">Giriş Yap</Link>
                                <Link href="/" className="mt-3 text-black">Üye Ol</Link>
                            </div>
                        </Link>
                        <Link href="/" className="text-white relative h-10 px-5 font-medium bg-[#2857b0] flex items-center hover:text-[#86adf3] text-[14px] ml-1 transition-all group">
                            <p href="/" className="mr-2">İŞVEREN</p>
                            <IconChevronDown size={16} color="white" />
                            <div className="w-full flex-col items-center bg-white absolute top-10 left-0 p-3 hidden group-hover:flex">
                                <Link href="/" className="text-black">Giriş Yap</Link>
                                <Link href="/" className="mt-3 text-black">Üye Ol</Link>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <header className='bg-[#194599] flex justify-center z-10'>
                <div className='w-full h-20 flex container-fluid justify-between items-center'>
                    <Image
                        src="https://isbul.net/theme/images/logo-beyaz.png"
                        width={130}
                        height={40}
                        alt="Logo of the company"
                    />
                    <nav className='h-full hidden lg:block'>
                        <div className='flex h-full'>
                            <Link href="/" className='text-white h-full px-5 font-medium hover:text-[#86adf3] flex items-center text-[14px] transition-all'>
                                <p>Ana Sayfa</p>
                            </Link>
                            <Link href="/is-ilanlari" className='text-white h-full px-5 font-medium hover:text-[#86adf3] flex items-center text-[14px] ml-1 transition-all'>
                                <p>İş İlanları</p>
                            </Link>
                            <Link href="/" className='text-white h-full px-5 font-medium bg-[#2857b0] flex items-center hover:text-[#86adf3] text-[14px] ml-1 transition-all'>
                                <p>CV OLUŞTUR</p>
                            </Link>
                            <Link href="/" className="text-white relative h-full px-5 font-medium bg-[#2857b0] flex items-center hover:text-[#86adf3] text-[14px] ml-1 transition-all group">
                                <p className="mr-2">İŞ ARAYAN</p>
                                <IconChevronDown size={16} color="white" />
                                <div className="w-full flex-col items-center bg-white absolute top-20 left-0 p-3 hidden group-hover:flex">
                                    <Link href="/" className="text-black">Giriş Yap</Link>
                                    <Link href="/" className="mt-3 text-black">Üye Ol</Link>
                                </div>
                            </Link>
                            <Link href="/" className="text-white relative h-full px-5 font-medium bg-[#2857b0] flex items-center hover:text-[#86adf3] text-[14px] ml-1 transition-all group">
                                <p className="mr-2">İŞVEREN</p>
                                <IconChevronDown size={16} color="white" />
                                <div className="w-full flex-col items-center bg-white absolute top-20 left-0 p-3 hidden group-hover:flex">
                                    <Link href="/" className="text-black">Giriş Yap</Link>
                                    <Link href="/" className="mt-3 text-black">Üye Ol</Link>
                                </div>
                            </Link>
                            <Link href="/" className='text-white h-full px-5 font-medium bg-[#2857b0] flex items-center hover:text-[#86adf3] text-[14px] ml-1 transition-all'>
                                <p>ÜCRETSİZ İLAN VER</p>
                            </Link>
                        </div>
                    </nav>
                    <div className='flex lg:hidden flex-col justify-between h-4 w-8' onClick={() => setMobileNav(!mobileNav)}>
                        <div className={`w-full h-0.5 bg-white transform ${mobileNav && '-rotate-45 translate-y-2'} transition-all`}></div>
                        <div className={`w-full h-0.5 bg-white ${mobileNav && 'hidden'} transition-all`}></div>
                        <div className={`w-full h-0.5 bg-white transform ${mobileNav && 'rotate-45 -translate-y-[0.4rem]'} transition-all`}></div>
                    </div>
                </div>
            </header>
        </>
    )
}