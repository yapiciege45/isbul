"use client"
import React from 'react'
import ReactSearchBox from 'react-search-box'
import Link from 'next/link'
import { IconMapPinFilled, IconSearch, IconMapSearch } from '@tabler/icons-react'

export default function SearchInAdvertsMobileComponent({ citiesAndDistricts }) {
  return (
    <div className='flex lg:hidden justify-center bg-[#194599] w-full rounded-b-3xl'>
            <div className='flex flex-col container-fluid w-full'>
                <p className='text-[14px] font-medium text-white'>Aradığın işi bulmanın tam zamanı.</p>
                <div className='flex flex-col mt-1'>
                    <input className='h-[36px] rounded-2xl px-2 text-[12px] text-black/50' type='text' placeholder='Garson, Aşçı, Yazılımcı...'></input>
                    <div className='flex mt-1'>
                                <ReactSearchBox
                                    placeholder="İl, İlçe Ara..."
                                    value="ReactScript"
                                    data={citiesAndDistricts}
                                    callback={(record) => console.log(record)}
                                    leftIcon={<IconMapPinFilled size={16} color='black' style={{color: '#194599'}}></IconMapPinFilled>}
                                    iconBoxSize="36px"
                                    inputFontSize='12px'
                                    inputHeight='36px'
                                />
                                <Link className='flex items-center bg-[#DE5B2B] px-3' href="/">
                                    <IconSearch size={16} color='white'></IconSearch>
                                    <p className='text-[14px] text-white ml-2 font-medium'>İŞ BUL</p>
                                </Link>
                    </div>
                </div>
                <div className='flex mt-2 mb-3'>
                    <div className='flex items-center text-white'>
                        <IconMapPinFilled size={16} color='white'></IconMapPinFilled>
                        <p className='ml-2 text-[14px]'>Yakınımdaki İşler</p>
                    </div>
                    <div className='flex items-center ml-8 text-white'>
                        <IconMapSearch size={16} color='white'></IconMapSearch>
                        <p className='ml-2 text-[14px]'>Haritada Ara</p>
                    </div>
                </div>
            </div>
        </div>
  )
}
