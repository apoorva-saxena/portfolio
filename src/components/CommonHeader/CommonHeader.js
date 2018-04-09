import React, {Component} from 'react'
import logo from '../../images/logo.png'

class Header extends Component {
  render () {
    return (<div>
      <header className="App-header">
        <div><img src={logo} className="App-logo" alt="logo"/></div> 
      </header>
      <style jsx>
          {
            ` 
            .App-logo {
              height: 40px;
            }

            .App-header {
              padding: 20px;
              color: black;
              background-color: #D58EAE; 
            }
            `
          }
      </style>
    </div>)
  }
}

export default Header