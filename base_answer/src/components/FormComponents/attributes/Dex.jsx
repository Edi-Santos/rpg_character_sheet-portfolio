import PropTypes from 'prop-types';

function Dex({ dex, onChange }) {
  return (
    <label htmlFor="dex">
      <p>DEX</p>
      <input
        type="number"
        min="1"
        id="dex"
        name="dex"
        value={ dex }
        onChange={ onChange }
      />
    </label>
  );
}

Dex.propTypes = {
  dex: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Dex;
