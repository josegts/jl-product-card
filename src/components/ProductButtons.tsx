import React, { useCallback, useContext } from 'react';
import { ProductContext } from './ProductCard';
import styles from './../styles/styles.module.css';

export const ProductButtons = ({ className }: { className?: string }) => {
  // TODO: max count,
  const { increaseBy, counter, maxCount } = useContext(ProductContext);

  //TODO isMaxReached = useCallback, [ count, maxCount]
  const isMaxReached = useCallback(
    () => !!maxCount && counter === maxCount,
    [counter, maxCount]
  );

  console.log(isMaxReached());
  return (
    <div className={`${styles.buttonsContainer} ${className}`}>
      <button onClick={() => increaseBy(-1)} className={styles.buttonMinus}>
        -
      </button>
      <div className={`${styles.countLabel}`}>{counter}</div>
      <button
        onClick={() => increaseBy(+1)}
        className={`${styles.buttonAdd} ${isMaxReached() && styles.disabled}`}
      >
        +
      </button>
    </div>
  );
};
