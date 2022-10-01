import PropTypes from 'prop-types';

function FirstSkill({ skill, onChange }) {
  return (
    <label htmlFor="firstSkill">
      <p>Habilidade 1</p>
      <input
        type="text"
        id="firstSkill"
        name="firstSkill"
        value={ skill }
        onChange={ onChange }
        placeholder="Primeira habilidade"
      />
    </label>
  );
}

FirstSkill.propTypes = {
  skill: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FirstSkill;
