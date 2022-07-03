import React from 'react';
import renderer from 'react-test-renderer';
import { ProductButtons } from '../../src/components/ProductButtons';

describe('ProductButtons', () => {
  it('should be render component', () => {
    const wrapper = renderer.create(<ProductButtons />);
    expect(wrapper).toMatchSnapshot();
  });
})