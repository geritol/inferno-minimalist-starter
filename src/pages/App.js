import Component from 'inferno-component';
import MenuBar from './../components/menu-bar'

class App extends Component {
	render() {
		return (
      <div>
      <MenuBar />
				<div class='main'>
	      {this.props.children}
				</div>
      </div>
    );
	}
}

export default App;
