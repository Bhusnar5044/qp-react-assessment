import { renderWithRouter } from '@/utils/test-utils';
import { screen } from '@testing-library/react';
import Footer from '.';

describe('<Footer />', () => {
  it('should render the Footer', () => {
    renderWithRouter(<Footer />);

    expect(screen.getByText(/LOGO/i)).toBeInTheDocument();
    expect(screen.getByText(/. All Rights Reserved./i)).toBeInTheDocument();
  });
});
