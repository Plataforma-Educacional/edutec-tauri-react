import { createBrowserRouter } from 'react-router-dom'
import BaseLayout from './layouts/BaseLayout/BaseLayout'
import GamesPage from './pages/Games/GamesPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <BaseLayout />,
    children: [
      {
        path: '/',
        element: <GamesPage />,
      }
    ],
  },
])

export default router
