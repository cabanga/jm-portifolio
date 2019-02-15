import React, { Component } from 'react';
import { Jumbotron, Col, Row, Container } from 'react-bootstrap';
import favicon from '../../assets/imagens/favicon.png';
import '../../assets/css/general.css';
import './Projects.css';
import kubitx from '../../assets/imagens/kubitx.png';
import meucondo from '../../assets/imagens/meucondo.png';

import telcosms from '../../assets/imagens/telcosms.png';
import drsergio from '../../assets/imagens/drsergio.png';
import facom from '../../assets/imagens/facom.png';
import moonn from '../../assets/imagens/moonn.png';
import onetechys from '../../assets/imagens/onetechys.png';
import bizno from '../../assets/imagens/bizno.png';

import ImageCard from '../ImageCard.component';

class Projects extends Component {
  render() {
    return (
      <div className="bg-profile">
        <Container >
          <Row className="pg-container">
            <Row>
              <ImageCard img={ kubitx } link={ 'https://kubitx.io/' } />
              <ImageCard img={ meucondo } link={ 'https://www.meucondo.co.ao/' } />
              <ImageCard img={ telcosms } link={ 'https://telcosms.co.ao/' } />
              <ImageCard img={ drsergio } link={ 'https://drsergioneto.com/' } />
            </Row>

            <br/>

            <Row>
              <ImageCard img={ facom } link={ 'https://fa-com.herokuapp.com/' } />
              <ImageCard img={ bizno } link={ 'https://bizno.herokuapp.com/' } />
              <ImageCard img={ moonn } link={ 'https://moonn.herokuapp.com/' } />
              <ImageCard img={ onetechys } link={ 'https://onetechys.netlify.com/' } />

            </Row>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Projects;
