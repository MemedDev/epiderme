import React from 'react';
import 'jest-styled-components';
import { mount } from 'enzyme';

import Header from '../index';
import createTheme from '../../../styles/index';

const theme = createTheme();

describe('Header', () => {
  it('only with title', () => {
    const wrapper = mount(<Header theme={theme} title="Title" />);
    expect(wrapper.prop('title')).toEqual('Title');
  });

  it('with custom title component', () => {
    const CustomComponent = () => (
      <h2>Teste</h2>
    );
    const wrapper = mount(<Header theme={theme} title={<CustomComponent />} />);
    expect(typeof wrapper.prop('title')).toEqual('object');
    expect(wrapper.find('h2').text()).toEqual('Teste');
  });

  it('with subtitle', () => {
    const wrapper = mount(<Header theme={theme} title="Title" subtitle="Subtitle" />);
    expect(wrapper.prop('subtitle')).toEqual('Subtitle');
  });

  it('with custom subtitle component', () => {
    const CustomComponent = () => (
      <h2>Teste</h2>
    );
    const wrapper = mount(<Header theme={theme} title="Title" subtitle={<CustomComponent />} />);
    expect(typeof wrapper.prop('subtitle')).toEqual('object');
    expect(wrapper.find('h2').text()).toEqual('Teste');
  });

  it('with thumbnail', () => {
    const wrapper = mount(<Header theme={theme} title="Title" thumbnail="MY_PATH" />);
    expect(wrapper.prop('thumbnail')).toEqual('MY_PATH');
  });

  it('with custom thumbnail component', () => {
    const CustomComponent = () => (
      <img src="TESTE" alt="teste" prop="teste" />
    );
    const wrapper = mount(<Header theme={theme} title="Title" thumbnail={<CustomComponent />} />);
    expect(typeof wrapper.prop('thumbnail')).toEqual('object');
    expect(wrapper.find('img').prop('src')).toEqual('TESTE');
  });

  it('with icon', () => {
    const CustomComponent = () => (
      <img src="TESTE" alt="teste" prop="teste" />
    );

    const wrapper = mount(<Header theme={theme} title="Title" icon={<CustomComponent />} />);
    expect(typeof wrapper.prop('icon')).toEqual('object');
    expect(wrapper.find('img').prop('src')).toEqual('TESTE');
  });

  it('with divider', () => {
    const wrapper = mount(<Header theme={theme} title="Title" divider dividerColor="#bbb" />);
    expect(wrapper.prop('divider')).toEqual(true);
    expect(wrapper.prop('dividerColor')).toEqual('#bbb');
  });

  it('with text align', () => {
    const wrapper = mount(<Header theme={theme} title="Title" alignText="left" />);
    expect(wrapper.prop('alignText')).toEqual('left');
  });
});
