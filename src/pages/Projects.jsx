import React, { useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

import img1 from "../assets/AgeCalculator.png"
import img2 from "../assets/Backgroundremover.png"
import img3 from "../assets/Calendar.png"
import img4 from "../assets/Circular-progress-bar.png"
import img5 from "../assets/Dark-mode.png"
import img6 from "../assets/Digital-Clock.png"
import img7 from "../assets/Draganddrop.png"
import img8 from "../assets/FormValidation.png"
import img9 from "../assets/Image-Gallery.png"
import img10 from "../assets/Launching-page.png"
import img11 from "../assets/Notes-App.png"
import img12 from "../assets/Password.png"
import img13 from "../assets/Popup.png"
import img14 from "../assets/Product-page.png"
import img15 from "../assets/Quiz-App.png"
import img16 from "../assets/Random-pasword-genertor.png"
import img17 from "../assets/Select-menu-design.png"
import img18 from "../assets/Stop-Watch.png"
import img19 from "../assets/Text-to-voice.png"
import img20 from "../assets/To-Do-List.png"
import img21 from "../assets/ToastNotification-snackbar.png"
import "../styles/projects.css"

export default function Projects() {
  const [showAll, setShowAll] = useState(false);

  useEffect(()=>{
    Aos.init({duration:1000})
  },[])

  const projectsData = [
    { img: img1, name: "Age Calculator" },
    { img: img2, name: "Background Remover" },
    { img: img3, name: "Calendar" },
    { img: img4, name: "Circular Progress Bar" },
    { img: img5, name: "Dark Mode" },
    { img: img6, name: "Digital Clock" },
    { img: img7, name: "Drag and Drop" },
    { img: img8, name: "Form Validation" },
    { img: img9, name: "Image Gallery" },
    { img: img10, name: "Launch Page" },
    { img: img11, name: "Notes App" },
    { img: img12, name: "Password" },
    { img: img13, name: "Pop Up Notification" },
    { img: img14, name: "Product Page" },
    { img: img15, name: "Quiz-App" },
    { img: img16, name: "Random Password Generator" },
    { img: img17, name: "Select Menu Design" },
    { img: img18, name: "Stop Watch" },
    { img: img19, name: "Text to Speech Converter" },
    { img: img20, name: "To Do List" },
    { img: img21, name: "Toast Notification and Snack Bar" },
  ];

  const visibleProjects = showAll ? projectsData : projectsData.slice(0, 6);


  const handleToggle = () => {
  if (showAll) {
    const element = document.querySelector(".projects");
    if(element){
    window.scrollTo({
      top: element.offsetTop - 100,
      behavior: "smooth"
    });
  }
}
  setShowAll(!showAll);
};


  return (
    <section className="projects-sec">
      <div className="container projects">
        <span>Projects</span>
            <h2 className='project-heading' data-aos="fade-up">My Projects</h2>
            <p data-aos="fade-up">Hi, I’m Karthik, a MERN Stack Developer.</p>
           <p>This portfolio is not just about what I’ve built — it’s about how I’ve grown and what I’ve learned along the way..</p>
        <div className="row g-4 skills_prt2">
          {visibleProjects.map((project, index) => (
            <div className="col-lg-4 col-md-6" key={index} data-aos="fade-up">
              <div className='project-card position-relative text-center'>
                <img src={project.img} alt="" className="images1 img-fluid" />
                <p className="project-name mt-3">{project.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="button-adapt2">
        <button className="btn company-button" onClick={handleToggle}>
  {showAll ? "Show Less" : "Read More"}
</button>

      </div>
    </section>
  )
}

