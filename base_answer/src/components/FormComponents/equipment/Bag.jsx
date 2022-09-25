import PropTypes from 'prop-types';

function Bag({ bag, onChange }) {
  return (
    <label htmlFor="bag">
      <p>Inventário</p>
      <textarea
        id="bag"
        cols="30"
        rows="10"
        name="bag"
        value={ bag }
        onChange={ onChange }
        placeholder="Ítens do inventário"
      />
    </label>
  );
}

Bag.propTypes = {
  bag: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Bag;
