import PropTypes from 'prop-types';

function ThirdSkill({ skill, onChange }) {
  return (
    <label htmlFor="thirdSkill">
      <p>Habilidade 3</p>
      <input
        type="text"
        id="thirdSkill"
        name="thirdSkill"
        value={ skill }
        onChange={ onChange }
        placeholder="Segunda habilidade"
      />
    </label>
  );
}

ThirdSkill.propTypes = {
  skill: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ThirdSkill;
