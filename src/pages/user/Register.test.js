import { render } from 'inferno';
import Register from './Register';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<Register/>, div);
});
