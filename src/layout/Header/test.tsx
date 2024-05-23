import { renderWithRouter } from '@/utils/test-utils';
import { fireEvent, screen } from '@testing-library/react';
import Header from '.';

describe('<Header />', () => {
  it('should render the Header', () => {
    renderWithRouter(<Header />);

    expect(screen.getByText(/Todo Board/i)).toBeInTheDocument();
    const login = screen.getByText(/Log in'/i);
    expect(login).toBeInTheDocument();
    fireEvent.click(login);
    expect(global.window.location.pathname).toContain('/login');
  });
});
