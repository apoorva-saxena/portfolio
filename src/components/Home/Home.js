import React, {Component} from 'react'
import Header from '../Header'
import Grid from 'react-bootstrap/lib/Grid'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'


class Home extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Grid>
          <Row className="show-grid">
                <Col sm={6} md={3}>
                hjhj
                </Col>
                <Col sm={6} md={3}>
                hjh
                </Col>
                <Col sm={6} md={3}>
                hjhj
                </Col>
                <Col sm={6} md={3}>
                jkjk
                </Col>
              </Row>
        </Grid>

        <style jsx>
          {
            ` `
          }
</style>
      </div>
    )
  }
}

export default Home