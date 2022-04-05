import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  const {name, job, image, text} = people[index];
  
  return (
    <article className='review'>
      <div clssName='img-container'>
        <img src={image} alt={name} className='person-img'/>
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='btn-container'>
        <button className='prev-btn' onClick={() => setIndex(index - 1)}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={() => setIndex(index - 1)}>
          <FaChevronRight />
        </button>
        <button className='random-btn' onClick={() => setIndex(index - 1)}>
          Surprise me
        </button>
      </div>
  )
};

export default Review;
