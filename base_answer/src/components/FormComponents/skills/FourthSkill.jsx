import PropTypes from 'prop-types';

function FourthSkill({ skill, onChange }) {
  return (
    <label htmlFor="fourthSkill">
      <p>Habilidade 4</p>
      <input
        type="text"
        id="fourthSkill"
        name="fourthSkill"
        value={ skill }
        onChange={ onChange }
        placeholder="Quarta habilidade"
      />
    </label>
  );
}

FourthSkill.propTypes = {
  skill: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FourthSkill;
