import PropTypes from 'prop-types';

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

Level.propTypes = {
  level: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Level;
