import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';

const About = () => {
    return (
        <div>
        <Navigation></Navigation>
        <section id="about" className="about">
      <div className="container">

        <div className="section-title">
          <h2>About</h2>
        </div>

        <div className="row">
          <div className="col-lg-4">
            <img src="assets/img/profile-img1.jpg" className="img-fluid" alt=""/>
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content">
            <h3>Full-Stack Developer With MERN</h3>
            <p>
            Javascript Programmer | Multimedia Designer | Studying BSc in Software Engineering (Major in Cyber Security)
            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li><i className="icofont-rounded-right"></i> <strong>Birthday:</strong> 15 November 2000</li>
                  <li><i className="icofont-rounded-right"></i> <strong>Website:</strong> naim-siddiqui.web.app/</li>
                  <li><i className="icofont-rounded-right"></i> <strong>Phone:</strong> +8801643471297</li>
                  <li><i className="icofont-rounded-right"></i> <strong>City:</strong> Ashulia, Savar, Dhaka</li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li><i className="icofont-rounded-right"></i> <strong>Age:</strong> 21</li>
                  <li><i className="icofont-rounded-right"></i> <strong>Degree:</strong> BSc in Software Engineering</li>
                  <li><i className="icofont-rounded-right"></i> <strong>Email:</strong> naimsiddiquibd@gmail.com</li>
                  <li><i className="icofont-rounded-right"></i> <strong>Freelance:</strong> Available</li>
                </ul>
              </div>
            </div>
            <p>
            A graduating student of the Department of Software Engineering (Major in Cyber Security) from Daffodil International University (DIU). The major area of expertise is - Web and Mobile Application Development in MERN Stack. Always prefer to introduce myself as a "Learner" rather than an Expert. I believe - "Everyday life is like programming. If we love something we can put beauty in it!" - and that's what am always doing what I love the most - "Programming".
            </p>
          </div>
        </div>

      </div>
    </section>
    </div>
    );
};

export default About;