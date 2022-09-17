import { useState } from "react";

import Name from "./FormComponents/Name";
import Level from "./FormComponents/Level";

function Form() {
  const [charInfo, setCharInfo] = useState({
    name: '',
    level: 1,
  });

  const handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type !== 'checkbox' ? target.value : target.checked;

    setCharInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const { name, level } = charInfo;

  return (
    <form>
      <Name name={ name } onChange={ handleChange } />
      <Level level={ level } onChange={ handleChange } />
    </form>
  )
}

export default Form;
