import React, { useState, useEffect } from "react";
import Tab from "../components/Tab";
import Follow from "../components/Follow";
import Styles from "./Styles.module.scss";
import Following from "../components/Following";
function Home() {
  const [state, setstate] = useState(1);
  useEffect(() => {
    getValue(state);
  });
  function getValue(val) {
    setstate(val);
  }
  function show() {
    if (state === 1) {
      return <Follow />;
    } else if (state === 0) {
      return <Following />;
    }
  }
  return (
    <div className={Styles.container}>
      <Tab getValue={getValue} />
      {show()}
    </div>
  );
}

export default Home;
