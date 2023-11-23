import React from 'react'
import Button from '../components/Button'
import HeroImg from '../assets/images/HeroImg.png'

const Hero = () => {
    return (
        <section className='w-full'>
            <div className='grid grid-cols-2 px-36 gap-10 mt-16 '>
                <div className='w-full space-y-8'>
                    <div className='w-[80%] space-y-4'>
                        <h1 className='text-dark-blue font-Inter font-bold text-5xl'>Take ideas from better to best</h1>
                        <p className='text-dark-blue font-Helvetica font-normal text-lg'>Miro is your team's visual platform to connect, collaborate, and create — together.</p>
                    </div>
                    <div className='space-y-3'>
                        <input type="text" placeholder='Enter your work email' aria-label='Enter your work email' className='py-3 px-6 w-full border border-[#9B99AF] rounded-full placeholder:font-Inter text-lg font-normal text-[#5F5C80] outline-none' />
                        <div className='space-y-2'>
                            <Button text='Sign up free' className='w-full justify-center' />
                            <p className='text-sm font-normal text-dark-blue font-Helvetica opacity-[80%]'>Collaborate with your team within minutes</p>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <img src={HeroImg} alt="Hero Img" />
                </div>
            </div>


        </section>
    )
}

export default Hero