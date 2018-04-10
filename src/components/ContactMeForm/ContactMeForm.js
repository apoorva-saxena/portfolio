import React, {Component} from 'react'
import FormGroup from 'react-bootstrap/lib/FormGroup'
import ControlLabel from 'react-bootstrap/lib/ControlLabel'
import FormControl from 'react-bootstrap/lib/FormControl'


class ContactMeForm extends Component {
constructor(props, context) {
  super(props, context);

  this.handleChange = this
    .handleChange
    .bind(this);

  this.state = {
    value: ''
  };
}

getValidationState() {
  const length = this.state.value.length;
  if (length > 2) 
    return 'success';
  else if (length > 5) 
    return 'warning';
  else if (length > 0) 
    return 'error';
  return null;
}

handleChange(e) {
  this.setState({value: e.target.value});
}
  render() {
    return (
      <div>
        <form>
        <FormGroup
          controlId="formBasicText"
          validationState={this.getValidationState()}
        >
          <ControlLabel>Name</ControlLabel>
          <FormControl
            type="text"
            value={this.state.value}
            placeholder="Enter name"
            onChange={this.handleChange}
          />
          {/* <FormControl.Feedback /> */}
        </FormGroup>
      </form>
      </div>
    )
  }
}

export default ContactMeForm