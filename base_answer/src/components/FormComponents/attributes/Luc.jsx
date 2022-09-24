import PropTypes from 'prop-types';

function Luc({ luc, onChange }) {
  return (
    <label htmlFor="luc">
      <p>LUC</p>
      <input
        type="text"
        min="1"
        id="luc"
        name="luc"
        value={ luc }
        onChange={ onChange }
      />
    </label>
  );
}

Luc.propTypes = {
  luc: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Luc;
