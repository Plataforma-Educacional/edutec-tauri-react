import { useEffect } from 'react'
import { RouterProvider } from 'react-router-dom'
import router from './Router'

function App() {
  useEffect(() => {
    if (localStorage.theme === 'dark') {
      document.documentElement.classList.add('dark')
    }
  }, [])

  return <RouterProvider router={router} />
}

export default App
