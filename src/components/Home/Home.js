import React, {Component} from 'react'
import Header from '../Header'
import Grid from 'react-bootstrap/lib/Grid'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'
import books from '../../images/books.png'
import stuff from '../../images/stuff.png'
import github from '../../images/github.png'
import linkedin from '../../images/linkedin.png'
import work from '../../images/work.png'
import CV from '../../images/CV.png'



class Home extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div>
        <Grid className="grid">
          <Row className="show-grid" className="row">
                <Col sm={6} md={3} className="col">
                <div className="top-img-container"></div>
                </Col>
                <Col sm={6} md={3} className="col">
                <div className="cv-container"><img src={CV} className="cv" alt="CV"/></div>
                </Col>
                <Col sm={6} md={3} className="col">
                <div className="linkedin-container"><img src={linkedin} className="linkedin" alt="linkedin"/></div>
                </Col>
                <Col sm={6} md={3} className="col">
                <div className="top-img-container"></div>
                </Col>
            </Row>
            <Row className="show-grid" className="row">
                <Col sm={6} md={3} className="col">
                <div className="book-container"><img src={books} className="books-img" alt="books"/></div>
                </Col>
                <Col sm={6} md={3} className="col">
                <div className="github-container"><img src={github} className="github" alt="github"/></div>
                </Col>
                <Col sm={6} md={3} className="col">
                <div className="work-container"><img src={work} className="work" alt="work"/></div>
                </Col>
                <Col sm={6} md={3} className="col">
                <div className="stuff-container"><img src={stuff} className="stuff-img" alt="stuff"/></div>
                </Col>
            </Row>
        </Grid>
        </div>

        <style jsx>
          {
            ` 
            .grid {
              box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
              padding: 0;
            }

            .grid:hover {
              box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.25)
            }

            .row {
              padding: 0;
              margin: 0;
            }

            .col {
              padding: 0;
            }
            .stuff {
              padding: 160px 48px 0 48px;              
            }

            .books-img {
              width: 150px;
            }

            .stuff-img {
              height:210px;
            }

            .stuff-container {
              padding: 53px 20px 0 20px;
              border-bottom: 2px black solid;
              border-left: 2px black solid;
              border-right: 2px black solid;
              background-color: #D58EAE;
              
            }

            .top-img-container {
              border-top: 2px black solid;
              border-right: 2px black solid;
              border-left: 2px black solid;
              padding: 266px 20px 0 20px;
              background-color: #D58EAE;
              
              
            }

            .book-container {
              border-bottom: 2px black solid;
              border-left: 2px black solid;
              border-right: 2px black solid;
              padding: 110px 48px 0 48px;
              background-color: #D58EAE;
              
              
            }

            .cv {
              width: 200px;
            }

            .linkedin {
              width: 240px;
            }

            .github {
              width: 200px
            }

            .work {
              width: 220px
            }

            .cv-container {
              border-top: 2px solid black;
              padding-top: 121px;
              background-color: #D58EAE;
              
            }
            
            .github-container {
              border-right: 2px solid black;
              border-top: 2px solid black;
              border-bottom: 2px solid black;
              padding-top: 135px;
              background-color: #D58EAE;
              
            }

            .linkedin-container {
              border-top: 2px solid black;
              border-left: 2px solid black;
              border-bottom: 2px solid black;
              padding-top: 172px;
              background-color: #D58EAE;
            }

            .work-container {
              border-bottom: 2px solid black;
              padding-top: 141px;
              background-color: #D58EAE;
              
            }

            .
            `
          }
</style>
      </div>
    )
  }
}

export default Home