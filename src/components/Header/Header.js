import React, {Component} from 'react'
import logo from '../../images/logo.png'
import heart from '../../images/heart.png'
import smiley from '../../images/smiley.png'

class Header extends Component {
  state = {
    count: 0
  }

  componentDidMount () {
    fetch('https://portfolio-apoorva.herokuapp.com/count')
    .then(res => {
      return res.json()
    }).then(count => {
      this.setState({count: count[0].count})
    }).catch(err => {
      console.log(err)
    })
  }

  handleClick = async () => {
    this.setState({count: this.state.count + 1})
    await fetch('https://portfolio-apoorva.herokuapp.com/count', {
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
        body: this.state.count
      })
  }

  render() {
    const {count} = this.state
    return (
      <div className="App">
        <header className="App-header">
        <div className="header-container">
          <div><img src={logo} className="App-logo" alt="logo"/></div> 
          <div className="intro">Hi, I am Apoorva</div>
          <div>I am a full stack developer in node js, express, react and angular. I love reading books and have interest in robotics.</div>
          <div className="heart-container"> 
            <span className="secondary-text">Like the site? Click the heart : </span>
            <img src={heart} className="heart" alt="heart" onClick={this.handleClick}/>
          </div>
          <div className="count">
            <span className="secondary-text">People who like this site:</span>
            <span>{' '}{count}{'  '}</span>
            <img src={smiley}className="smiley" alt="smiley"/>
          </div>
        </div>
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

            .header-container {
              padding-bottom: 30px;
            }

            .App-title {
              font-size: 1.5em;
            }

            .App {
              text-align: center;
              padding-bottom: 100px;
              height: 256px;
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
              margin-top: -195px;
              padding-right: 16px;
            }

            @media only screen and (max-width: 700px) {
              .count {
                padding-top: 20px;
                float: none;
                margin-top: -20px
              }
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