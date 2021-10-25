import { useState } from "react";

function MyForm() {
    const [textarea, setTextarea] = useState('Este es un texto por defecto');

    const handleChange = (event) => {
        setTextarea(event.target.value);
    };

    return (
      <div class="my-form">
        <form>
            <div class="form-group">
                <label>Text</label>
                <textarea class="form-control" value={textarea} onChange={(e) => handleChange(e)}/>
            </div>
        </form>
        <hr />
        <p>Textarea: {textarea}</p>
      </div>
    );
}

export default MyForm;