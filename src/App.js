import React, {Component} from 'react';
import {BrowserRouter as Router, Route, NavLink, Link, Switch} from 'react-router-dom'
import Home from './components/Home'
import ContactMe from './components/ContactMe'

class App extends Component {
  render() {
    return (
      <div className="App">
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
          integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
          crossorigin="anonymous"/>
        <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/contact-me" component={ContactMe}/>
            {/* <Route exact path="/questions" component={Question}/>
            <Route exact path="/sign-in" component={SignIn}/>
            <Route exact path="/sign-up" component={SignUp}/> */}
            {/* <Route path="/:name" component={Category}/> */}
          </Switch>
        </Router>
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Apoorva Saxena</h1>
          <div> */}
            {/* <Grid>
              <Row className="show-grid">
                <Col xs={6} md={4}>
                  <code>&lt;{'Col xs={6} md={4}'} /">&gt;</code>
                </Col>
                <Col xs={6} md={4}>
                  <code>&lt;{'Col xs={6} md={4}'} /">&gt;</code>
                </Col>
                <Col xsHidden md={4}>
                  <code>&lt;{'Col xsHidden md={4}'} /">&gt;</code>
                </Col>
              </Row>
            </Grid> */}
            {/* <span>About  </span>
            <span>CV  </span>
            <span>Github Projects  </span>
            <span>LinkedIN  </span> */}
          {/* </div> */}
        {/* // </header> */}
        {/* // <p className="App-intro"></p> */}
      </div>
    )
  }
}

export default App;
