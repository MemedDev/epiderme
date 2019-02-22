import React from 'react';
import { shallow } from 'enzyme';

import Button from './index';

describe('Button', () => {
  it('should render a button tag', () => {
    const wrapper = shallow(<Button>My Button</Button>);

    expect(wrapper.find('button').exists()).toBe(true);
  });
});
