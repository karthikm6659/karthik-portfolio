import React, { useRef } from 'react'
import location from "../assets/location-dot-solid.svg"
import call from "../assets/phone-solid.svg"
import mail from "../assets/envelope-regular.svg"
import emailjs from "@emailjs/browser"
import "../styles/contact.css"
import"../styles/responsive.css"
export default function Contact() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_oarjatq', 'template_b5t605c', form.current, '_YNnzGuSSIqfmNMOd').then(
            () => {
                alert("Message sent successfully!");
                form.current.reset();
            },
            (error) => {
                alert("Failed to send message, please try again.", error.text);
            }
        )
    }

    return (
        <div>
            <section className='contact-section'>
                <div className='container contact'>
                    <span>HAVE ANY QUERY?</span>
                    <h2>Contact Me</h2>
                    <p>I'm always open to new opportunities, collaborations, or just a friendly tech chat.
Here’s how you can contact me.</p>
                </div>
                <div className='container-fluid'>
                    <ul className="contact_prt2 row">
                        <li className="col-md-6 col-lg-3 col-sm-6">
                            <div className="row">
                                <div className="col-lg-2">
                                    <img src={location} width={20} className='svg-icon' />
                                </div>
                                <div className="col-lg-6">
                                    <a href="https://www.google.com/maps/place/11%C2%B017'08.0%22N+77%C2%B041'32.4%22E/@11.28556,77.692319,750m/data=!3m2!1e3!4b1!4m4!3m3!8m2!3d11.28556!4d77.692319?entry=ttu&g_ep=EgoyMDI1MDcyMC4wIKXMDSoASAFQAw%3D%3D" target='_blank' rel='noopener noreferrer'><span>Locate us</span></a>
                                    <p><a href="https://www.google.com/maps/place/11%C2%B017'08.0%22N+77%C2%B041'32.4%22E/@11.28556,77.692319,750m/data=!3m2!1e3!4b1!4m4!3m3!8m2!3d11.28556!4d77.692319?entry=ttu&g_ep=EgoyMDI1MDcyMC4wIKXMDSoASAFQAw%3D%3D" target='_blank' rel='noopener noreferrer'>5 Mangattu Valasu,Kavundachi Palayam(post),Vellode(via),Erode.</a></p>
                                </div>
                            </div>
                        </li>
                        <li className="col-md-6 col-lg-3 col-sm-6">
                            <div className="row">
                                <div className="col-lg-2">
                                    <img src={call} width={30} className='svg-icon' />
                                </div>
                                <div className="col-lg-6">
                                    <a href="tel:+919566716659"><span>Give us a call</span></a>
                                    <p>Office:<a href='tel:+919566716659'>+91 9566716659</a></p>
                                </div>
                            </div>
                        </li>
                        <li className="col-md-6 col-lg-3 col-sm-6">
                            <div className="row">
                                <div className="col-lg-2">
                                    <img src={mail} width={30} className='svg-icon' />
                                </div>
                                <div className="col-lg-6">
                                    <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox"><span>Get in online</span></a>
                                    <p><a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox"
                                        target="_blank"
                                        rel="noopener noreferrer">mkarthik8067@gmail.com</a></p>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div className='container'>
                        <div className="row justify-content-center forms">
                            <div className="col-lg-12">
                                <form ref={form} onSubmit={sendEmail}>
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <input type="text" className='form-inputs' name='user_name' placeholder='Your Name' required />
                                            </div>
                                            <div className="col-lg-6">
                                                <input type="text" className='form-inputs ip1' name='user_email' placeholder='Your Email' required />
                                            </div>
                                        </div>
                                        <div className="row form-sub">
                                            <div className="col-lg-12">
                                                <input type="text" className='form-inputs' name='subject' placeholder='Your Subject' required />
                                            </div>
                                        </div>
                                        <div className="row form-msg">
                                            <div className="col-lg-12">
                                                <textarea className='form-input-txt-area' name='message' placeholder='Your Message' cols={20} rows={5}></textarea>
                                            </div>
                                        </div>
                                        <div className='send-msg-button'>
                                            <button>Send Message</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    )
}
