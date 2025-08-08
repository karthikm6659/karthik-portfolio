import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css';
import karthik from "../assets/karthik.png"
import"../styles/about.css"


export default function About() {
  useEffect(()=>{
    Aos.init({duration:1000});
  },[]);


  return (
    <div>
      <section className='about-section'>
        <div className='container about-contain'>
            <h2>About Myself</h2>
            <p> a collection of a person's best work, skills, and experiences, often used to showcase their capabilities to potential employers or clients. The specific content varies based on the profession and purpose of the portfolio, but it generally includes work samples, a resume, and may also include a career summary, professional accomplishments, and references. </p>
            <div className="row">
                <div className="col-lg-6 col-md-6" data-aos="fade-right">
                  <div className="img-part1">
                    <div className='my-img1'>
                        <img src={karthik} alt="" className='img-fluid'/>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6" data-aos="fade-left">
                  <div className="cont-part1">
                    <h3><strong>Hi There</strong></h3>
                  <div className='about-para'>
                    <p>Hi, I'm Karthik M, a passionate MERN Stack Developer with a strong foundation in building dynamic and responsive web applications. I love turning complex problems into clean, efficient, and scalable code. My core expertise in MongoDB, Express.js, React, and Node.js, and I enjoy working across the full stack to create seamless user experiences.</p>
                    
                  </div>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className='about-details'>
                        <strong>
                        <span>Name:</span>
                      </strong>
                      <p>karthik m</p>
                      </div>
                      <div className='about-details'>
                        <strong>
                        <span>Email:</span>
                      </strong>
                      <p>mkarthik8067@gmail.com</p>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className='about-details'>
                        <strong>
                        <span>Phone:</span>
                      </strong>
                      <p>+91 956671669</p>
                      </div>
                      <div className='about-details'>
                        <strong>
                        <span>LinkedIn:</span>
                      </strong>
                      <p>karthik-m-4a9905270</p>
                      </div>
                    </div>
                  </div>
                  </div>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}
