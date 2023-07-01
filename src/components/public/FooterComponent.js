import { IconBrandFacebook, IconBrandInstagram, IconBrandLinkedin, IconBrandTiktok, IconBrandTwitter, IconBrandYoutube } from '@tabler/icons-react'
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
        <div className='w-full flex flex-col justify-center items-center' style={{backgroundImage: "url('https://isbul.com.tr/frontend/images/home/footer-background.webp')", backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
            <div className='container-fluid py-5 flex flex-col'>
                <div className='w-full flex justify-between items-center'>
                    <p className='text-[22px] text-white'>Hizmetlerimizle ilgili tüm sorularınızı yanıtlamaya hazırız.</p>
                    <div className='flex'>
                        <Link href='/' className='p-3 px-12 bg-white text-black rounded-2xl mr-5'>Bizi Arayın</Link>
                        <Link href='/' className='p-3 px-12 bg-[#de5b2b] text-white rounded-2xl'>E-Posta Gönderin</Link>
                    </div>
                </div>
            </div>
            <div className="container-fluid flex justify-between mt-8 pb-5 text-white">
                <div className="flex flex-col" style={{width: '19.9%'}}>
                    <h6 className='font-bold text-[20px] mb-2'>Site Kullanımı</h6>
                    <Link href='/' className='text-[14px]'>Genel Koşullar</Link>
                    <Link href='/' className='text-[14px] mt-1'>Site Haritası</Link>
                    <Link href='/' className='text-[14px] mt-1'>Pozisyonlar</Link>
                    <Link href='/' className='text-[14px] mt-1'>Bölümler</Link>
                    <Link href='/' className='text-[14px] mt-1'>Ücretsiz İlan Ver</Link>
                </div>
                <div className="flex flex-col" style={{width: '19.9%'}}>
                    <h6 className='font-bold text-[20px] mb-2'>Yardım</h6>
                    <Link href='/' className='text-[14px]'>Sıkça Sorulan Sorular</Link>
                    <Link href='/' className='text-[14px] mt-1'>Sorum Var</Link>
                    <Link href='/' className='text-[14px] mt-1'>Önerim Var</Link>
                </div>
                <div className="flex flex-col" style={{width: '19.9%'}}>
                    <h6 className='font-bold text-[20px] mb-2'>Hakkımızda</h6>
                    <Link href='/' className='text-[14px]'>Reklam Verin</Link>
                    <Link href='/' className='text-[14px] mt-1'>İletişim</Link>
                    <Link href='/' className='text-[14px] mt-1'>İlan Satın Al</Link>
                    <Link href='/' className='text-[14px] mt-1'>Blog</Link>
                </div>
                <div className="flex flex-col" style={{width: '19.9%'}}>
                    <h6 className='font-bold text-[20px] mb-2'>Veri Politikamız</h6>
                    <Link href='/' className='text-[14px]'>Kullanım Koşulları</Link>
                    <Link href='/' className='text-[14px] mt-1'>Kredi Kartı Saklama Koşulları</Link>
                    <Link href='/' className='text-[14px] mt-1'>Gizlilik Sözleşmesi</Link>
                    <Link href='/' className='text-[14px] mt-1'>Üyelik Sözleşmesi</Link>
                    <Link href='/' className='text-[14px] mt-1'>Çerezlerin Kullanımı</Link>
                    <Link href='/' className='text-[14px]'>Kalite Politikası</Link>
                    <Link href='/' className='text-[14px] mt-1'>KVKK Metni</Link>
                    <Link href='/' className='text-[14px] mt-1'>Ön Bilgilendirme Formu</Link>
                    <Link href='/' className='text-[14px] mt-1'>Mesafeli Satış Sözleşmesi</Link>
                    <Link href='/' className='text-[14px] mt-1'>Kurumsal Üyelik Sözleşmesi</Link>
                </div>
                <div className="flex flex-col" style={{width: '19.9%'}}>
                    <h6 className='font-bold text-[20px] mb-2'>Sosyal Medya</h6>
                    <Link href='/' className='text-[14px] flex items-center'>
                        <IconBrandLinkedin size={16}></IconBrandLinkedin>
                        <p className='text-[14px] ml-2'>LinkedIn</p>
                    </Link>
                    <Link href='/' className='text-[14px] flex items-center'>
                        <IconBrandFacebook size={16}></IconBrandFacebook>
                        <p className='text-[14px] ml-2'>Facebook</p>
                    </Link>
                    <Link href='/' className='text-[14px] flex items-center'>
                        <IconBrandInstagram size={16}></IconBrandInstagram>
                        <p className='text-[14px] ml-2'>Instagram</p>
                    </Link>
                    <Link href='/' className='text-[14px] flex items-center'>
                        <IconBrandTwitter size={16}></IconBrandTwitter>
                        <p className='text-[14px] ml-2'>Twitter</p>
                    </Link>
                    <Link href='/' className='text-[14px] flex items-center'>
                        <IconBrandYoutube size={16}></IconBrandYoutube>
                        <p className='text-[14px] ml-2'>Youtube</p>
                    </Link>
                    <Link href='/' className='text-[14px] flex items-center'>
                        <IconBrandTiktok size={16}></IconBrandTiktok>
                        <p className='text-[14px] ml-2'>Tiktok</p>
                    </Link>
                </div>
            </div>
        </div>
        <div className='w-full flex justify-center'>
            <div className="container-fluid flex py-3">
                <Image 
                    src="https://isbul.com.tr/frontend/images/svg/iskur.svg"
                    width={60}
                    height={60}
                    alt="company logo for footer"
                />
                <p className='text-[14px] text-[#4e4e4e]'>Gezer Grup İnsan Kaynakları Eğitim ve Danışmanlık Tic. A.Ş., 18.10.2021 - 17.10.2024 tarihleri arasında faaliyette bulunmak üzere Türkiye İş Kurumu tarafından 13.10.2021 tarihli ve 9837397 sayılı karar uyarınca 1283 numaralı izin belgesi ile faaliyetlerini sürdürmektedir. 4904 sayılı Türkiye İş Kurumu Kanunu gereğince iş arayanlardan ücret alınması yasaktır. Şikayetleriniz için, İstanbul Çalışma ve İş Kurumu İl Müdürlüğü Bahçelievler Hizmet Merkezi’ne başvurabilirsiniz.</p>
            </div>
        </div>
        <div className='w-full flex justify-center items-center py-2 bg-[#efefef]'>
            <p className='text-[12px] text-[#4e4e4e]'>Copyright © 2008 - 2023 isbul.net Gezer Grup İnsan Kaynakları Eğitim ve Danışmanlık Tic. A.Ş. iştirakidir.</p>
        </div>
    </footer>
  )
}
