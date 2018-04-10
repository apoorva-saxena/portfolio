import React, {Component} from 'react'
import CommonHeader from '../CommonHeader';
import Grid from 'react-bootstrap/lib/Grid'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'
import work from '../../images/work3.png'
import ContactMeForm from '../ContactMeForm';

class ContactMe extends Component {
  render() {
    return(
      <div>
        <CommonHeader/>
        <Grid>
          <Row className="show-grid">
            <Col md={7}>
              <div className="form-header">
                <div><img src={work} className="work-img" alt="work"/></div> 
              </div>
              <div className="form-elements-container">
                <ContactMeForm/>
              </div>
            </Col>
            <Col md={5}>
            </Col>
          </Row>
        </Grid>
        <style jsx>
          {
            `
            .show-grid {
              padding-left: -15px;
            }
            
            .form-header {
              margin-top: 80px;
              padding: 24px 0px 24px 0px;
              border: black 2px solid;
              text-align: center;
            }

            .work-img {
              height: 60px;
            }

            .form-elements-container {
              border-left: black 2px solid;
              border-right: black 2px solid;
              border-bottom: black 2px solid;
              
            }
            `
          }
        </style>
      </div>
    )
  }
}

export default ContactMe