import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/Home';
import RootLayout from './pages/Root';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import ServicesPage from './pages/ServicesPage';
import CaseStudies from './pages/CaseStudies';
import Blogs from './pages/Blogs';
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
        path:'casestudies',
        element: <CaseStudies/>,
        
      },
      {
        path:'blogs',
        element: <Blogs/>,
        
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
  
}


export default App;
