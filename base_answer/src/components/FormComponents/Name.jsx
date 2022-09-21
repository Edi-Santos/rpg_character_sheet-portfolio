import PropTypes from 'prop-types';

function Name({ name, onChange }) {
  return (
    <label htmlFor="name">
      <p>Nome:</p>
      <input
        type="text"
        id="name"
        name="name"
        value={ name }
        onChange={ onChange }
        placeholder="Nome do seu char"
      />
    </label>
  );
}

Name.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Name;
