import { createRoutesStub } from 'react-router';
import KitchenSinkPage from '..';
import { render, screen } from '@/utils/testing/reactTestingLibraryUtils';

describe('KitchenSinkPage', () => {
  describe('clientAction', () => {
    it('Returns errors if there is a validation error with the form data', () => {});
    it('Returns data and calls the toast if there are no validation errors', () => {});
  });
  it('Renders loader data', async () => {
    const RoutesStub = createRoutesStub([
      {
        path: '/',
        Component: () => (
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-expect-error
          <KitchenSinkPage
            loaderData={[
              { id: 1, title: 'Pos1', userId: 1, body: 'Body 1' },
              { id: 2, title: 'Post 2', userId: 2, body: 'Body 2' },
            ]}
          />
        ),
      },
    ]);

    render(<RoutesStub />);

    expect(screen.queryByText('Pos1')).toBeInTheDocument();
  });
});
