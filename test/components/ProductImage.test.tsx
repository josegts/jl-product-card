import React from 'react';
import renderer from 'react-test-renderer';
import { ProductCard } from '../../src/components/ProductCard';
import { ProductImage } from '../../src/components/ProductImage';

describe('ProductImage', () => {
  const product1 = {
    id: '1',
    title: 'Coffee Mug with a nice picture',
    img: './coffee-mug.png'
  }
  test('shound be render component', () => {
    const wrapper = renderer.create(<ProductImage img='no-image' />);
    expect(wrapper).toMatchSnapshot();
  })

  test('should be render image when send from product', () => {
    const wrapper = renderer.create(<ProductCard product={product1}>
      {() => (<ProductImage />)}
    </ProductCard>)
    expect(wrapper).toMatchSnapshot();
  })
})