import './assets/styles.css';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
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
  return (<RouterProvider router={router} />)
}

export default App