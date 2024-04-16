import React from 'react';
import './Cards.css';
import CardItem from './CardItem';


function Cards() {
  return (
    <div className='cards'>
      <h1>Features</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://images.squarespace-cdn.com/content/v1/566b0c4aa2bab89284eb0bb3/1621783109392-QBBTV2RESNO1MG6NDYL6/pexels-christina-morillo-1181715.jpg'
              text='Counseling and therapy services provide individuals with professional support and guidance to address various mental health concerns.'
              label='Counseling and therapy'
              path='/services'
            />
            <CardItem
              src='https://media.istockphoto.com/id/1454585686/photo/diversity-mental-health-and-group-therapy-counseling-support-meeting-healthy-conversation-and.jpg?s=612x612&w=0&k=20&c=7-kDTlCiMLzq_MM6yhnv7mZbyB7HWxM1n_JE5EkR9ZE='
              text='Support groups bring together individuals who are experiencing similar mental health challenges or life circumstances.  '
              label='Support Groups'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='https://i0.wp.com/kashmirreader.com/wp-content/uploads/2022/08/Promote-Mental-Health-Education-in-Schools.jpg?fit=500%2C262&ssl=1'
              text='Online resources encompass a wide range of digital materials and tools designed to educate, inform, and support individuals in their mental health journey.'
              label='Online Resources'
              path='/services'
            />
            <CardItem
              src='https://assets-global.website-files.com/620e4101b2ce12a1a6bff0e8/6538ec386c39534b9447c4e2_pexels-tatiana-syrikova-3975589%20(1).jpg'
              text='Mental health education initiatives aim to raise awareness, reduce stigma, and promote understanding of mental health issues within communities and society.'
              label='Mental Health Education'
              path='/products'
            />
           
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
