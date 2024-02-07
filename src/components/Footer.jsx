import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import '../index.css';

const Footer = () => {
    return (
      <footer>
        <div>
          <a href="https://www.linkedin.com/in/xeng-xiong-17a8b1268/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          {' | '}
          <a href="https://github.com/Freeway9527" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </footer>
    );
  }
  
  export default Footer;