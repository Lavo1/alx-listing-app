import Image from 'next/image';
import React from 'react';
import { CardProps } from '../../interfaces';

const Card: React.FC<CardProps> = ({ id, title, location, price, image }) => {
  return (
    <article className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="relative h-48 w-full">
        <Image
          src={image}
          alt={title}
          fill
          style={{ objectFit: 'cover' }}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      <div className="p-4">
        <h3 className="font-medium text-lg mb-1">{title}</h3>
        <p className="text-sm text-gray-500 mb-3">{location}</p>
        <div className="flex items-center justify-between">
          <span className="font-semibold">R{price}</span>
        </div>
      </div>
    </article>
  );
};

export default Card;
