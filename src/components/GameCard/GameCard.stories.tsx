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

export const Primary = () => (
  <div className='max-w-xs'>
    <GameCard game={gameMock} />
  </div>
)
