import React, {Component} from 'react'
import FormGroup from 'react-bootstrap/lib/FormGroup'
import ControlLabel from 'react-bootstrap/lib/ControlLabel'
import FormControl from 'react-bootstrap/lib/FormControl'
import {colors} from '../../lib/variables'

class ContactMeForm extends Component {
  state = {
    formData: {
      email: '',
      name: '',
      message: ''
    },
    active: null,
    error: {},
    sent: this.props.sent
  }

  handleFocus = ({target}) => {
    const name = target.name
    this.setState({active: name})
  }

  handleInputChange = ({target}) => {
    let name = target.name
    let value = target.value
    this.setState(prevState => ({
      formData: {
        ...prevState.formData,
        [name]: value
      }
    }))
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    console.log(this.state.formData)
    // await fetch('https://portfolio-apoorva.herokuapp.com/sendmail', {
    await fetch('https://portfolio-apoorva.herokuapp.com/sendmail', {
      
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
        body: JSON.stringify(this.state.formData)
      })
  }


  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
        <div className="pseudo-table ">
            <input id="name" type="text" name="name" value={this.state.formData.name} onChange={this.handleInputChange}/>
            <label for="name">Name</label>
        </div>
        <div className="pseudo-table ">
            <input id="email" type="email" name="email" value={this.state.formData.email} onChange={this.handleInputChange}/>
            <label for="email">Email</label>
        </div>
        <div className="pseudo-table "><textarea rows="4" cols="50" name="message" placeholder="Your message..." value={this.state.formData.message} onChange={this.handleInputChange}/></div>
        <div className="pseudo-table "><button onClick={(e) => { this.props.onSubmit(e); this.handleSubmit(e); }}>Submit</button></div>
      </form> 
    <style jsx> {
      ` 

            form {
              padding: 32px 0;
            }

            .pseudo-table { 
              padding: 24px 32px;
            }

            label { 
              color: black;
              left: 48px; 
              font-size: 18px;
            }

            input { 
              border: none;
              border-bottom : 2px solid black;
              width: 100%;
              color: ${colors.bglogo}; 
              font-size: 18px;
              -webkit-border-radius: 0;
              border-radius: 0;
            }

            input:focus + label { 
              color: ${colors.bgPrimary}; 
              font-weight: bold;
            }

            input:focus {
              border-bottom : 2px solid ${colors.bgPrimary};
            }

            textarea {
              color: ${colors.bglogo};
              padding: 10px;
              width: 100%;
              border: 2px solid black;
              font-size: bold;
              font-size:18px;
            }

            button {
              width: 100%;
              padding: 16px 0;
              background-color: ${colors.bgPrimary};
              color: black;
              font-weight: bold;
              border: black 2px solid;
            }

            button:hover {
              opacity: 0.8;
            }

            textarea::-webkit-input-placeholder {
              color: ${colors.bgPrimary};
              opacity: 0.8;
              font-weight: bold;
            }

            textarea:-moz-placeholder { /* Firefox 18- */
              color: ${colors.bgPrimary}; 
              opacity: 0.8; 
              font-weight: bold;
            }

            textarea::-moz-placeholder {  /* Firefox 19+ */
              color: ${colors.bgPrimary};  
              opacity: 0.8;
              font-weight: bold;
            }

            textarea:-ms-input-placeholder {
              color: ${colors.bgPrimary};  
              opacity: 0.8;
              font-weight: bold;
            }
             `
    } 
    </style>
      </div>)
  }

}

export default ContactMeForm
