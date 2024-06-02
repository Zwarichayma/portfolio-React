import "./contact.css";
import { useForm, ValidationError } from '@formspree/react';
import Lottie from "lottie-react";
import aniAnimation from '../../../src/animation/ddd.json';
import emiAnimation from '../../../src/animation/emaill.json';
const Contact = () => {
  const  [state, handleSubmit] = useForm("xgccdsio");
  return (
    <section className="contact-us">
      <h1 className="title">
        <span className="icon-envelope"> </span>
        Contact us
      </h1>
      <p className="sub-title">
        Contact us for more information and Get notified when I publish
        something new.
      </p>

      <div style={{justifyContent:"space-between"}} className="flex">
        <form onSubmit={handleSubmit} className="">
          <div className="flex">
            <label htmlFor="email">Email Address:</label>
            <input autoComplete="off" required type="email" id="email" />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div className="flex" style={{ marginTop: "24px" }}>
            <label htmlFor="message">Your message:</label>
            <textarea required id="message"></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <button type="submit" disabled={state.submitting} className="submit">
            {state.submitting ? "Submitting..." : "Submit"}
          </button>

          {state.succeeded && (
            <p  style={{ fontSize: "18px", marginTop: "1.7rem" }}>
              <Lottie 
              loop={false}   
              style={{Height :37}} 
              animationData={aniAnimation} />
              Your message has been sent successfullyy
            </p>
          )}
        </form>

        <div><Lottie className="contact-animation" style={{Height :355}} animationData={emiAnimation} /></div>
      </div>
    </section>
  );
};

export default Contact;
