import { Outlet } from 'react-router'
import Header from '../../shared/components/header/Header'
import Footer from '../../shared/components/footer/Footer'

function MainLayout() {
  return (
    <>
      <Header/>
      <Outlet />
      <Footer/>
    </>
  )
}

export default MainLayout
