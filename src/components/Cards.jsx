import React from 'react';
import './Cards.css';
import CardItem from './CardItem';


function Cards() {
  return (
    <div className='cards'>
      <h1>best features</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='../../public/images/i1.jpg'
              text='Chat with your friends annonymously and share your thoughts'
              label='Chat'
              path='/services'
            />
            <CardItem
              src='../../public/images/i2.jpg'
              text='enjoy annonymously with your annonymous friends'
              label='Enjoy'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='../../public/images/i3.jpg'
              text='join our community of people who share the same interests as you'
              label='Join'
              path='/services'
            />
            <CardItem
              src='../../public/images/i4.jpg'
              text='related to some privacy issues'
              label='private'
              path='/products'
            />
           
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
