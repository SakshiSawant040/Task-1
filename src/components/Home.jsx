import React from 'react'
import Navbar from './Navbar';
import '../css/Home.css'
import phonebackground from '../images/phoneBackgroundImage.png';
import phoneimg from '../images/phoneImage.png';

function Home() {
  return (
    <div className='Home'>
        <div className='home-sideimg'>

        </div>
        <div className="home-content">
            <Navbar />
            <div className="home-main">
                <div className="home-heading head-div">
                
                    <h1>
                    𝚃𝚑𝚎 𝚘𝚗𝚕𝚢 𝙰𝙸 𝙲𝚁𝙼 𝚏𝚘𝚛 𝚜𝚖𝚊𝚕𝚕 𝚋𝚞𝚒𝚜𝚗𝚎𝚜𝚜
                    </h1>
                    <p>
                        Respond to leads,organise contacts, and instantly generate client communications AI CRM
                    </p>
                    <button className='start-btn'>
                        Start For Free
                    </button>
                   
                </div>
                <div className="home-img1 head-div">
                        
                        <img src={phonebackground} alt="" />

                    <div className="home-img2">
                        <img src={phoneimg} alt="" />
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Home;
