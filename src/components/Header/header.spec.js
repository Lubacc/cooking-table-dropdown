import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';
import { findByTestAttr } from '../../../Utils/index';

const setUp = (props = {}) => {
  const component = shallow(<Header {...props} />);
  return component;
};

describe('Header component', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it('It should render without errors', () => {
    const wrapper = findByTestAttr(component, 'appBar');
    expect(wrapper.length).toBe(1);
  });
});
