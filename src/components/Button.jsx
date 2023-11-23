import React from 'react'
import { MdArrowRightAlt } from "react-icons/md";

const Button = ({ text = 'sign up free', link = '#', icon = MdArrowRightAlt, className = '', ...rest }) => {
    const ButtonIcon = icon;
    const defaultbuttonStyle = 'py-4 px-6 bg-primary text-white rounded-full flex items-center gap-2 font-Helvetica font-normal text-base leading-5'
    const overridebuttonStyle = `${defaultbuttonStyle} ${className}`
    return (
        <button
            className={overridebuttonStyle}
            {...rest}>
            <a href={link}>{text}</a>
            {ButtonIcon && <ButtonIcon />}
        </button>
    );

}
export default Button;

// import React from 'react'

// const Button = ({ content, className, link }) => {
//     return (
//         <button className={`py-4 px-6 bg-primary text-white rounded-full flex items-center gap-2 font-Helvetica font-normal text-base leading-5 ${className}`}>
//             <a href={link} className='flex items-center gap-2'>{content}</a>
//         </button>
//     )
// }

// export default Button