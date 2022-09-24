import PropTypes from 'prop-types';

function Int({ int, onChange }) {
  return (
    <label htmlFor="int">
      <p>INT</p>
      <input
        type="number"
        id="int"
        name="int"
        value={ int }
        onChange={ onChange }
      />
    </label>
  );
}

Int.propTypes = {
  int: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Int;
