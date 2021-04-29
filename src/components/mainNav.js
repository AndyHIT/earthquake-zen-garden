import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

const MainNav = ({data}) => {
  const { site, profile } = data;
  const { logoImage, title } = site;
  const { firstName, lastName } = profile;
  return (
    <header className='app-header'>
      <Link to='/' className='home-logo'>
        <img src={logoImage} />
      </Link>
      <h1>{title}</h1>
      <Link to='/user' className='user-profile' >
        Welcome {firstName}
      </Link>
    </header>
  )
}

export default MainNav;