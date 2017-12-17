import Component from 'inferno-component';
import {Link} from 'inferno-router'
import './Auth.css'

class ResetPassword extends Component {
  constructor(props) {
		super(props);
		this.state = {
      email: "",
			showError: false,
      error: ""
		};
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
	}
  login(){
    console.log(this)
    console.log(this.state.loginData)
  }
  handlePasswordChange(event){
     this.setState({email: event.target.value});
  }
  callback(type, ref) {
    this[type] = ref
  }
  componentDidMount(){
    this.email.focus()
  }
	render() {
		return (
      <div className="column auth" >
        <div className="single errors" style={{visibility: this.state.showError? 'visible' : 'hidden'}}>{this.state.error}</div>
        <input className="single" type="email" placeholder="Email address" ref={this.callback.bind(this, 'email')}
          value={this.state.email}
          onInput={this.handleUsernameChange}/>
        <button className="single btn" onClick={() => this.login()}>Send me a resetting email!</button>
      </div>
  );
	}
}

export default ResetPassword;
