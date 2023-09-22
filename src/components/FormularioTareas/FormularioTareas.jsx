export const FormularioTareas = ({descripcion, handlerInputChange, handleSubmit}) => {
  

  return (
    <>
      <h3>Agregar tarea</h3>

      <hr />
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="mb-3">
          <label htmlFor="tareaInput" className="form-label"> Descripcion </label>
          <input onChange={(e) => handlerInputChange(e)} value= {descripcion} type="text" className="form-control" id="tareaInput" aria-describedby="descripcionText"
          />
          <div id="descripcionText" className="form-text">
            Agrega la descripcion de la tarea.
          </div>
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-success">
            Agregar
          </button>
        </div>
      </form>
    </>
  );
};
