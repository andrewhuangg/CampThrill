import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      first_name: "",
      last_name: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
  }


  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(this.props.closeModal);
  }



  renderErrors() {
    if (this.props.formType === "login") {
      return (
        <div className="errors-login">
          <ul>
            {this.props.errors.map((error, i) => (
              <li key={`errors - ${i}`}>
                {error}
              </li>
            ))}
          </ul>
        </div>
      );
    } else {
      return (
        <div className="errors-signup">
          <ul>
            {this.props.errors.map((error, i) => (
              <li key={`errors - ${i}`}>
                {error}
              </li>
            ))}
          </ul>
        </div>
      );
    }
  }

  handleEmail(email) {
    let emailArr = email.split('');
    window.setInterval(() => {
      if (emailArr.length !== 0) {
        let char = emailArr.shift();
        this.setState({
          email: this.state.email + char
        });
      }
    }, 100);
  }


  handlePassword(password) {
    let passwordArr = password.split('');
    window.setInterval(() => {
      if (passwordArr.length !== 0) {
        let char = passwordArr.shift();
        this.setState({
          password: this.state.password + char
        });
      }
    }, 100);
  }
    // uses set interval to add 1 letter to each state using shift
    
  handleDemo(e) {
    e.preventDefault();
    let email = "mamba@lakers.com";
    let password = "lakers24";
    this.handleEmail(email);
    this.handlePassword(password);
    setTimeout(() => {
      const user = Object.assign({}, this.state);
      this.props.processForm(user).then(this.props.closeModal)
    }, 1600)
  }

  componentWillUnmount(){
    this.props.removeErrors();
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    })
  }



  render() {
    
    const login = 
      (<form className="login-form" onSubmit={this.handleSubmit}>

          <div className="login-form-input-container">

          <div className="form-title">
            <big className="welcome-title">Welcome back fellow thrillist!</big>
          </div>

          {this.renderErrors()}

          <button className="demo-button" onClick={this.handleDemo}>Demo Login</button>

              <fieldset className="spacer-container">
                <legend className="spacer">or</legend>
              </fieldset>
            
              <input
                type="text"
                value={this.state.email}
                onChange={this.update("email")}
                placeholder={"Email Address"}
                className="login-input"
              />
            <br></br>
              <input
                type="password"
                value={this.state.password}
                onChange={this.update("password")}
                placeholder={"Password"}
                className="login-input"
              />
            <br></br>

            <input 
              className="submit-button" 
              type="submit" 
              value={this.props.formType} 
            />

            <br></br>
            
            <div className="login-navigation-container">
              <span className="login-navigation-span">Don't have a CampThrill account?</span>
              {this.props.otherForm}
            </div>

          </div>
        </form>)

    const signup = 
      (<form className="login-form" onSubmit={this.handleSubmit}>

        <div className="signup-form-input-container">

          <div className="form-title-signup">
            <big className="welcome-title-signup">Become a fellow thrillist!</big>
          </div>

          {this.renderErrors()}

          <input
            type="text"
            value={this.state.first_name}
            onChange={this.update("first_name")}
            placeholder={"First Name"}
            className="signup-input"
          />

          <br></br>

            <input
              type="text"
              value={this.state.last_name}
              onChange={this.update("last_name")}
              placeholder={"Last Name"}
              className="signup-input"
            />

          <br></br>
          
            <input
              type="text"
              value={this.state.email}
              onChange={this.update("email")}
              placeholder={"Email Address"}
              className="signup-input"
            />
          
          <br></br>

            <input
              type="password"
              value={this.state.password}
              onChange={this.update("password")}
              placeholder={"Password"}
              className="signup-input"
            />

          <br></br>

          <input 
            className="submit-button" 
            type="submit" 
            value={this.props.formType} 
          />

          <div className="signup-navigation-container">
            <span className="signup-navigation-span">Already a thrillist?</span>
            {this.props.otherForm}
          </div>
          
        </div>
      </form>)

    const form = (this.props.formType === "login" ? login : signup)
    
    return (
      <div className="login-form-container">
        { form }
      </div>
    )
  }
}

export default SessionForm;