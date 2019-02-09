import React, { Component } from 'react';


class Header extends Component {
  render() {
    return (
      <header className="s-header">

        <div className="header-logo">
        <a className="site-logo" href="index.html">
            <img src="images/logotransparent.png" alt="Homepage"/>
        </a>

        </div>

        <nav className="header-nav-wrap">
            <ul className="header-nav">
                <li className="current"><a className="smoothscroll"  href="#home" title="home">Home</a></li>
                <li><a className="smoothscroll"  href="#about" title="about">About</a></li>
                <li><a className="smoothscroll"  href="#works" title="works">Works</a></li>
            </ul>
        </nav>

        <a className="header-menu-toggle" href="#0"><span>Menu</span></a>

    </header>

    );
  }
}

export default Header;