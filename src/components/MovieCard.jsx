import React from 'react';
import { POSTER_BASE_PATH } from '../utils/constants';

const MovieCard = ({img_path}) => {
  return (
    <div className='w-48'>
        <img className='rounded' src={POSTER_BASE_PATH + img_path} alt='Poster card'/>
    </div>
  )
}

export default MovieCard