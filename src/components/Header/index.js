import React, { Component } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';

import './Header.css';


class Header extends Component {
  render() {
    return (
      <Jumbotron>
        <h1 className="title-1">Web developer</h1>

        <h5 className="h4-pd title-2">
          Desenvolvidor web a mais de quatro anos, com experiência em projectos com RubyOnRails, React, React Native e outros
        </h5>
        
        <p>
          <a href= {process.env.PUBLIC_URL + '/joaoCabanga.pdf'} className="ButtonCV btn btn-primary" > Download CV </a>
        </p>
      </Jumbotron>

    );
  }
}

export default Header;
