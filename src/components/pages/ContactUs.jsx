import React from "react";
import TestimonialPage from "../TestimonialPage";
import Comment from "../Comment";
import Footer from "../Footer";
import Reprint from "../Reprint";
import Context from "../Context";
const ContactUs = () => {
  return (
    <div>
      <>
        <Context />
        <Comment />
        <TestimonialPage />
        <Reprint />
        <Footer />
      </>
    </div>
  );
};

export default ContactUs;
