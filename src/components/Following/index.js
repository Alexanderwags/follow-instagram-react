import React, { useContext } from "react";
import ItemFollowing from "../ItemFollowing";
import InfoContext from "../../context/InfoContext";
function Following() {
  const context = useContext(InfoContext);

  return (
    <div>
      {context.map((inf) => (
        <ItemFollowing data={inf} key={inf.id} />
      ))}
    </div>
  );
}

export default Following;
