import React from 'react'
import {useTheme} from 'next-themes'
import {SunIcon, MoonIcon} from '@heroicons/react/24/solid'

const ThemeButton = () => {
    const { resolvedTheme, setTheme}= useTheme()
    return (
    <button
    onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
    type='button'
    className='flex items-center jusrify-center rounded-lg p-2 transition-opacity'>
        { resolvedTheme==='dark' ? (
            <SunIcon className='h-10 w-10 text-orange-300' />
        ) : (
            <MoonIcon className='h-10 w-10 text-slate-800'   />
        )}
    </button>
  )
}

export default ThemeButton

