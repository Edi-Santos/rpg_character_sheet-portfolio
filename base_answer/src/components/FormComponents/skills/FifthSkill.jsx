import PropTypes from 'prop-types';

function FifthSkill({ skill, onChange }) {
  return (
    <label htmlFor="fifthSkill">
      <p>Habilidade 5</p>
      <input
        type="text"
        id="fifthSkill"
        name="fifthSkill"
        value={ skill }
        onChange={ onChange }
        placeholder="Quinta habilidade"
      />
    </label>
  );
}

FifthSkill.propTypes = {
  skill: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FifthSkill;
