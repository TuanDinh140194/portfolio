import React from 'react'
import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import GitHub from '../assets/github.png'
import react from '../assets/react.png'
import tailwind from '../assets/tailwind.png'
import java from '../assets/js.png'
import c from '../assets/c++.png'
import visual from '../assets/visual.png'
import android from '../assets/android.png'

export const Skills = () => {
  return (
    <div name='skills' className='bg-[#34343b] text-white w-full md:h-screen py-14'>
        <div className='mx-auto w-full h-full p-5 flex flex-col justify-center item-center max-w-[1024px]'>
            <div>
                <p className='font-bold text-5xl animate-bounce'>
                    My Skills
                    <b className='text-[#c7953f]'>.</b>
                </p>
                <p className='py-5'>The technologies that I have experienced</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-6 text-center py-10'>
                <div className='w-full shadow-[#8892b0] shadow-lg hover:scale-110 duration-500'>
                    <img className='w-20 h-20 mx-auto' src={HTML} alt="My HTML display"/> 
                    <p className='my-3 font-semibold'>HTML</p>
                </div>
                <div className='w-full shadow-[#8892b0] shadow-lg hover:scale-110 duration-500'>
                    <img className='w-20 h-20 mx-auto' src={CSS} alt="My CSS display"/> 
                    <p className='my-3 font-semibold'>CSS</p>
                </div>
                <div className='w-full shadow-[#8892b0] shadow-lg hover:scale-110 duration-500'>
                    <img className='w-20 h-20 mx-auto' src={GitHub} alt="My Github display"/> 
                    <p className='my-3 font-semibold'>GitHub</p>
                </div>
                <div className='w-full shadow-[#8892b0] shadow-lg hover:scale-110 duration-500'>
                    <img className='w-20 h-20 mx-auto' src={react} alt="My React display"/> 
                    <p className='my-3 font-semibold'>React</p>
                </div>
                <div className='w-full shadow-[#8892b0] shadow-lg hover:scale-110 duration-500'>
                    <img className='w-20 h-20 mx-auto' src={tailwind} alt="My tailwind display"/> 
                    <p className='my-3 font-semibold'>Tailwind</p>
                </div>
                <div className='w-full shadow-[#8892b0] shadow-lg hover:scale-110 duration-500'>
                    <img className='w-20 h-20 mx-auto' src={java} alt="My Javascript display"/> 
                    <p className='my-3 font-semibold'>Javascrip</p>
                </div>
                <div className='w-full shadow-[#8892b0] shadow-lg hover:scale-110 duration-500'>
                    <img className='w-20 h-20 mx-auto' src={c} alt="My C++ display"/> 
                    <p className='my-3 font-semibold'>C++</p>
                </div>
                <div className='w-full shadow-[#8892b0] shadow-lg hover:scale-110 duration-500'>
                    <img className='w-20 h-20 mx-auto' src={visual} alt="My Visual Studio display"/> 
                    <p className='my-3 font-semibold'>Visual Studio</p>
                </div>
                <div className='w-full shadow-[#8892b0] shadow-lg hover:scale-110 duration-500'>
                    <img className='w-20 h-20 mx-auto' src={android} alt="My Android Studio display"/> 
                    <p className='my-3 font-semibold'>Android Studio</p>
                </div>
                
            </div>
        </div>
    </div>
  )
}
