import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full bg-[#34343b] py-14 flex justify-center items-center'>
        <form method='POST' action='https://getform.io/f/abe97902-e715-4efa-82af-8a69a0e77e51' className='w-full flex flex-col max-w-[1024px] p-5'>
            <div className='pb-10'>
                <p className='font-bold text-4xl animate-bounce text-white'>
                        Contact Me
                        <b className='text-[#c7953f]'>.</b>
                </p>
                <p className='py-3 text-white'> 
                    Submit the form to contact to me 
                </p>
            </div>
            <input className='p-2' type='text' placeholder='Enter your name' name='userName' required/>
            <input className='my-5 p-2' type='email' placeholder='Enter your email' name='email' required/>
            <textarea className='p-2' type='text' placeholder='Enter your message' rows='10' name='message' required></textarea>
            <button className='mx-auto text-white border-2 px-6 py-3 my-4 flex items-center hover:bg-[#c7953f] hover:border-[#c7953f]'>
                Submit
            </button>
        </form>
    </div>
  )
}

export default Contact