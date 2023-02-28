'use client';
import React from 'react';
import { Menuitem } from './Menuitem';
import { AiFillHome } from 'react-icons/ai';
import { AiFillInfoCircle } from 'react-icons/ai';
import Link from 'next/link';

export const Header = () => {
  return (
    <div className='flex justify-between m-4 items-center'>
      <div className='flex '>
        <Menuitem title='Home' address='/' Icon={AiFillHome}></Menuitem>
        <Menuitem
          title='About'
          address='/about'
          Icon={AiFillInfoCircle}
        ></Menuitem>
      </div>
      <div>
        <Link href='/'>
          <h2 className='text-2xl m-2'>
            <span className='font-bold bg-amber-500 py-1 px-2 rounded-lg hover:bg-white hover:border-2 hover:border-amber-500'>
              IMDb
            </span>
            <span className='text-xl hidden sm:inline mx-2'>Clone</span>
          </h2>
        </Link>
      </div>
    </div>
  );
};
