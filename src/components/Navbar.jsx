import React, {useState} from 'react';
import MyPic from '../assets/myPic.jpg';
import Resume from '../assets/resume.png';
import '../index.css';
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaInstagram
} from 'react-icons/fa';
import {Link} from 'react-scroll'
import { BsFillPersonLinesFill, BsYoutube } from 'react-icons/bs';
import {HiEye} from 'react-icons/hi';

const Navbar = () => {
  const [nav, setNav] =useState(false) 
  const handleClick = () => setNav(!nav)
  const [viewResume, setViewResume] = useState(false);

  const downloadClick = (url) => {
    window.open(url, "_blank")
  }

  return (
    <>
    <div className='fixed w-full md:h-[50px] flex justify-between items-center px-4 bg-[#2e2e35] text-gray-300 z-20'>
      <div>
        <h1 className='text-3xl sm:text-5xl font-bold text-white'>
          TD
            <b className='text-[#c7953f]'>.</b>
        </h1>
        
      </div>

      {/* Menu */}
      <div>
        <ul className='hidden md:flex'>
          <li className='link link-underline'>
            <Link to='about' smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li className='link link-underline'>
            <Link to='skills' smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li className='link link-underline'>
            <Link to='projects' smooth={true} duration={500}>
              Projects
            </Link>
          </li>
          <li className='link link-underline'>
            <Link to='contact' smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-30'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Menu Size */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#2e2e35] flex flex-col justify-center items-center'}>
        <img className='w-20 h-20 inline object-cover mx-auto rounded-full items-center ' src={MyPic} alt="My logo"/>
        <li className='link link-underline py-6 text-4xl'>
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='link link-underline py-6 text-4xl'>
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='link link-underline py-6 text-4xl'>
          <Link onClick={handleClick} to='projects' smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li className='link link-underline py-6 text-4xl'>
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <button
              className='flex justify-between items-center w-full text-gray-300'
              onClick={() => setViewResume(true)}
            >
              Resume <BsFillPersonLinesFill size={30} />
            </button>
          </li>
          
          {viewResume ? (
              <>
                <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className="relative w-auto my-6 mx-auto min-w-2xl max-w-4xl">
                      <div className="bg-[#2e2e35] border-0 rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none">
                      
                          <div className="mt-4 flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                              
                              <h3 className="mx-auto text-3xl font-semibold">
                                  My Resume
                                  <b className='text-[#c7953f]'>.</b>
                              </h3>
                          </div>

                          <div className="relative m-auto ">
                            <img
                                alt="My resume"
                                src={Resume}
                                style={{ width: '400px' }}
                            />
                          </div>
                          
            
                          <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                            <button
                                className="mx-auto mr-2 text-white border-2 px-6 py-3 my-4 flex items-center hover:bg-[#c7953f] hover:border-[#c7953f]"
                                type="button"
                                onClick={() => setViewResume(false)}
                            >
                                <span>
                                    Close
                                </span>
                            </button>
                            <button
                                className="ml-2 text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#c7953f] hover:border-[#c7953f]"
                                onClick={() => downloadClick('https://drive.google.com/file/d/1o2boVPVGERVntgAE3nG8fq2lJWIk7_cP/view?usp=sharing')}
                            >
                              View
                              <span>
                                <HiEye className='ml-3'/>
                              </span>      
                            </button>
                          </div>
                      </div>
                    </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
              </>
            ) : null} 
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-800'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.linkedin.com/'
              target="_blank" rel="noreferrer"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#24292f]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://github.com/TuanDinh140194'
              target="_blank" rel="noreferrer"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.facebook.com/dinh.nhattuan/'
              target="_blank" rel="noreferrer"
            >
              Facebook <FaFacebook size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-orange-800'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.instagram.com/dinhnhattuan/'
              target="_blank" rel="noreferrer"
            >
              Instagram <FaInstagram size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-red-500'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.youtube.com/channel/UC9yhhBJUBGDRnW9dpp1NvhA'
              target="_blank" rel="noreferrer"
            >
              YouTube <BsYoutube size={30} />
            </a>
          </li> 
          
        </ul>
      </div>
      
    </div>

    
    </>
  );
};

export default Navbar;
