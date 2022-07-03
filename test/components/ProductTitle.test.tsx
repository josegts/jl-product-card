import React from 'react'
import renderer  from 'react-test-renderer'
import { ProductCard } from '../../src/components/ProductCard';
import { ProductTitle } from '../../src/components/ProductTitle';



describe('ProductTitle', () => {
  const product1 = {
    id: '1',
    title: 'Coffee Mug with a nice picture',
    img: './coffee-mug.png'
  }
  /*const product2 = {
    id: '2',
    title: 'Coffee Mug with a nice picture',
    img: './coffee-mug2.png'
  }*/

  it('should be render component', () => {
    const wrapper = renderer.create(<ProductTitle title='any title' className='other-classmane'/>)
    expect(wrapper).toMatchSnapshot()
  })

  test('should be show title with prodact data', () => {
    const wrapper = renderer.create(<ProductCard product={product1} >
      {() => (<ProductTitle/>)}
    </ProductCard>)

    expect(wrapper).toMatchSnapshot()
  })
})