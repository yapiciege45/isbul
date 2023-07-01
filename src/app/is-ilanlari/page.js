"use client"
import AdvertsComponent from '@/components/layout/adverts/AdvertsComponent'
import FooterComponent from '@/components/public/FooterComponent'
import NavbarComponent from '@/components/public/NavbarComponent'
import RouteRoadDisplayerComponent from '@/components/ui/RouteRoadDisplayerComponent'
import SearchInAdvertsMobileComponent from '@/components/ui/SearchInAdvertsMobileComponent'
import React, { useState } from 'react'

export default function Adverts() {
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
  return (
    <>
        <NavbarComponent />
        <RouteRoadDisplayerComponent routes={['Ana Sayfa', 'İş İlanları']} map={true} />
        <SearchInAdvertsMobileComponent citiesAndDistricts={citiesAndDistricts} />
        <AdvertsComponent />
        <FooterComponent />
    </>
  )
}
