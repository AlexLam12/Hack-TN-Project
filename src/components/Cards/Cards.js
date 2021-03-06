import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these Games!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              text='Trivia'
              path='/'
            />
            <CardItem
              text='Bingo'
              path='/'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;