import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/agregar.css";

const API = 'https://6892b509c49d24bce8681f80.mockapi.io/notas';

const CargarNotas = () => {
  const [materia, setMateria] = useState('');
  const [dia, setDia] = useState('');
  const [horario, setHorario] = useState('');
  const [descripcion, setDescripcion] = useState(''); // ahora será un string simple
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');

    if (!materia.trim() || !dia.trim() || !horario.trim()) {
      setError('Deberás completar todos los campos');
      return;
    }

    // Guardamos la descripción tal cual texto (string)
    const nuevaNota = {
      materia: materia.trim(),
      dia: dia.trim(),
      horario: horario.trim(),
      descripcion: descripcion.trim(), // Guardamos el texto directamente
    };

    try {
      const response = await fetch(API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(nuevaNota),
      });

      if (!response.ok) {
        setError('Su Nota no ha sido agregada correctamente');
        return;
      }

      // Limpiar formulario
      setMateria('');
      setDia('');
      setHorario('');
      setDescripcion('');

      navigate('/');
    } catch (err) {
      setError('Error en la solicitud: ' + (err.message || err));
    }
  };

  return (
    <div className="container">
      <h1 className="text-center mt-1">Cargar Eventos</h1>
      <form className="formu" onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            className="inputC"
            placeholder="Materia"
            type="text"
            id="materia"
            value={materia}
            onChange={(e) => setMateria(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <input
            className="inputC"
            placeholder="Tareas separadas por coma"
            type="text"
            id="descripcion"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            required
            style={{ minHeight: 40 }}
          />
        </div>
        <div className="mb-3">
          <input
            className="inputC"
            placeholder="Día"
            type="date"
            id="dia"
            value={dia}
            onChange={(e) => setDia(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <input
            className="inputC"
            placeholder="Horario"
            type="time"
            id="horario"
            value={horario}
            onChange={(e) => setHorario(e.target.value)}
            required
            style={{ minHeight: 40 }}
          />
        </div>
        {error && <div className="alert alert-danger">{error}</div>}
        <button className="BOTON" type="submit">
          Agregar Eventos
          <span></span>
        </button>
      </form>
    </div>
  );
};

export default CargarNotas;
