import React from 'react';
import { Accordion, Container } from 'react-bootstrap'; // Import Accordion component from Bootstrap
import '../styling/helpsupport.css'; // Import CSS file for styling

function HelpSupport() {
  return (
    <Container className="help-support-container">
      <h1>Help & Support</h1>
      <p className="intro-paragraph">
        Welcome to the Help & Support center! We're here to assist you with any questions or issues you might have. Whether you need help with your account, products, or services, you'll find the information you need right here.
      </p>

      <Accordion defaultActiveKey="0" className="faq-accordion">
        <Accordion.Item eventKey="0">
          <Accordion.Header>How do I reset my password?</Accordion.Header>
          <Accordion.Body>
            If you’ve forgotten your password, click on the "Forgot Password" link on the login page. Follow the instructions to reset your password via email.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>What is your return policy?</Accordion.Header>
          <Accordion.Body>
            We offer a 30-day return policy on most items. For detailed information, please refer to our Return Policy page or contact our support team.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>How can I track my order?</Accordion.Header>
          <Accordion.Body>
            Once your order is shipped, you will receive a tracking number via email. You can track your order using this number on our tracking page.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <section className="contact-info-section">
        <h2>Contact Us</h2>
        <p>If you need further assistance, feel free to reach out to us through the following channels:</p>
        <div className="contact-info">
          <div className="contact-detail">
            <i className="bi bi-envelope"></i>
            <a href="mailto:support@restorex.com">support@restorex.com</a>
          </div>
          <div className="contact-detail">
            <i className="bi bi-phone"></i>
            <p>+92 318-7101450</p>
          </div>
          <div className="contact-detail">
            <i className="bi bi-globe"></i>
            <p>UAN for Pakistan</p>
          </div>
        </div>
      </section>
      <section className="additional-help">
        <h2>Need More Help?</h2>
        <p>If you still have questions or need personalized assistance, please don't hesitate to contact our support team. We’re here to help you every step of the way and ensure you have the best experience with Restorex.</p>
      </section>
    </Container>
  );
}

export default HelpSupport;
