import GameCard, { Game } from './GameCard'

export default {
  title: 'components/Game Card',
  component: GameCard,
}

const gameMock: Game = {
  id: 1,
  name: 'Game Name',
  href: '/games/joguinho1/',
  description: 'Game Description',
}

export const Primary = () => <GameCard game={gameMock} />
