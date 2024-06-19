import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/Home';
import RootLayout from './pages/Root';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import ServicesPage from './pages/ServicesPage';
import Clients from './pages/Clients';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      
      {
        path:'aboutus',
        element: <AboutUs />,
        
      },
      {
        path:'contactus',
        element: <ContactUs/>,
        
      },
      {
        path:'services',
        element: <ServicesPage/>,
        
      },
      {
        path:'clients',
        element: <Clients/>,
        
      },
      
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
  
}


export default App;
