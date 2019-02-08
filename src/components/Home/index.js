import React, { Component } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import './Home.css';


class Home extends Component {
  render() {
    return (
      <Jumbotron>
        <h1>Web developer</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for calling
          extra attention to featured content or information.
        </p>
        <p>
          <Button className="ButtonCV" > Download CV </Button>
        </p>
      </Jumbotron>

    );
  }
}

export default Home;
