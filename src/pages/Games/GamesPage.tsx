import React from 'react'
import GameList from '@/components/GameList/GameList'
import * as data from '@/assets/data.json'
import { invoke } from '@tauri-apps/api'

const GamesPage: React.FC = () => {
  invoke('games_list').then((res) => {
    console.log(res)
  }).catch((err) => {
    console.log(err)
  })
  const stages = data.stages
  return <GameList stages={stages} />
}

export default GamesPage
