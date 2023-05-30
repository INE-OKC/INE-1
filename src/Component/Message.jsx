import React from 'react'
import searchIcon from "../assets/image/searchicon.png"
import Home from "../assets/image/ineHome.png"
import explore from "../assets/image/ineExplore.png"
import message from "../assets/image/ineMessage.png"
import profile from "../assets/image/ineProfile.png"
import savings from "../assets/image/ineSaving.png"
const Message = () => {
  return (
    <div className='message'>
      <div className='messageMain'>
        <div className='first'>
         <div className='searches'>
         <input type="text" name="" value="" placeholder='search...'/>
          <img src={searchIcon} alt=""/>
         </div>
          <div className='exp'>
            <div>
              <img src={Home} alt=""/>
              <p>Home</p>
            </div>
            <div>
              <img src={explore} alt=""/>
              <p>Explore</p>
            </div>
            <div>
              <img src={message} alt=""/>
              <p>Message</p>
            </div>
            <div>
              <img src={profile} alt=""/>
              <p>Profile</p>
            </div>
            <div>
              <img src={savings} alt=""/>
              <p>My Savings</p>
            </div>
          </div>
        </div>
        <div className='second'>2</div>
        <div className='third'>3</div>
      </div>
    </div>
  )
}

export default Message