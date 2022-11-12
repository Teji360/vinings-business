import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Contact from '../Components/Contact'
import Header from '../Components/Header'
import Hero from '../Components/Hero'
import Lessons from '../Components/Lessons'
import Payments from '../Components/Payments'
import Skills from '../Components/Skills'

const Home: NextPage = () => {

  return (
    <div className='bg-slate-900 dark:bg-white h-screen overflow-scroll justify-evenly space-y-10 snap-y snap-mandatory'>
      <Header />

      <section className='h-screen snap-center'>
        <Hero />
      </section>

      <section className='snap-center'>
        <Lessons />
      </section>

      <section className='snap-center'>
        <Skills />
      </section>

      <section className='snap-center' id='contacts'>
        <Contact />
      </section>

      <section className='snap-center'id='payments' >
        <Payments  />
      </section>

      <footer >
        <div>
          <p>Need Assistance? Email Me: <span>webfordev1@gmail.com</span></p>
          
        </div>
        
      </footer>
    </div>
  )
}

export default Home
