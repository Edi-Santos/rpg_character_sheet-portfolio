import PropTypes from 'prop-types';

function SecondSkill({ skill, onChange }) {
  return (
    <label htmlFor="secondSkill">
      <p>Habilidade 2</p>
      <input
        type="text"
        id="secondSkill"
        name="secondSkill"
        value={ skill }
        onChange={ onChange }
        placeholder="Segunda habilidade"
      />
    </label>
  );
}

SecondSkill.propTypes = {
  skill: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SecondSkill;
