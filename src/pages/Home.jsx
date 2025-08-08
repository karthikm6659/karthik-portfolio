import React, { useEffect, useRef } from 'react' 
import file from "../assets/file-arrow-down-solid.svg"
import Typed from 'typed.js'
import facebook from "../assets/facebook.svg";
import twitter from "../assets/square-x-twitter-brands.svg"
import pinterest from "../assets/pinterest-brands.svg"
import instagram from "../assets/square-instagram-brands.svg"
import karthik from "../assets/karthik.png"
import resume from "../assets/KARTHIK M.Pdf"
import "../styles/home.css"
import "../styles/responsive.css"
import About from './About';
import Skill from './Skill';
import Projects from './Projects';
import Contact from './Contact';


export default function Home() {

     const el = useRef(null);

        useEffect(()=>{
        const typed =new Typed(el.current,{
            strings:['I am KARTHIK M'],
            typeSpeed: 100,
            onComplete: () => {
        // remove or hide cursor after typing is done
        const cursor = document.querySelector('.typed-cursor');
        if (cursor) cursor.style.display = 'none';
      },
        })

        return()=>{
          typed.destroy();

        }
    },[])


  return (
    <div>
      <section className='container-fluid banner-section'>
        <div className='container banner-cont'>
        <div className="row">
            <div className="col-lg-6 col-md-6">
                <div className="cont-part">
                    <div className="row">
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
                <div className="row pt-5">
                    <h1><span ref={el}/></h1>
                </div>
                <div className="row pt-3">
                    <p>i'm karthik M, professional web developer with long time experience in this field</p>
                </div>
                <div className="row pt-3">
                    <div className='resume-button'>
                        <a href={resume} download="KARTHIK_Resume.pdf">
                        <button>Get Resume <img src={file} alt="download_resume" width={25} height={25} /> </button>
                        </a>
                    </div>
                </div>
                </div>
            </div>
            <div className="col-lg-6 col-md-6 img-part">
                <div className='my-img'>
                    <img src={karthik} alt="" className='img-fluid'/>
                </div>
            </div>
        </div>
        </div>
      </section>
      <About/>
      <Skill/>
      <Projects/>
      <Contact/>
    </div>
  )
}
