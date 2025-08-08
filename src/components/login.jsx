import { useState } from 'react';
import '../styles/login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, contraseña });
  };

  return (
    <div className="container">
      <form className="formLogin" onSubmit={handleSubmit} noValidate>
        <p className="title">Iniciar sesión</p>
        <label className="field">
          <input
            required
            placeholder=" "    
            type="email"
            className="input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span className="label-text">Email</span>
        </label>
        <label className="field pas">
          <input
            required
            placeholder=" "    
            type={showPassword ? 'text' : 'password'}
            className="input"
            value={contraseña}
            onChange={(e) => setContraseña(e.target.value)}
          />
          <span className="label-text">Contraseña</span>
          <button
            type="button"
            className="show"
            onClick={() => setShowPassword((s) => !s)}
            aria-label="Mostrar contraseña"
          >
            {showPassword ? (
              /* eye */
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            ) : (
              /* eye-off */
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49" />
                <path d="M14.084 14.158a3 3 0 0 1-4.242-4.242" />
                <path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143" />
                <path d="m2 2 20 20" />
              </svg>
            )}
          </button>
        </label>

        <button type="submit" className="submit">Iniciar sesión</button>

        <p className="signin">
          ¿No tenes Cuenta todavia? <a className="log" onClick={() => window.location.href = '/register'}>Crear Cuenta</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
