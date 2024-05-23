import { renderWithBoardProvider } from '@/utils/test-utils';
import { fireEvent, screen } from '@testing-library/react';
import { BoardHeading } from '.';

describe('<BoardHeading />', () => {
  it('should render the BoardHeading', () => {
    renderWithBoardProvider(<BoardHeading />);

    expect(screen.getByText(/Add New Task/i)).toBeInTheDocument();
    const kebabMenu = screen.getByTitle('kebab menu');
    expect(kebabMenu).toBeInTheDocument();
    fireEvent.click(kebabMenu);
    expect(
      screen.getByRole('button', {
        name: /Edit Board/i,
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', {
        name: /Delete Board/i,
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', {
        name: /Logout/i,
      })
    ).toBeInTheDocument();
  });
});
