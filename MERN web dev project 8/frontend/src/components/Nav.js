//Navigate from page to page

import React from 'react';
import { Link } from 'react-router-dom';


function Nav() {
  return (
    <nav className="App-nav">
        <Link to="/">          Home         </Link>
        <Link to="../gallery"> Gallery      </Link>
        <Link to="../staff">   Staff        </Link>
        <Link to="../order">   Order        </Link>
        <Link to="../topics">  Topics       </Link>
        <Link to="../log">     Album log    </Link>
        <Link to="/add-album"> Add Album    </Link>
    </nav>
  );
}

export default Nav;
