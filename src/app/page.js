import HomeComponent from '@/components/layout/home/HomeComponent'
import FooterComponent from '@/components/public/FooterComponent'
import NavbarComponent from '@/components/public/NavbarComponent'
import SearchInAdvertsMobileComponent from '@/components/ui/SearchInAdvertsMobileComponent'

export default function Home() {
  return (
    <>
      <NavbarComponent />
      <HomeComponent />
      <FooterComponent />
    </>
  )
}

