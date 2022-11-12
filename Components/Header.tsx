import React, { useEffect, useState } from 'react'
import  {SocialIcon}  from 'react-social-icons'
import ThemeButton from './ThemeButton'

type Props = {}
    

function Header({}: Props) {

    const [mounted, setMonunted] = useState(false)
    useEffect(() => setMonunted(true), [])
  

  return (
    <div className='flex items-center sticky top-0 p-5 space-x-10 z-10'>

        <div>
            <button><p className='text-white font-semibold text-xl dark:text-black'>Vinings</p></button>
            
        </div>
        <div>
            <SocialIcon url='https://www.youtube.com/channel/UCFd6F88c19Ys4BZ1WOt7S9A' />
        </div>
        <div>
         {mounted && <ThemeButton />}   
        </div>
       

        <div className='text-xl flex-end'>
            <p>Contact Me</p>
        </div>

        
    </div>
  )
}

export default Header