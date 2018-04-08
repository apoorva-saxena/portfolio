import React, {Component} from 'react'
import logo from '../../images/logo.png'

class Header extends Component {
  render() {
    const {onSignInPage} = this.props
    return (
      <div className="App">
        <header className="App-header">
          <div><img src={logo} className="App-logo" alt="logo"/></div>
          <div className="intro">Hi, I am Apoorva</div>
          <div>I am a full stack developer in node js, express, react and angular. I am a full time developer who loves reading books and have interest in robotics.</div>
        </header>
        <style jsx>
          {
            ` 
            .App-logo {
              height: 80px;
            }

            .App-header {
              height: 150px;
              padding: 20px;
              color: black;
            }

            .App-title {
              font-size: 1.5em;
            }

            .App {
              text-align: center;
              padding-bottom: 60px;
            }

            .intro {
              font-size: 1.5em;
              padding-top: 28px;
            }

            `
          }
</style>
      </div>
    )
  }
}

export default Header