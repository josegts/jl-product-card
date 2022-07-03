import React, { CSSProperties, useContext } from 'react';
import { ProductContext } from './ProductCard';
import styles from '../styles/styles.module.css';
export interface TitleProps {
  title?: string;
  className?: string;
  style?: CSSProperties;
}

export const ProductTitle = ({ title, style, className }: TitleProps) => {
  const { product } = useContext(ProductContext);
  return (
    <span style={style} className={`${styles.productDescription} ${className}`}>
      {title ? title : product.title}
    </span>
  );
};
