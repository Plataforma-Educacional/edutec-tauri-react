import React, { useState, Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { WebviewWindow } from '@tauri-apps/api/window'
import XMarkIcon from '@heroicons/react/24/outline/XMarkIcon';
import PlayIcon from '@/assets/PlayIcon'
import { Game } from '@/types';

type Props = {
  game: Game
}

const GameCard: React.FC<Props> = ({ game }) => {
  const [open, setOpen] = useState(false)

  async function openGame(url: string) {
    const webview = new WebviewWindow('Game', {
      url: `/games/${url}/index.html`,
    })
    // since the webview window is created asynchronously,
    // Tauri emits the `tauri://created` and `tauri://error` to notify you of the creation response
    webview.once('tauri://created', function () {
      // webview window successfully created
      console.log('webview window successfully created')
    })
    webview.once('tauri://error', function (e) {
      // an error occurred during webview window creation
      console.error(e)
    })
  }

  return (
    <>
      <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-base group-hover:opacity-75 lg:aspect-none lg:h-80">
        <img
          src={'/games/' + game.title + '/thumb.jpg'}
          alt={game.title}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-md text-ctp-text hover:text-ctp-lavender font-bold">
            <button onClick={() => setOpen(true)}>
              <span aria-hidden="true" className="absolute inset-0" />
              {game.title}
            </button>
          </h3>
        </div>
      </div>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto relative w-screen max-w-2xl">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-in-out duration-500"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="ease-in-out duration-500"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <div className="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 sm:-ml-10 sm:pr-4">
                        <button
                          type="button"
                          className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                          onClick={() => setOpen(false)}
                        >
                          <span className="sr-only">Close panel</span>
                          <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </Transition.Child>
                    <div className="flex h-full flex-col overflow-y-scroll bg-ctp-base shadow-xl">
                      <div className="px-4 sm:px-6 mb-[-106px] z-10 bg-gradient-to-b from-ctp-crust via-ctp-mantle pt-2 pb-12 opacity-90">
                        <Dialog.Title className="text-lg font-medium text-ctp-text">{game.title}</Dialog.Title>
                      </div>
                      <div className="relative mt-6 flex-1">
                        <div>
                          <button
                            type="button"
                            className="relative"
                            onClick={() => openGame(game.title)}
                          >
                            <img
                              className="w-full max-h-96 object-cover object-center mx-auto"
                              src={'/games/' + game.title + '/thumb.jpg'}
                              alt={game.title}
                            />
                            <div className='absolute flex items-center justify-center top-0 left-0 w-full h-full bg-[#0000004e] opacity-0 hover:opacity-100 transition-all'>
                              <PlayIcon className='fill-ctp-base ' />
                            </div>
                          </button>
                        </div>
                        <div className="px-6 py-4 text-left space-y-4">
                          <blockquote>
                            <p className="text-lg font-medium text-ctp-text">
                              {game.title}
                            </p>
                          </blockquote>
                        </div>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  )
}

export default GameCard
