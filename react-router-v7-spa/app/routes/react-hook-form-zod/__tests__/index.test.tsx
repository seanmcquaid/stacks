import { createRoutesStub } from 'react-router';
import userEvent from '@testing-library/user-event';
import ReactHookFormZodPage from '..';
import {
  render,
  screen,
  waitFor,
} from '@/utils/testing/reactTestingLibraryUtils';

describe('ReactHookFormZodPage', () => {
  it('Displays an error message if the passwords do not match', async () => {
    const user = userEvent.setup();
    const RoutesStub = createRoutesStub([
      {
        path: '/',
        Component: ReactHookFormZodPage,
      },
    ]);
    render(<RoutesStub />);
    const passwordInput = screen.getByLabelText('Password');
    const confirmPasswordInput = screen.getByLabelText('Confirm Password');
    await user.type(passwordInput, 'password');
    await user.type(confirmPasswordInput, 'password1');
    await waitFor(() =>
      expect(screen.getByText('Passwords do not match')).toBeInTheDocument(),
    );
  });
});
