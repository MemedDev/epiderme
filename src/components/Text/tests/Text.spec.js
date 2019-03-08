import React from 'react';
import { mount } from 'enzyme';
import 'jest-styled-components';

import createTheme from '../../../styles/index';
import Text from '../index';

const theme = createTheme();

describe('Text', () => {
  it('should render with default props', () => {
    const wrapper = mount(<Text theme={theme}>My Text</Text>);

    expect(wrapper.prop('align')).toBe('inherit');
    expect(wrapper.prop('color')).toBe('default');
    expect(wrapper.prop('component')).toBe('p');
    expect(wrapper.prop('scale')).toBe('body1');
    expect(wrapper.prop('weight')).toBe('regular');
  });
});
