import NavBar from './NavBar'
import { BrowserRouter as Router } from 'react-router-dom'

export default {
  title: 'Components/NavBar',
  component: NavBar,
}

export const Default = () => (
  <Router>
    <NavBar />
  </Router>
)
