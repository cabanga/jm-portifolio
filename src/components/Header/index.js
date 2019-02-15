import React, { Component } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import favicon from '../../assets/imagens/favicon.png';
import '../../assets/css/general.css';

import './Header.css';


class Header extends Component {
  render() {
    return (
      <Jumbotron>


        <img src={favicon} className="rounded-circle module favicon-img" /> 
        <h4 className="title-name">João Manuel Correia Cabanga</h4>
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
