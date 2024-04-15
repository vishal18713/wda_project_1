// ReprintingPage.js

import React from 'react';
import './Reprint.css';

const Reprint = () => {
  return (
    <div className="reprint-page">
    <h1 id="head">Reprints/Permission Request</h1>
      <br></br>
      <p id="content">MentalHealth allows some reprinting or republishing of MentalHealth content.<br></br> – but only under the conditions listed below.</p>
      <h2>Reprinting for personal, student, physician, or therapist use</h2>
    <br></br>
    <p>You have permission to make and use article reprints for your personal use, provided you use the PDF Version download link at the top of each article.
      </p>
      <br></br>
      <p>
        You do NOT have permission to edit the article in any way or remove the HelpGuide header and footer.
      </p>
      <br></br>
      <p>
        We charge a fee for republication of our materials based on the amount of content used and the type of use you are requesting.
      </p>
      <br></br>
      <p>Please fill out the following information. We will respond as soon as possible. Fields marked with * are required.
</p>
<br></br>
      <form>
      <div className="names">
      <label htmlFor="fname"></label><br/>
        <input type="text" id="fname" name="name" placeholder='FirstName*' required /><br/>
        <label htmlFor="lname" ></label><br/>
        <input type="text" id="lname" placeholder='LastName*' name="name" required /><br />
        </div>
          <br></br>
        <label htmlFor="email"></label><br />
        <input type="email" id="email" placeholder='Email*' name="email" required /><br />
        <label htmlFor="organization"></label><br />
        <input type="text" id="organization" placeholder='Organization/Company*' name="organization" required /><br />
        <label htmlFor="adress"></label><br />
        <input type="text" id="adress" placeholder='Adress*' name="email" required /><br />
        <br></br>
        <label id="use" htmlFor="intended-use">Intended use</label><br />
        <select id="intended-use" placeholder='Intended Use*' name="intended-use"  required>
          <option value="">Select an option</option>
          <option value="Academic">Academic</option>
          <option value="Personal">Personal</option>
          <option value="Company/Organization - External Use">Company/Organization - External Use</option>
          <option value="Company/Organization - Internal Use">Company/Organization - Internal Use</option>
          <option value="Health Care Organization">Health Care Organization</option>
          <option value="Media">Media</option>
          <option value="Other">Other</option>
        </select><br />
         <br></br>

        <label id="box" htmlFor="content-use">How do you plan to use the content?*</label><br />
        <textarea id="content-use" name="content-use" required></textarea><br />

       
      </form>
      <br/>
      <button type="submit">submit</button>
      <br/>
    </div>
  );
}

export default Reprint;
