import React from 'react';
import notfound from '../assets/notfound.svg';

export function PageNotFound() {
  return (
    <div className='page'>
        <img src={notfound} alt='page-not-fouond' className='res-image' />
        <h6 className='h5'>Oops! Page not found</h6>
    </div>
  )
}
