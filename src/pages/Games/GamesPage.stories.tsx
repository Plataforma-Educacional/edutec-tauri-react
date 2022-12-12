import GamesPage from './GamesPage'
import BaseLayout from '@layouts/BaseLayout/BaseLayout'
import { BrowserRouter as Router } from 'react-router-dom'

export default {
  title: 'Pages/Games',
  component: GamesPage,
}

export const Default = () => <GamesPage />

export const baseLayout = () => (
  <Router>
    <BaseLayout>
      <GamesPage />
    </BaseLayout>
  </Router>
)
