import './assets/styles.css';

// import SiteNavigation from './components/SiteNavigation/SiteNavigation';
// import SiteChat from './components/SupportChat/SupportChat';

import { BrowserRouter, Routes, RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainPage from './pages/MainPage';
import SupportPage from './pages/SupportPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />
  },
  {
    path: "/support",
    element: <SupportPage />,
  }
  // {
  //   path: "*",
  //   element: <NotFound />,
  // },
])

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <RouterProvider router={router} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App