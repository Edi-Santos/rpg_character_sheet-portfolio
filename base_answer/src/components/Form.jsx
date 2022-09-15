import { useState } from "react";

import Name from "./FormComponents/Name";

function Form() {
  const [charInfo, setCharInfo] = useState({
    name: '',
  });

  const { name } = charInfo;

  return (
    <form>
      <Name name={ name } />
    </form>
  )
}

export default Form;
