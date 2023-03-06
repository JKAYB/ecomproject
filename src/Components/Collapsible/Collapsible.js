import React from 'react'
import './Collapsible.css'
function Collapsible(props) {
    return (
        <div className='collapse'>
            <button type="radio"  className='collapsebutton'> {props.title}</button>
            <div className='paracontainer'>
                 <li className='paragraph'>{props.data}</li>
            </div>
        </div>
      )
    
}

export default Collapsible