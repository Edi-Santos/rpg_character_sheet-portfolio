import PropTypes from 'prop-types';

function Str({ str, onChange }) {
  return (
    <label htmlFor="str">
      <p>STR</p>
      <input
        type="number"
        id="str"
        name="str"
        value={ str }
        onChange={ onChange }
      />
    </label>
  );
}

Str.propTypes = {
  str: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Str;
