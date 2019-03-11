import React from 'react';
import { mount } from 'enzyme';
import 'jest-styled-components';

import createTheme from '../../../styles/index';
import Icon from '../index';

const theme = createTheme();

describe('Icon', () => {
  it('should render with default props', () => {
    const wrapper = mount(<Icon name="done" theme={theme} />);

    expect(wrapper.prop('size')).toBe('medium');
    expect(wrapper.prop('type')).toBe('regular');
  });

  it('should render an "i" tag', () => {
    const wrapper = mount(<Icon name="done" theme={theme}>Link</Icon>);

    expect(wrapper.find('i').exists()).toBe(true);
  });
});
