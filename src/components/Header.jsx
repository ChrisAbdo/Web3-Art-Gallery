import { useTheme } from 'next-themes'

import Link from 'next/link'
import { Fragment, useState } from 'react'
import { Popover, Dialog, Menu, Transition } from '@headlessui/react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  CheckIcon,
  SunIcon,
  MoonIcon,
  ComputerDesktopIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLinks } from '@/components/NavLinks'

function MenuIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M5 6h14M5 18h14M5 12h14"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ChevronUpIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M17 14l-5-5-5 5"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function MobileNavLink({ children, ...props }) {
  return (
    <Popover.Button
      as={Link}
      className="block text-base leading-7 tracking-tight text-gray-700"
      {...props}
    >
      {children}
    </Popover.Button>
  )
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function Header() {
  const [open, setOpen] = useState(false)

  const { theme, setTheme } = useTheme()
  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-black">
      <nav>
        <Container className="relative z-50 flex justify-between py-8">
          <div className="relative z-10 flex items-center gap-16">
            <Link href="/" aria-label="Home">
              <Logo className="h-10 w-auto" />
            </Link>
            <div className="hidden lg:flex lg:gap-10">
              <NavLinks />
            </div>
          </div>
          <div className="flex items-center gap-6">
            <Popover className="lg:hidden">
              {({ open }) => (
                <>
                  <Popover.Button
                    className="relative z-10 -m-2 inline-flex items-center rounded-lg stroke-gray-900 p-2 hover:bg-gray-200/50 hover:stroke-gray-600 active:stroke-gray-900 [&:not(:focus-visible)]:focus:outline-none"
                    aria-label="Toggle site navigation"
                  >
                    {({ open }) =>
                      open ? (
                        <ChevronUpIcon className="h-6 w-6" />
                      ) : (
                        <MenuIcon className="h-6 w-6" />
                      )
                    }
                  </Popover.Button>
                  <AnimatePresence initial={false}>
                    {open && (
                      <>
                        <Popover.Overlay
                          static
                          as={motion.div}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="fixed inset-0 z-0 bg-gray-300/60 backdrop-blur"
                        />
                        <Popover.Panel
                          static
                          as={motion.div}
                          initial={{ opacity: 0, y: -32 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{
                            opacity: 0,
                            y: -32,
                            transition: { duration: 0.2 },
                          }}
                          className="absolute inset-x-0 top-0 z-0 origin-top rounded-b-2xl bg-gray-50 px-6 pb-6 pt-32 shadow-2xl shadow-gray-900/20"
                        >
                          <div className="space-y-4">
                            <MobileNavLink href="#features">
                              Features
                            </MobileNavLink>
                            <MobileNavLink href="#reviews">
                              Reviews
                            </MobileNavLink>
                            <MobileNavLink href="#pricing">
                              Pricing
                            </MobileNavLink>
                            <MobileNavLink href="#faqs">FAQs</MobileNavLink>
                          </div>
                          <div className="mt-8 flex flex-col gap-4">
                            <Button
                              onClick={() => setOpen(true)}
                              variant="outline"
                            >
                              Connect Wallet
                            </Button>
                            <Button href="#">Download the app</Button>
                          </div>
                        </Popover.Panel>
                      </>
                    )}
                  </AnimatePresence>
                </>
              )}
            </Popover>
            <Button
              onClick={() => setOpen(true)}
              variant="outline"
              className="hidden transition duration-200 dark:border-[#333] dark:bg-[#111] dark:text-white dark:hover:bg-[#333] lg:block"
            >
              Connect Wallet
            </Button>

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
                  <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
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
                      <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                        <div>
                          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                            <CheckIcon
                              className="h-6 w-6 text-green-600"
                              aria-hidden="true"
                            />
                          </div>
                          <div className="mt-3 text-center sm:mt-5">
                            <Dialog.Title
                              as="h3"
                              className="text-base font-semibold leading-6 text-gray-900"
                            >
                              Payment successful
                            </Dialog.Title>
                            <div className="mt-2">
                              <p className="text-sm text-gray-500">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Consequatur amet labore.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="mt-5 sm:mt-6">
                          <button
                            type="button"
                            className="inline-flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:text-sm"
                            onClick={() => setOpen(false)}
                          >
                            Go back to dashboard
                          </button>
                        </div>
                      </Dialog.Panel>
                    </Transition.Child>
                  </div>
                </div>
              </Dialog>
            </Transition.Root>

            {/* <Button href="#" className="hidden lg:block">
              Download
            </Button> */}
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition duration-200 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#555] focus:ring-offset-2 focus:ring-offset-gray-100 dark:border-[#333] dark:bg-[#111] dark:text-white dark:hover:bg-[#333]">
                  Theme
                  <ChevronDownIcon
                    className="-mr-1 ml-2 h-5 w-5"
                    aria-hidden="true"
                  />
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg  ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-[#333]">
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <div
                          onClick={() => setTheme('light')}
                          className={classNames(
                            active
                              ? 'bg-gray-100 text-gray-900 dark:bg-[#444] dark:text-white '
                              : 'text-black dark:text-white',
                            'flex px-4 py-2 text-sm'
                          )}
                        >
                          <SunIcon
                            className="mr-2 h-5 w-5"
                            aria-hidden="true"
                          />
                          Light
                        </div>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <div
                          onClick={() => setTheme('dark')}
                          className={classNames(
                            active
                              ? 'bg-gray-100 text-gray-900 dark:bg-[#444] dark:text-white'
                              : 'text-black dark:text-white',
                            'flex px-4 py-2 text-sm'
                          )}
                        >
                          <MoonIcon
                            className="mr-2 h-5 w-5"
                            aria-hidden="true"
                          />
                          Dark
                        </div>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <div
                          onClick={() => setTheme('system')}
                          className={classNames(
                            active
                              ? 'bg-gray-100 text-gray-900 dark:bg-[#444] dark:text-white'
                              : 'text-black dark:text-white',
                            'flex px-4 py-2 text-sm'
                          )}
                        >
                          <ComputerDesktopIcon
                            className="mr-2 h-5 w-5"
                            aria-hidden="true"
                          />
                          System
                        </div>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </Container>
      </nav>
    </header>
  )
}
