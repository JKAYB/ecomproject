import React from 'react'
import './ShareSetUp.css'
import rect36 from '../../Images/Rectangle 36.png'
import rect38 from '../../Images/Rectangle 38.png'
import rect40 from '../../Images/Rectangle 40.png'
import rect43 from '../../Images/Rectangle 43.png'
import rect45 from '../../Images/Rectangle 45.png'
import rect37 from '../../Images/Rectangle 37.png'
import rect39 from '../../Images/Rectangle 39.png'
import rect41 from '../../Images/Rectangle 41.png'
import rect44 from '../../Images/Rectangle 44.png'

function ShareSetUp() {
  return (
    <div className='collage'>
        <h3 className='title-share'>Share your setup with</h3>
        <h1 className='products-head-share'>#FuniroFurniture</h1>
            <div className='imageGrids'>
                    <img src={rect36} alt="s"></img>
                    <img src={rect38} alt="s"></img>
                    <img src={rect40} alt="s"></img>
                    <img src={rect43} alt="s"></img>
                    <img src={rect45} alt="s"></img>
            </div>
            <div className='imageGrids2'>
                    <img src={rect37} alt="s"></img>
                    <img src={rect39} alt="s"></img>
                    <img src={rect41} alt="s"></img>
                    <img src={rect44} alt="s"></img>
            </div>
    </div>
  )
}

export default ShareSetUp