import { createBrowserRouter } from 'react-router-dom'
import BaseLayout from './layouts/BaseLayout/BaseLayout'
import ClassesPage from './pages/Classes/ClassesPage'
import GamesPage from './pages/Games/GamesPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <BaseLayout />,
    children: [
      {
        path: '/',
        element: <GamesPage />,
      },
      {
        path: '/aulas',
        element: <ClassesPage />,
      },
    ],
  },
])

export default router
