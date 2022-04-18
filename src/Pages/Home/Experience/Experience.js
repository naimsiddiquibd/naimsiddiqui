import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';


const Experience = () => {
    return (
        <div>
            <Navigation></Navigation>
            <section id="resume" className="resume">
      <div className="container">

        <div className="section-title">
          <h2>Resume</h2>
          <p>Here is a summary of my skills and my education</p>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <h3 className="resume-title">Sumary</h3>
            <div className="resume-item pb-0">
              <h4>Naim Siddiqui</h4>
              <p><em>MERN Stack Developer | JS Programmer | Multimedia Designer | Studying BSc in Software Engineering (Major in Cyber Security)</em></p>
              <ul>
                <li>Ashulia, Savar, Dhaka</li>
                <li>+8801643471297</li>
                <li>naimsiddiquibd@gmail.com</li>
              </ul>
            </div>

            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>Bsc in Software Engineering</h4>
              <h5>2021 - Present</h5>
              <p><em>Daffodil International University</em></p>
              <p>I am a graduating student of the Department of Software Engineering (Major in Cyber Security) from Daffodil International University (DIU).</p>
            </div>
            <div className="resume-item">
              <h4>Higher Secondary Certificate</h4>
              <h5>2016 - 2018</h5>
              <p><em>BCRG College</em></p>
              <p>I completed my Higher Secondary in the science group at BCRG college which is located in Tangail, Dhaka.  </p>
            </div>
          </div>
          <div className="col-lg-6">
            <h3 className="resume-title">Professional Experience</h3>
            <div className="resume-item">
              <h4>Web and Multimedia Designer</h4>
              <h5>2020 - Present</h5>
              <p><em>Webdorks Pte Ltd </em></p>
              <ul>
                <li>Not a full-time or part-time job</li>
                <li>Working there as a contract web and multimedia designer</li>
                <li>Designing, building, and delivering high-quality websites and branding content</li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>Multimedia Designer</h4>
              <h5>2016 - Present</h5>
              <p><em>Fiverr</em></p>
              <ul>
                <li>I started my professional journey there. At that time, I was just fifteen. Learned a little bit of Illustration did a lot of work and earned money. From this platform, I got to connect with some really good and inspiring people. I'm still working there but very little.</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
        </div>
    );
};

export default Experience;