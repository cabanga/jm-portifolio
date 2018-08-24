import React, { Component } from 'react';
import favicon from './assets/imagens/favicon.png';
import a1 from './assets/imagens/a1.jpg';

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

          <div className="row">
            <div className="col s12 m4">
              <div className="icon-block">
                <img src={a1} className="img-fluid" alt="logo" />
              </div>
            </div>

            <div className="col s12 m4">
              <div className="icon-block">
                <img src={a1} className="img-fluid" alt="logo" />
              </div>
            </div>

            <div className="col s12 m4">
              <div className="icon-block">
                <img src={a1} className="img-fluid" alt="logo" />
              </div>
            </div>


            <div className="col s12 m4">
              <div className="icon-block">
                <img src={a1} className="img-fluid" alt="logo" />
              </div>
            </div>

            <div className="col s12 m4">
              <div className="icon-block">
                <img src={a1} className="img-fluid" alt="logo" />
              </div>
            </div>

            <div className="col s12 m4">
              <div className="icon-block">
                <img src={a1} className="img-fluid" alt="logo" />
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
