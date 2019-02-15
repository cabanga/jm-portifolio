import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import '../assets/css/general.css';

export const ImageCard = (props) => (

    <Col xs={12} md={3} >
        <a href={props.link} target="_blank" rel="noopener noreferrer">
            <img src={props.img} className="img-fluid grow" />
        </a>
    </Col>
)

export default ImageCard;