import React, { Component } from 'react';
import favicon from './assets/imagens/favicon.png';
import a1 from './assets/imagens/a1.jpg';
import meucondo from './assets/imagens/meucondo.png';
import telcosms from './assets/imagens/telcosms.png';
import facom from './assets/imagens/facom.png';
import drsergio from './assets/imagens/drsergio.png';
import kikola from './assets/imagens/kikola.png';
import moonn from './assets/imagens/moonn.png';
import somultisys from './assets/imagens/somultisys.png';
import eletrotelesi from './assets/imagens/eletrotelesi.png';
import onetechys from './assets/imagens/onetechys.png';
import bizno from './assets/imagens/bizno.png';



import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">

        <header className="App-header">
          <img src={favicon} className="img-fluid" alt="logo" />
          <h1 className="App-title">JM Cabanga</h1>
          <h1 className="App-title-2">Programador Web</h1>
        </header>

        <div className="bady-portifolio">
          <div className="row">
            <h1 className="h1-title">Portifolio</h1>
          </div>

          <div className="container">
            <div className="row">


              <div className="col s12 m4 no-padding">
                <div className="icon-block">
                  <a href="https://meucondo.co.ao/" target="_blank" rel="noopener noreferrer">
                    <figure>
                      <img src={meucondo} className="responsive-img" alt="logo" />
                    </figure>
                  </a>
                </div>
              </div>

              <div className="col s12 m4 no-padding">
                <div className="icon-block">
                  <a href="https://telcosms.co.ao/" target="_blank" rel="noopener noreferrer">
                    <figure>
                      <img src={telcosms} className="responsive-img" alt="logo" />
                    </figure>
                  </a>
                </div>
              </div>

              <div className="col s12 m4 no-padding">
                <div className="icon-block">
                  <a href="https://drsergioneto.com/" target="_blank" rel="noopener noreferrer">
                    <figure>
                      <img src={drsergio} className="responsive-img" alt="logo" />
                    </figure>
                  </a>
                </div>
              </div>

              <div className="col s12 m4 no-padding">
                <div className="icon-block">
                  <a href="https://kikola.co.ao/" target="_blank" rel="noopener noreferrer">
                    <figure>
                      <img src={kikola} className="responsive-img" alt="logo" />
                    </figure>
                  </a>
                </div>
              </div>

              <div className="col s12 m4 no-padding">
                <div className="icon-block">
                  <a href="https://bisno.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                    <figure>
                      <img src={bizno} className="responsive-img" alt="logo" />
                    </figure>
                  </a>
                </div>
              </div>

              <div className="col s12 m4 no-padding">
                <div className="icon-block">
                  <a href="https://www.somultisys.com/" target="_blank" rel="noopener noreferrer">
                    <figure>
                      <img src={somultisys} className="responsive-img" alt="logo" />
                    </figure>
                  </a>
                </div>
              </div>

              <div className="col s12 m4 no-padding">
                <div className="icon-block">
                  <a href="https://moonn.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                    <figure>
                      <img src={moonn} className="responsive-img" alt="logo" />
                    </figure>
                  </a>
                </div>
              </div>

              <div className="col s12 m4 no-padding">
                <div className="icon-block">
                  <a href="https://eletrotelesi.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                    <figure>
                      <img src={eletrotelesi} className="responsive-img" alt="logo" />
                    </figure>
                  </a>
                </div>
              </div>

              <div className="col s12 m4 no-padding">
                <div className="icon-block">
                  <a href="https://fa-com.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                    <figure>
                      <img src={facom} className="responsive-img" alt="logo" />
                    </figure>
                  </a>
                </div>
              </div>

              <div className="col s12 m4 no-padding">
                <div className="icon-block">
                  <a href="http://onetechys.netlify.com/" target="_blank" rel="noopener noreferrer">
                    <figure>
                      <img src={onetechys} className="responsive-img" alt="logo" />
                    </figure>
                  </a>
                </div>
              </div>


            </div>
          </div>




        </div>


        <div className="bady-portifolio">
          <div className="row">
            <h1 className="h1-title">Skills</h1>
          </div>

          <div className="container">
            <div className="row">
              <div className="col s12 m6">
                //========================================== LISTA DOS SKILLES ===
                <div className="row">
                  <div className="col s12 m3"><div className="skill-name right">Ruby</div></div>
                  <div className="col s12 m9">
                    <div className="rating">
                      <div className="skill-box">
                        <div className="scribble expert80 launch bg-skill"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col s12 m3"><div className="skill-name right">Crystal</div></div>
                  <div className="col s12 m9">
                    <div className="rating">
                      <div className="skill-box">
                        <div className="scribble expert25 launch bg-skill"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col s12 m3"><div className="skill-name right">RubyOnRails</div></div>
                  <div className="col s12 m9">
                    <div className="rating">
                      <div className="skill-box">
                        <div className="scribble expert90 launch bg-skill"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col s12 m3"><div className="skill-name right">Kemal</div></div>
                  <div className="col s12 m9">
                    <div className="rating">
                      <div className="skill-box">
                        <div className="scribble expert25 launch bg-skill"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col s12 m3"><div className="skill-name right">Sketch</div></div>
                  <div className="col s12 m9">
                    <div className="rating">
                      <div className="skill-box">
                        <div className="scribble expert85 launch bg-skill"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col s12 m3"><div className="skill-name right">WordPress</div></div>
                  <div className="col s12 m9">
                    <div className="rating">
                      <div className="skill-box">
                        <div className="scribble expert50 launch bg-skill"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col s12 m3"><div className="skill-name right">ReactJS</div></div>
                  <div className="col s12 m9">
                    <div className="rating">
                      <div className="skill-box">
                        <div className="scribble expert50 launch bg-skill"></div>
                      </div>
                    </div>
                  </div>
                </div>

                //========================================== LISTA DOS SKILLES ===
              </div>

              <div className="col s12 m6">
                //========================================== LISTA DOS SKILLES ===
                <div className="row">
                  <div className="col s12 m3"><div className="skill-name right">HTML5</div></div>
                  <div className="col s12 m9">
                    <div className="rating">
                      <div className="skill-box">
                        <div className="scribble expert1 launch bg-skill"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col s12 m3"><div className="skill-name right">CSS3</div></div>
                  <div className="col s12 m9">
                    <div className="rating">
                      <div className="skill-box">
                        <div className="scribble expert1 launch bg-skill"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col s12 m3"><div className="skill-name right">Sass/Less</div></div>
                  <div className="col s12 m9">
                    <div className="rating">
                      <div className="skill-box">
                        <div className="scribble expert60 launch bg-skill"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col s12 m3"><div className="skill-name right">jQuery</div></div>
                  <div className="col s12 m9">
                    <div className="rating">
                      <div className="skill-box">
                        <div className="scribble expert1 launch bg-skill"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col s12 m3"><div className="skill-name right">Javascript</div></div>
                  <div className="col s12 m9">
                    <div className="rating">
                      <div className="skill-box">
                        <div className="scribble expert1 launch bg-skill"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col s12 m3"><div className="skill-name right">Bootstrap 4</div></div>
                  <div className="col s12 m9">
                    <div className="rating">
                      <div className="skill-box">
                        <div className="scribble expert100 launch bg-skill"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col s12 m3"><div className="skill-name right">Materializecss</div></div>
                  <div className="col s12 m9">
                    <div className="rating">
                      <div className="skill-box">
                        <div className="scribble expert100 launch bg-skill"></div>
                      </div>
                    </div>
                  </div>
                </div>

                //========================================== LISTA DOS SKILLES ===
              </div>
            </div>
          </div>


        </div>








      </div>
    );
  }
}

export default App;
