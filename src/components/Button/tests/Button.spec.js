import React from 'react';
import { shallow, mount } from 'enzyme';
import 'jest-styled-components';

import createTheme from '../../../styles/index';
import Button from '../index';

const theme = createTheme();

describe('Button', () => {
  it('should render with default props', () => {
    const wrapper = shallow(<Button theme={theme}>My Button</Button>);

    expect(wrapper.prop('as')).toBe('button');
    expect(wrapper.prop('color')).toBe('default');
    expect(wrapper.prop('aspect')).toBe('button');
  });

  it('should render the passed element on component prop', () => {
    const wrapper = mount(<Button component="a" theme={theme}>Link</Button>);

    expect(wrapper.find('a').exists()).toBe(true);
  });
});
