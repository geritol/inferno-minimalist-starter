import { render } from 'inferno';
import ResetPassword from './ResetPassword';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<ResetPassword />, div);
});
