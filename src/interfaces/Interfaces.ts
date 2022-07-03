import { Props } from '../components/ProductCard';
import { ImageProps } from '../components/ProductImage';
import { TitleProps } from '../components/ProductTitle';

export interface ProductProps {
  id: string;
  title: string;
  img?: string;
}

export interface ProductContextProps {
  counter: number;
  increaseBy: (value: number) => void;
  product: ProductProps;
  maxCount?: number;
}

export interface OnChangeProps {
  product: ProductProps;
  count: number;
}

export interface ProductCardHOCProps {
  ({ product, children }: Props): JSX.Element;
  Title: ({ title, className, style }: TitleProps) => JSX.Element;
  Image: ({ img, className, style }: ImageProps) => JSX.Element;
  Buttons: ({ className }: { className?: string }) => JSX.Element;
}

export interface InitialValues {
  count?: number;
  maxCount?: number;
}

export interface ProductCardHandlers {
  count: number,
  isMaxCountReached: boolean,
  maxCount?: number,
  product: ProductProps,
  increaseBy: (value: number) => void,
  reset: () => void,
}