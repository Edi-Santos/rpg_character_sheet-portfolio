import PropTypes from 'prop-types';

function Rec({ rec, onChange }) {
  return (
    <label htmlFor="rec">
      <p>REC</p>
      <input
        type="number"
        min="1"
        id="rec"
        name="rec"
        value={ rec }
        onChange={ onChange }
      />
    </label>
  );
}

Rec.propTypes = {
  rec: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Rec;
