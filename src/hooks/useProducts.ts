import { useEffect, useRef, useState } from 'react';
import {
  InitialValues,
  OnChangeProps,
  ProductProps
} from '../interfaces/Interfaces';

interface Props {
  product: ProductProps;
  onChange?: (args: OnChangeProps) => void;
  value?: number;
  initialValues?: InitialValues;
}

export const useProducts = ({
  onChange,
  product,
  value = 0,
  initialValues
}: Props) => {
  const [counter, setCounter] = useState(initialValues?.count || value);
  const isMounted = useRef(false);

  const increaseBy = (value: number) => {
    /*if(value == 1 &&  counter >= (initialValues?.maxCount  || Infinity)) {
      onChange && onChange({ product, count: value });
      return
    }*/

    let newValue = Math.max(counter + value, 0);
    if (initialValues?.maxCount) {
      newValue = Math.min(newValue, initialValues.maxCount);
    }

    setCounter(() => newValue);
    onChange && onChange({ product, count: newValue });
  };

  const reset = () => {
    setCounter(initialValues?.count || value)
  }

  useEffect(() => {
    if (!isMounted.current) return;
    setCounter(value);
  }, [value]);

  useEffect(() => {
    //isMounted.current = true;
  }, []);

  return {
    counter,
    isMaxCountReached:
      !!initialValues?.maxCount && counter === initialValues.maxCount,
    increaseBy,
    reset,
  };
};
