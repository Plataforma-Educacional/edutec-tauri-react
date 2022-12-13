import React from 'react'
import GameList from '@/components/GameList/GameList'

const games = [
  {
    id: 1,
    name: 'Mascote Cilarico',
    href: '/games/aulinha1/',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vestibulum, mauris vitae tincidunt aliquam, leo mauris tincidunt turpis, et malesuada felis nibh sed est.',
  },
  {
    id: 2,
    name: 'Jigsa Bilgiatan',
    href: '/games/aulinha2/',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vestibulum, mauris vitae tincidunt aliquam, leo mauris tincidunt turpis, et malesuada felis nibh sed est.',
  },
  {
    id: 3,
    name: 'Jigsa Bilgiatan',
    href: '/games/aulinha3/',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vestibulum, mauris vitae tincidunt aliquam, leo mauris tincidunt turpis, et malesuada felis nibh sed est.',
  },
  {
    id: 4,
    name: 'Jigsa Bilgiatan',
    href: '/games/aulinha4/',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vestibulum, mauris vitae tincidunt aliquam, leo mauris tincidunt turpis, et malesuada felis nibh sed est.',
  },
  {
    id: 5,
    name: 'Jigsa Bilgiatan',
    href: '/games/aulinha5/',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vestibulum, mauris vitae tincidunt aliquam, leo mauris tincidunt turpis, et malesuada felis nibh sed est.',
  },
  {
    id: 6,
    name: 'Jigsa Bilgiatan',
    href: '/games/aulinha6/',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vestibulum, mauris vitae tincidunt aliquam, leo mauris tincidunt turpis, et malesuada felis nibh sed est.',
  },
]

const ClassesPage: React.FC = () => {
  return <GameList games={games} />
}

export default ClassesPage
