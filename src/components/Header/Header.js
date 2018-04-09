import React, {Component} from 'react'
import logo from '../../images/logo.png'
import heart from '../../images/heart.png'
import smiley from '../../images/smiley.png'
import { getCount } from '../../lib/count';

class Header extends Component {
  state = {
    count: getCount()
  }

  render() {
    // updateCount()
    const {onSignInPage} = this.props
    const {count} = this.state
    return (
      <div className="App">
        <header className="App-header">
          <div><img src={logo} className="App-logo" alt="logo"/></div> 
          {/* <div className="count"><span className="secondary-text">People who like this site:</span>{' '}{count}{' '}<img src={smiley}className="smiley" alt="smiley"/></div> */}
          <div className="intro">Hi, I am Apoorva</div>
          <div>I am a full stack developer in node js, express, react and angular. I love reading books and have interest in robotics.</div>
          {/* <div className="heart-container"> <span className="secondary-text">Like the site? Click the heart : </span><img src={heart} className="heart" alt="heart"/></div> */}
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
              padding-bottom: 70px;
            }

            .intro {
              font-size: 1.5em;
              padding-top: 28px;
            }

            .heart {
              width: 22px;
            }

            .heart:hover {
              opacity: 0.8;
            }

            .secondary-text{
              opacity: 0.5;
            }

            .heart-container {
              padding-top: 15px;
            }
            
            .count {
              float: right;
              margin-top: -72px;
              padding-right: 20px;
            }

            .smiley {
              width: 18px;
            }

            .smiley:hover {
              opacity: 0.6;
            }
            `
          }
</style>
      </div>
    )
  }
}

export default Header