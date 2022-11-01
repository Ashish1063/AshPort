 
import './contact.css';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';


const Contact = () => {

    const formRef = useRef()
const [done, setDone] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault()
        emailjs.sendForm('service_wnn5evr', 'template_zxvy2ld', formRef.current, 'PLrB0LX_TBpGeGWaQ')
            .then((result) => {
                console.log(result.text);
                setDone(true)
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <div name='contact' className="contact">
            <div className='row'>
                <div className="email-box reveal">
                <img src="https://cdn.dribbble.com/users/722246/screenshots/4087457/media/de172b5a2287a8ca9900e716fd36d7c8.gif" border="0" alt="animated-email" />
                </div>
                <div className="contact-form">
                    <form ref={formRef} on onSubmit={handleSubmit}>
                        
                        <h1>Get In Touch</h1>
                            <form ref={formRef}></form>
                            <div className="singleItem">

                                <input type='text'
                                    className='name'
                                    name='user_name'
                                    placeholder='Name...'

                                />
                            </div>
                            <div className="singleItem">

                                <input type='text'
                                    name='user_phone'
                                    className='phone'
                                    placeholder='Phone no...'

                                />
                            </div>
                   


                  
                        <div className='textArea singleItem'>


                            <textarea
                                id=""
                                name='message'
                                cols='30' rows='3'
                                placeholder="Leave your Message..."

                            ></textarea>
                        </div>
                        <div className="msg" >
                            {done && "Message has been sent"}
                            </div>
                      



                            <button type="submit" class="button-73"  >Submit</button>




                         

                    </form>
                </div>
            </div>


            <div className='footer'>
                <div className='socialMedia'>
                    <ul className='sci'>
                        <li data-text='facebook' >
                            <a href='https://www.facebook.com/Ashishkarotiya7171' className='facebook'>
                                <i className="fa fa-facebook" aria-hidden="true"></i>
                            </a>
                        </li>
                        <li data-text='linkedin'  >
                            <a href='https://www.linkedin.com/in/ashish-kumar-31624a214' className='linkedin'>
                                <i className="fa fa-linkedin" aria-hidden="true"></i>
                            </a>
                        </li>
                        <li data-text='instagram' >
                            <a href='https://www.instagram.com/Ashishkarotiya7171' className='instagram'>
                                <i className="fa fa-instagram" aria-hidden="true"></i>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className='address'>
                    <p>Sarita Vihar, New Delhi - 110076</p>
                    <p>8851385257</p>
                </div>

            </div>

        </div>


    )

}
export default Contact