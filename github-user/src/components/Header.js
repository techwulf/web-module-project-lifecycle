import React from 'react';
import home from '../images/homeLogo.png';

class Header extends React.Component {
  render() {
    return (
      <nav>
        <a href="/"><img src={home} alt="home"/></a>
        <a href="/followers">Follower Info</a>
      </nav>
    )
  }
}

export default Header;