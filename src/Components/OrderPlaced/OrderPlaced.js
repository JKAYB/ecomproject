import React from 'react'
import {useNavigate} from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

import './OrderPlaced.css'
function OrderPlaced() {
    const navigate = useNavigate();
    const checkstatus=()=>{
        navigate('/home')
    }
  return (
    <div className='orderPlaced'>
        <Navbar/>
        <div className='orderPlaced-container'>
            <img className='tick-icon' src='https://www.pngitem.com/pimgs/m/443-4432781_checkmark-check-orange-icon-png-transparent-png.png' alt='confirmed img'></img>
            <h1 className='head-orderplaced'>Order Placed</h1>
            <h4 className='thanks-order'>Thanks for your order!</h4>
            <button className='check-status-order' onClick={checkstatus}>Check Status</button>
        </div>
        <Footer/>
    </div>
  )
}

export default OrderPlaced