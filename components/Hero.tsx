import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'

const Hero = () => {
  return (
    <div className='h-screen w-full flex items-center justify-center absolute top-0 left-0 overflow-x-hidden' >

      <div>
        <Spotlight
          fill='white'
          className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' />
        <Spotlight
          fill='purple'
          className='top-10 left-full h-[80vh] w-[50vw]' />
        <Spotlight
          fill='blue'
          className='-top-28 left-80 h-[80vh] w-[50vw]' />
        <Spotlight
          fill='blue'
          className='-top-28 left-50 h-[80vh] w-[50vw]' />
      </div>

      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.05] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">

        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

        <div className='w-full flex-col lg:flex-row flex justify-center my-20 z-10 border-2 border-red-500' >
          <div className='w-[50%] flex flex-col items-center justify-center border-2 border-green-500' >
            < TextGenerateEffect
              className='uppercase tracking-widest text-center text-4xl md:text-5xl lg:text-6xl'
              words="Hello, I'm Muhammad Umar" 
              />
            <p className="uppercase tracking-widest text-lg md:text-2xl text-center text-white">
              I&apos;m a full-stack developer
            </p>
          </div>
          <div className='w-[50%] border-2 border-pink-500' >
              Image Here
          </div>
        </div>

      </div>

    </div>
  )
}

export default Hero