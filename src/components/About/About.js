import React, { Component } from 'react';
import ProgrammingComponent from '../Programming/Programming'

class About extends Component {
  render() {
    return (
      <section id="about" className="s-about target-section">

        <div className="row narrow section-intro has-bottom-sep">
            <div className="col-full text-center">
                <h3>About</h3>
                <h1>More About Me</h1>
                <p className="lead">A small Software Engineer on the road to Solution Architecture </p>
            </div>
        </div>

        <div className="row about-content">

            <div className="col-six tab-full left">
                <h3>The story of my life</h3>

                <p>
                    There was the time when i started learning some fundamental programming with HTML, CSS with PHP,
                     after that i learned some basic networking and first managed and deployed
                     a simple network domain with Microsoft Windows Server.
                      At that time, i prefered going to be a System Administrator than a Software Engineering.
                       But after some short period, i figured out that every system that always required some coding domain knowledge.
                       So i came back to continue coding and went through C programming and Java core programming class of FPT University.
                        When i was second year student of FPT University, fortunately i got the first intern program as Android Developer at <a href="https://www.facebook.com/skylabvn/">Skylab</a>.
                         During here, i met a lot of awesome people that guided me and helped me to find out what skills are necessary to work as a Software Engineer.
                          Six months was short, but i basically learned all of the things that a Software Engineer required.
                           Then, i joined <a href="https://splus-software.com.vn/">Splus-Software</a> as the Mobile Developer, i have experienced many different working styles from Japanese projects.
                            These experiences was such a huge impressive. The working cultures, the projects scope, ... All of these that conducted some excellent experiences as Software Engineer.
                            Right now, i am working mostly from Freelance project but still looking for some good challenges as a Software Engineer but furthermore to be a Solution Architecture.

                </p>


            </div>

            <div className="col-six tab-full right">
                <h3>I've Got Some skills.</h3>
                <ProgrammingComponent></ProgrammingComponent>
            </div>

        </div>

        <div className="row about-content about-content--buttons">

            <div className="col-six tab-full left">
                <a href="https://drive.google.com/file/d/1hHR5q8UpAmRwpgglT00BJDgDM4B8Oq31/view?usp=sharing" className="btn btn--primary full-width">My CV (EN)</a>
            </div>

            <div className="col-six tab-full left">
                <a href="https://drive.google.com/file/d/10h1C_nL_u7SuMi5q1Cp-vy0Oc_sNRJwJ/view?usp=sharing" className="btn btn--primary full-width">My CV (JP)</a>
            </div>

        </div>

        <div className="row about-content about-content--buttons">



        </div>


        <div className="row about-content about-content--timeline">

            <div className="col-full text-center">
                <h3>My Work Experience.</h3>
            </div>

            <div className="col-six tab-full left">
                <div className="timeline">

                    <div className="timeline__block">
                        <div className="timeline__bullet"></div>
                        <div className="timeline__header">
                            <p className="timeline__timeframe">October 2018 - Present</p>
                            <h3>Freelance Developer</h3>
                            <h5>Fullstack Developer</h5>
                        </div>
                        <div className="timeline__desc">
                            <p>
                                    Currently, i am self-employed, i often learn newest technology from over the world and apply it to my customer's projects.
                                    Not only building website front-end/ mobile application but also design and construct a scalable system with microservice for large requests and specific domain.

                            </p>
                        </div>
                    </div>

                    <div className="timeline__block">
                        <div className="timeline__bullet"></div>
                        <div className="timeline__header">
                            <p className="timeline__timeframe">August 2017 - August 2018 </p>
                            <h3>Splus Software</h3>
                            <h5>Fullstack Developer</h5>
                        </div>
                        <div className="timeline__desc">
                            <p>
                                Most of my time were working with mobile application, but also maintained backend services in Ruby/Java(Spring boot).
                            </p>
                        </div>
                    </div>

                </div>
            </div>

            <div className="col-six tab-full right">
                <div className="timeline">

                    <div className="timeline__block">
                        <div className="timeline__bullet"></div>
                        <div className="timeline__header">
                            <p className="timeline__timeframe">February 2017 - August 2017</p>
                            <h3>Skylab</h3>
                            <h5>Mobile Developer</h5>
                        </div>
                        <div className="timeline__desc">
                            <p>
                                First intern program was good experiences, i was working mostly with Android programming.
                                 Making some mobile applications and integrated it with backend. Not only working with Android, i also had a chance to work with
                                  Golang ( backend programming language ) to build some function at the backend side.
                            </p>
                        </div>
                    </div>

                </div>
            </div>

        </div>

    </section>
    )
  }
};

export default About;