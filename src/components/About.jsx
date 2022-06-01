import React from 'react';
import {HiArrowNarrowRight} from 'react-icons/hi';
import MyPic from '../assets/MyPic2.png';
import '../index.css';
import {Link} from 'react-scroll'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#2e2e35]'>
    {/* Container */}
    <div className='max-w-[1024px] mx-auto px-8 flex flex-col justify-center h-full'>
      <div className='flex items-start relative justify-center'>
        <img className='z-10 hidden md:inline object-cover mt-4 w-50 h-60 sm:my-10 mx-auto items-center position-absolute' src={MyPic} alt="My avarta"/>
        <img className='z-10 w-20 h-20 mt-14 pd-12 md:hidden inline object-cover mx-auto items-center ' src={MyPic} alt="My logo"/>
        <div className='clip-avarta md:hidden flex flex-wrap justify-center mr-15 mt-4 '></div> 
        <div className='clip-avarta hidden md:flex flex-wrap justify-center mr-14 '></div>    
      </div>
      <p className='text-[#c7953f] text-xl'>Hi, my name is</p>
      <h1 className='text-3xl sm:text-5xl font-bold text-white'>
        Tuan Dinh
      </h1>
      <h2 className='text-3xl sm:text-6xl font-bold text-[#dadada] animate-bounce pt-4 sm:pt-10'>
        I'm a Computer Science at PDX
        <b className='text-[#c7953f]'>.</b>
      </h2>
      <p className='text-[#8892b0] py-4 max-w-[700px]'>
        I'm recently graduate from Portland State University with the BS. in Computer Science. I'm have the
        experience in web developer such as fond-end, full-stack. I also done some projects in my career and hope
        to expand more my skills in Computer Science. In my free time, I often try to learn more about new language as
        well as do some sports. If you think my skills are suitable to your project or your company, feel free to contact me !
      </p>
      <div>
        <Link to='contact' smooth={true} duration={500}>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#c7953f] hover:border-[#c7953f]'> 
            Contact me
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3'/>
            </span>
          </button>
        </Link>
      </div>
    </div>
  </div>
  );
};

export default About