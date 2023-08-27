import { useNavigate } from 'react-router-dom';
import "./Registerstyle.css";

export const RegisterFormOne = () => {
  const navigate = useNavigate();

  return (
    <div className="main_container">

      <div className="side_form">   
        <img src="/img2.jpg" alt="" className="side_pic"/>
      </div>
      <div className="form_container">
        
        <form>

        <img src="/imgLogo.png" alt="" />
         
          <h2>Cadastre-se na UOLKut</h2>

          <label>
            <input type="text" placeholder="Email" />
          </label>

          <label>
            <input type="password" placeholder="Senha" />
          </label>

          <label>
            <input type="name" placeholder="Nome" />
          </label>

         
    <div className="input_row">
         <label>
            <input type="text" placeholder="Nascimento" />
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
        <label htmlFor="">
            <input type="" placeholder="Relacionamento" />
          </label>
         
          <input type="submit" value="Criar conta" id="submitButton" />

          { <input type="submit" value="Cadastrar" id="submitButton" onClick={() => navigate("/registertwo")} /> }
        </form>
      </div>
    </div>
  );
};

export default RegisterFormOne;