import GameList from './GameList'

export default {
  title: 'components/Game List',
  component: GameList,
}

const gameListMock = [
  {
    id: 1,
    name: 'Game Name',
    href: '/games/joguinho1/',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
  },
  {
    id: 2,
    name: 'Game Name',
    href: '/games/joguinho2/',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
  },
]

export const Default = () => <GameList games={gameListMock} />
