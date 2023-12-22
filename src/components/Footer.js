/* eslint-disable jsx-a11y/anchor-is-valid */
// Footer.js

import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="social-icons">
          <a href="#" className="social-icon"><img src="https://www.facebook.com/images/fb_icon_325x325.png" alt="Facebook" /></a>
          <a href="#" className="social-icon"><img src="https://freebiehive.com/wp-content/uploads/2023/08/X-Logo.jpg" alt="X Logo" /></a>
          <a href="#" className="social-icon"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/2048px-Instagram_logo_2022.svg.png" alt="Instagram" /></a>
          <a href="#" className="social-icon"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/640px-LinkedIn_logo_initials.png" alt="LinkedIn" /></a>
        </div>
        <div className="copyright">
          <p>&copy; 2023 Little Lemon. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
