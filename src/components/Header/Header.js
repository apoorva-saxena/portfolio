import React, {Component} from 'react'
import logo from '../../images/logo.png'

class Header extends Component {
  render() {
    const {onSignInPage} = this.props
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Apoorva Saxena</h1>
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
            }
            `
          }
</style>
      </div>
    )
  }
}

export default Header