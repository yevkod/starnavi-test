'use client';
import { HeroList } from '@/components/HeroList/HeroList';
import { dataRequest } from '@/service/Data';
import { useEffect } from 'react';

export default function Home() {

  useEffect(() => {
    void dataRequest.getData();
  }, []);

  return (
    <div>
      <HeroList />
    </div>
  );
}
