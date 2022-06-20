import React from 'react'
import Timer from '../../Components/Timer/Timer'
import Form from '../../Components/form/Form'
import Footer from '../../Components/footer/Footer'
import './LandingPage.css'
import logo from '../../Assets/images/brand.png'

const LandingPage = () => {

  return (
    <div>
      <div className='logo'>
        <img src={logo} alt="" style={{ height:'100px', width:'100px', margin:'10px' }} />
        <h1 className='first' style={{color:'#f7941d', fontSize:'50px' }} >re</h1><h1 className='sec' style={{fontSize:'50px', color:'#2f3e91', display: 'inline'}} >ceive</h1>
      </div>
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
