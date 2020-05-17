import React, { useContext } from "react";
import ItemFollow from "../ItemFollow";
import InfoContext from "../../context/InfoContext";

function Follow() {
  const context = useContext(InfoContext);

  return (
    <div>
      {context.map((inf) => (
        <ItemFollow data={inf} key={inf.id} />
      ))}
    </div>
  );
}

export default Follow;
