import React from 'react'
import {motion} from 'framer-motion'
import Logo from '../public/th.webp'
import Image from 'next/image'
import {useTheme} from 'next-themes'
import Link from 'next/link'
type Props = {}



function Hero({}: Props) {

  return (
    <div className='flex items-center flex-col relative justify-center h-screen'>
            <p className='text-4xl text-white text-center dark:text-black'>Vinings Estates Coding Bootcamp</p>
            <Link href='#payments'>
                <motion.button
                initial={{
                    x:-500,

                }}
                animate={{
                    x:0,
                }}
                transition={{
                    duration: .5          
                }}
                className="  mt-10 text-white bg-green-500 rounded-md pt-5 pb-5 pr-10 pl-10 justify-center"
                id='#payments'
                >
                    Get Started
                </motion.button>
            </Link>
            
         
        <p className='text-white text-3xl font-bold text-center mt-20 dark:text-black'>A Place for Vinings Esatates kids to learn how to code</p>
    </div>
  )
}

export default Hero