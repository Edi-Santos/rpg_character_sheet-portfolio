import PropTypes from 'prop-types';

function Wis({ wis, onChange }) {
  return (
    <label htmlFor="wis">
      <p>WIS</p>
      <input
        type="number"
        min="1"
        id="wis"
        name="wis"
        value={ wis }
        onChange={ onChange }
      />
    </label>
  );
}

Wis.propTypes = {
  wis: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Wis;
