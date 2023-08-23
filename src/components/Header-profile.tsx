import React from 'react';

const Header: React.FC = () => {
  return (
    <header>
      <img src="./images/logo-orkut.svg" alt="logo" />

      <nav>
        <a href="#">Home</a>
        <a href="#" id="pink">Profile</a>
        <a href="#">communitys</a>
        <a href="#">Games</a>
      </nav>

      <div className="search">
        <span className="material-symbols-outlined">
          search
        </span>
        <input type="search" id="btnSearch" alt="search" placeholder="Pesquisar no Orkut" />
      </div>

      <div className="profile">
        <img src="./images/user-image.jpeg" alt="profile image"/>
        <p className="name">Iuri Silva</p>
        <span className="material-symbols-outlined">
          expand_more
        </span>
      </div>
    </header>
  );
}

export default Header;
