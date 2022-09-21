import { useState } from "react";

import Name from "./FormComponents/Name";
import Level from "./FormComponents/Level";
import Class from "./FormComponents/Class";

function Form() {
  const [charInfo, setCharInfo] = useState({
    name: '',
    level: 1,
    charClass: '',
  });

  const [attrubutes, setAttributes] = useState({
    str: 0,
    rec: 0,
    dex: 0,
    luc: 0,
    wis: 0,
    int: 0,
  });

  const handleChangeInfo = ({ target }) => {
    const { name } = target;
    const value = target.type !== 'checkbox' ? target.value : target.checked;

    setCharInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleChangeAtt = ({ target }) => {
    const { name } = target;
    const value = target.type !== 'checkbox' ? target.value : target.checked;

    setAttributes((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  const { name, level, charClass } = charInfo;

  return (
    <form>
      <Name name={ name } onChange={ handleChangeInfo } />
      <Level level={ level } onChange={ handleChangeInfo } />
      <Class charClass={ charClass } onChange={ handleChangeInfo} />
    </form>
  );
}

export default Form;
