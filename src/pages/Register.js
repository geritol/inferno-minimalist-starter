import Component from 'inferno-component';
import {Link} from 'inferno-router';
import './Auth.css'

class Register extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showError: false,
			error: ""
		};
	}
	render() {
		return (
			<div className="column auth" >
				<div className="single errors" style={{visibility: this.state.showError? 'visible' : 'hidden'}}>{this.state.error}</div>
				<input className="single" type="email" placeholder="Email address"/>
				<input className="single" type="text" placeholder="Username"/>
				<input className="single" type="password" placeholder="Password"/>
				<input className="single" type="password" placeholder="Password (again)"/>
				<button className="single btn" onClick={() => this.login()}>Register!</button>
				<span class="helper-texts">
					<p>Already have an account? <Link to="/login">Login!</Link></p>
				</span>
			</div>
	);
	}
}

export default Register;
