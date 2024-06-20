import { useHeroesStore } from '@/store';
import React, { useEffect } from 'react';

export const HeroList = () => {
  const {heroes} = useHeroesStore();

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
      {heroes?.results.map((item) => (
        <div key={item.id} className='p-6'>{item.name}</div>
      ))}
    </div>
  );
};
