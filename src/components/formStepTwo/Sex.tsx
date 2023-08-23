import React, { useState, ChangeEvent } from 'react';
import './Sex.css';

const Sex: React.FC = () => {
  const [chosenSex, setChosenSex] = useState<string | null>(null);

  const handleSelectSex = (sex: string) => {
    setChosenSex(sex === chosenSex ? null : sex);
  };

  return (
    <div className="sex-container">
      <label>
        <input
          type="checkbox"
          className="custom-checkbox"
          checked={chosenSex === 'female'}
          onChange={() => handleSelectSex('female')}
        />
        <span className="checkmark"></span>
        Feminino
      </label>

      <label style={{ marginLeft: '10px' }}>
        <input
          type="checkbox"
          className="custom-checkbox"
          checked={chosenSex === 'male'}
          onChange={() => handleSelectSex('male')}
        />
        <span className="checkmark"></span>
        Masculino
      </label>
    </div>
  );
};

export default Sex;
