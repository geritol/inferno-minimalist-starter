import Component from 'inferno-component';
import {Link} from 'inferno-router'
import './Auth.css'

class Login extends Component {
  constructor(props) {
		super(props);
		this.state = {
      loginData: {
        username: '',
        password: ''
      },
			showError: false,
      error: ""
		};
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
	}
  login(){
    console.log(this)
    console.log(this.state.loginData)
  }
  handleUsernameChange(event){
     this.setState({loginData: {username: event.target.value, password: this.state.loginData.password}});
  }
  handlePasswordChange(event){
     this.setState({loginData: {username: this.state.loginData.username, password: event.target.value}});
  }
  callback(type, ref) {
    this[type] = ref
  }
  componentDidMount(){
    this.username.focus()
  }
	render() {
		return (
      <div className="column auth" >
        <div className="single errors" style={{visibility: this.state.showError? 'visible' : 'hidden'}}>{this.state.error}</div>
        <input className="single" type="text" placeholder="Username" ref={this.callback.bind(this, 'username')}
          value={this.state.loginData.username}
          onInput={this.handleUsernameChange}/>
        <input className="single" type="password" placeholder="Password"
          value={this.state.loginData.password}
          onInput={this.handlePasswordChange}/>
        <button className="single btn" onClick={() => this.login()}>Login!</button>
        <span class="helper-texts">
          <p>Do not have an account? <Link to="/register">Register!</Link></p>
          <p>Forgot your password? <Link to="/reset">Reset!</Link></p>
        </span>
      </div>
  );
	}
}

export default Login;
