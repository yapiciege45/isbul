import React from 'react'
import ReactSearchBox from 'react-search-box'
import Image from 'next/image'
import Link from 'next/link'
import { IconListSearch, IconMapPinFilled, IconSearch, IconCurrentLocation, IconMapSearch } from '@tabler/icons-react'
import SearchInAdvertsMobileComponent from '@/components/ui/SearchInAdvertsMobileComponent'

export default function HomePageTopComponent({ citiesAndDistricts }) {
  return (
    <>
        <div className='h-[520px] bg-[#0d3c94] w-full hidden lg:flex justify-center'>
            <div className='container-fluid flex items-center justify-between'>
                <div className='flex flex-col'>
                    <p className='text-white text-[22px] font-medium'>İş İlanları isbul.net'te!</p>
                    <div className='flex h-[60px] w-full'>
                                <ReactSearchBox
                                    placeholder="Örnek: Satış, Muhasebe, Mühendislik..."
                                    value="ReactScript"
                                    data={citiesAndDistricts}
                                    callback={(record) => console.log(record)}
                                    inputFontSize='14px'
                                    inputHeight='60px'
                                />
                                <ReactSearchBox
                                    placeholder="İl, İlçe Ara..."
                                    value="ReactScript"
                                    data={citiesAndDistricts}
                                    callback={(record) => console.log(record)}
                                    leftIcon={<IconMapPinFilled size={24} color='black' style={{color: '#194599'}}></IconMapPinFilled>}
                                    iconBoxSize="36px"
                                    inputFontSize='14px'
                                    inputHeight='60px'
                                />
                                <Link href="/" className='flex justify-center items-center h-full px-3 bg-[#195edd] rounded-md'>
                                    <IconSearch size={24} color='white'></IconSearch>
                                    <p className='ml-2 text-white font-bold'>İŞ BUL</p>
                                </Link>
                    </div>
                    <div className='w-full flex justify-between items-center mt-2 text-white text-[14px]'>
                        <div className='flex items-center'>
                            <div className='flex items-center'>
                                <IconCurrentLocation size={16} color='white' />
                                <p className='ml-2'>Yakınındaki İşler</p>
                            </div>
                            <div className='flex items-center ml-5'>
                                <IconMapSearch size={16} color='white' />
                                <p className='ml-2'>Haritada Ara</p>
                            </div>
                        </div>
                        <div className='flex items-center'>
                            <IconListSearch size={16} color='white' />
                            <p className='ml-2'>Detaylı Ara</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <Image 
                        src="https://isbul.com.tr/frontend/images/home/hero-img.webp"
                        width={282}
                        height={520}
                        alt='Women for home page top'
                    />
                </div>
            </div>
        </div>
        <SearchInAdvertsMobileComponent citiesAndDistricts={citiesAndDistricts} />
    </>
  )
}
