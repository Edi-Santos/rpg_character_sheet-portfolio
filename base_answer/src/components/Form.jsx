import { useState } from 'react';

import Name from './FormComponents/charInfos/Name';
import Level from './FormComponents/charInfos/Level';
import Class from './FormComponents/charInfos/Class';
import Str from './FormComponents/attributes/Str';
import Rec from './FormComponents/attributes/Rec';
import Dex from './FormComponents/attributes/Dex';
import Luc from './FormComponents/attributes/Luc';
import Wis from './FormComponents/attributes/Wis';
import Int from './FormComponents/attributes/Int';
import Weapon from './FormComponents/equipment/Weapon';
import Armor from './FormComponents/equipment/Armor';
import Bag from './FormComponents/equipment/Bag';
import FirstSkill from './FormComponents/skills/FirstSkill';
import SecondSkill from './FormComponents/skills/SecondSkill';
import ThirdSkill from './FormComponents/skills/ThirdSkill';
import FourthSkill from './FormComponents/skills/FourthSkill';
import FifthSkill from './FormComponents/skills/FifthSkill';

function Form() {
  const [charInfo, setCharInfo] = useState({
    name: '',
    level: '1',
    charClass: '',
  });

  const [skills, setSkills] = useState({
    firstSkill: '',
    secondSkill: '',
    thirdSkill: '',
    fourthSkill: '',
    fifthSkill: '',
  });

  const [attrubutes, setAttributes] = useState({
    str: '1',
    rec: '1',
    dex: '1',
    luc: '1',
    wis: '1',
    int: '1',
  });

  const [equipment, setEquipment] = useState({
    weapon: '',
    armor: '',
    bag: '',
  });

  const handleChangeInfo = ({ target }) => {
    const { name } = target;
    const value = target.type !== 'checkbox' ? target.value : target.checked;

    setCharInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleChangeSkill = ({ target }) => {
    const { name, value } = target;

    setSkills((prevState) => ({
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

  const handleChangeEqp = ({ target }) => {
    const { name, value } = target;

    setEquipment((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const { name, level, charClass } = charInfo;
  const { firstSkill, secondSkill, thirdSkill, fourthSkill, fifthSkill } = skills;
  const { str, rec, dex, luc, wis, int } = attrubutes;
  const { weapon, armor, bag } = equipment;

  return (
    <form>
      <section>
        <Name name={ name } onChange={ handleChangeInfo } />
        <Level level={ level } onChange={ handleChangeInfo } />
        <Class charClass={ charClass } onChange={ handleChangeInfo } />
      </section>

      <section>
        <FirstSkill skill={ firstSkill } onChange={ handleChangeSkill } />
        <SecondSkill skill={ secondSkill } onChange={ handleChangeSkill } />
        <ThirdSkill skill={ thirdSkill } onChange={ handleChangeSkill } />
        <FourthSkill skill={ fourthSkill } onChange={ handleChangeSkill } />
        <FifthSkill skill={ fifthSkill } onChange={ handleChangeSkill } />
      </section>

      <section>
        <Str str={ str } onChange={ handleChangeAtt } />
        <Rec rec={ rec } onChange={ handleChangeAtt } />
        <Dex dex={ dex } onChange={ handleChangeAtt } />
        <Luc luc={ luc } onChange={ handleChangeAtt } />
        <Wis wis={ wis } onChange={ handleChangeAtt } />
        <Int int={ int } onChange={ handleChangeAtt } />
      </section>

      <section>
        <Weapon weapon={ weapon } onChange={ handleChangeEqp } />
        <Armor armor={ armor } onChange={ handleChangeEqp } />
        <Bag bag={ bag } onChange={ handleChangeEqp } />
      </section>
    </form>
  );
}

export default Form;
