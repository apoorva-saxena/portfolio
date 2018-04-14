import React, {Component} from 'react'
class TextField extends Component  {
  render() {
    const { name, labelName, value, onChange } = this.props 
    return (
      <div className="text-field-container">
        <input id={name} type="text" value={onChange} required />
        {/* {(isActive || value )? <label for={name} className="has-value">{labelName}</label> : <label for="name">{labelName}</label>} */}
        <style jsx>
          {
            ` 
            label {
              color: grey;
              position: absolute;
              left: 48px;
            }

            input {
              border: none;
              border-bottom : 1px solid black;
              width: 100%;
              color: black;
            }

            .text-field-container {
              position relative;
              padding: 32px;
            }

            .has-value {
              color: purple;
            }
            `
          }
      </style>
      </div>
    )
  }
}

export default TextField