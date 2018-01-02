import Component from 'inferno-component';
import './Auth.css'

class ResetPassword extends Component {
  constructor(props) {
		super(props);
		this.state = {
      email: "",
			showError: false,
      error: ""
		};
    this.handleEmailChange = this.handleEmailChange.bind(this);
	}
  reset(){
    // TODO
  }
  handleEmailChange(event){
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
          onInput={this.handleEmailChange}/>
        <button className="single btn" onClick={() => this.reset()}>Send me a resetting email!</button>
      </div>
  );
	}
}

export default ResetPassword;
