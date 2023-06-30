import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { IconChevronDown } from '@tabler/icons-react'

const MobileComponent = () => (
    <header className='bg-[#194599] flex justify-center'>
        <div className='w-full h-20 flex container justify-between items-center'>
            <Image
                src="https://isbul.net/theme/images/logo-beyaz.png"
                width={130}
                height={40}
                alt="Logo of the company"
            />
            <nav className='h-full'>
                <div className='flex h-full'>
                    <Link href="/" className='text-white h-full px-5 font-medium hover:text-[#86adf3] flex items-center text-[14px] transition-all'>
                        <p href="/">Mobil</p>
                    </Link>
                    <Link href="/" className='text-white h-full px-5 font-medium hover:text-[#86adf3] flex items-center text-[14px] ml-1 transition-all'>
                        <p href="/">İş İlanları</p>
                    </Link>
                    <Link href="/" className='text-white h-full px-5 font-medium bg-[#2857b0] flex items-center hover:text-[#86adf3] text-[14px] ml-1 transition-all'>
                        <p href="/">CV OLUŞTUR</p>
                    </Link>
                    <Link href="/" className="text-white relative h-full px-5 font-medium bg-[#2857b0] flex items-center hover:text-[#86adf3] text-[14px] ml-1 transition-all group">
                        <p href="/" className="mr-2">İŞ ARAYAN</p>
                        <IconChevronDown size={16} color="white" />
                        <div className="w-full flex-col items-center bg-white absolute top-20 left-0 p-3 hidden group-hover:flex">
                            <Link href="/" className="text-black">Giriş Yap</Link>
                            <Link href="/" className="mt-3 text-black">Üye Ol</Link>
                        </div>
                    </Link>
                    <Link href="/" className="text-white relative h-full px-5 font-medium bg-[#2857b0] flex items-center hover:text-[#86adf3] text-[14px] ml-1 transition-all group">
                        <p href="/" className="mr-2">İŞVEREN</p>
                        <IconChevronDown size={16} color="white" />
                        <div className="w-full flex-col items-center bg-white absolute top-20 left-0 p-3 hidden group-hover:flex">
                            <Link href="/" className="text-black">Giriş Yap</Link>
                            <Link href="/" className="mt-3 text-black">Üye Ol</Link>
                        </div>
                    </Link>
                    <Link href="/" className='text-white h-full px-5 font-medium bg-[#2857b0] flex items-center hover:text-[#86adf3] text-[14px] ml-1 transition-all'>
                        <p href="/">ÜCRETSİZ İLAN VER</p>
                    </Link>
                </div>
            </nav>
        </div>
    </header>
)

const DesktopComponent = () => (
    <header className='bg-[#194599] flex justify-center'>
        <div className='w-full h-20 flex container justify-between items-center'>
            <Image
                src="https://isbul.net/theme/images/logo-beyaz.png"
                width={130}
                height={40}
                alt="Logo of the company"
            />
            <nav className='h-full'>
                <div className='flex h-full'>
                    <Link href="/" className='text-white h-full px-5 font-medium hover:text-[#86adf3] flex items-center text-[14px] transition-all'>
                        <p href="/">Masaüstü</p>
                    </Link>
                    <Link href="/" className='text-white h-full px-5 font-medium hover:text-[#86adf3] flex items-center text-[14px] ml-1 transition-all'>
                        <p href="/">İş İlanları</p>
                    </Link>
                    <Link href="/" className='text-white h-full px-5 font-medium bg-[#2857b0] flex items-center hover:text-[#86adf3] text-[14px] ml-1 transition-all'>
                        <p href="/">CV OLUŞTUR</p>
                    </Link>
                    <Link href="/" className="text-white relative h-full px-5 font-medium bg-[#2857b0] flex items-center hover:text-[#86adf3] text-[14px] ml-1 transition-all group">
                        <p href="/" className="mr-2">İŞ ARAYAN</p>
                        <IconChevronDown size={16} color="white" />
                        <div className="w-full flex-col items-center bg-white absolute top-20 left-0 p-3 hidden group-hover:flex">
                            <Link href="/" className="text-black">Giriş Yap</Link>
                            <Link href="/" className="mt-3 text-black">Üye Ol</Link>
                        </div>
                    </Link>
                    <Link href="/" className="text-white relative h-full px-5 font-medium bg-[#2857b0] flex items-center hover:text-[#86adf3] text-[14px] ml-1 transition-all group">
                        <p href="/" className="mr-2">İŞVEREN</p>
                        <IconChevronDown size={16} color="white" />
                        <div className="w-full flex-col items-center bg-white absolute top-20 left-0 p-3 hidden group-hover:flex">
                            <Link href="/" className="text-black">Giriş Yap</Link>
                            <Link href="/" className="mt-3 text-black">Üye Ol</Link>
                        </div>
                    </Link>
                    <Link href="/" className='text-white h-full px-5 font-medium bg-[#2857b0] flex items-center hover:text-[#86adf3] text-[14px] ml-1 transition-all'>
                        <p href="/">ÜCRETSİZ İLAN VER</p>
                    </Link>
                </div>
            </nav>
        </div>
    </header>
)

export default function NavbarComponent({ isMobile }) {
    return isMobile ? <MobileComponent /> : <DesktopComponent />;
}

export async function getServerSideProps(context) {
    // istemcinin User-Agent string'ini al
    const userAgent = context.req.headers['user-agent'];
  
    // User-Agent string'ini kontrol ederek cihazın mobil olup olmadığını belirle
    const isMobile = Boolean(userAgent.match(
      /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
    ));
  
    // cihaz türünü sayfa props'larına ekleyin
    return {
      props: { isMobile },
    };
}