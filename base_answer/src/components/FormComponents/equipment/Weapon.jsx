import PropTypes from 'prop-types';

function Weapon({ weapon, onChange }) {
  return (
    <label htmlFor="weapon">
      <p>Arma</p>
      <input
        type="text"
        id="weapon"
        name="weapon"
        value={ weapon }
        onChange={ onChange }
        placeholder="Equipe uma arma..."
      />
    </label>
  );
}

Weapon.propTypes = {
  weapon: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Weapon;
