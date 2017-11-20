import React from 'react';
import {render} from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import './log2.scss';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
      email:'',
      loginenb: true,
    }
  }
  namechange(event) {
    this.setState({username: event.target.value})
  }
  passchange(event) {
    this.setState({password: event.target.value})
  }
  emailchange(event) {
    this.setState({email: event.target.value})
  }
  login() {
    const username = this.state.username;
	if(username === '')
	{
	   alert('no value');
	}
	else
	{
    	   alert(this.state.username);
	}
  }
  signup() {
    alert(this.state.email);
  }
  tosignup(){
    this.setState({loginenb: false})
  }
  tologin(){
    this.setState({loginenb: true})
  }
  render () {
    const style = {
      margin: 15,
    };

  return (
    <div>
        <MuiThemeProvider>
	<AppBar title="Facebook" />
          <div className="login"><center>

	{ this.state.loginenb ?
	<div>
	     <h2>Login Credintial</h2>
             <TextField
             hintText="Enter your Username"
             floatingLabelText="Username"
             onChange = {this.namechange.bind(this)}
             />
           <br/>
             <TextField
               type="password"
               hintText="Enter your Password"
               floatingLabelText="Password"
             onChange = {this.passchange.bind(this)}
               />
             <br/>
	     <br/>
             <RaisedButton label="SignIn" primary={true} style={style} onClick={this.login.bind(this)}/>
             <br/>
             <label className="butt" onClick={this.tosignup.bind(this)}>Don't have an account yet?</label>
	</div>
	:
	<div>
	     <h2>SignUp Credintial</h2>
           <TextField
             hintText="Enter your First Name"
             floatingLabelText="User Name"
             onChange = {this.namechange.bind(this)}
             />
           <br/>

           <TextField
             hintText="Enter your Email"
             type="email"
             floatingLabelText="Email"
             onChange = {this.emailchange.bind(this)}
             />
           <br/>
           <TextField
             type = "password"
             hintText="Enter your Password"
             floatingLabelText="Password"
             onChange = {this.passchange.bind(this)}
             />
           <br/>
           <RaisedButton label="Submit" primary={true} style={style} onClick={this.signup.bind(this)}/>
             <br/>
             <label className="butt" onClick={this.tologin.bind(this)}>Already have an account?</label>

	</div>
	}

         </center></div>
         </MuiThemeProvider>

        </div>
    );
  }
}

render(<App/>, document.getElementById('app'));



