import * as React from 'react';
import { Link } from 'gatsby';

const Footer = () => {
  return (
    <footer>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
    </footer>
  )
}

export default Footer