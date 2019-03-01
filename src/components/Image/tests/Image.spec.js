import { mount } from 'enzyme';
import React from 'react';

import ImageComponent from '../index';


describe('Image', () => {
  it('should render the Image', () => {
    const image = {
      src: 'path/file.png',
      alt: 'text',
    };
    const wrapper = mount(<ImageComponent src={image.src} alt={image.alt} />);
    const wrapperImage = wrapper.find('img');

    expect(wrapperImage.prop('src')).toEqual(image.src);
    expect(wrapperImage.prop('alt')).toEqual(image.alt);
  });
});
