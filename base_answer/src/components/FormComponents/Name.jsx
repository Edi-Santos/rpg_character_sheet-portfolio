function Name({ name, onChange }) {
  return (
    <label forHtml="name">
      <p>Nome:</p>
      <input
        type="text"
        id="name"
        name="name"
        value={ name }
        onChange={ onChange }
        placeholder="Nome do seu char"
      />
    </label>
  );
}

export default Name;
