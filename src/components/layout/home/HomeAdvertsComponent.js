import AdvertCartComponent from '@/components/ui/AdvertCartComponent'
import Link from 'next/link'
import React, { useState } from 'react'

export default function HomeAdvertsComponent() {
    const [sponsoredAdverts, setSponsoredAdverts] = useState(false)
  return (
    <>
        <section className='w-full hidden lg:flex justify-center mt-12 '>
            <div className="container-fluid flex justify-between">
                <div style={{width: '49%'}}>
                    <div className='w-full flex items-center justify-between'>
                        <h2 className='uppercase font-medium text-[#143168] text-[26px]'>Son İş İlanları</h2>
                        <Link href="/" className="p-2 px-5 bg-white rounded-lg text-black border drop-shadow-md">Tümü</Link>
                    </div>
                    <div className='mt-5'>
                        <AdvertCartComponent 
                            title="Deneme İlan" 
                            companyName="bakicibul.net"
                            companyImage={'https://img.imageus.dev/https://depo.isbul.net/v2/general/844d317c-ecc8-4a89-966d-ac11a30fe346.jpg?width=75&height=65&mode=contain&background=ffffff'}
                            workingTypes={['Tam Zamanlı','Yarı Zamanlı']}
                            cities={['İstanbul Anadolu','Ankara']}
                            updateDate='24.02.2020'
                            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime enim incidunt corrupti tenetur aspernatur quibusdam pariatur dolor voluptate quidem doloribus!"
                            isView={true}
                            isApply={true}
                            isSponsored={true}
                            experiences={['1 Yıldan Az','2-5 Yıl Arası']}
                        />
                        <AdvertCartComponent 
                            title="Deneme İlan" 
                            companyName="bakicibul.net"
                            companyImage={'https://img.imageus.dev/https://depo.isbul.net/v2/general/844d317c-ecc8-4a89-966d-ac11a30fe346.jpg?width=75&height=65&mode=contain&background=ffffff'}
                            workingTypes={['Tam Zamanlı','Yarı Zamanlı']}
                            cities={['İstanbul Anadolu','Ankara']}
                            updateDate='24.02.2020'
                            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime enim incidunt corrupti tenetur aspernatur quibusdam pariatur dolor voluptate quidem doloribus!"
                            isView={true}
                            isApply={true}
                            isSponsored={true}
                            experiences={['1 Yıldan Az','2-5 Yıl Arası']}
                        />
                        <AdvertCartComponent 
                            title="Deneme İlan" 
                            companyName="bakicibul.net"
                            companyImage={'https://img.imageus.dev/https://depo.isbul.net/v2/general/844d317c-ecc8-4a89-966d-ac11a30fe346.jpg?width=75&height=65&mode=contain&background=ffffff'}
                            workingTypes={['Tam Zamanlı','Yarı Zamanlı']}
                            cities={['İstanbul Anadolu','Ankara']}
                            updateDate='24.02.2020'
                            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime enim incidunt corrupti tenetur aspernatur quibusdam pariatur dolor voluptate quidem doloribus!"
                            isView={true}
                            isApply={true}
                            isSponsored={true}
                            experiences={['1 Yıldan Az','2-5 Yıl Arası']}
                        />
                        <AdvertCartComponent 
                            title="Deneme İlan" 
                            companyName="bakicibul.net"
                            companyImage={'https://img.imageus.dev/https://depo.isbul.net/v2/general/844d317c-ecc8-4a89-966d-ac11a30fe346.jpg?width=75&height=65&mode=contain&background=ffffff'}
                            workingTypes={['Tam Zamanlı','Yarı Zamanlı']}
                            cities={['İstanbul Anadolu','Ankara']}
                            updateDate='24.02.2020'
                            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime enim incidunt corrupti tenetur aspernatur quibusdam pariatur dolor voluptate quidem doloribus!"
                            isView={true}
                            isApply={true}
                            isSponsored={true}
                            experiences={['1 Yıldan Az','2-5 Yıl Arası']}
                        />
                        <AdvertCartComponent 
                            title="Deneme İlan" 
                            companyName="bakicibul.net"
                            companyImage={'https://img.imageus.dev/https://depo.isbul.net/v2/general/844d317c-ecc8-4a89-966d-ac11a30fe346.jpg?width=75&height=65&mode=contain&background=ffffff'}
                            workingTypes={['Tam Zamanlı','Yarı Zamanlı']}
                            cities={['İstanbul Anadolu','Ankara']}
                            updateDate='24.02.2020'
                            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime enim incidunt corrupti tenetur aspernatur quibusdam pariatur dolor voluptate quidem doloribus!"
                            isView={true}
                            isApply={true}
                            isSponsored={true}
                            experiences={['1 Yıldan Az','2-5 Yıl Arası']}
                        />
                    </div>
                </div>
                <div style={{width: '49%'}}>
                    <div className='w-full flex items-center justify-between'>
                        <h2 className='uppercase font-medium text-[#143168] text-[26px]'>Sponsorlu İş İlanları</h2>
                        <Link href="/" className="p-2 px-5 bg-white rounded-lg text-black border drop-shadow-md">Tümü</Link>
                    </div>
                    <div className='mt-5'>
                        <AdvertCartComponent 
                            title="Deneme İlan" 
                            companyName="bakicibul.net"
                            companyImage={'https://img.imageus.dev/https://depo.isbul.net/v2/general/844d317c-ecc8-4a89-966d-ac11a30fe346.jpg?width=75&height=65&mode=contain&background=ffffff'}
                            workingTypes={['Tam Zamanlı','Yarı Zamanlı']}
                            cities={['İstanbul Anadolu','Ankara']}
                            updateDate='24.02.2020'
                            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime enim incidunt corrupti tenetur aspernatur quibusdam pariatur dolor voluptate quidem doloribus!"
                            isView={true}
                            isApply={true}
                            isSponsored={true}
                            experiences={['1 Yıldan Az','2-5 Yıl Arası']}
                        />
                        <AdvertCartComponent 
                            title="Deneme İlan" 
                            companyName="bakicibul.net"
                            companyImage={'https://img.imageus.dev/https://depo.isbul.net/v2/general/844d317c-ecc8-4a89-966d-ac11a30fe346.jpg?width=75&height=65&mode=contain&background=ffffff'}
                            workingTypes={['Tam Zamanlı','Yarı Zamanlı']}
                            cities={['İstanbul Anadolu','Ankara']}
                            updateDate='24.02.2020'
                            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime enim incidunt corrupti tenetur aspernatur quibusdam pariatur dolor voluptate quidem doloribus!"
                            isView={true}
                            isApply={true}
                            isSponsored={true}
                            experiences={['1 Yıldan Az','2-5 Yıl Arası']}
                        />
                        <AdvertCartComponent 
                            title="Deneme İlan" 
                            companyName="bakicibul.net"
                            companyImage={'https://img.imageus.dev/https://depo.isbul.net/v2/general/844d317c-ecc8-4a89-966d-ac11a30fe346.jpg?width=75&height=65&mode=contain&background=ffffff'}
                            workingTypes={['Tam Zamanlı','Yarı Zamanlı']}
                            cities={['İstanbul Anadolu','Ankara']}
                            updateDate='24.02.2020'
                            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime enim incidunt corrupti tenetur aspernatur quibusdam pariatur dolor voluptate quidem doloribus!"
                            isView={true}
                            isApply={true}
                            isSponsored={true}
                            experiences={['1 Yıldan Az','2-5 Yıl Arası']}
                        />
                        <AdvertCartComponent 
                            title="Deneme İlan" 
                            companyName="bakicibul.net"
                            companyImage={'https://img.imageus.dev/https://depo.isbul.net/v2/general/844d317c-ecc8-4a89-966d-ac11a30fe346.jpg?width=75&height=65&mode=contain&background=ffffff'}
                            workingTypes={['Tam Zamanlı','Yarı Zamanlı']}
                            cities={['İstanbul Anadolu','Ankara']}
                            updateDate='24.02.2020'
                            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime enim incidunt corrupti tenetur aspernatur quibusdam pariatur dolor voluptate quidem doloribus!"
                            isView={true}
                            isApply={true}
                            isSponsored={true}
                            experiences={['1 Yıldan Az','2-5 Yıl Arası']}
                        />
                        <AdvertCartComponent 
                            title="Deneme İlan" 
                            companyName="bakicibul.net"
                            companyImage={'https://img.imageus.dev/https://depo.isbul.net/v2/general/844d317c-ecc8-4a89-966d-ac11a30fe346.jpg?width=75&height=65&mode=contain&background=ffffff'}
                            workingTypes={['Tam Zamanlı','Yarı Zamanlı']}
                            cities={['İstanbul Anadolu','Ankara']}
                            updateDate='24.02.2020'
                            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime enim incidunt corrupti tenetur aspernatur quibusdam pariatur dolor voluptate quidem doloribus!"
                            isView={true}
                            isApply={true}
                            isSponsored={true}
                            experiences={['1 Yıldan Az','2-5 Yıl Arası']}
                        />
                    </div>
                </div>
            </div>
        </section>
        <section className='w-full flex justify-center lg:hidden mt-12'>
            <div className='container-fluid flex flex-col'>
                <div className='flex justify-between'>
                    <p className={`text-[14px] opacity-80 font-semibold text-black ${sponsoredAdverts ? '' : 'border-b'} transition-all`} onClick={() => setSponsoredAdverts(false)}>Son İş İlanları</p>
                    <p className={`text-[14px] opacity-80 font-semibold text-black ${sponsoredAdverts ? 'border-b' : ''} transition-all`} onClick={() => setSponsoredAdverts(true)}>Sponsorlu İş İlanları</p>
                </div>
                <div className={`${sponsoredAdverts ? 'hidden' : 'flex'} flex-col`}>
                        <AdvertCartComponent 
                            title="Deneme İlan" 
                            companyName="bakicibul.net"
                            companyImage={'https://img.imageus.dev/https://depo.isbul.net/v2/general/844d317c-ecc8-4a89-966d-ac11a30fe346.jpg?width=75&height=65&mode=contain&background=ffffff'}
                            workingTypes={['Tam Zamanlı','Yarı Zamanlı']}
                            cities={['İstanbul Anadolu','Ankara']}
                            updateDate='24.02.2020'
                            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime enim incidunt corrupti tenetur aspernatur quibusdam pariatur dolor voluptate quidem doloribus!"
                            isView={true}
                            isApply={true}
                            experiences={['1 Yıldan Az','2-5 Yıl Arası']}
                        />
                        <AdvertCartComponent 
                            title="Deneme İlan" 
                            companyName="bakicibul.net"
                            companyImage={'https://img.imageus.dev/https://depo.isbul.net/v2/general/844d317c-ecc8-4a89-966d-ac11a30fe346.jpg?width=75&height=65&mode=contain&background=ffffff'}
                            workingTypes={['Tam Zamanlı','Yarı Zamanlı']}
                            cities={['İstanbul Anadolu','Ankara']}
                            updateDate='24.02.2020'
                            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime enim incidunt corrupti tenetur aspernatur quibusdam pariatur dolor voluptate quidem doloribus!"
                            isView={true}
                            isApply={true}
                            experiences={['1 Yıldan Az','2-5 Yıl Arası']}
                        />
                        <AdvertCartComponent 
                            title="Deneme İlan" 
                            companyName="bakicibul.net"
                            companyImage={'https://img.imageus.dev/https://depo.isbul.net/v2/general/844d317c-ecc8-4a89-966d-ac11a30fe346.jpg?width=75&height=65&mode=contain&background=ffffff'}
                            workingTypes={['Tam Zamanlı','Yarı Zamanlı']}
                            cities={['İstanbul Anadolu','Ankara']}
                            updateDate='24.02.2020'
                            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime enim incidunt corrupti tenetur aspernatur quibusdam pariatur dolor voluptate quidem doloribus!"
                            isView={true}
                            isApply={true}
                            experiences={['1 Yıldan Az','2-5 Yıl Arası']}
                        />
                        <AdvertCartComponent 
                            title="Deneme İlan" 
                            companyName="bakicibul.net"
                            companyImage={'https://img.imageus.dev/https://depo.isbul.net/v2/general/844d317c-ecc8-4a89-966d-ac11a30fe346.jpg?width=75&height=65&mode=contain&background=ffffff'}
                            workingTypes={['Tam Zamanlı','Yarı Zamanlı']}
                            cities={['İstanbul Anadolu','Ankara']}
                            updateDate='24.02.2020'
                            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime enim incidunt corrupti tenetur aspernatur quibusdam pariatur dolor voluptate quidem doloribus!"
                            experiences={['1 Yıldan Az','2-5 Yıl Arası']}
                        />
                        <AdvertCartComponent 
                            title="Deneme İlan" 
                            companyName="bakicibul.net"
                            companyImage={'https://img.imageus.dev/https://depo.isbul.net/v2/general/844d317c-ecc8-4a89-966d-ac11a30fe346.jpg?width=75&height=65&mode=contain&background=ffffff'}
                            workingTypes={['Tam Zamanlı','Yarı Zamanlı']}
                            cities={['İstanbul Anadolu','Ankara']}
                            updateDate='24.02.2020'
                            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime enim incidunt corrupti tenetur aspernatur quibusdam pariatur dolor voluptate quidem doloribus!"
                            isView={true}
                            isApply={true}
                            experiences={['1 Yıldan Az','2-5 Yıl Arası']}
                        />
                </div>
                <div className={`${sponsoredAdverts ? 'flex' : 'hidden'} flex-col`}>
                        <AdvertCartComponent 
                            title="Deneme İlan" 
                            companyName="bakicibul.net"
                            companyImage={'https://img.imageus.dev/https://depo.isbul.net/v2/general/844d317c-ecc8-4a89-966d-ac11a30fe346.jpg?width=75&height=65&mode=contain&background=ffffff'}
                            workingTypes={['Tam Zamanlı','Yarı Zamanlı']}
                            cities={['İstanbul Anadolu','Ankara']}
                            updateDate='24.02.2020'
                            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime enim incidunt corrupti tenetur aspernatur quibusdam pariatur dolor voluptate quidem doloribus!"
                            isView={true}
                            isSponsored={true}
                            isApply={true}
                            experiences={['1 Yıldan Az','2-5 Yıl Arası']}
                        />
                        <AdvertCartComponent 
                            title="Deneme İlan" 
                            companyName="bakicibul.net"
                            companyImage={'https://img.imageus.dev/https://depo.isbul.net/v2/general/844d317c-ecc8-4a89-966d-ac11a30fe346.jpg?width=75&height=65&mode=contain&background=ffffff'}
                            workingTypes={['Tam Zamanlı','Yarı Zamanlı']}
                            cities={['İstanbul Anadolu','Ankara']}
                            updateDate='24.02.2020'
                            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime enim incidunt corrupti tenetur aspernatur quibusdam pariatur dolor voluptate quidem doloribus!"
                            isView={true}
                            experiences={['1 Yıldan Az','2-5 Yıl Arası']}
                        />
                        <AdvertCartComponent 
                            title="Deneme İlan" 
                            companyName="bakicibul.net"
                            companyImage={'https://img.imageus.dev/https://depo.isbul.net/v2/general/844d317c-ecc8-4a89-966d-ac11a30fe346.jpg?width=75&height=65&mode=contain&background=ffffff'}
                            workingTypes={['Tam Zamanlı','Yarı Zamanlı']}
                            cities={['İstanbul Anadolu','Ankara']}
                            updateDate='24.02.2020'
                            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime enim incidunt corrupti tenetur aspernatur quibusdam pariatur dolor voluptate quidem doloribus!"
                            isView={true}
                            isSponsored={true}
                            isApply={true}
                            experiences={['1 Yıldan Az','2-5 Yıl Arası']}
                        />
                        <AdvertCartComponent 
                            title="Deneme İlan" 
                            companyName="bakicibul.net"
                            companyImage={'https://img.imageus.dev/https://depo.isbul.net/v2/general/844d317c-ecc8-4a89-966d-ac11a30fe346.jpg?width=75&height=65&mode=contain&background=ffffff'}
                            workingTypes={['Tam Zamanlı','Yarı Zamanlı']}
                            cities={['İstanbul Anadolu','Ankara']}
                            updateDate='24.02.2020'
                            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime enim incidunt corrupti tenetur aspernatur quibusdam pariatur dolor voluptate quidem doloribus!"
                            isView={true}
                            isSponsored={true}
                            isApply={true}
                            experiences={['1 Yıldan Az','2-5 Yıl Arası']}
                        />
                        <AdvertCartComponent 
                            title="Deneme İlan" 
                            companyName="bakicibul.net"
                            companyImage={'https://img.imageus.dev/https://depo.isbul.net/v2/general/844d317c-ecc8-4a89-966d-ac11a30fe346.jpg?width=75&height=65&mode=contain&background=ffffff'}
                            workingTypes={['Tam Zamanlı','Yarı Zamanlı']}
                            cities={['İstanbul Anadolu','Ankara']}
                            updateDate='24.02.2020'
                            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime enim incidunt corrupti tenetur aspernatur quibusdam pariatur dolor voluptate quidem doloribus!"
                            isView={true}
                            isSponsored={true}
                            isApply={true}
                            experiences={['1 Yıldan Az','2-5 Yıl Arası']}
                        />
                </div>
            </div>
        </section>
    </>  
  )
}
