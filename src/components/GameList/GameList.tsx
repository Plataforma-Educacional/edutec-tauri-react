import React from 'react'
import GameCard from '../GameCard/GameCard'

interface Game {
  id: number
  name: string
  href: string
  description: string
}

type Props = {
  games: Game[]
}

const GameList: React.FC<Props> = ({ games }) => {
  return (
    <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 className="text-2xl font-bold tracking-tight text-ctp-text">
        Jogos Educacionais
      </h2>

      <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 xl:gap-x-8">
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
