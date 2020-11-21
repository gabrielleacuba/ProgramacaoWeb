import React from 'react';

import '../../styles/pages/header.css'

const Header = (props) => {
  return(
    <div className="header">
      <div className="container">
        <h2 className="header-text">{props.text}</h2>
      </div>
    </div>
  )
}

export default Header;