import React, { CSSProperties, useContext } from "react";
import { ProductContext } from "./ProductCard";
import noImage from '../assets/no-image.jpg';
import styles from '../styles/styles.module.css';

export interface ImageProps {
  img?: string,
  className?: string,
  style?: CSSProperties
}
export const ProductImage = ({ img = '' }: ImageProps) => {
  const { product }=useContext(ProductContext);
  let imgToShow: string
  
  if(img){
    imgToShow = img
  } else if( product.img ){
    imgToShow = product.img
  } else {
    imgToShow = noImage
  }

  return (
    <img
      className={styles.productImg}
      src={imgToShow}
      alt='product'
    />
  );
};