import { useState } from "react"
export const CardTarea = ({ tarea, index, handleCambiar, handleEliminar }) => {
  return (
    <>
      <div
        className={tarea.realizado ? "card bg-success" : "card bg-light"}
        style={{ maxWidth: "400px" }}
      >
        <div className="card-body text-dark">
          <h5 className="card-title">Tarea: {index}</h5>

          <p className="card-text">{tarea.descripcion}</p>

          <hr />

          <div className="d-grid gap-2">
            <button onClick={() => handleEliminar(index)} className="btn btn-outline-dark"> Borrar </button>
            <button onClick={() => handleCambiar(index)} className="btn btn-outline-primary"> {tarea.realizado? "Marcar como inconclusa": "Marcar como terminda "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
