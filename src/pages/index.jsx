import Head from 'next/head'

import { CallToAction } from '@/components/CallToAction'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { Reviews } from '@/components/Reviews'

export default function Home() {
  return (
    <>
      <Head>
        <title>Pocket - Invest at the perfect time.</title>
        <meta
          name="description"
          content="By leveraging insights from our network of industry insiders, you’ll know exactly when to buy to maximize profit, and exactly when to sell to avoid painful losses."
        />
      </Head>
     
      <main>
        <Hero />
       
        {/* <SecondaryFeatures />
        <CallToAction /> */}
        
        <Reviews />
        <CallToAction />
      
        
      </main>
      <Footer />
    </>
  )
}
