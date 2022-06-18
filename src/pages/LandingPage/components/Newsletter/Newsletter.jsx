import React from "react";

import "./Newsletter.css";

const Newsletter = () => {
  return (
    <form className="newsletter-form">
      <div className="newsletter-header">Newsletter</div>

      <div className="newsletter-inputs">
        <input type="text" placeholder="First Name..." />
        <input type="text" placeholder="Last Name..." />
        <input type="email" name="email" id="email" placeholder="Email..." />
        {/* <input type="tel" name="phone" placeholder="08012345678" /> */}
        <button>Subscribe</button>
      </div>

      <div className="newsletter-info">Subscribe to our newsletter to stay updated</div>
    </form>
  );
};

export default Newsletter;
