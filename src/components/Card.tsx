import React from 'react';
import Image from 'next/image';

interface PropsType {
    title: string;
    description: string;
    img: string;
    tags: string[];
}

const Card: React.FC<PropsType> = ({ title, description, img, tags }) => {
  return (
    <div className='border border-gray-400 max-w-xs sm:max-w-sm h-auto flex flex-col justify-between shadow-lg hover:shadow-xl transition-shadow duration-200'>
      <div className='overflow-hidden'>
        <Image
          className='w-full h-48 object-cover transition-transform duration-200 transform hover:scale-105'
          src={img}
          width={350}
          height={200} 
          alt={title}
        />
      </div>

      <div className='p-4 space-y-4 flex-grow flex flex-col justify-between'>
        <div className='text-xl sm:text-2xl font-semibold'>{title}</div>
        <div className='text-sm sm:text-base'>{description}</div>
        <div className='flex flex-wrap gap-2'>
          {tags.map((el) => (
            <div className='tags px-2 py-1 bg-gray-200 text-gray-700 rounded' key={el}>
              {el}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Card;
