import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./editProfile.css";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

type DateType = Date | null;

const NewEditProfile = () => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState<DateType>(null);

  const handleDateChange = (date: DateType) => {
    setSelectedDate(date);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    navigate("/registertwo");
};

return (
  <div className="Edit_profile">
    <div className="Profile_picture_area">
      <div className="Profile_picture">
        <img
          src="profilePictureNull.jpg"
          alt="Foto de Perfil"
          className="profile-img"
        />
      </div>
      <img
        src="Mode-edit.png"
        alt="Editar Foto de Perfil"
        className="edit-img"
      />
    </div>
    <div className="Form_container">
      <form onSubmit={handleSubmit}>
        <h2>Editar Informações</h2>
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
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            dateFormat="dd/MM/yyyy"
            placeholderText="DD/MM/AAAA"
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