import { useNavigate } from 'react-router-dom';
import "./Registerstyle.css";

export const RegisterFormOne = () => {
  const navigate = useNavigate();

  return (
    <div className="main_container">

      <div className='ilustration'>
        <img src="/images/banner.png" alt="Ilustration" />
        <p>Conecta-se aos seus amigos e familiares <br /> usando recados e mensagens instantâneas</p>
      </div>
      <div className="form_container">
        <img src="/images/ps_orkut.png" alt="" />
        <h1>Cadastre-se na UOLKut</h1>
        <div className='mail'>
          <label>
            <input type="text" placeholder="Email" />
          </label>
          <label>
            <input type="password" placeholder="Senha" />
          </label>
          <label>
            <input type="name" placeholder="Nome" />
          </label>
        </div>
        <div className='rows'>
          <div className="input_row">
            <label>
              <input type="date" placeholder="Nascimento" />
            </label>
            <label>
              <input type="text" placeholder="Profissão" />
            </label>
          </div>
          <div className="input_row">
            <label>
              <input type="text" placeholder="Pais" />
            </label>
            <label>
              <input type="text" placeholder="Cidade" />
            </label>
          </div>
        </div>
        <div className="relationship-select">
          <label htmlFor="relationship">
            <select id="relationship">
              <option value="">Relacionamento</option>
              <option value="solteiro">Solteiro</option>
              <option value="casado">Casado</option>
              <option value="viuvo">Viúvo</option>
            </select>
          </label>
        </div>
        <button onClick={() => navigate("/registertwo")}>
          Criar conta
        </button>
      </div>
    </div>
  );
};

export default RegisterFormOne;