import { Outlet } from 'react-router-dom';
import MainNavigation from '../Components/MainNavigation';
import Footer from '../Components/Footer/Footer';
import '../App.css'

function RootLayout() {
 

  return (
    <div className='root'>
      
      <MainNavigation />
      <main>
   
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
}

export default RootLayout;