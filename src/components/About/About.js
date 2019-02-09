import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <section id="about" className="s-about target-section">

        <div className="row narrow section-intro has-bottom-sep">
            <div className="col-full text-center">
                <h3>About</h3>
                <h1>More About Me</h1>
                <p className="lead">A Software Engineering a.k.a Mobile Fullstack Developer with the infinite passion in Computer Science </p>
            </div>
        </div>

        <div className="row about-content">

            <div className="col-six tab-full left">
                <h3>The story of my life</h3>

                <p>
                    There was the time that i had studied some fundamental programming with HTML and CSS, after that i started to learn some basic networking and first managed and deployed a simple network domain with Microsoft Windows Server. At that time, i prefered going to be a System Administrator than a Software Engineering. After short period of time, i realized i love building the system, but every system that always required some coding domain knowledge. So i came back to code and went through C programming and Java core programming class of FPT University
                </p>


            </div>

            <div className="col-six tab-full right">
                <h3>I've Got Some skills.</h3>

                <ul className="skill-bars">
                    <li>
                    <div className="progress percent90"><span>90%</span></div>
                    <strong>HTML5</strong>
                    </li>
                    <li>
                    <div className="progress percent85"><span>85%</span></div>
                    <strong>CSS3</strong>
                    </li>
                    <li>
                    <div className="progress percent70"><span>70%</span></div>
                    <strong>JQuery</strong>
                    </li>
                    <li>
                    <div className="progress percent95"><span>95%</span></div>
                    <strong>PHP</strong>
                    </li>
                    <li>
                    <div className="progress percent75"><span>75%</span></div>
                    <strong>Wordpress</strong>
                    </li>
                    <li>
                    <div className="progress percent90"><span>90%</span></div>
                    <strong>Angular JS</strong>
                    </li>
                </ul>
            </div>

        </div>

        <div className="row about-content about-content--buttons">

            <div className="col-six tab-full left">
                <a href="#0" className="btn btn--primary full-width">Download My CV</a>
            </div>
            <div className="col-six tab-full right">
                <a href="#0" className="btn full-width">Hire Me Now</a>
            </div>

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
                            <p className="timeline__timeframe">July 2015 - Present</p>
                            <h3>Awesome Studio</h3>
                            <h5>Lead Designer</h5>
                        </div>
                        <div className="timeline__desc">
                            <p>Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in magna consectetur nisi cupidatat laboris esse eiusmod deserunt aute do quis velit esse sed Ut proident cupidatat nulla esse cillum laborum occaecat nostrud sit dolor incididunt amet est occaecat nisi.</p>
                        </div>
                    </div>

                    <div className="timeline__block">
                        <div className="timeline__bullet"></div>
                        <div className="timeline__header">
                            <p className="timeline__timeframe">July 2014 - June 2015</p>
                            <h3>Super Cool Agency</h3>
                            <h5>Front-end Developer</h5>
                        </div>
                        <div className="timeline__desc">
                            <p>Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in magna consectetur nisi cupidatat laboris esse eiusmod deserunt aute do quis velit esse sed Ut proident cupidatat nulla esse cillum laborum occaecat nostrud sit dolor incididunt amet est occaecat nisi incididunt.</p>
                        </div>
                    </div>

                </div>
            </div>

            <div className="col-six tab-full right">
                <div className="timeline">

                    <div className="timeline__block">
                        <div className="timeline__bullet"></div>
                        <div className="timeline__header">
                            <p className="timeline__timeframe">July 2012 - June 2014</p>
                            <h3>Great Design Studio</h3>
                            <h5>Web Designer</h5>
                        </div>
                        <div className="timeline__desc">
                            <p>Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in magna consectetur nisi cupidatat laboris esse eiusmod deserunt aute do quis velit esse sed Ut proident cupidatat nulla esse cillum laborum occaecat nostrud sit dolor incididunt amet est occaecat nisi.</p>
                        </div>
                    </div>

                    <div className="timeline__block">
                        <div className="timeline__bullet"></div>
                        <div className="timeline__header">
                            <p className="timeline__timeframe">July 2011 - June 2012</p>
                            <h3>Epic Design Agency</h3>
                            <h5>Web Designer</h5>
                        </div>
                        <div className="timeline__desc">
                            <p>Lorem ipsum Occaecat do esse ex et dolor culpa nisi ex in magna consectetur nisi cupidatat laboris esse eiusmod deserunt aute do quis velit esse sed Ut proident cupidatat nulla esse cillum laborum occaecat nostrud sit dolor incididunt amet est occaecat nisi incididunt.</p>
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