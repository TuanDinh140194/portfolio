import React from 'react'
import '../index.css';

const Projects = () => {
  return (
    <div name='projects' className='bg-[#2e2e35] text-white w-full py-14'>
        <div className='mx-auto max-w-[1024px] p-5 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='font-bold text-5xl animate-bounce'>
                    My Current Projects
                    <b className='text-[#c7953f]'>.</b>
                </p>
                <p className='py-5'>
                    Below is some of my current projects
                </p>
            </div>

            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                <div className='project1 mx-auto px-2 items-center flex justify-center rounded-lg group container shadow-[#8892b0] shadow-lg'>
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-xl mx-auto text-white font-bold tracking-wider'>
                            Open Source Camera Application
                        </span>
                        <div className='pt-7 text-center'>
                            <a  href='https://opensourcecamera.netlify.app/'
                                target="_blank" rel="noreferrer">
                                <button className='px-5 py-4 m-5 text-center rounded-lg  text-lg font-bold text-black bg-white'>Demo</button>
                            </a>
                            <a  href='https://github.com/TuanDinh140194/camera_security'
                                target="_blank" rel="noreferrer">
                                <button className='px-5 py-4 m-5 text-center rounded-lg  text-lg font-bold text-black bg-white'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div className='project2 mx-auto px-2 items-center flex justify-center rounded-lg group container shadow-[#8892b0] shadow-lg'>
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-xl mx-auto text-white font-bold tracking-wider'>
                            Space Hunt Game
                        </span>
                        <div className='pt-7 text-center'>
                            <a href='https://spacehuntgame.netlify.app/'
                               target="_blank" rel="noreferrer">
                                <button className='px-5 py-4 m-5 text-center rounded-lg  text-lg font-bold text-black bg-white'>Demo</button>
                            </a>
                            <a  href='https://github.com/TuanDinh140194/spaceHuntGame'
                                target="_blank" rel="noreferrer">
                                <button className='px-5 py-4 m-5 text-center rounded-lg  text-lg font-bold text-black bg-white'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div className='project3 mx-auto px-2 items-center flex justify-center rounded-lg group container shadow-[#8892b0] shadow-lg'>
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-xl mx-auto text-white font-bold tracking-wider'>
                            Cellaborate App
                        </span>
                        <div className='pt-7 text-center'>
                            <a href='https://cellaborate.netlify.app/'
                               target="_blank" rel="noreferrer">
                                <button className='px-5 py-4 m-5 text-center rounded-lg  text-lg font-bold text-black bg-white'>Demo</button>
                            </a>
                            <a href='https://github.com/ngqminh165/final_project_full_stack'
                                target="_blank" rel="noreferrer">
                                <button className='px-5 py-4 m-5 text-center rounded-lg  text-lg font-bold text-black bg-white'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    </div>
  )
}

export default Projects