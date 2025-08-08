import React, { useEffect, useState } from "react";
import Select from "react-select";
import "../styles/Calendario.css";

const API = "https://6892b509c49d24bce8681f80.mockapi.io/notas";

const getDaysInMonth = (year, month) => {
  const date = new Date(year, month, 1);
  const days = [];
  const firstDayIndex = date.getDay();

  for (let i = 0; i < firstDayIndex; i++) {
    days.push(null);
  }

  const daysInMonth = new Date(year, month + 1, 0).getDate();

  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  return days;
};

// Función para convertir Date a "YYYY-MM-DD"
const formatDateISO = (date) => date.toISOString().split("T")[0];

const Calendario = () => {
  const [notas, setNotas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth());

  const fetchNotas = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(API);
      if (!res.ok) throw new Error(`Status ${res.status}`);
      const data = await res.json();
      setNotas(data);
    } catch (err) {
      setError("Error al cargar notas: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotas();
  }, []);

  const days = getDaysInMonth(year, month);

  const notasPorDia = (diaNum) => {
    if (!diaNum) return [];
    // Fecha del día a filtrar en formato ISO string "YYYY-MM-DD"
    const fechaFiltro = `${year.toString().padStart(4, "0")}-${(month + 1)
      .toString()
      .padStart(2, "0")}-${diaNum.toString().padStart(2, "0")}`;

    return notas.filter((nota) => {
      if (!nota.dia) return false;
      const fechaNota = formatDateISO(new Date(nota.dia));
      return fechaNota === fechaFiltro;
    });
  };

  const handlePrevMonth = () => {
    if (month === 0) {
      setMonth(11);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }
  };

  const handleNextMonth = () => {
    if (month === 11) {
      setMonth(0);
      setYear(year + 1);
    } else {
      setMonth(month + 1);
    }
  };

  const monthNames = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  const weekDays = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];

  const yearOptions = [];
  for (let y = 2000; y <= 2050; y++) {
    yearOptions.push({ value: y, label: y.toString() });
  }

  if (loading) return <p>Cargando calendario...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div className="calendario-container">
      <div className="calendario-header">
        <div className="btn-conteiner">
          <a href="#" className="btn-content" onClick={handlePrevMonth}>
            <span className="icon-arrow">
              {/* SVG Flecha izquierda */}
              <svg
                xmlnsXlink="http://www.w3.org/1999/xlink"
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                viewBox="0 0 66 43"
                height="30px"
                width="30px"
                style={{ transform: "rotate(180deg)" }}
              >
                <g
                  fillRule="evenodd"
                  fill="none"
                  strokeWidth="1"
                  stroke="none"
                  id="arrow"
                >
                  {/* Paths */}
                  <path
                    fill="#9ee5fa"
                    d="M40.1543933,3.89485454 L43.9763149,0.139296592 C44.1708311,-0.0518420739 44.4826329,-0.0518571125 44.6771675,0.139262789 L65.6916134,20.7848311 C66.0855801,21.1718824 66.0911863,21.8050225 65.704135,22.1989893 C65.7000188,22.2031791 65.6958657,22.2073326 65.6916762,22.2114492 L44.677098,42.8607841 C44.4825957,43.0519059 44.1708242,43.0519358 43.9762853,42.8608513 L40.1545186,39.1069479 C39.9575152,38.9134427 39.9546793,38.5968729 40.1481845,38.3998695 C40.1502893,38.3977268 40.1524132,38.395603 40.1545562,38.3934985 L56.9937789,21.8567812 C57.1908028,21.6632968 57.193672,21.3467273 57.0001876,21.1497035 C56.9980647,21.1475418 56.9959223,21.1453995 56.9937605,21.1432767 L40.1545208,4.60825197 C39.9574869,4.41477773 39.9546013,4.09820839 40.1480756,3.90117456 C40.1501626,3.89904911 40.1522686,3.89694235 40.1543933,3.89485454 Z"
                    id="arrow-icon-one"
                  ></path>
                  {/* otros paths iguales */}
                </g>
              </svg>
            </span>
          </a>
        </div>

        <div className="calendario-titulo-contenedor">
          <span className="calendario-mes">{monthNames[month]}</span>

          <div style={{ width: 110, marginLeft: 10 }}>
            <Select
              options={yearOptions}
              value={yearOptions.find((opt) => opt.value === year)}
              onChange={(selected) => setYear(selected.value)}
              isSearchable
              placeholder="Año"
              classNamePrefix="react-select"
              aria-label="Seleccionar año"
              menuPlacement="auto"
              menuShouldScrollIntoView={false}
            />
          </div>
        </div>

        <div className="btn-conteiner">
          <a href="#" className="btn-content" onClick={handleNextMonth}>
            <span className="icon-arrow">
              {/* SVG Flecha derecha */}
              <svg
                xmlnsXlink="http://www.w3.org/1999/xlink"
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                viewBox="0 0 66 43"
                height="30px"
                width="30px"
              >
                <g
                  fillRule="evenodd"
                  fill="none"
                  strokeWidth="1"
                  stroke="none"
                  id="arrow"
                >
                  {/* Paths */}
                  <path
                    fill="#9ee5fa"
                    d="M40.1543933,3.89485454 L43.9763149,0.139296592 C44.1708311,-0.0518420739 44.4826329,-0.0518571125 44.6771675,0.139262789 L65.6916134,20.7848311 C66.0855801,21.1718824 66.0911863,21.8050225 65.704135,22.1989893 C65.7000188,22.2031791 65.6958657,22.2073326 65.6916762,22.2114492 L44.677098,42.8607841 C44.4825957,43.0519059 44.1708242,43.0519358 43.9762853,42.8608513 L40.1545186,39.1069479 C39.9575152,38.9134427 39.9546793,38.5968729 40.1481845,38.3998695 C40.1502893,38.3977268 40.1524132,38.395603 40.1545562,38.3934985 L56.9937789,21.8567812 C57.1908028,21.6632968 57.193672,21.3467273 57.0001876,21.1497035 C56.9980647,21.1475418 56.9959223,21.1453995 56.9937605,21.1432767 L40.1545208,4.60825197 C39.9574869,4.41477773 39.9546013,4.09820839 40.1480756,3.90117456 C40.1501626,3.89904911 40.1522686,3.89694235 40.1543933,3.89485454 Z"
                    id="arrow-icon-one"
                  ></path>
                  {/* otros paths iguales */}
                </g>
              </svg>
            </span>
          </a>
        </div>
      </div>

      <div className="calendario-semana">
        {weekDays.map((d) => (
          <div key={d}>{d}</div>
        ))}
      </div>

      <div className="calendario-dias">
        {days.map((d, i) => {
          const notasDia = notasPorDia(d);
          const diaClase = d
            ? notasDia.length > 0
              ? "calendario-dia con-notas"
              : "calendario-dia"
            : "calendario-dia inactivo";

          return (
            <div key={i} className={diaClase}>
              {d && (
                <>
                  <div className="calendario-numero">{d}</div>
                  {notasDia.length > 0 && (
                    <ul className="calendario-lista-notas">
                      {notasDia.map((nota) => (
                        <li key={nota.id}>
                          <strong>{nota.materia}</strong>
                          <br />
                          <small>{nota.horario}</small>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendario;
