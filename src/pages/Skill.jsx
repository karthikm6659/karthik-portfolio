import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css';
import "../styles/skills.css"
import "../styles/responsive.css"

export default function Skill() {

    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, [])

    return (
        <div>
            <section className='skills-Education'>
                <div className='container skills'>
                    <span>Skills</span>
                    <h2>My Skills</h2>
                    <p>In this portfolio, I’ll be highlighting some of my key projects, explaining the design decisions I made, and sharing the journey of what I’ve learned along the way.</p>
                    <h3>Front-end</h3>
                    <ul className="skills_prt2 row" data-aos="fade-left fade-up">
                        <li className="col-md-3 col-lg-3 col-sm-3">
                            <div className="imgs">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="" style={{ height: "60px" }} className='img-fluid mb-2' />
                            </div>
                            <h3>HTML</h3>
                        </li>
                        <li className="col-md-3 col-lg-3 col-sm-3">
                            <div className="imgs">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="" style={{ height: "60px" }} className='img-fluid mb-2' />
                            </div>
                            <h3>CSS</h3>
                        </li>
                        <li className="col-md-3 col-lg-3 col-sm-3">
                            <div className="imgs">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="" style={{ height: "60px" }} className='img-fluid mb-2' />
                            </div>
                            <h3>JavaScript</h3>
                        </li>
                    </ul>
                    <h3>Frameworks</h3>
                    <ul className="skills_prt2 row" data-aos="fade-right">
                        <li className="col-md-3 col-lg-3 col-sm-3">
                            <div className="imgs">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="" style={{ height: "60px" }} className='img-fluid mb-2' />
                            </div>
                            <h3>Bootstrap</h3>
                        </li>
                        <li className="col-md-3 col-lg-3 col-sm-3">
                            <div className="imgs">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="" style={{ height: "60px" }} className='img-fluid mb-2' />
                            </div>
                            <h3>React.Js</h3>
                        </li>
                    </ul>
                    <h3>Back-end</h3>
                    <ul className="skills_prt2 row" data-aos="fade-left">
                        <li className="col-md-3 col-lg-3 col-sm-3">
                            <div className="imgs">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="" style={{ height: "60px" }} className='img-fluid mb-2' />
                            </div>
                            <h3>Node.Js</h3>
                        </li>
                        <li className="col-md-3 col-lg-3 col-sm-3">
                            <div className="imgs">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="" style={{ height: "60px" }} className='img-fluid mb-2' />
                            </div>
                            <h3>Express.Js</h3>
                        </li>
                        <li className="col-md-3 col-lg-3 col-sm-3">
                            <div className="imgs">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="" style={{ height: "60px" }} className='img-fluid mb-2' />
                            </div>
                            <h3>MongoDb</h3>
                        </li>
                    </ul>
                    <h3>Version Controls</h3>
                    <ul className="skills_prt2 row" data-aos="fade-right">
                        <li className="col-md-3 col-lg-3 col-sm-3">
                            <div className="imgs">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="" style={{ height: "60px" }} className='img-fluid mb-2' />
                            </div>
                            <h3>Git</h3>
                        </li>
                        <li className="col-md-3 col-lg-3 col-sm-3">
                            <div className="imgs">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="" style={{ height: "60px" }} className='img-fluid mb-2' />
                            </div>
                            <h3>Github</h3>
                        </li>
                    </ul>
                    <h3>Tools</h3>
                    <ul className="skills_prt2 row" data-aos="fade-left">
                        <li className="col-md-3 col-lg-3 col-sm-3">
                            <div className="imgs">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="" style={{ height: "60px" }} className='img-fluid mb-2' />
                            </div>
                            <h3>Vs code</h3>
                        </li>
                        <li className="col-md-3 col-lg-3 col-sm-3">
                            <div className="imgs">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="" style={{ height: "60px" }} className='img-fluid mb-2' />
                            </div>
                            <h3>MongoDB Compass</h3>
                        </li>
                        <li className="col-md-3 col-lg-3 col-sm-3">
                            <div className="imgs">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" alt="" style={{ height: "60px" }} className='img-fluid mb-2' />
                            </div>
                            <h3>Postman</h3>
                        </li>
                    </ul>
                </div>

            </section>
        </div>
    )
}
