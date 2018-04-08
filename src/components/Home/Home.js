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
        <Grid>
          <Row className="show-grid">
                <Col sm={6} md={3}>
                <div className="top-img-container"></div>
                </Col>
                <Col sm={6} md={3}>
                <div className="stuff"><img src={CV} className="cv" alt="CV"/></div>
                </Col>
                <Col sm={6} md={3}>
                <div className="stuff"><img src={linkedin} className="linkedin" alt="linkedin"/></div>
                </Col>
                <Col sm={6} md={3}>
                <div className="top-img-container"></div>
                </Col>
            </Row>
            <Row className="show-grid">
                <Col sm={6} md={3}>
                <div className="book-container"><img src={books} className="books-img" alt="books"/></div>
                </Col>
                <Col sm={6} md={3}>
                <div className="stuff"><img src={github} className="github" alt="github"/></div>
                </Col>
                <Col sm={6} md={3}>
                <div className="stuff"><img src={work} className="work" alt="work"/></div>
                </Col>
                <Col sm={6} md={3}>
                <div className="stuff-container"><img src={stuff} className="stuff-img" alt="stuff"/></div>
                </Col>
            </Row>
        </Grid>
        </div>

        <style jsx>
          {
            ` 
            .stuff {
              border: 1px black solid;
              padding: 160px 48px 0 48px;              
            }

            .books-img {
              width: 100px;
            }

            .stuff-img {
              height:210px;
            }

            .stuff-container {
              padding: 52px 20px 0 20px;
              border: 1px black solid;
              border-top: 1px transparent solid;
              
            }

            .top-img-container {
              border: 1px black solid;
              border-bottom: 1px transparent solid;
              padding: 264px 20px 0 20px;
            }

            .book-container {
              border: 1px black solid;
              border-top: 1px transparent solid;
              padding: 160px 48px 0 48px;
            }

            .cv {
              width: 200px;
            }

            .linkedin {
              width: 300px;
            }

            .github {
              width: 200px
            }

            .work {
              width: 220px
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