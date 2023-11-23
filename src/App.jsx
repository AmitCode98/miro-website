import React from 'react'
import Nav from './components/Nav'
import Hero from './sections/Hero'
import Companys from '../src/sections/Companys.jsx'


const App = () => {
  return (
    <main className='relative'>
      <Nav />
      <section>
        <Hero />
      </section>
      <section>
        <Companys />
      </section>



    </main>
  )
}

export default App