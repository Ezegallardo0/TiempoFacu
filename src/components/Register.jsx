import { useState } from 'react';
import '../styles/register.css';

const Register = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      firstname,
      lastname,
      email,
      password,
      confirmPassword,
    });
  };

  return (
    <div className='container'>
      <form className="form" onSubmit={handleSubmit}>
        <p className="title">Crear cuenta</p>
        <p className="message">Regístrese ahora y obtenga acceso completo a nuestra pagina.</p>
        <div className="flex">
          <label>
            <input required placeholder=" " type="text" className="input" value={firstname} onChange={(e) => setFirstname(e.target.value)} />
            <span>Nombre</span>
          </label>

          <label>
            <input required placeholder=" " type="text" className="input" value={lastname} onChange={(e) => setLastname(e.target.value)} />
            <span>Apellido</span>
          </label>
        </div>

        <label>
          <input required placeholder=" " type="email" className="input" value={email} onChange={(e) => setEmail(e.target.value)} />
          <span>Email</span>
        </label>

       <label className="pas" style={{ position: 'relative' }}>
  <input
    required
    placeholder=" "
    type={showPassword ? "text" : "password"}
    className="input"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
  />
  <span>Contraseña</span>
  
  <button
    type="button"
    className="show"
    onClick={() => setShowPassword(s => !s)}
    aria-label="Mostrar contraseña"
    style={{
      position: 'absolute',
      right: '10px',
      top: '50%',
      transform: 'translateY(-50%)',
      background: 'none',
      border: 'none',
      padding: 0,
      cursor: 'pointer'
    }}
  >
    {showPassword ? (
      // eye SVG
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ) : (
      // eye-off SVG
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49" />
        <path d="M14.084 14.158a3 3 0 0 1-4.242-4.242" />
        <path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143" />
        <path d="m2 2 20 20" />
      </svg>
    )}
  </button>
</label>

<label className="pas" style={{ position: 'relative', marginTop: '1rem' }}>
  <input
    required
    placeholder=""
    type={showPassword ? "text" : "password"}
    className="input"
    value={confirmPassword}
    onChange={(e) => setConfirmPassword(e.target.value)}
  />
  <span>Confirmar Contraseña</span>
  
  <button
    type="button"
    className="show"
    onClick={() => setShowPassword(s => !s)}
    aria-label="Mostrar contraseña"
    style={{
      position: 'absolute',
      right: '10px',
      top: '50%',
      transform: 'translateY(-50%)',
      background: 'none',
      border: 'none',
      padding: 0,
      cursor: 'pointer'
    }}
  >
    {showPassword ? (
      // eye SVG
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ) : (
      // eye-off SVG
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49" />
        <path d="M14.084 14.158a3 3 0 0 1-4.242-4.242" />
        <path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143" />
        <path d="m2 2 20 20" />
      </svg>
    )}
  </button>
</label>


        <button type="submit" className="submit">Crear cuenta</button>
        <p className="signin">
          ¿Ya tenes una cuenta? <a className='log' onClick={() => window.location.href = '/login'}>Iniciar sesión</a>
        </p>
      </form>
    </div>
  );
};

export default Register;
