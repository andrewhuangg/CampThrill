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
    this.props.processForm(user);
    this.setState({      
      password: ""
    });
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

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`errors - ${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
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

  handleFirstName(fname) {
    let firstNameArr = fname.split('');
    window.setInterval(() => {
      if (firstNameArr.length !== 0) {
        let char = firstNameArr.shift();
        this.setState({
          first_name: this.state.first_name + char
        });
      }
    }, 100);
  }
  
  handleLastName(lname) {
    let lastNameArr = lname.split('');
    window.setInterval(() => {
      if (lastNameArr.length !== 0) {
        let char = lastNameArr.shift();
        this.setState({
          last_name: this.state.last_name + char
        });
      }
    }, 100);
  }
    

  handleDemo(e) {
    e.preventDefault();
    this.setState({
      email: "",
      password: ""
    });
    let email = "mamba@lakers.com";
    let password = "lakers24";
    this.handleEmail(email);
    this.handlePassword(password);
    // let fname = "kobe"
    // let lname = "bryant"
    // this.handleFirstName(fname);
    // this.handleLastName(lname);
    setTimeout(() => {
      const user = Object.assign({}, this.state);
      this.props.processForm(user);
    }, 1500);
    this.setState({
      email: "",
      password: ""
    })
  }
    //calls both password and email handles
    //uses set time out on process form to submit


  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`errors - ${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    })
  }

  render() {

    const login = 
      (<form onSubmit={this.handleSubmit}>
          <div>
            <h1>Welcome to campThrill</h1>
            please {this.props.formType} or {this.props.navLink}
          </div>
          <br></br>
          {this.renderErrors()}
          <div>
            <label>Email:
                <input
                type="text"
                value={this.state.email}
                onChange={this.update("email")}
              />
            </label>
            <br></br>
            <label>Password:
                <input
                type="password"
                value={this.state.password}
                onChange={this.update("password")}
              />
            </label>
            <br></br>

            <input type="submit" value={this.props.formType} />
            <button onClick={this.handleDemo}>Demo Login</button>
          </div>
        </form>)

    const signup = 
    (<form onSubmit={this.handleSubmit}>
          <div>
            <h1>Welcome to campThrill</h1>
            please {this.props.formType} or {this.props.navLink}
          </div>
        <br></br>
        {this.renderErrors()}
        <div>
          <label>First Name:
              <input
              type="text"
              value={this.state.first_name}
              onChange={this.update("first_name")}
            />
          </label>
          <br></br>
          <label>Last Name:
              <input
              type="text"
              value={this.state.last_name}
              onChange={this.update("last_name")}
            />
          </label>
          <br></br>
          <label>Email:
              <input
              type="text"
              value={this.state.email}
              onChange={this.update("email")}
            />
          </label>
          <br></br>
          <label>Password:
              <input
              type="password"
              value={this.state.password}
              onChange={this.update("password")}
            />
          </label>
          <br></br>
          <input type="submit" value={this.props.formType} />
        </div>
      </form>)

    const form = (this.props.formType === "login" ? login : signup)

    return (
      <div>
        { form }
      </div>
    )
  }
}

export default SessionForm;