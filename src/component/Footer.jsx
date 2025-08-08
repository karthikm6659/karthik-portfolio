import React from 'react'
import facebook from "../assets/facebook.svg";
import twitter from "../assets/square-x-twitter-brands.svg"
import pinterest from "../assets/pinterest-brands.svg"
import instagram from "../assets/square-instagram-brands.svg"
import"../styles/footer.css"

export default function Footer() {
  return (
    <div>
        <section className='footer-section'>
                <div className='container footer-contain'>
                    <h2>KARTHIK M</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inci- didunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exe- rcitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div className='image-contain'>
                    <div className='images' style={{display:"flex",gap:"30px"}}>
                        <a href="https://www.facebook.com/share/15d58WZL6T" target='_blank' rel='noopener noreferrer'>
                        <img src={facebook} alt="facebook" width={40} height={40}/>
                        </a>
                        <a href="https://x.com/Karthik6659?t=DFn3wjFPnn28vxymg2IOzA&s=09" target='_blank' rel='noopener noreferrer'>
                        <img src={twitter} alt="twitter" width={40} height={40}/>
                        </a>
                        <a href="https://www.facebook.com/share/15d58WZL6T" target='_blank' rel='noopener noreferrer'>
                        <img src={pinterest} alt="pinterest" width={40} height={40}/>
                        </a>
                        <a href="https://www.instagram.com/king_of_killer_karthik?igsh=bzVjeXY3YXBqMms2" target='_blank' rel='noopener noreferrer'>
                        <img src={instagram} alt="instagram" width={40} height={40}/>
                        </a>
                    </div>
                </div>
              </section>
              <section>
                <div className='copyright-text'>
                    Copyright © 2025 <a href="#">karthik M</a> All Rights Reserved by ThemeBing.
                </div>
              </section>
   </div>
  )
}
