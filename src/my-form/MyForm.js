import { useState } from 'react';

function MyForm() {
  const [textarea, setTextarea] = useState('Este es un texto por defecto');

  const handleChange = (event) => {
    setTextarea(event.target.value);
  };

  const submitForm = (event) => {
    event.preventDefault();
    alert(`Textarea Text: ${textarea}`);
  };

  return (
    <div class="my-form">
      <form onSubmit={submitForm}>
        <div class="form-group mb-2">
          <label>Text</label>
          <textarea
            class="form-control"
            value={textarea}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div class="form-group">
          <button type="submit" class="btn btn-primary">
            Enviar
          </button>
        </div>
      </form>
      <hr />
      <p>Textarea: {textarea}</p>
    </div>
  );
}

export default MyForm;
