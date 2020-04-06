import React, { Component } from 'react'

export default class Register extends Component {
  state = {
      form: {
        username: {
          type: "text",
          value: ""
        },
        password: {
          type: "password",
          value: ""
        },
        email: {
          type: "email",
          value:""
        }
      }
  }

  onChangeFormValue = e => {
    const name = e.target.name;
    const value = e.target.value;
    let updateForm = { ...this.state.form };
    updateForm[name].value = value;
    this.setState({
      form: updateForm
    })
  }
  render() {
    return (
      <div className="App"> 
        <form>
          <div>
              <label>User Name</label>
              <input
              type={this.form.password.type}
              name="password"
              onChange={this.onChangeFormValue}
              />              
          </div>
          <div>
            
          </div>
        </form>
      </div>
    )
  }
}
