import React, { ChangeEvent, useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./editProfile.css";


import "react-datepicker/dist/react-datepicker.css";



const NewEditProfile = () => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState("");

  const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(e.target.value);
  };
  

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    navigate("/Profile");
  };

  return (
    <div className="Edit_profile">
      <div className="Profile_picture_area">
        <div className="Profile_picture">
          <img
            src="/images/profilePictureNull.jpg"
            alt="Foto de Perfil"
            className="profile-img"
          />
        </div>
        <img
          src="/images/Mode-edit.png"
          alt="Editar Foto de Perfil"
          className="edit-img"
        />
      </div>
      <div className="Form_container">
        <form onSubmit={handleSubmit}>
          <div className="edit_title">
            <h2>Editar Informações</h2>
          </div>
          <div className="row">
            <label htmlFor="profession">
              <input type="text" id="profession" placeholder="Profissão" />
            </label>
            <div className="relationship-selector">
              <label htmlFor="relationship">
                <select id="relationship">
                  <option value="">Relacionamento</option>
                  <option value="solteiro">Solteiro</option>
                  <option value="casado">Casado</option>
                  <option value="viuvo">Viúvo</option>
                </select>
              </label>
            </div>
          </div>
          <label htmlFor="name">
            <input type="text" id="name" placeholder="Nome" />
          </label>
          <label htmlFor="city">
            <input type="text" id="city" placeholder="Cidade" />
          </label>
          <label htmlFor="country">
            <input type="text" id="country" placeholder="País" />
          </label>
          <label htmlFor="birth-date">
            <input
              type="date"
              onChange={handleDateChange}
              value={selectedDate}
            />
          </label>
          <label htmlFor="password">
            <input type="password" id="password" placeholder="Senha" />
          </label>
          <label htmlFor="password-confirm">
            <input type="password" id="password-confirm" placeholder="Repetir Senha" />
          </label>
          <button type="submit" id="submitButton">Salvar</button>
        </form>
      </div>
    </div>
  );
};

export default NewEditProfile;