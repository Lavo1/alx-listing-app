import React from 'react';
import { ButtonProps } from '../../interfaces';

const Button: React.FC<ButtonProps> = ({ children, onClick, type = 'button', className = '' }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`inline-block px-4 py-2 rounded-md border border-transparent text-sm font-medium hover:shadow ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
