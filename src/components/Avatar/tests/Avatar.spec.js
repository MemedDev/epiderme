import { mount } from 'enzyme';
import React from 'react';

import Avatar from '../index';
import Image from '../../Image';

describe('Avatar', () => {
  const theme = {
    palette: {
      black: {
        black24: 'rgb(51, 51, 51, 0.24)',
      },
    },
    typography: {
      fontFamily: 'test',
    },
  };

  describe('Render', () => {
    it('should not render children with default', () => {
      const wrapper = mount(<Avatar theme={theme} />);

      expect(!wrapper.props().children).toBe(true);
    });

    it('should render img', () => {
      const image = {
        src: 'path/file.png',
        alt: 'text',
      };
      const wrapper = mount(
        <Avatar theme={theme}>
          <Image src={image.src} alt={image.alt} />
        </Avatar>
      );

      expect(wrapper.find('img').exists()).toBe(true);
    });

    it('should render Text', () => {
      const text = 'MD';
      const wrapper = mount(
        <Avatar theme={theme}>
          {text}
        </Avatar>
      );

      expect(wrapper.props().children).toEqual(text);
    });
  });
});
