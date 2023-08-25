import React from "react";
import "../Profile/index-profile.css";


interface HeaderProps {
  isLoggedIn: boolean;
}

const Header: React.FC<HeaderProps> = ({ isLoggedIn }) => {
  return (
    <header className="header">
      <nav>
        <div className="logo">
          <span>UOLkut</span>
        </div>
        <ul>
          {isLoggedIn ? (
            <>
            <div className="header-1">
              <li>
                <a href="#">Início</a>
              </li>
              <li>
                <a href="../Profile">Perfil</a>
              </li>
              <li>
                <a href="#">Comunidades</a>
              </li>
              <li>
                <a href="#">Jogos</a>
              </li>
            </div>
          <div className="header-2">
          <input className="header-input" type="text" placeholder="Pesquisar no UOLkut" />
              <div className="profile">
        <img src="./images/user-image.jpeg" alt="profile image"/>
        <p className="name">Iuri Silva</p>
        <span className="material-symbols-outlined">
          expand_more
        </span>
          </div>
              
      </div>
            </>
          ) : (
            <>
              <li className="C-seg">Centro de Segurança</li>
            </>
          )}
          
        </ul>
      </nav>
    </header>
  );
};

export default Header;
