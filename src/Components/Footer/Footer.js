import React from 'react'
import Line from '../Line/Line'
import { useNavigate } from 'react-router-dom'
import './Footer.css'
function Footer() {


  const navigate = useNavigate();

  const home=()=>{
    navigate('/home')
  }
  const cart=()=>{
    navigate('/cart')
  }
  // const home=()=>{
  //   navigate('/')
  // }
  // const home=()=>{
  //   navigate('/')
  // }

  return (
    <div className='mainDiv'>
      <Line/>
      <div className="divLeft">
        <div className='grid-containerLeft'>
          <h3 className='grid-item-head' onClick={() => home()}>Funiro.</h3>
          <h3 className="grid-item" href="xx">Worldwide furniture store since 2020. We sell over 1000+ branded products on our website</h3>
          <h3 className="grid-item"href="xx">Sawojajar Malang, Indonesia</h3>
          <h3 className="grid-item"href="xx">+6289 456 3455</h3>
          <h3 className="grid-item" onClick={() => home()}>www.funiro.com</h3>
        </div>    
      </div>
      <div className='divRight'>
                 <div className='grid-containerRight'>
                      <h2 className='grid-item-head1'>Menu</h2>
                      <h2 className='grid-item-head1'>Account</h2>
                      <h2 className='grid-item-head1'>Stay Connected</h2>
                      <h2 className='grid-item-head1'>Stay Updated</h2>
                      <a className="grid-item" href="xx">Product</a>
                      <a className="grid-item"href="xx">My Account</a>
                      <a className="grid-item" href="https://www.facebook.com" target="_blank" rel="noreferrer">Facebook</a>
                      <a className="grid-item"href="xx">LOGIN</a>
                      <a className="grid-item"href="xx">Rooms</a>
                      <a className="grid-item"href="xx">Checkout</a>
                      <a className="grid-item"href="https://www.instagram.com" target="_blank"rel="noreferrer">Instagram</a>
                      <a className="grid-item"href="xx"><br></br></a>
                      <a className="grid-item"href="xx">Inspirations</a>
                      <ul className="grid-item" onClick={() => cart()}>My Cart</ul>
                      <a className="grid-item"href="https://www.twitter.com" target="_blank" rel="noreferrer">Twitter</a>
                      <a className="grid-item"href="xx"><br></br></a>
                      <a className="grid-item"href="xx">About Us</a>
                      <a className="grid-item"href="xx">My Catalog</a>
                      <a className="grid-item"href="xx"><br></br></a>
                      <a className="grid-item"href="xx"><br></br></a>
                      <a className="grid-item"href="xx">Terms & Policy</a>


              </div>
            </div>
    </div>
        
  )
}

export default Footer