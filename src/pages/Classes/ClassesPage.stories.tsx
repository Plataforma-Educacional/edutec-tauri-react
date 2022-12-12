import BaseLayout from '@layouts/BaseLayout/BaseLayout'
import ClassesPage from './ClassesPage'
import { BrowserRouter as Router } from 'react-router-dom'

export default {
  title: 'Pages/Classes',
  component: ClassesPage,
}

export const Default = () => <ClassesPage />

export const baseLayout = () => (
  <Router>
    <BaseLayout>
      <ClassesPage />
    </BaseLayout>
  </Router>
)
