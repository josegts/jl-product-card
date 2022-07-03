# TSDX React User Guide

Demo libreria

### Jose Gutierrez

## ejemple

```
import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle
} from '../components';
import { ProductProps } from '../interfaces/Interfaces';
export interface ProductInCard extends ProductProps {
  count: number;
}

const products: ProductProps[] = [
  {
    id: '1',
    title: 'Coffee Mug with a nice picture',
    img: './coffee-mug.png'
  },
  {
    id: '2',
    title: 'Coffee Mug with a nice picture',
    img: './coffee-mug2.png'
  },
  {
    id: '3',
    title: 'Coffee Mug with a nice picture 3',
    img: './coffee-mug.png'
  }
];

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1> <hr />
      <ProductCard
        product={products[0]}
        key={products[0].id}
        initialValues={{
          count: 4,
          maxCount: 10
        }}
      >
        {({ count, isMaxCountReached, reset, increaseBy }) => (
          <>
            <ProductImage />
            <ProductTitle title='Cafee' />
            <ProductButtons className='custom-buttons' />
            <button onClick={reset}>reset</button>
            <button onClick={() => increaseBy(-2)}>-2</button>
            {!isMaxCountReached && <button onClick={() => increaseBy(+2)}>+2</button>}
            <span>{count}</span>
          </>
        )}
      </ProductCard>
    </div>
  );
};

```
