import { describe, expect, test, it  } from 'vitest';
import { render, screen  } from '@testing-library/react';


import Toast from '../components/Toast';
import { SetStateAction } from 'react';
describe('App renders correctly', () => {

  test('renders Toast', () => {
    
    render(<Toast open={false} setOpen={function (value: SetStateAction<boolean>): void {
      throw new Error('Function not implemented.');
    } } theme={''} children={undefined} />);
    expect(screen).toMatchSnapshot();
  });
  
  
})