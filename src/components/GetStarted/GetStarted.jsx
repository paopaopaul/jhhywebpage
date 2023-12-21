import React from "react";
import "./GetStarted.css";
import { forwardRef } from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const GetStarted = forwardRef((_props, ref) => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_k2jxqcg",
        "template_1xco66h",
        form.current,
        "NrmMWGtotNb1e-yAc"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section className="g-wrapper" ref={ref}>
      <div className="paddings innerWith g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">We would love to hear from you!</span>

          <form
            ref={form}
            onSubmit={sendEmail}
            className="flexCenter paddings innerWidth"
          >
            {/* up side */}
            <div className="flexStart g-up">
              <input
                className="input"
                type="text"
                placeholder="Full Name"
                name="user_name"
                required
              />
              <input
                className="input"
                type="email"
                placeholder="Email"
                name="user_email"
                required
              />

              <input
                className="input"
                type="text"
                placeholder="Subject"
                name="subject"
                required
              />
            </div>

            {/* down side */}
            <div className="g-right">
              <textarea
                className="ta"
                name="message"
                cols="80"
                rows="15"
                placeholder="Enter your email here"
              ></textarea>
              <button className="button" type="submit">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
});

export default GetStarted;
