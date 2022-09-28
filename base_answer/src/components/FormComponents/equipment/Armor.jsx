import PropTypes from 'prop-types';

function Armor({ armor, onChange }) {
  return (
    <label htmlFor="armor">
      <p>Armadura</p>
      <input
        type="text"
        id="armor"
        name="armor"
        value={ armor }
        onChange={ onChange }
        placeholder="Equpe uma armadura..."
      />
    </label>
  );
}

Armor.propTypes = {
  armor: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Armor;
