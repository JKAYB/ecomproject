import React from 'react'
import ReactStars from "react-rating-stars-component";
import Line from '../Line/Line';
import './Reviews.css'
function Reviews(props) {
  return (
    <div className='reviews'>
            <div className='icon-name-time'>
                <div className='iconDiv'>
                    <img className="profilePic" src={props.profilePic} alt="userImage"></img>
                </div>
                <div className='name-time'>
                        <div className='nameDIV'><h3>{props.name}</h3></div>
                        <div className='timeDIV'>{props.date}</div>
                </div>
            </div>
            <div className='user-ratings'>
                    <ReactStars count={5}
                            //  onChange={ratingChanged}
                             size={20} activeColor="#ffd700"/>
            </div>
            <div className='user-rating-comments'>
                    <p>If everything I did failed - which it doesn't, it actually succeeds - just the
                         fact that I'm willing to fail is an inspiration.
                         People are so scared to lose that they don't even try. Like, one thing people can't say is that 
                         I'm not trying, and I'm not trying my hardest, and I'm not trying to do the best way I know how.
                    </p>
            </div>
            <Line/>

    </div>
  )
}

export default Reviews