import React from 'react'
import GameList from '@/components/GameList/GameList'
import * as data from '@/assets/data.json'

const GamesPage: React.FC = () => {
  const stages = data.stages
  return <GameList stages={stages} />
}

export default GamesPage
