"use client"
import React, { useState } from 'react'
import HomePageTopComponent from './HomePageTopComponent';
import HomeAdvertSliderComponent from './HomeAdvertSliderComponent';
import HomeAdvertsComponent from './HomeAdvertsComponent';

export default function HomeComponent() {
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
    <main>
        <HomePageTopComponent citiesAndDistricts={citiesAndDistricts} />
        <HomeAdvertSliderComponent />
        <HomeAdvertsComponent />
    </main>
  )
}
