import React from 'react'
import Logo from '../public/th.webp'
import Image from 'next/image'
type Props = {}

function Lessons({}: Props) {
  return (
    <div className='flex h-screen flex-col items-center justify-center space-y-10 text-center'>
        <p className='text-gray-600 tracking-[15px] uppercase text-2xl'>About Us</p>
        <p className='text-white text-3xl'>Serving Residents in Vinings Estates is what we do best</p>

        <p className='text-white text-lg dark:text-black'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quia, molestias inventore cum ab modi! Suscipit, eaque quibusdam! Eligendi illum labore harum dolor quia officiis voluptates, corporis ullam eos nemo dolorem quaerat! Amet soluta quo assumenda dicta repudiandae sapiente repellat accusamus minima qui, quia ipsum voluptatem, incidunt nam esse deleniti?</p>
        <Image src={Logo}
        className='h-50 w-50 rounded-md'
        alt=''/>
    </div>
  )
}

export default Lessons