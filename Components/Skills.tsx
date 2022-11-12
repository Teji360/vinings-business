import React from 'react'
import FacebookLogo from '../public/Facebook Icon.png'
import NextjsLogo from '../public/NextJs.png'
import NodejsLogo from '../public/NodeJs.png'
import ReduxLogo from '../public/Redux.png'
import ReactLogo from '../public/React-Icon.png'
import Image from 'next/image'
type Props = {}

function Skills({}: Props) {
  return (
    <div className='flex h-screen flex-col items-center relative space-y-10 text-center'>
        <div className='mt-20 space-y-10'>
             <p className='text-gray-600 tracking-[15px] uppercase text-2xl'>Skills they will learn</p>

             <div className='grid grid-cols-3 '>
              <div className='flex flex-col items-center text-center'>
                <Image src={FacebookLogo} className='h-20 w-20 rounded-full' 
              alt=''/>
              <p className='skillText'>Facebook</p>
              </div>
              <div className='flex flex-col items-center text-center'><Image src={NextjsLogo} className='h-20 w-20 rounded-full' 
              alt=''/>
              <p className='skillText'>NextJS</p>
              </div>
              <div className='flex flex-col items-center text-center'>
                <Image src={NodejsLogo} className='h-20 w-20 rounded-full' 
              alt=''/>
                <p className='skillText'>NodeJS</p>
              </div>
              <div className='flex flex-col items-center text-center'>
                <Image src={ReduxLogo} className='h-20 w-20 rounded-full' 
              alt=''/>
              <p className='skillText'>Redux</p>
              </div>
              <div className='flex flex-col items-center text-center'><Image src={ReactLogo} className='h-20 w-20 rounded-full' 
              alt=''/>
              <p className='skillText'>React</p>
              
              </div>
              <div className='flex flex-col items-center text-center'><Image src={ReactLogo} className='h-20 w-20 rounded-full' 
              alt=''/>
              <p className='skillText'>ReactNative</p>
              </div>
              
              
              
              
              
              
             </div>
            
          
            
        </div>
        
    </div>
  )
}

export default Skills