import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../.';

const product = {
  id: '1',
  title: 'Coffee Mug with a nice picture',
  img: './coffee-mug.png',
};

const App = () => {
  return (
    <div>
      <ProductCard
        product={product}
        key={product.id}
        initialValues={{
          count: 4,
          maxCount: 10,
        }}
      >
        {() => (
          <>
            <ProductImage />
            <ProductTitle title="Cafee" />
            <ProductButtons className="custom-buttons" />
            {/* <button onClick={reset}>reset</button>
            <button onClick={() => increaseBy(-2)}>-2</button>
            {!isMaxCountReached && (
              <button onClick={() => increaseBy(+2)}>+2</button>
            )}
            <span>{count}</span>*/}
           
          </>
        )}
      </ProductCard>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
