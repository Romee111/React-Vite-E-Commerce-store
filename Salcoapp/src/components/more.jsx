import React from 'react';
import '../styling/more.css'; // Ensure you have a corresponding CSS file

const More = () => {
  return (
    <div className="more-container">
      <h2>More Information</h2>
      <div className="more-content">
        <section>
          <h3>Company Overview</h3>
          <p className="more-paragraph">
            We are committed to providing excellent customer service and ensuring that all of our products meet the highest standards of quality. Our team is dedicated to addressing any concerns and making your shopping experience as smooth as possible.
          </p>
        </section>
        <section>
          <h3>Our Mission</h3>
          <p className="more-paragraph">
            Our company was founded on the principles of integrity and transparency. We believe in building lasting relationships with our customers by maintaining open lines of communication and upholding our promises.
          </p>
        </section>
        <section>
          <h3>Innovation</h3>
          <p className="more-paragraph">
            We continuously strive to innovate and improve our offerings to better serve our customers. By keeping up with the latest trends and technologies, we ensure that our products and services remain relevant and effective.
          </p>
        </section>
        <section>
          <h3>Sustainability</h3>
          <p className="more-paragraph">
            Sustainability is a core value for us. We are actively working to reduce our environmental impact by adopting eco-friendly practices and promoting responsible consumption. Our goal is to contribute positively to the planet and community.
          </p>
        </section>
        <section>
          <h3>Customer Feedback</h3>
          <p className="more-paragraph">
            Customer feedback is vital to our growth. We encourage our customers to share their thoughts and experiences with us. Your feedback helps us understand your needs and make necessary improvements to enhance your experience with us.
          </p>
        </section>
      </div>
    </div>
  );
};

export default More;
