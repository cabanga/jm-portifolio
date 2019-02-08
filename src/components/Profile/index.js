import React, { Component } from 'react';
import { Jumbotron, Col, Row, Container } from 'react-bootstrap';
import favicon from '../../assets/imagens/favicon.png';
import '../../assets/css/general.css';

import './Profile.css';


class Profile extends Component {
  render() {
    return (
      <div className="bg-profile">
        <Container >
          <Row>
            <Col>
              <img src={favicon} className="rounded-circle module favicon-img" />        
            </Col>

            <Col>
              <h4 className="title-1">João Manuel Correia Cabanga</h4>
              <h5 className="title-2">
                Desenvolvidor web a mais de quatro anos, com experiência em projectos com RubyOnRails, React, React Native e outros
              </h5>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Profile;
