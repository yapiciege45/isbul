import { IconBriefcase, IconBuilding, IconCalendarEvent, IconDisabled, IconHeart, IconHeartFilled, IconJewishStarFilled, IconMapPin } from '@tabler/icons-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

export default function AdvertCartComponent({fontSize = 12, title, isView = false, isApply = false, isFavorite = false, isGuest = false, companyName, workingTypes, cities, createDate, isSponsored = false, companyImage, description, isDisabled, experiences = [], sectors = [], positions = [], sections = [], updateDate, lastApplicationDate}) {
    const [favorite, setFavorite] = useState(isFavorite)
    const [detailIsShown, setDetailIsShown] = useState(false)

  return (
    <div className='relative w-full mt-2' onMouseOver={() => setDetailIsShown(true)} onMouseLeave={() => setDetailIsShown(false)}>
        <div className={`${detailIsShown ? 'hidden lg:flex' : 'hidden'} z-20 absolute flex-col top-3/4 rounded-lg w-full bg-white border-2 border-[#2253af]`} style={{fontSize: fontSize + 2}}>
            <div className='p-3 flex flex-col relative'>
                <div className='absolute -top-1.5' style={{borderLeft: '5px solid transparent',borderRight: '5px solid transparent',borderBottom: '5px solid #2253af'}}></div>
                <h4 className='text-[#2253af] font-medium' style={{fontSize: fontSize + 4}}>İş Tanımı & Aranan Nitelikler</h4>
                <p>{description}</p>
            </div>
            <div className='h-0.5 bg-zinc-400 w-full'></div>
            <div className='p-3 flex flex-col'>
                {
                    experiences.length > 0 ?
                        <div className='flex'>
                            <p className='w-3/12'>Tecrübe</p>
                            <p className='w-1/12'>:</p>
                            <p className='w-8/12'>
                                {
                                    experiences.map((experience, index) => (
                                        <Link href="/" className='underline text-blue-500'>
                                            {
                                                index === experiences.length - 1 ?
                                                `${experience}`
                                                    :
                                                `${experience}, `
                                            }    
                                        </Link>
                                    ))
                                }
                            </p>
                        </div>
                    :
                        ''      
                }
                {
                    positions.length > 0 ?
                        <div className='flex mt-1'>
                            <p className='w-3/12'>Pozisyon</p>
                            <p className='w-1/12'>:</p>
                            <p className='w-8/12'>
                                {
                                    positions.map((position, index) => (
                                        <Link href="/" className='underline text-blue-500'>
                                            {
                                                index === positions.length - 1 ?
                                                `${position}`
                                                    :
                                                `${position}, `
                                            }    
                                        </Link>
                                    ))
                                }
                            </p>
                        </div>
                    :
                        ''      
                }
                {
                    sectors.length > 0 ?
                        <div className='flex mt-1'>
                            <p className='w-3/12'>Sektör</p>
                            <p className='w-1/12'>:</p>
                            <p className='w-8/12'>
                                {
                                    sectors.map((sector, index) => (
                                        <Link href="/" className='underline text-blue-500'>
                                            {
                                                index === sectors.length - 1 ?
                                                `${sector}`
                                                    :
                                                `${sector}, `
                                            }    
                                        </Link>
                                    ))
                                }
                            </p>
                        </div>
                    :
                        ''      
                }
                {
                    sections.length > 0 ?
                        <div className='flex mt-1'>
                            <p className='w-3/12'>Bölüm</p>
                            <p className='w-1/12'>:</p>
                            <p className='w-8/12'>
                                {
                                    sections.map((sector, index) => (
                                        <Link href="/" className='underline text-blue-500'>
                                            {
                                                index === sections.length - 1 ?
                                                `${section}`
                                                    :
                                                `${section}, `
                                            }    
                                        </Link>
                                    ))
                                }
                            </p>
                        </div>
                    :
                        ''      
                }
                {
                    cities.length > 0 ?
                        <div className='flex mt-1'>
                            <p className='w-3/12'>Çalışma Yeri</p>
                            <p className='w-1/12'>:</p>
                            <p className='w-8/12'>
                                {
                                    cities.map((city, index) => (
                                        <Link href="/" className='underline text-blue-500'>
                                            {
                                                index === cities.length - 1 ?
                                                `${city}`
                                                    :
                                                `${city}, `
                                            }    
                                        </Link>
                                    ))
                                }
                            </p>
                        </div>
                    :
                        ''      
                }
                {
                    createDate ?
                        <div className='flex mt-1'>
                            <p className='w-3/12'>İlk Yayınlanma Tarihi</p>
                            <p className='w-1/12'>:</p>
                            <p className='w-8/12'>
                                {
                                    createDate
                                }
                            </p>
                        </div>
                    :
                        ''      
                }
                {
                    updateDate ?
                        <div className='flex mt-1'>
                            <p className='w-3/12'>Güncellenme Tarihi</p>
                            <p className='w-1/12'>:</p>
                            <p className='w-8/12'>
                                {
                                    updateDate
                                }
                            </p>
                        </div>
                    :
                        ''      
                }
                {
                    lastApplicationDate ?
                        <div className='flex mt-1'>
                            <p className='w-3/12'>Son Başvuru Tarihi</p>
                            <p className='w-1/12'>:</p>
                            <p className='w-8/12'>
                                {
                                    lastApplicationDate
                                }
                            </p>
                        </div>
                    :
                        ''      
                }
            </div>
            <div className='w-full flex justify-end'>
                <Link href='/' className='bg-[#2253af] text-white px-5 py-3' style={{borderTopLeftRadius: '10px'}}>
                    Hemen Başvur
                </Link>
            </div>
        </div>
        <Link href='/' className='w-full hidden lg:flex justify-between items-center bg-white p-2 border'>
            <Image
                src={companyImage}
                height={75}
                width={65}
                alt="company logo for advert"
            />
            <div className='flex flex-col justify-between w-11/12 px-2'>
                <div className='flex flex-col w-full'>
                    <div className='flex justify-between items-center'>
                        <div className={`flex items-center ${(isView || isSponsored) ? 'w-4/6' : ''}`}>
                            <p className='font-semibold' style={{fontSize: fontSize + 6, color: `${isView ? '#aaa' : '#2253af'}`}}>{title}</p>
                            {
                                isDisabled ? <IconDisabled size={fontSize + 6} color={`${isView ? '#aaa' : '#2253af'}`} className='ml-2'/> : ''
                            }
                        </div>
                        {
                            (isView || isSponsored) && 
                                <div className='flex items-center w-2/6 justify-between'>
                                    {
                                        isView ? 
                                            isApply ? 
                                                <p className='text-[#2253af]' style={{fontSize: fontSize}}>Başvuruldu</p>
                                                :
                                                <p className='text-[#2253af]' style={{fontSize: fontSize}}>İncelendi</p>
                                                :
                                                <p className='text-[#2253af] invisible' style={{fontSize: fontSize}}>İncelendi</p>
                                    }
                                    {
                                        isSponsored ? <p className='text-[#b89e18]' style={{fontSize: fontSize}}>Sponsorlu</p> : ''
                                    }
                                    {
                                        isGuest ? '' : (
                                            <div className='w-1/12 flex items-center justify-end'>
                                                {
                                                    favorite ? 
                                                            <IconHeartFilled size={fontSize + 6} color='red' className='mr-1' onClick={() => setFavorite(false)} /> 
                                                        : 
                                                            <IconHeart size={fontSize + 6} color='red' className='mr-1' onClick={() =>setFavorite(true)} />
                                                }
                                            </div>
                                        )
                                    }
                                </div>
                        }
                        
                    </div>
                    <div className='flex'>
                        <div className='flex items-center'>
                            <IconBuilding size={fontSize} color={'#aaa'} className='mr-1'/>
                            <p style={{fontSize: fontSize, color: '#aaa'}}>{companyName}</p>
                        </div>
                    </div>
                </div>
                <div className='flex justify-between'>
                    <div className='flex items-center w-4/12'>
                        <IconBriefcase size={fontSize} color={'#aaa'} className='mr-1'/>
                        <p style={{fontSize: fontSize, color: '#aaa'}}>
                            {
                                `${workingTypes[0] + `${workingTypes.length > 1 ? ` (+${workingTypes.length - 1})` : ''}`}`
                            }
                        </p>
                    </div>
                    <div className='flex items-center w-5/12'>
                        <IconMapPin size={fontSize} color={'#aaa'} className='mr-1'/>
                        <p style={{fontSize: fontSize, color: '#aaa'}}>
                            {
                                `${cities[0] + `${cities.length > 1 ? ` (+${cities.length - 1})` : ''}`}`
                            }
                        </p>
                    </div>
                    <div className='flex items-center w-2/12 justify-end'>
                        <IconCalendarEvent size={fontSize} color={'#aaa'} className='mr-1'/>
                        <p style={{fontSize: fontSize, color: '#aaa'}}>{updateDate}</p>
                    </div>
                </div>
            </div>
        </Link>
        <Link href='/' className='w-full flex lg:hidden justify-between items-center bg-white p-2 border'>
            <div className='w-1/6'>
                <Image
                    src={companyImage}
                    height={75}
                    width={27}
                    alt="company logo for advert"
                    className='w-full h-full'
                />
            </div>
            <div className='flex flex-col justify-between w-5/6 px-2'>
                <div className='flex flex-col w-full'>
                    <div className='flex justify-between items-center'>
                        <div className='flex flex-col w-full'>
                            {
                                isSponsored ? 
                                (
                                    <div className='flex text-[#b89e18] items-center'>
                                        <IconJewishStarFilled size={fontSize - 2} color='#b89e18'></IconJewishStarFilled>
                                        <p className='text-[#b89e18] ml-1' style={{fontSize: fontSize - 2}}>Sponsorlu</p>
                                    </div>
                                )
                                 : 
                                ''
                            }
                            <div className={`flex items-center ${(isView || isSponsored) ? 'w-4/6' : ''}`}>
                                
                                <p className='font-semibold' style={{fontSize: fontSize, color: `${isView ? '#aaa' : '#2253af'}`}}>{title}</p>
                                {
                                    isDisabled ? <IconDisabled size={fontSize + 6} color={`${isView ? '#aaa' : '#2253af'}`} className='ml-2'/> : ''
                                }
                            </div>
                        </div>
                        {
                                        isGuest ? '' : (
                                            <div className='w-1/12 flex items-center justify-end'>
                                                {
                                                    favorite ? 
                                                            <IconHeartFilled size={fontSize + 6} color='red' className='mr-1' onClick={() => setFavorite(false)} /> 
                                                        : 
                                                            <IconHeart size={fontSize + 6} color='red' className='mr-1' onClick={() =>setFavorite(true)} />
                                                }
                                            </div>
                                        )
                        }
                        
                    </div>
                    <div className='flex'>
                        <div className='flex items-center'>
                            <IconBuilding size={fontSize - 1} color={'#aaa'} className='mr-1'/>
                            <p style={{fontSize: fontSize - 1, color: '#aaa'}}>{companyName}</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col mt-1'>
                        <div className='flex items-center'>
                            <IconBriefcase size={fontSize - 1} color={'#aaa'} className='mr-1'/>
                            <p style={{fontSize: fontSize - 1, color: '#aaa'}}>
                                {
                                    `${workingTypes[0] + `${workingTypes.length > 1 ? ` (+${workingTypes.length - 1})` : ''}`}`
                                }
                            </p>
                        </div>
                    <div className='flex justify-between'>
                        
                        <div className='flex items-center w-9/12'>
                            <IconMapPin size={fontSize} color={'#aaa'} className='mr-1'/>
                            <p style={{fontSize: fontSize - 1, color: '#aaa'}}>
                                {
                                    `${cities[0] + `${cities.length > 1 ? ` (+${cities.length - 1})` : ''}`}`
                                }
                            </p>
                        </div>
                        <div className='flex items-center w-3/12 justify-end'>
                            <IconCalendarEvent size={fontSize - 1} color={'#aaa'} className='mr-1'/>
                            <p style={{fontSize: fontSize - 1, color: '#aaa'}}>{updateDate}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    </div>
  )
}
