import React, {Component} from 'react'
import FormGroup from 'react-bootstrap/lib/FormGroup'
import ControlLabel from 'react-bootstrap/lib/ControlLabel'
import FormControl from 'react-bootstrap/lib/FormControl'

class ContactMeForm extends Component {
  state = {
    formData: {
      email: '',
      name: '',
      message: ''
    },
    active: null,
    error: {}
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

  handleSubmit = ({target}) => {
    console.log("===========")
    console.log(target)
    console.log(this.state.formData)
    //sendmail
    
  }


  render() {
    return (
      <div>
      <form method="POST" action="https://formspree.io/apsaxena24@gmail.com">
        <div className="pseudo-table ">
            <input id="name" type="text" name="name" value={this.state.formData.name} onChange={this.handleInputChange}/>
            <label for="name">Name</label>
        </div>
        <div className="pseudo-table ">
            <input id="email" type="email" name="email" value={this.state.formData.email} onChange={this.handleInputChange}/>
            <label for="email">Email</label>
        </div>
        <div className="pseudo-table "><textarea rows="4" cols="50" name="message" placeholder="Your message" value={this.state.formData.message} onChange={this.handleInputChange}/></div>
        <div className="pseudo-table "><button class="button" onClick={this.handleSubmit}>Submit</button></div>
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
            }

            input { 
              border: none;
              border-bottom : 2px solid black;
              width: 100%;
              color: #D58EAE; 
            }

            input:focus + label { 
              color: #D58EAE; 
              font-weight: bold;
            }

            input:focus {
              border-bottom : 2px solid #D58EAE;
            }

            textarea {
              color: #D58EAE;
              padding: 10px;
              width: 100%;
              border: 2px solid black;
              font-size: bold;
            }

            button {
              width: 100%;
              padding: 16px 0;
              background-color: #D58EAE;
              color: black;
              font-weight: bold;
              border: black 2px solid;
            }

            button:hover {
              opacity: 0.8;
            }

            textarea::-webkit-input-placeholder {
              color: #D58EAE;
              opacity: 0.8;
              font-weight: bold;
            }

            textarea:-moz-placeholder { /* Firefox 18- */
              color: #D58EAE; 
              opacity: 0.8; 
              font-weight: bold;
            }

            textarea::-moz-placeholder {  /* Firefox 19+ */
              color: #D58EAE;  
              opacity: 0.8;
              font-weight: bold;
            }

            textarea:-ms-input-placeholder {
              color: #D58EAE;  
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

{/* <TextField
            name="email"
            labelName="Your email"
            isActive={this.state.active === "Your email"}
            onFocus={this.handleFocus}
            value={this.state.email}
            onChange={this.handleInputChange}/>
          <div className="button-container">
            <Button onClick={this.handleSubmit} className="btn">
              Submit
            </Button>
      </div> */
}
