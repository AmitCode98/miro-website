import React from 'react'
import WalmartImg from '../assets/images/walmart.svg'
import CiscoImg from '../assets/images/cisco.svg'
import Volvoimg from '../assets/images/volvo.svg'
import Deloitteimg from '../assets/images/deloitte.svg'
import Okta from '../assets/images/okta.svg'

const Companys = () => {
    return (
        <section className='bg-red-300 w-full px-16'>
            <p className='text-center'>Trusted by 45M+ users</p>
            <div className='flex justify-between items-center'>
                <img src={WalmartImg} alt="" />
                <img src={CiscoImg} alt="" />
                <img src={Volvoimg} alt="" />
                <img src={Deloitteimg} alt="" />
                <img src={Okta} alt="" />
            </div>
        </section>
    )
}

export default Companys