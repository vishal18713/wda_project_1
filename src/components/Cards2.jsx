import React from 'react';
import './Cards.css';
import CardItem from './CardItem';


function Cards2() {
  return (
    <div className='cards'>
      <h1>Chat Rooms</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://images.squarespace-cdn.com/content/v1/566b0c4aa2bab89284eb0bb3/1621783109392-QBBTV2RESNO1MG6NDYL6/pexels-christina-morillo-1181715.jpg'
              text="In this chatroom, you'll find a community of fellow teenagers who understand what you're going through. Our trained counselors are here to help you navigate life's ups and downs, providing coping strategies, problem-solving techniques, and a compassionate perspective."
              label='Counseling and therapy Chatroom'
              path='/services'
            />
            <CardItem
              src='https://media.istockphoto.com/id/1454585686/photo/diversity-mental-health-and-group-therapy-counseling-support-meeting-healthy-conversation-and.jpg?s=612x612&w=0&k=20&c=7-kDTlCiMLzq_MM6yhnv7mZbyB7HWxM1n_JE5EkR9ZE='
              text="In this chatroom, you'll discover a caring community of peers who are here to offer empathy, encouragement, and solidarity. Together, we'll navigate the highs and lows of adolescence, fostering connections that can make all the difference."
              label='Support Groups Chat Room'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='https://i0.wp.com/kashmirreader.com/wp-content/uploads/2022/08/Promote-Mental-Health-Education-in-Schools.jpg?fit=500%2C262&ssl=1'
              text="In this dynamic chatroom, you'll find a diverse array of resources curated to empower and enrich your journey. From educational materials on a variety of topics to practical tips for self-care, personal development, and beyond, our aim is to equip you with the tools you need to thrive.              "
              label='Online Resources Chatroom'
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

export default Cards2;
