// ContactUsPage.js

import React, { useState } from "react";
import "./Comment.css"; // Import CSS file for styling

const Comment = () => {
  const [comment, setComment] = useState("");
  const [question, setQuestion] = useState("");

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleQuestionChange = (e) => {
    setQuestion(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to backend or perform other actions)
    console.log("Comment:", comment);
    console.log("Question:", question);
    // Reset form fields
    setComment("");
    setQuestion("");
  };

  return (
    <div className="contact-us-container">
      <h2>Comments and questions</h2>
      <br></br>
      <p>Have a question or want to leave a comment? Use the form below.</p>
      <p id="conten">
        We are not a helpline. We don’t provide advice or respond to personal
        questions.
        <button type="submit">visit helpline</button>
      </p>

      <br></br>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="location"></label>
          <br />
          <input
            type="text"
            id="location"
            placeholder="location"
            name="location"
            required
          />
          <br />
          <label htmlFor="comment">Comment:</label>
          <textarea
            id="comment"
            value={comment}
            onChange={handleCommentChange}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="question">Question:</label>
          <textarea
            id="question"
            value={question}
            onChange={handleQuestionChange}
          ></textarea>
        </div>
        <button id="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Comment;
