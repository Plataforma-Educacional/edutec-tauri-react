import { ComponentStory, ComponentMeta } from '@storybook/react'
import { BrowserRouter as Router } from 'react-router-dom'
import BaseLayout from './BaseLayout'

export default {
  title: 'Layouts/Base',
  component: BaseLayout,
} as ComponentMeta<typeof BaseLayout>

export const Default: ComponentStory<typeof BaseLayout> = () => (
  <Router>
    <BaseLayout />
  </Router>
)
