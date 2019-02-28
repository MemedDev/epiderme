import React from 'react';
import { shallow } from 'enzyme';

import Button from '../index';

describe('Button', () => {
  it('should pass', () => {
    const wrapper = shallow(<Button>My Button</Button>);

    expect(true).toBe(true);
  });
});
