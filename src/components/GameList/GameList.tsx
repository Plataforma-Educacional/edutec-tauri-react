import React from 'react'
import GameCard from '../GameCard/GameCard'
import { Stage } from '@/types'

type Props = {
  stages: Stage[]
}

const GameList: React.FC<Props> = ({ stages }) => {
  return (
    <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      {stages.map((stage) => (
        <div className='py-8' key={stage.title}>
          <h2 className="text-2xl font-bold tracking-tight text-ctp-text">
            {stage.title}
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 xl:gap-x-8">
            {stage.games.map((game) => (
              <div key={game.title} className="group relative">
                <GameCard game={game} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default GameList
