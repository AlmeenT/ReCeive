import React from 'react'
import Timer from '../../Components/Timer/timer'
import Form from '../../Components/form/form'
import Footer from '../../Components/footer/Footer'
import './LandingPage.css'

const LandingPage = () => {

  return (
    <div>
      <h2 className='logo'> RE:CEIVE</h2>
      <p className='Tagline'> seamless,swift and guaranteed </p>
        <div className='Introtext'>
          <h1 className='Text' > Something Awesome is in the works</h1>
          <p> we'll be up and running with our new project</p>
        </div>
        <Timer />
        <Form/>
        <Footer />
    </div>
  )
}

export default LandingPage