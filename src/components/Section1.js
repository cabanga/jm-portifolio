import React, { Component } from 'react';

import '../assets/css/general.css';
import favicon from '../assets/imagens/favicon.png';


class Section1 extends Component {
  render() {
    return (


        <section className="height-100">

            <div className="row no-margin">

                <div className="col-xs-12 col-md-3 container-s1 height-100">
                  <div className="container">
                    <br />
                    <span className="portifolio-name">Portifolio</span>
                    <img src={favicon} className="rounded-circle module favicon-img" />
                  </div>
                </div>


                <div className="col-xs-12 col-md-9 container-s2 height-100">
                  <nav className="navbar navbar-expand-sm justify-content-center">
                    <ul className="navbar-nav">
                      <li className="nav-item"><a className="nav-link portifolio-nav" href="#">HOME</a></li>
                      <li className="nav-item"><a className="nav-link portifolio-nav" href="#">ABOUT</a></li>
                      <li className="nav-item"><button type="button" className="btn btn-download">Download CV</button></li>
                    </ul>
                  </nav>

                </div>




            </div>

        </section>







    );
  }
}

export default Section1;
