import React from 'react';
import styles from '../styles/styles.module.css';
import { useProducts } from '../hooks/useProducts';
import { createContext, CSSProperties } from 'react';
import {
  InitialValues,
  OnChangeProps,
  ProductCardHandlers,
  ProductContextProps,
  ProductProps
} from '../interfaces/Interfaces';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
  //children?: ReactElement | ReactElement[];
  children: (args: ProductCardHandlers) => JSX.Element;
  product: ProductProps;
  className?: string;
  style?: CSSProperties;
  onChange?: (args: OnChangeProps) => void;
  value?: number;
  initialValues?: InitialValues;
}

export const ProductCard = ({
  product,
  children,
  className,
  style,
  onChange,
  value,
  initialValues
}: Props) => {
  const { counter, increaseBy, isMaxCountReached, reset } = useProducts({
    product,
    onChange,
    value,
    initialValues
  });
  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product,
        maxCount: initialValues?.maxCount
      }}
    >
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children({
          count: counter,
          maxCount: initialValues?.maxCount,
          isMaxCountReached,
          increaseBy,
          reset,
          product
        })}
        {/** <ProductImage img={product.img} />
        <ProductTitle title={product.title} />
        <ProductButtons increaseBy={increaseBy} counter={counter} /> */}
      </div>
    </Provider>
  );
};
