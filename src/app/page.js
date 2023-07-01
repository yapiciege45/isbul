import HomeComponent from '@/components/layout/home/HomeComponent'
import FooterComponent from '@/components/public/FooterComponent'
import NavbarComponent from '@/components/public/NavbarComponent'

export default function Home() {
  return (
    <>
      <NavbarComponent />
      <HomeComponent />
      <FooterComponent />
    </>
  )
}

