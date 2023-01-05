import { describe, expect, test, it  } from 'vitest';
import { render, screen  } from '@testing-library/react';

import Button from '../components/Button'
describe('Button renders correctly', () => {

  test('renders without crashing', () => {
    render(<Button className={'add2cart'} />);
    expect(screen).toMatchSnapshot();
  });
})