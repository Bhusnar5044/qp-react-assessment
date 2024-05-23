import { render, screen } from '@testing-library/react';

import { ToggleButton } from '.';

describe('<ToggleButton />', () => {
  it('should render the ToggleButton', () => {
    const { container } = render(<ToggleButton />);

    expect(screen.getByRole('button')).toBeInTheDocument();

    expect(container.firstChild).toBeInTheDocument();
  });
});
