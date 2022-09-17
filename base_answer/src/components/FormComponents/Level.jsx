function Level({ level, onChange }) {
  return (
    <label htmlFor="level">
      <p>Nível</p>
      <input
        type="number"
        min="1"
        id="level"
        name="level"
        value={ level }
        onChange={ onChange }
      />
    </label>
  );
}

export default Level;
