import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {

  const faqs = [
    {
      question: "What will be the work profile of the caretaker?",
      answer: "The caretaker's work profile will be tailored to your specific needs, such as patient care, medication management, and daily living assistance."
    },
    {
      question: "How can we recognize that the person who came to our place is from Care24?",
      answer: "Our caretakers wear Care24 uniforms and carry identification cards to verify their association with Care24."
    },
    {
      question: "How and when will I get a replacement?",
      answer: "You will receive a replacement within 24 hours after requesting it through our support channels."
    },
    {
      question: "Could I meet the caretaker before the appointment?",
      answer: "Yes, you can request a meeting with the caretaker prior to your scheduled appointment."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    if (openIndex === index) {
      setOpenIndex(null); 
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <div className="faq-container">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div key={index} className="faq-item">
          <div
            className="faq-question"
            onClick={() => toggleFAQ(index)}
          >
            {faq.question}
            <span className="faq-icon">
              {openIndex === index ? '-' : '+'}
            </span>
          </div>
          {openIndex === index && (
            <div className="faq-answer">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
