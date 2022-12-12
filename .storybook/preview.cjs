import '../src/style.css'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  themes: {
    default: 'dark',
    list: [
      { name: 'dark', class: 'dark', color: '#000000' },
      { name: 'light', class: 'light', color: '#ffff00' },
    ],
  },
}
