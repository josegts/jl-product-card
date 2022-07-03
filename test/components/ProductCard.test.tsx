import React from 'react'
import renderer  from 'react-test-renderer'
import { ProductCard } from '../../src/components/ProductCard';
import { ProductTitle } from '../../src/components/ProductTitle';



describe('ProductCard', () => {
  const product1 = {
    id: '1',
    title: 'Coffee Mug with a nice picture',
    img: './coffee-mug.png'
  }

  test('should be show title with prodact data', () => {
    const wrapper = renderer.create(<ProductCard product={product1} >
      {() => (<ProductTitle/>)}
    </ProductCard>)

    expect(wrapper).toMatchSnapshot()
  })
})