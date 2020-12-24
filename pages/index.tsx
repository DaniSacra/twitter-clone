
import React from 'react';
import MainComponent from '../components/shared/MainComponent';
import { useRouter } from 'next/router';

const Storefront: React.FC = ({ children }) => {
  const router = useRouter();
  
  return (
    <>
      <MainComponent>
        <button onClick={() => router.push('Auth/Login')}>Login</button>
      </MainComponent>
    </>
  )
}

export default Storefront;