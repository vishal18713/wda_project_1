// TestimonialsPage.js

import React from 'react';
import './TestimonialPage.css'; // Import CSS file for styling

const TestimonialPage = () => {
  return (
    <div className="testimonial-container">
      <h2>Share a Testimonial</h2>
      <br></br>
      <p id="des">Has MentalHealth helped you? We’d love to hear from you.</p>
      <br></br>
      <br></br>
        {/* <label htmlFor="testimonial-name">Name</label><br /> */}
        <input type="text" id="testimonial-name" placeholder='Name' name="testimonial-name" /><br />
        {/* <label htmlFor="testimonial-email">Email</label><br /> */}
        <br></br>
        <input type="email" id="testimonial-email" placeholder='Email' name="testimonial-email" /><br />
        <br></br>
        <br></br>
        <label htmlFor="testimonial-location">Do you live in the United States?</label><br />
        <br></br>
        <input type="radio" id="testimonial-location-yes" name="testimonial-location" value="Yes" />
        <label htmlFor="testimonial-location-yes">Yes</label><br />
        <br></br>
        <input type="radio" id="testimonial-location-no" name="testimonial-location" value="No" />
        <label htmlFor="testimonial-location-no">No</label><br />
        <br></br>
        <br></br>
        <label htmlFor="testimonial-text">How has MentalHealth helped you?*</label><br />
        <br></br>
        
        <textarea id="testimonial-text" name="testimonial-text" required></textarea><br />
        <br></br>
        <br></br>
        <label htmlFor="testimonial-permission">May we use your submission as a testimonial?*</label><br />
        <br></br>
        <input type="radio" id="testimonial-permission-yes" name="testimonial-permission" value="Yes" />
        <label htmlFor="testimonial-permission-yes">Yes</label><br />
        <br></br>
        <input type="radio" id="testimonial-permission-anonymous" name="testimonial-permission" value="Yes, but anonymously" />
        <label htmlFor="testimonial-permission-anonymous">Yes, but anonymously</label><br />
        <br></br>
        <input type="radio" id="testimonial-permission-no" name="testimonial-permission" value="No" />
        <label htmlFor="testimonial-permission-no">No</label><br />
        <br></br>
        <br></br>
        <button type="submit">Submit</button>
      
    </div>
  
  );
};

export default TestimonialPage;