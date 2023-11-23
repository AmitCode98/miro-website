import React from 'react'
import Logo from '../assets/images/logo.svg'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import EarthImg from '../assets/images/earthImg.svg'
import Button from './Button';
import { MdArrowRightAlt } from "react-icons/md";

const navigationItem = [
    {
        id: 1,
        text: 'Product',
        link: '/',
        icon: MdOutlineKeyboardArrowDown

    },
    {
        id: 2,
        text: 'Solution',
        link: '/',
        icon: MdOutlineKeyboardArrowDown

    },
    {
        id: 3,
        text: 'Resources',
        link: '/',
        icon: MdOutlineKeyboardArrowDown

    },
    {
        id: 4,
        text: 'Enterprice',
        link: '/'

    },
    {
        id: 5,
        text: 'pricing',
        link: '/'

    },

]


const Nav = () => {
    return (
        <section className='border-b'>
            <header className='px-8'>
                <nav className='flex items-center justify-between'>
                    <div className='flex items-center  py-8 gap-7'>
                        <img src={Logo} alt="logo" className='' />
                        <ul className='flex gap-5'>
                            {navigationItem.map((item) => (
                                <li key={item.id} className='flex gap-2 items-center text-dark-blue font-normal text-base font-Helvetica'>
                                    <a href={item.link}>{item.text}</a>
                                    {item.icon && <item.icon />}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <ul className='flex items-center gap-4 text-dark-blue font-normal text-base font-Helvetica'>
                            <li className='flex gap-2'><img src={EarthImg} alt="earth img" /><a href="/">EN</a></li>
                            <li><a href="/">Contact Sales</a></li>
                            <li><button aria-label="Login"><a href="/">Login</a></button></li>
                            <li><Button aria-label="signup" text='Get Started' link='/signup' icon={MdArrowRightAlt} /></li>
                            {/* <li>
                                <Button
                                    link='/signup'
                                    content={<>Get started <MdArrowRightAlt /></>}
                                    className="px-2 py-1"
                                />
                            </li> */}
                        </ul>
                    </div>
                </nav>
            </header>
        </section>
    )
}

export default Nav












