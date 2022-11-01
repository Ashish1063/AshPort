import React from "react";
import Typical from "react-typical";
import "./Profile.css";
import { Link } from 'react-scroll'

const Profile = () => {
  return (
    <div name='home' className="Profile">

      <div className="profile-container">


        <div className="profile-parent">
          <div className="flex">
            <div className="profile-detail">
              <div className="colz">
                <div className="colz-icon">
                  <a href="https://www.facebook.com/Ashishkarotiya7171">
                    <i className="fa fa-facebook-square"></i>
                  </a>
                  <a href="https://www.instagram.com/Ashishkarotiya7171">
                    <i className="fa fa-instagram"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/ashish-kumar-31624a214">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </div>
              </div>

              <div className="profile-details-name">
                <span className="font-weight-normal">
                  Hello, I'M <strong className="font-weight-bold">_Ashish</strong>
                </span>
              </div>
              <div className="profile-details-role">
                <span className="primary-text">
                  <h1>
                    <Typical
                      loop={Infinity}
                      steps={[
                        "UI/UX Design",
                        1000,
                        "Web Design",
                        1000,
                        "Web Developer",
                        1000,
                        "Full Stack Developer",
                        1000,
                      ]}
                    />
                  </h1>
                  <span className="profile-detail-tagline">
                    Knack of building application with frontend and backend
                    operation.
                  </span>
                </span>
              </div>
              <div className="profile-option">

              <div className="btn"> 
              <a href='/'><Link activeClass="active" to="contact" spy={true} smooth={true} duration={500} >
                <button class="button-86"  >Hire Me</button>
                </Link></a>
                </div>



                <a
                  href="ASHISH_RESUME_converted__2_-converted-converted.pdf"
                  download="Ashish ASHISH_RESUME_converted__2_-converted-converted.pdf"
                >
                  <div className="btn"> 
                  <button class="button-86" >Resume</button>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="profile-picture">
              <div className="profile-picture-background"></div>
            </div>

          </div>
        </div>



      </div>




    </div>


  );
}
export default Profile