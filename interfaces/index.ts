export interface CardProps {
  id: string | number;
  title: string;
  location?: string;
  price?: number | string;
  image: string; // path under /public/assets/...
}

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}
