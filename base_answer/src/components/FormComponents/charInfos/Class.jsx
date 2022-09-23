import PropTypes from 'prop-types';

function Class({ charClass, onChange }) {
  return (
    <label htmlFor="class">
      <p>Classe</p>
      <input
        type="text"
        id="class"
        name="charClass"
        value={ charClass }
        onChange={ onChange }
        placeholder="Classe"
      />
    </label>
  );
}

Class.propTypes = {
  charClass: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Class;
