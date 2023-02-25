import { AppStoreLink } from '@/components/AppStoreLink'
import { CircleBackground } from '@/components/CircleBackground'
import { Container } from '@/components/Container'
import { Button } from './Button'

export function CallToAction() {
  return (
    <section
      id="get-free-shares-today"
      className="relative overflow-hidden bg-[#eaeaea] dark:bg-black py-20 sm:py-28"
    >
      <div className="absolute top-1/2 left-20 -translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2">
        <CircleBackground color="#fff" className="animate-spin-slower" />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-md sm:text-center">
          <h2 className="text-3xl font-medium tracking-tight text-black dark:text-white sm:text-4xl">
            Start earning from art!
          </h2>
          <p className="mt-4 text-lg text-black dark:text-gray-300">
            If someone likes your art enough, they can buy a share of it. Vice versa, if you like someone else&apos;s art, you can buy a share of it.
          </p>
          <div className="mt-8 flex justify-center">
          <Button
             
             variant="outline"
             className=" dark:bg-[#111] dark:border-[#333] dark:text-white transition duration-200 dark:hover:bg-[#333]"
           >
             Start Earning
           </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
