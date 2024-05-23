import { renderWithBoardProvider } from '@/utils/test-utils';
import { screen } from '@testing-library/react';
import Navbar from '.';

describe('<Navbar />', () => {
  it('should render the Navbar', () => {
    renderWithBoardProvider(<Navbar />);

    expect(screen.getByText(/ALL BOARDS/i)).toBeInTheDocument();

    expect(screen.getByTitle('Hide Sidebar')).toBeInTheDocument();

    expect(screen.getByText(/Create new Board/i)).toBeInTheDocument();
  });
});
