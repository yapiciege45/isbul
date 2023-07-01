import { IconMapPin } from '@tabler/icons-react'
import Link from 'next/link'
import React from 'react'

export default function RouteRoadDisplayerComponent({ routes = [], map = false }) {
  return (
    <div className='bg-white w-full hidden lg:flex justify-center'>
        <div className="container-fluid py-3 flex items-center justify-between">
            <div className='flex items-center'>
                {
                    routes.map((route, index) => {
                        if(index == routes.length - 1) {
                            return (
                                <Link href="/" className='text-[14px] text-black ml-2'>{route}</Link>
                            )
                        } else {
                            return (
                                <>
                                    <Link href="/" className='text-[14px] text-black ml-2'>{route}</Link>
                                    <p className='text-[#2253af] text-[14px] ml-2'>{'>'}</p>
                                </>
                            )
                        }
                    })
                }
            </div>
            {
                map ?
                    <Link href='/' className='flex items-center bg-[#e86231] hover:bg-[#d45729] transition-all rounded text-white p-2 px-5'>
                        <IconMapPin size={15}></IconMapPin>
                        <p className='uppercase text-[13px] font-medium ml-3'>Haritada Gör</p>
                    </Link>
                    :
                    ''
            }
        </div>
    </div>
  )
}
