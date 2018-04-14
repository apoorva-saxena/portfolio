import React, {Component} from 'react'
import CommonHeader from '../CommonHeader';
import Grid from 'react-bootstrap/lib/Grid'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'
import work from '../../images/work3.png'
import ContactMeForm from '../ContactMeForm';
import msgsent from '../../images/msgsent.png'
import msgnotsent from '../../images/msgnotsent.png'

class ContactMe extends Component {
  state = {
    sent : false
  }

  handleMsgSentStatus = (event) => {
    event.preventDefault()
    this.setState({
      sent: true
    })
  }
  render() {
    return(
      <div>
        <CommonHeader/>
        <Grid>
          <Row className="show-grid">
            <Col md={7}>
              <div className="form-header">
                <div><img src={work} className="work-img" alt="work"/>
                  {this.state.sent ? 
                  (<span>
                    <img src={msgsent} className="msgsent" alt="msgsent"/>
                  </span>)
                  :
                  (<span>
                    <img src={msgnotsent} className="msgnotsent" alt="msgnotsent"/>
                  </span>)
                  }
                </div> 
              </div>
              <div className="form-elements-container">
                <ContactMeForm sent={this.state.sent} onSubmit={this.handleMsgSentStatus}/>
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

            .msgnotsent {
              width: 54px;
            }

            .msgsent {
              width: 54px;
            }
            `
          }
        </style>
      </div>
    )
  }
}

export default ContactMe