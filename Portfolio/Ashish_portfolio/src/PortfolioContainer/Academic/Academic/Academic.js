import React, { useState } from 'react';

import Carousel from 'react-bootstrap/Carousel';

import './academic.css';



const Academic = () => {

  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div name='academic' className='Academic reveal'  >
      <div className='container'>
        <nav>
          <div className="nav nav-tabs" id="nav-tab" role="tablist">
            <button className="nav-link" id="nav-education-tab" data-bs-toggle="tab" data-bs-target="#nav-education" type="button" role="tab" aria-controls="nav-education" aria-selected="true">Education</button>
            <button className="nav-link" id="nav-programming-tab" data-bs-toggle="tab" data-bs-target="#nav-programming" type="button" role="tab" aria-controls="nav-programming" aria-selected="false">Programming</button>
            <button className="nav-link" id="nav-certificate-tab" data-bs-toggle="tab" data-bs-target="#nav-certificate" type="button" role="tab" aria-controls="nav-certificate" aria-selected="false">Certificate</button>
          </div>
        </nav>
        <div className="tab-content" id="nav-tabContent">


          <div className="tab-pane fade show active" id="nav-education" role="tabpanel" aria-labelledby="nav-education-tab">

            <div className='container-card-academic'>

              <div className='card'>
                <div className='imgbox'>
                  <img src={require('../../photos/iic.jpg')} alt="iic_image" />
                </div>
                <div className='content'>
                  <h1>Post Graduation</h1>
                  <h2>Institute of Informatics and Communication</h2>
                  <h2>University of Delhi</h2>
                  <h3> M.Sc. Informatics </h3>
                  <h4>2020-2022</h4>



                </div>

              </div>


              <div className='card'>
                <div className='imgbox'>
                  <img src={require('../../photos/304778355_461732325970575_4872428135600991564_n.jpg')} alt="mac_image"/>
                </div>
                <div className='content'>
                  <h1>Graduation</h1>
                  <h2>Maharaja Agrasen College</h2>
                  <h3>University of Delhi</h3>
                  <h3> B.Sc.(H)Electronics </h3>
                  <h4>2017-2020</h4>

                </div>

              </div>



              <div className='card'>
                <div className='imgbox'>
                  <img src={require('../../photos/21743334_1594795473896557_3146323991421910610_n.jpg')} alt="dtea_image"/>
                </div>
                <div className='content'>
                  <h1>Intermediate</h1>
                  <h2>D.T.E.A Sr. Secondary School</h2>
                  <h3>Lodhi Estate Delhi</h3>
                  <h3>Science</h3>
                  <h4>2016</h4>
                </div>











              </div>



              <div className='card'>
                <div className='imgbox'>
                  <img src={require('../../photos/4adadb17537972d8399f5df94dbd2a6.jpeg')} alt="ga_image"/>
                </div>
                <div className='content'>
                  <h1>Marticulation</h1>
                  <h2>Global Academy</h2>
                  <h3>Delhi</h3>
                  <h3>CBSE</h3>
                  <h4>2014</h4>

                </div>

              </div>
            </div>



          </div>





          <div className="tab-pane fade" id="nav-programming" role="tabpanel" aria-labelledby="nav-programming-tab">

            <div className='skill-bar'>
              <div className='bar'>
                <div className='info'>
                  <span>HTML</span>
                </div>
                <div className='progress-line html'><span></span></div>
              </div>

              <div className='bar'>
                <div className='info'>
                  <span>CSS</span>
                </div>
                <div className='progress-line css'><span></span></div>
              </div>

              <div className='bar'>
                <div className='info'>
                  <span>Javascript</span>
                </div>
                <div className='progress-line javascript'><span></span></div>
              </div>

              <div className='bar'>
                <div className='info'>
                  <span>ReactJs</span>
                </div>
                <div className='progress-line reactjs'><span></span></div>
              </div>


              <div className='bar'>
                <div className='info'>
                  <span>MongoDb</span>
                </div>
                <div className='progress-line mongodb'><span></span></div>
              </div>

              <div className='bar'>
                <div className='info'>
                  <span>NodeJs</span>
                </div>
                <div className='progress-line nodejs'><span></span></div>
              </div>

              <div className='bar'>
                <div className='info'>
                  <span>Python</span>
                </div>
                <div className='progress-line python'><span></span></div>
              </div>

              




            </div>
          </div>
          <div className="tab-pane fade" id="nav-certificate" role="tabpanel" aria-labelledby="nav-certificate-tab">

            <div className='Certificate'>
              <div className='container'>
                <Carousel activeIndex={index} onSelect={handleSelect}>
                  <Carousel.Item>
                    <img
                      className="d-block"
                      src={require('../../photos/Certificate degisnare technology_page-0001.jpg')}
                      alt="First slide"
                    />
                 
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block "
                      src={require('../../photos/ashish ui-ux design certificate_page-0001.png')}
                      alt="Second slide"
                    />
 
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block"
                      src={require('../../photos/Ashish Kumar_AI_AWARE_CERTIFICATE.png')}
                      alt="Third slide"
                    />
 
                  </Carousel.Item>
                </Carousel>
              </div>




            </div>
          </div>

        </div>
      </div>
    </div>
  )


}

export default Academic;