import React, { useState, Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { WebviewWindow } from '@tauri-apps/api/window'

export interface Game {
    id: number;
    name: string;
    href: string;
    description: string;
}

type Props = {
  game: Game
}

const GameCard: React.FC<Props> = ({ game }) => {
  const [open, setOpen] = useState(false)

  async function openGame(url: string) {
    const webview = new WebviewWindow('Game', {
      url: url,
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
          src={game.href + 'thumb.jpg'}
          alt={game.name}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-md text-ctp-text hover:text-ctp-lavender font-bold">
            <button onClick={() => setOpen(true)}>
              <span aria-hidden="true" className="absolute inset-0" />
              {game.name}
            </button>
          </h3>
        </div>
      </div>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-ctp-base bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-ctp-base text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <figure className="md:flex rounded-xl p-8 md:p-0">
                    <img
                      className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
                      src={game.href + 'thumb.jpg'}
                      alt={game.name}
                      width="384"
                      height="512"
                    />
                    <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                      <blockquote>
                        <p className="text-lg font-medium text-ctp-text">
                          {game.description}
                        </p>
                      </blockquote>
                      <div className="px-4 p-y-10 sm:flex sm:flex-row-reverse sm:px-6">
                        <button
                          type="button"
                          className="rounded-md px-4 py-2 text-ctp-base font-medium shadow-sm bg-ctp-green focus:outline-none focus:ring-2 focus:ring-green sm:ml-3 sm:w-auto sm:text-sm"
                          onClick={() => openGame(game.href + 'index.html')}
                        >
                          Jogar
                        </button>
                        <button
                          type="button"
                          className="rounded-md bg-ctp-overlay0 px-4 py-2 font-medium text-ctp-base sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                          onClick={() => setOpen(false)}
                        >
                          Fechar
                        </button>
                      </div>
                    </div>
                  </figure>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  )
}

export default GameCard
