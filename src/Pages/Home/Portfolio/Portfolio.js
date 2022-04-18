import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';

const Portfolio = () => {
    return (
        <div>
            <Navigation></Navigation>
            <section id="portfolio" className="portfolio section-bg">
      <div className="container">

        <div className="section-title">
          <h2>Portfolio</h2>
          <p>Here are a few numbers of my work's screenshots. To check my projects please visit my LinkedIn profile</p>
        </div>

        <div className="row">
          <div className="col-lg-12 d-flex justify-content-center" data-aos-delay="100">
            <ul id="portfolio-flters">
              <li data-filter="*" className="filter-active">All</li>
              <li data-filter=".filter-app">Web App</li>
              <li data-filter=".filter-card">Website</li>
              <li data-filter=".filter-web">Ui/Ux</li>
            </ul>
          </div>
        </div>

        <div className="row portfolio-container" data-aos-delay="200">

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-1.jpg" className="img-fluid" alt=""/>
              <div className="portfolio-info">
                <h4>App 1</h4>
                <p>App</p>
                <div className="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-1.jpg" data-gall="portfolioGallery" className="venobox" title="App 1"><i className="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" data-gall="portfolioDetailsGallery" data-vbtype="iframe" className="venobox" title="Portfolio Details"><i className="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-2.jpg" className="img-fluid" alt=""/>
              <div className="portfolio-info">
                <h4>Web 3</h4>
                <p>Web</p>
                <div className="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-2.jpg" data-gall="portfolioGallery" className="venobox" title="Web 3"><i className="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" data-gall="portfolioDetailsGallery" data-vbtype="iframe" className="venobox" title="Portfolio Details"><i className="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-3.jpg" className="img-fluid" alt=""/>
              <div className="portfolio-info">
                <h4>App 2</h4>
                <p>App</p>
                <div className="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-3.jpg" data-gall="portfolioGallery" className="venobox" title="App 2"><i className="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" data-gall="portfolioDetailsGallery" data-vbtype="iframe" className="venobox" title="Portfolio Details"><i className="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-4.jpg" className="img-fluid" alt=""/>
              <div className="portfolio-info">
                <h4>Card 2</h4>
                <p>Card</p>
                <div className="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-4.jpg" data-gall="portfolioGallery" className="venobox" title="Card 2"><i className="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" data-gall="portfolioDetailsGallery" data-vbtype="iframe" className="venobox" title="Portfolio Details"><i className="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-5.jpg" className="img-fluid" alt=""/>
              <div className="portfolio-info">
                <h4>Web 2</h4>
                <p>Web</p>
                <div className="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-5.jpg" data-gall="portfolioGallery" className="venobox" title="Web 2"><i className="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" data-gall="portfolioDetailsGallery" data-vbtype="iframe" className="venobox" title="Portfolio Details"><i className="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-6.jpg" className="img-fluid" alt=""/>
              <div className="portfolio-info">
                <h4>App 3</h4>
                <p>App</p>
                <div className="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-6.jpg" data-gall="portfolioGallery" className="venobox" title="App 3"><i className="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" data-gall="portfolioDetailsGallery" data-vbtype="iframe" className="venobox" title="Portfolio Details"><i className="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-7.jpg" className="img-fluid" alt=""/>
              <div className="portfolio-info">
                <h4>Card 1</h4>
                <p>Card</p>
                <div className="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-7.jpg" data-gall="portfolioGallery" className="venobox" title="Card 1"><i className="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" data-gall="portfolioDetailsGallery" data-vbtype="iframe" className="venobox" title="Portfolio Details"><i className="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-8.jpg" className="img-fluid" alt=""/>
              <div className="portfolio-info">
                <h4>Card 3</h4>
                <p>Card</p>
                <div className="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-8.jpg" data-gall="portfolioGallery" className="venobox" title="Card 3"><i className="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" data-gall="portfolioDetailsGallery" data-vbtype="iframe" className="venobox" title="Portfolio Details"><i className="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img src="assets/img/portfolio/portfolio-9.jpg" className="img-fluid" alt=""/>
              <div className="portfolio-info">
                <h4>Web 3</h4>
                <p>Web</p>
                <div className="portfolio-links">
                  <a href="assets/img/portfolio/portfolio-9.jpg" data-gall="portfolioGallery" className="venobox" title="Web 3"><i className="bx bx-plus"></i></a>
                  <a href="portfolio-details.html" data-gall="portfolioDetailsGallery" data-vbtype="iframe" className="venobox" title="Portfolio Details"><i className="bx bx-link"></i></a>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
        </div>
    );
};

export default Portfolio;