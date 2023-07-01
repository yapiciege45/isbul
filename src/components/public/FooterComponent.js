import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function FooterComponent() {
  return (
    <footer className='w-full hidden lg:flex flex-col mt-5'>
        <div className='w-full flex justify-center items-center' style={{background: "linear-gradient(56deg, #3565bf 0, #204ea3 36%, #112a58 100%)"}}>
            <div className="container-fluid flex pt-10 justify-between">
                <div className='flex flex-col justify-between pb-10'>
                    <div className='flex flex-col text-[26px] text-white'>
                        <p>isbul.net mobil</p>
                        <p className='-mt-2'>uygulamasını indirdiniz mi?</p>
                    </div>
                    <p className='text-[16px] text-[#cbcbcb]'>Hiçbir güncellemeyi kaçırmayın!</p>
                    <div className='flex'>
                        <Link href="/">
                            <Image 
                                src="https://isbul.com.tr/frontend/images/svg/apple-store.svg"
                                width={150}
                                height={45}
                                alt="app store link"
                            />
                        </Link>
                        <Link href="/" className='ml-5'>
                            <Image 
                                src="https://isbul.com.tr/frontend/images/svg/google-play-store.svg"
                                width={150}
                                height={45}
                                alt="google play store link"
                            />
                        </Link>
                        <Link href="/" className='ml-5'>
                            <Image 
                                src="https://isbul.com.tr/frontend/images/svg/huawei.png"
                                width={150}
                                height={45}
                                alt="app gallery link"
                            />
                        </Link>
                    </div>
                </div>
                <div>
                    <Image 
                        src="https://isbul.com.tr/frontend/images/isbul/mobile-app.webp"
                        width={240}
                        height={205}
                        alt='mobile app image from isbul.net'
                    />
                </div>
            </div>
        </div>
        <div className='w-full flex justify-center items-center' style={{backgroundImage: "url('https://isbul.com.tr/frontend/images/home/footer-background.webp')", backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
            <div className='container-fluid py-5 border-b-2 border-black flex flex-col'>
                <div className='w-full flex justify-between items-center'>
                    <p className='text-[22px] text-white'>Hizmetlerimizle ilgili tüm sorularınızı yanıtlamaya hazırız.</p>
                    <div className='flex'>
                        <Link href='/' className='p-3 px-12 bg-white text-black rounded-2xl mr-5'>Bizi Arayın</Link>
                        <Link href='/' className='p-3 px-12 bg-[#de5b2b] text-white rounded-2xl'>E-Posta Gönderin</Link>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}
