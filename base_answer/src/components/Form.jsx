import { useState } from 'react';

import Name from './FormComponents/charInfos/Name';
import Level from './FormComponents/charInfos/Level';
import Class from './FormComponents/charInfos/Class';
import Str from './FormComponents/attributes/Str';
import Rec from './FormComponents/attributes/Rec';
import Dex from './FormComponents/attributes/Dex';
import Luc from './FormComponents/attributes/Luc';

function Form() {
  const [charInfo, setCharInfo] = useState({
    name: '',
    level: '1',
    charClass: '',
  });

  const [attrubutes, setAttributes] = useState({
    str: '1',
    rec: '1',
    dex: '1',
    luc: '1',
    wis: '1',
    int: '1',
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
  };

  const { name, level, charClass } = charInfo;
  const { str, rec, dex, luc } = attrubutes;

  return (
    <form>
      <Name name={ name } onChange={ handleChangeInfo } />
      <Level level={ level } onChange={ handleChangeInfo } />
      <Class charClass={ charClass } onChange={ handleChangeInfo } />

      <Str str={ str } onChange={ handleChangeAtt } />
      <Rec rec={ rec } onChange={ handleChangeAtt } />
      <Dex dex={ dex } onChange={ handleChangeAtt } />
      <Luc luc={ luc } onChange={ handleChangeAtt } />
    </form>
  );
}

export default Form;
