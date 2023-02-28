import React from 'react';

import Link from 'next/link';

export const Menuitem = ({ title, address, Icon }) => {
  return (
    <div>
      <Link href={address} className='mx-4 lg:mx-6 hover:text-amber-600'>
        <Icon className='text-2xl sm:hidden inline '></Icon>
        <p className='hidden sm:inline my-2 text-sm '>{title}</p>
      </Link>
    </div>
  );
};
