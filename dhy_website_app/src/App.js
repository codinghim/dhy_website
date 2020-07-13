import React from 'react';
import logo from './logo.svg';
import './App.css';
import Scrollspy from 'react-scrollspy';
import {Link} from 'react-scroll';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <body id="page-top">
        {/* <!-- Navigation bar--> */}
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
            <div className="container" id="navbar-container">
                <Link className="navbar-brand js-scroll-trigger" to="page-top" smooth={true} duration={600}>Daniel Himchan Yun</Link>
                <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i class="fas fa-bars ml-1"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav text-uppercase ml-auto">
                        <li className="nav-item"><Link className="nav-link js-scroll-trigger" to="portfolio" smooth={true} duration={600}>Portfolio</Link></li>
                        <li className="nav-item"><Link className="nav-link js-scroll-trigger" to="about" smooth={true} duration={600}>About Me</Link></li>
                        <li className="nav-item"><Link className="nav-link js-scroll-trigger" to="contact" smooth={true} duration={600}>Contact</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
        {/* <Navbar></Navbar> */}
    
        {/* <!-- Masthead--> */}
        <header className="masthead">
            <div className="container">
                <div className="subheading-container">
                    <img src="https://github.com/codinghim/images/blob/master/%E3%85%87%E3%84%B1.jpg?raw=true" id="portrait" alt=""/>
                    <div className="masthead-subheading">Daniel Himchan Yun </div>
                </div>
                <div className="masthead-heading text-uppercase">It's Nice To Meet You</div>
                <Link className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" to="portfolio" smooth={true} duration={600}>Know about me more</Link>
            </div>
        </header>

        {/* Sections */}

        {/* <!-- Portfolio Grid--> */}
        <section className="page-section" id="portfolio">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Portfolio</h2>
                    <h3 className="section-subheading text-muted">Knowledge and skills</h3>
                </div>
                {/* Portfolio Cards Row 1*/}
                <div className="row">
                    {/* Portfolio Cards 1-1*/}
                    <div className="col-lg-4 col-sm-6 mb-4">
                        <div className="portfolio-item">
                            <a className="portfolio-link" href="https://github.com/codinghim/team_white_hw1">
                            {/* data-toggle="modal" href="#portfolioModal1"> */}
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content"><i className="fa fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src="https://github.com/codinghim/images/blob/master/gameplay-thumbnail.png?raw=true" alt="" />
                            </a>
                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading">Jotto</div>
                                <div className="portfolio-caption-subheading text-muted">Minigame</div>
                                <div className="portfolio-caption-subheading2 text-muted">March 2019</div>
                                <div className="portfolio-caption-subheading text-muted">(Java, Spring, MongoDB, JavaScript, JQuery)</div>
                            </div>
                        </div>
                    </div>
                    {/* Portfolio Cards 1-2*/}
                    <div className="col-lg-4 col-sm-6 mb-4">
                        <div className="portfolio-item">
                            <a className="portfolio-link" href="https://github.com/codinghim/team_white_308_thecomicverse">
                            {/* data-toggle="modal" href="#portfolioModal1"> */}
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content"><i className="fa fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src="https://github.com/codinghim/images/blob/master/comic_thumbnail.jpg?raw=true" alt="" />
                            </a>
                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading">The ComicVerse</div>
                                <div className="portfolio-caption-subheading text-muted">Comic website</div>
                                <div className="portfolio-caption-subheading2 text-muted">June 2019</div>
                                <div className="portfolio-caption-subheading text-muted">(Java, Spring, MongoDB, JavaScript, JQuery)</div>
                            </div>
                        </div>
                    </div>
                    {/* Portfolio Cards 1-3*/}
                    <div className="col-lg-4 col-sm-6 mb-4">
                        <div className="portfolio-item">
                            <a className="portfolio-link" href="https://github.com/codinghim/CSE363">
                            {/* data-toggle="modal" href="#portfolioModal1"> */}
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content"><i className="fa fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src="https://github.com/codinghim/images/blob/master/cyber_security_thumbnail.jpg?raw=true" alt="" />
                            </a>
                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading">Cyber Security Attacks</div>
                                <div className="portfolio-caption-subheading text-muted">Sniffing, DNS poisoning, Password cracking, C&C</div>
                                <div className="portfolio-caption-subheading2 text-muted">May 2020</div>
                                <div className="portfolio-caption-subheading text-muted">(Python)</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* <!-- About--> */}
        <section className="page-section" id="about">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">About</h2>
                    <h3 className="section-subheading text-muted">Biography</h3>
                </div>
                {/* Timeline-left */}
                <ul className="timeline">
                    <li>
                        <div className="timeline-image"><img className="rounded-circle img-fluid" src="himjpg" alt="" /></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>May 2020</h4>
                                <h4 className="subheading">SUNY Stony Brook University 2020</h4>
                            </div>
                            <div className="timeline-body"><p className="text-muted">Bachelor of Science in Computer Science</p></div>
                        </div>
                    </li>
                    {/* Timeline-right */}
                    <li className="timeline-inverted">
                        <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/2.jpg" alt="" /></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>2020 -</h4>
                                <h4 className="subheading">On a Way to the Greatness</h4>
                            </div>
                            <div className="timeline-body"><p className="text-muted">Journey to become a brilliant Software Developer</p></div>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
        
        {/* <!-- Contact--> */}
        <section className="page-section" id="contact">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Contact Me</h2>
                    <h3 className="section-subheading">Call: 718-755-8892</h3>
                    <h3 className="section-subheading">Email: codinghim0703@gmail.com</h3>
                </div>
                <form id="contactForm" name="sentMessage" novalidate="novalidate">
                    <div className="row align-items-stretch mb-5">
                        <div className="col-md-6">
                            <div className="form-group">
                                <input className="form-control" id="name" type="text" placeholder="Your Name *" required="required" data-validation-required-message="Please enter your name." />
                                <p className="help-block text-danger"></p>
                            </div>
                            <div className="form-group">
                                <input className="form-control" id="email" type="email" placeholder="Your Email *" required="required" data-validation-required-message="Please enter your email address." />
                                <p className="help-block text-danger"></p>
                            </div>
                            <div className="form-group mb-md-0">
                                <input className="form-control" id="phone" type="tel" placeholder="Your Phone *" required="required" data-validation-required-message="Please enter your phone number." />
                                <p className="help-block text-danger"></p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group form-group-textarea mb-md-0">
                                <textarea className="form-control" id="message" placeholder="Your Message *" required="required" data-validation-required-message="Please enter a message."></textarea>
                                <p className="help-block text-danger"></p>
                            </div>
                        </div>
                    </div>
                    <div className="text-center">
                        <div id="success"></div>
                        <button className="btn btn-primary btn-xl text-uppercase" id="sendMessageButton" type="submit">Send Message</button>
                    </div>
                </form>
            </div>
        </section>

        {/* <!-- Footer--> */}
        <footer className="footer py-4">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4 text-lg-left">Copyright © Daniel Himchan Yun 2020</div>
                    <div className="col-lg-4 my-3 my-lg-0">
                        <a className="btn btn-dark btn-social mx-2" href="https://github.com/codinghim"><i className="fa fa-github"></i></a>
                        <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fa fa-facebook-f"></i></a>
                        <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fa fa-linkedin"></i></a>
                    </div>
                    <div className="col-lg-4 text-lg-right">
                        {/* <a className="mr-3" href="#!">Privacy Policy</a>
                        <a href="#!">Terms of Use</a> */}
                    </div>
                </div>
            </div>
        </footer>

        {/* <!-- Portfolio Modals--> */}
        {/* <!-- Modal 1--> */}
        <div className="portfolio-modal modal fade" id="portfolioModal1" tabindex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="close-modal" data-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="modal-body">
                                    {/* <!-- Project Details Go Here--> */}
                                    <h2 className="text-uppercase">Project Name</h2>
                                    <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                                    <img className="img-fluid d-block mx-auto" src="assets/img/portfolio/01-full.jpg" alt="" />
                                    <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                                    <ul className="list-inline">
                                        <li>Date: January 2020</li>
                                        <li>Client: Threads</li>
                                        <li>Category: Illustration</li>
                                    </ul>
                                    <button className="btn btn-primary" data-dismiss="modal" type="button">
                                        <i className="fa fa-times mr-1"></i>
                                        Close Project
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Modal 2--> */}
        <div className="portfolio-modal modal fade" id="portfolioModal2" tabindex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="close-modal" data-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="modal-body">
                                    {/* <!-- Project Details Go Here--> */}
                                    <h2 className="text-uppercase">Project Name</h2>
                                    <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                                    <img className="img-fluid d-block mx-auto" src="assets/img/portfolio/02-full.jpg" alt="" />
                                    <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                                    <ul className="list-inline">
                                        <li>Date: January 2020</li>
                                        <li>Client: Explore</li>
                                        <li>Category: Graphic Design</li>
                                    </ul>
                                    <button className="btn btn-primary" data-dismiss="modal" type="button">
                                        <i className="fa fa-times mr-1"></i>
                                        Close Project
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Modal 3--> */}
        <div className="portfolio-modal modal fade" id="portfolioModal3" tabindex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="close-modal" data-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="modal-body">
                                    {/* <!-- Project Details Go Here--> */}
                                    <h2 className="text-uppercase">Project Name</h2>
                                    <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                                    <img className="img-fluid d-block mx-auto" src="assets/img/portfolio/03-full.jpg" alt="" />
                                    <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                                    <ul className="list-inline">
                                        <li>Date: January 2020</li>
                                        <li>Client: Finish</li>
                                        <li>Category: Identity</li>
                                    </ul>
                                    <button className="btn btn-primary" data-dismiss="modal" type="button">
                                        <i className="fa fa-times mr-1"></i>
                                        Close Project
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Modal 4--> */}
        <div className="portfolio-modal modal fade" id="portfolioModal4" tabindex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="close-modal" data-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="modal-body">
                                    {/* <!-- Project Details Go Here--> */}
                                    <h2 className="text-uppercase">Project Name</h2>
                                    <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                                    <img className="img-fluid d-block mx-auto" src="assets/img/portfolio/04-full.jpg" alt="" />
                                    <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                                    <ul className="list-inline">
                                        <li>Date: January 2020</li>
                                        <li>Client: Lines</li>
                                        <li>Category: Branding</li>
                                    </ul>
                                    <button className="btn btn-primary" data-dismiss="modal" type="button">
                                        <i className="fa fa-times mr-1"></i>
                                        Close Project
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Modal 5--> */}
        <div className="portfolio-modal modal fade" id="portfolioModal5" tabindex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="close-modal" data-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="modal-body">
                                    {/* <!-- Project Details Go Here--> */}
                                    <h2 className="text-uppercase">Project Name</h2>
                                    <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                                    <img className="img-fluid d-block mx-auto" src="assets/img/portfolio/05-full.jpg" alt="" />
                                    <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                                    <ul className="list-inline">
                                        <li>Date: January 2020</li>
                                        <li>Client: Southwest</li>
                                        <li>Category: Website Design</li>
                                    </ul>
                                    <button className="btn btn-primary" data-dismiss="modal" type="button">
                                        <i className="fa fa-times mr-1"></i>
                                        Close Project
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Modal 6--> */}
        <div className="portfolio-modal modal fade" id="portfolioModal6" tabindex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="close-modal" data-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="modal-body">
                                    {/* <!-- Project Details Go Here--> */}
                                    <h2 className="text-uppercase">Project Name</h2>
                                    <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                                    <img className="img-fluid d-block mx-auto" src="assets/img/portfolio/06-full.jpg" alt="" />
                                    <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                                    <ul className="list-inline">
                                        <li>Date: January 2020</li>
                                        <li>Client: Window</li>
                                        <li>Category: Photography</li>
                                    </ul>
                                    <button className="btn btn-primary" data-dismiss="modal" type="button">
                                        <i className="fa fa-times mr-1"></i>
                                        Close Project
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Scrollspy */}
        
            {/* <li><a href="#portfolio">portfolio</a></li>
            <li><a href="#about"></a>about</li>
            <li><a href="#contact">contact</a></li> */}
        
        {/* <!-- Bootstrap core JS--> */}
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.bundle.min.js"></script>
        {/* <!-- Third party plugin JS--> */}
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js"></script>
        {/* <!-- Contact form JS--> */}
        <script src="assets/mail/jqBootstrapValidation.js"></script>
        <script src="assets/mail/contact_me.js"></script>
        {/* <!-- Core theme JS--> */}
        <script src="js/scripts.js"></script>
    </body>
    </div>
  );
}

export default App;
