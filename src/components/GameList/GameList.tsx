import React from 'react'
import GameCard from '../GameCard/GameCard'

interface Game {
  id: number
  name: string
  href: string
  description: string
}

const games: Game[] = [
  {
    id: 1,
    name: 'Mascote Cilarico',
    href: '/games/joguinho1/',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vestibulum, mauris vitae tincidunt aliquam, leo mauris tincidunt turpis, et malesuada felis nibh sed est.',
  },
  {
    id: 2,
    name: 'Jigsa Bilgiatan',
    href: '/games/joguinho1/',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vestibulum, mauris vitae tincidunt aliquam, leo mauris tincidunt turpis, et malesuada felis nibh sed est.',
  },
  {
    id: 3,
    name: 'Jigsa Bilgiatan',
    href: '/games/joguinho1/',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vestibulum, mauris vitae tincidunt aliquam, leo mauris tincidunt turpis, et malesuada felis nibh sed est.',
  },
  {
    id: 4,
    name: 'Jigsa Bilgiatan',
    href: '/games/joguinho1/',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vestibulum, mauris vitae tincidunt aliquam, leo mauris tincidunt turpis, et malesuada felis nibh sed est.',
  },
  {
    id: 5,
    name: 'Jigsa Bilgiatan',
    href: '/games/joguinho1/',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vestibulum, mauris vitae tincidunt aliquam, leo mauris tincidunt turpis, et malesuada felis nibh sed est.',
  },
  {
    id: 6,
    name: 'Jigsa Bilgiatan',
    href: '/games/joguinho1/',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vestibulum, mauris vitae tincidunt aliquam, leo mauris tincidunt turpis, et malesuada felis nibh sed est.',
  },
]

type Props = {
  alt?: boolean
}

const GameList: React.FC<Props> = ({ alt }) => {
  if (alt) {
    return <></>
  }
  return (
    <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 className="text-2xl font-bold tracking-tight text-text">
        Jogos Educacionais
      </h2>

      <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
        {games.map((game: Game, index) => (
          <div key={index} className="group relative">
            <GameCard game={game} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default GameList
