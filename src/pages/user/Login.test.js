import { render } from 'inferno';
import Login from './Login';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<Login />, div);
});
