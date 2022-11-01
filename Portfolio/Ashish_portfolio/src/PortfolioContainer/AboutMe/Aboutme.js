import React from 'react';
import "./aboutme.css";

export default function Aboutme() {
  return (
    <div name='about' className='Aboutme  '>
    <div classNamw="container"> 
    <div className='title'> 
        <h1>About Me</h1>  
      
        </div>
        <div className='line'> 
        <hr className='style-one'/>
        </div>


<div className='container-card-aboutme reveal'> 
        <div className="shadow-lg p-3 mb-5 bg-dark rounded"> 
        <div className="row">
          <div className='column'>
          <img src= {require('../photos/dbc631c76245baabe08c31d016a94de2-2.jpg')} alt="d_image"/>
          </div>
          <div className='column'>
            Full Stack developer with background knowledge of MERN stack,along with a knak of building applications with atmost effeciecy.
            <div className='highlights'>
              <ol>
                <li>Full Stack web develoment</li>
                <li>Interactive Front End as per the design</li>
                <li>React</li>
                <li>Building Rest API</li>
                <li>Managing Database</li>
              </ol>
            </div>
           
 
          </div>
          </div>


    </div>
    </div>
    </div>
</div>
  )
}
