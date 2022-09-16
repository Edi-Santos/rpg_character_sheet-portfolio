import { useState } from "react";

import Name from "./FormComponents/Name";

function Form() {
  const [charInfo, setCharInfo] = useState({
    name: '',
  });

  const handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type !== 'checkbox' ? target.value : target.checkbox;

    setCharInfo((prevState) => ({
      [name]: value,
    }));
  };

  const { name } = charInfo;

  return (
    <form>
      <Name name={ name } onChange={ handleChange } />
    </form>
  )
}

export default Form;
