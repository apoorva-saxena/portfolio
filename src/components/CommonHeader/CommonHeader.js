import React, {Component} from 'react'
import logo from '../../images/logo.png'
import {colors} from '../../lib/variables'

class Header extends Component {
  render () {
    return (<div>
      <header className="App-header">
        <div><a href="/"><img src={logo} className="App-logo" alt="logo"/></a></div> 
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
              background-color: ${colors.bgPrimary}; 
            }
            `
          }
      </style>
    </div>)
  }
}

export default Header