import React, { useState } from "react";
import Back from "../common/back/Back";
import "./contact.css";

const Contact = () => {
  const [showNgoForm, setShowNgoForm] = useState(false);
  const [ngoDetails, setNgoDetails] = useState({ name: "", number: "" });
  const [thankYouMessage, setThankYouMessage] = useState(false);

  const map =
    'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d904726.6131739549!2d85.24565535!3d27.65273865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1652535615693!5m2!1sen!2snp';

  const handleNgoFormToggle = () => {
    setShowNgoForm(true);
    setThankYouMessage(false);
  };

  const handleNgoDetailsChange = (e) => {
    const { name, value } = e.target;
    setNgoDetails({ ...ngoDetails, [name]: value });
  };

  const handleNgoSubmit = (e) => {
    e.preventDefault();
    if (ngoDetails.name && ngoDetails.number) {
      setShowNgoForm(false);
      setThankYouMessage(true);
    } else {
      alert("Please fill in all fields");
    }
  };

  return (
    <>
      <Back title="Contact us" />
      <section className="contacts padding">
        <div className="container shadow flexSB">
          <div className="left row">
            <iframe src={map}></iframe>
          </div>
          <div className="right row">
            <h1>Contact us</h1>
            <p>We're open for any suggestion or just to have a chat</p>

            <div className="items grid2">
              <div className="box">
                <h4>ADDRESS:</h4>
                <p>Pune</p>
              </div>
              <div className="box">
                <h4>EMAIL:</h4>
                <p>green_byte_developers@gmail.com</p>
              </div>
              <div className="box">
                <h4>PHONE:</h4>
                <p>7066377111</p>
              </div>
            </div>

            <form action="">
              <div className="flexSB">
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
              </div>
              <input type="text" placeholder="Subject" />
              <textarea cols="30" rows="10">
                Create a message here...
              </textarea>
              <button className="primary-btn">SEND MESSAGE</button>
            </form>

            <button className="secondary-btn" onClick={handleNgoFormToggle}>
              Contact NGO
            </button>

            {showNgoForm && (
              <form className="ngo-form" onSubmit={handleNgoSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={ngoDetails.name}
                  onChange={handleNgoDetailsChange}
                />
                <input
                  type="text"
                  name="number"
                  placeholder="Your Number"
                  value={ngoDetails.number}
                  onChange={handleNgoDetailsChange}
                />
                <button type="submit" className="primary-btn">
                  Submit
                </button>
              </form>
            )}

            {thankYouMessage && (
              <p className="thank-you-message">
                Thank you for providing your details. You will receive a call
                from the NGO.
              </p>
            )}

            <h3>Follow us here</h3>
            <span>FACEBOOK TWITTER INSTAGRAM DRIBBBLE</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
