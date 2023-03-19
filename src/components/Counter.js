import React, { useContext } from "react";

import Context from "../contexts/Context.js";

export default function Counter() {
   const { userData, setUserData} = useContext(Context)


  return (
    <div>
      <h3>{total}</h3>
      <button type="button" onClick={() => setTotal(total + 1)}>
        Contador
      </button>
    </div>
  );
}