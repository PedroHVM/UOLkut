import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';


interface LoginState {
  email: string;
  password: string;
  errorMessages: { email: string; password: string };
}

interface LoginProps {
  onLoginSuccess: () => void;
}

const Login: React.FC<LoginProps> = ({ onLoginSuccess }) => {
  const navigate = useNavigate();
  const [loginState, setLoginState] = useState<LoginState>({
    email: '',
    password: '',
    errorMessages: { email: '', password: '' },
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setLoginState({
      ...loginState,
      [name]: value,
    });
  };

  const handleLogin = () => {
    const { email, password } = loginState;
    const errorMessages: { email: string; password: string } = { email: '', password: '' };

    if (!email) {
      errorMessages.email = 'Campo de e-mail não pode estar vazio';
    }

    if (!password) {
      errorMessages.password = 'Campo de senha não pode estar vazio';
    }

    if (errorMessages.email || errorMessages.password) {
      setLoginState({ ...loginState, errorMessages });
    } else {
      navigate('/profile');
      onLoginSuccess();
    }
  };

  return (
    <>
      <div className='components'>
        <div className='ilustration'>
          <img src="/images/banner.png" alt="" />
          <p>Conecta-se aos seus amigos e familiares <br /> usando recados e mensagens instantâneas</p>
        </div>
        <div className="login-container">
          <img src="/images/ps_orkut.png" alt="" />
          <h1>Acesse o UOLkut</h1>
          <div className="form-group">
            <input
              type="text"
              name="email"
              placeholder='E-mail'
              value={loginState.email}
              onChange={handleChange}
              className={loginState.errorMessages.email ? 'error' : ''}
            />
            {loginState.errorMessages.email && (
              <span className="error-message">{loginState.errorMessages.email}</span>
            )}
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              placeholder='Senha'
              value={loginState.password}
              onChange={handleChange}
              className={loginState.errorMessages.password ? 'error' : ''}
            />
            {loginState.errorMessages.password && (
              <span className="error-message">{loginState.errorMessages.password}</span>
            )}
          </div>

          <label>
            <input type="checkbox" />
            Lembrar senha
          </label>

          <ul className='options'>
            <button onClick={handleLogin}>Entrar</button>
            <button>Criar conta</button>
          </ul>
        </div>
      </div>
      <footer className='footer'>
        <p>Todos os direitos reservados</p>
      </footer>

    </>
  );
};

export default Login;