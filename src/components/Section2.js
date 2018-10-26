import React, { Component } from 'react';

import '../assets/css/general.css';
import meucondo from '../assets/imagens/meucondo.png';
import telcosms from '../assets/imagens/telcosms.png';
import kikola from '../assets/imagens/kikola.png';
import eletrotelesi from '../assets/imagens/eletrotelesi.png';

import drsergio from '../assets/imagens/drsergio.png';


import facom from '../assets/imagens/facom.png';
import moonn from '../assets/imagens/moonn.png';
import onetechys from '../assets/imagens/onetechys.png';
import somultisys from '../assets/imagens/somultisys.png';


class Section2 extends Component {
  render() {
    return (


        <section className="">

          <div className="container container-top-button">
              <div className="row no-margin">
                <div className="col-xs-12 col-md-3 col-img">
                  <img src={meucondo} className="img-fluid" />
                </div>

                <div className="col-xs-12 col-md-3 col-img">
                  <img src={telcosms} className="img-fluid" />
                </div>

                <div className="col-xs-12 col-md-3 col-img">
                  <img src={eletrotelesi} className="img-fluid" />
                </div>

                <div className="col-xs-12 col-md-3 col-img">
                  <img src={kikola} className="img-fluid" />
                </div>
              </div>


              <div className="row no-margin">
                <div className="col-xs-12 col-md-9 container-s1">
                </div>

                <div className="col-xs-12 col-md-3 col-img">
                  <img src={drsergio} className="img-fluid" />
                </div>
              </div>

              <div className="row no-margin">
                <div className="col-xs-12 col-md-3 col-img">
                  <img src={facom} className="img-fluid" />
                </div>

                <div className="col-xs-12 col-md-3 col-img">
                  <img src={somultisys} className="img-fluid" />
                </div>

                <div className="col-xs-12 col-md-3 col-img">
                  <img src={onetechys} className="img-fluid" />
                </div>

                <div className="col-xs-12 col-md-3 col-img">
                  <img src={moonn} className="img-fluid" />
                </div>
              </div>



          </div>

        </section>







    );
  }
}

export default Section2;
