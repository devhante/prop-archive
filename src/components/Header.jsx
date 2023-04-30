import './Header.css';
import React, { useState } from 'react';
import title from '../images/title.png';

function Header() {
    const [page, setPage] = useState(0);
  
    return (
      <div className="Header">
        <img src={title} />
      </div>
    );
  }
  
  export default Header;