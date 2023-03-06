import React from 'react'
import "./Navbar.css"
import { useNavigate ,useParams} from 'react-router-dom';
import { useStateContext } from "../../Context/StateContext";


function Navbar() {

  const navigate=useNavigate();
  const {id} = useParams();

  const {qty } =useStateContext();
  const home=()=>{
    navigate('/home')
  }
  const cart=()=>{
    navigate(`/cart/${id}`)
  }
  return (
    <div className='navbar'>
        <ul className='navbar_contents'>
            <li className="brand-name" onClick={home}>Funiro.</li>
            <select className="navbar-menu-drop" > 
              <option className='navbar-menu-drop-items'>Product</option>
             
            </select>
            <select className="navbar-menu-drop" name='Rooms'>
              <option >Room</option>
              </select>
            <li className="navbar-menu" >Contact Us </li>
        </ul>
        <span className="search-box">
              <input type="text" className="input-search" placeholder="Search any products ..."/>
        </span>
        <span className='icons'>
        <svg className='heart'  viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.9997 19.054C-7.99987 7.99991 6.00011 -4.00009 11.9997 3.58797C18.0001 -4.00009 32.0001 7.99991 11.9997 19.054Z" stroke="#262F56" strokeWidth="1.8"/>
        </svg>
        <button onClick={cart} style={{border: 'none' ,cursor:'pointer', background:'transparent',position:'relative',curser:'pointer'}}>
        <svg  version="1.0" xmlns="http://www.w3.org/2000/svg"
            width="28" height="28" viewBox="0 0 64 64"
            preserveAspectRatio="xMidYMid meet">

            <g transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)"
            fill="#000000" stroke="none">
            <path d="M85 490 c-10 -17 5 -30 34 -30 27 0 28 -3 51 -102 16 -65 32 -110 45
            -123 19 -19 19 -21 3 -38 -10 -9 -18 -26 -18 -37 0 -26 34 -60 60 -60 26 0 60
            34 60 60 0 11 -9 29 -20 40 -20 20 -20 20 50 20 70 0 70 0 50 -20 -11 -11 -20
            -29 -20 -40 0 -26 34 -60 60 -60 26 0 60 34 60 60 0 11 -8 28 -18 38 -17 16
            -17 18 1 32 14 12 67 171 67 202 0 5 -75 8 -166 8 -147 0 -165 -2 -160 -16 3
            -9 6 -18 6 -20 0 -2 61 -4 135 -4 74 0 135 -2 135 -5 0 -3 -7 -35 -16 -70
            l-16 -65 -117 0 -117 0 -23 98 c-29 122 -41 142 -86 142 -18 0 -37 -4 -40 -10z
            m191 -321 c10 -17 -13 -36 -27 -22 -12 12 -4 33 11 33 5 0 12 -5 16 -11z m180
            0 c10 -17 -13 -36 -27 -22 -12 12 -4 33 11 33 5 0 12 -5 16 -11z"/>
            </g>
        </svg>
        <div style={{position:'absolute',height:'15px',width:'15px',top:'15px',right:'-5px',borderRadius:'50%',background:'orange'}}>{qty}</div>
        </button>
        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
            width="34" height="34" viewBox="0 0 30 30"
            preserveAspectRatio="xMidYMid meet">

            <g transform="translate(0.000000,30.000000) scale(0.100000,-0.100000)"
            fill="#000000" stroke="none">
            <path d="M110 250 c-11 -11 -20 -31 -20 -45 0 -30 32 -65 60 -65 28 0 60 35
            60 65 0 30 -32 65 -60 65 -11 0 -29 -9 -40 -20z"/>
            <path d="M82 90 c-71 -32 -51 -45 68 -45 119 0 139 13 68 45 -54 25 -82 25
            -136 0z"/>
            </g>
        </svg>

        </span>
    </div>
  )
}

export default Navbar