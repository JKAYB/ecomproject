import React,{ useState ,useEffect } from 'react'
import axios from 'axios';
import './Tablist.css'
import { useParams } from 'react-router-dom';


const Tablist = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };
const{id} = useParams();

const [product, setProduct] = useState([]);


useEffect(() => {
  axios
    .get(`https://course-api.com/react-store-single-product?id=${id}`)
    .then((response) => {
      setProduct(response.data);
    });
}, [id]);
  return (
    <div className='tabs-main'>
    <div className="tabs-container">
      <div className="tab-header">
        <div
          className={`tab ${activeTab === 1 ? 'active' : ''}`}
          onClick={() => handleTabClick(1)}>
          Material
        </div>
        <div
          className={`tab ${activeTab === 2 ? 'active' : ''}`}
          onClick={() => handleTabClick(2)}>
          Function
        </div>
        <div
          className={`tab ${activeTab === 3 ? 'active' : ''}`}
          onClick={() => handleTabClick(3)} >
          Warranty
        </div>
        <div
          className={`tab ${activeTab === 4 ? 'active' : ''}`}
          onClick={() => handleTabClick(4)}>
          Instructions
        </div>
      </div>
      <div className="tab-content">
        {activeTab === 1 && (
          <div>
            <h2 className='tab-content-head'>Tab 1 Content</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
               labore et dolore magna aliqua.</p>
          </div>
        )}
        {activeTab === 2 && (
          <div>
            <h2 className='tab-content-head'>Product Characterestics</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
               labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
               laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        )}
        {activeTab === 3 && (
          <div>
            <h2 className='tab-content-head'>Tab 3 Content</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
               labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
               laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
               voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
          </div>
        )}
        {activeTab === 4 && (
          <div>
            <h2 className='tab-content-head'>Tab 4 Content</h2>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          </div>
        )}
      </div>
    </div>
    
    <div className='tabs-image'>
            <img className='tabs-img' src={product.images && product.images[0].url} alt='img'></img>
    </div>
    </div>

  );
};

export default Tablist;
