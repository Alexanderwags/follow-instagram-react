import React, { useState, useContext } from "react";
import Avatar from "@material-ui/core/Avatar";
import Styles from "./Styles.module.scss";
import Button from "@material-ui/core/Button";
import InfoContext from "../../context/InfoContext";

function ItemFollowing({ data }) {
  const context = useContext(InfoContext);
  const [state, setstate] = useState(data.following);
  const [visible, setvisible] = useState(data.visible);
  function handleclick() {
    let ind = data.id - 1;
    if (state === "true") {
      setstate("false");
      context[ind].following = "false";
      context[ind].visible = "false";
    } else if (state === "false") {
      setstate("true");
      context[ind].following = "true";
      context[ind].visible = "true";
    }

    console.log(context[ind].following);
    console.log("state ", state);
    console.log("follow ", data.following);
  }
  function show() {
    if (state === "true" && visible === "true") {
      return (
        <div className={Styles.container}>
          <Avatar alt="Cindy Baker" src="" />
          <div className={Styles.name}>
            <p>{data.name}</p>
          </div>

          <Button
            variant="text"
            className={Styles.btnred}
            onClick={handleclick}
          >
            Following
          </Button>
        </div>
      );
    } else if (state === "false" && visible === "true") {
      return (
        <div className={Styles.container}>
          <Avatar alt="Cindy Baker" src="" />
          <div className={Styles.name}>
            <p>{data.name}</p>
          </div>

          <Button
            variant="text"
            className={Styles.btnblue}
            onClick={handleclick}
          >
            Follow
          </Button>
        </div>
      );
    }
  }
  return <>{show()}</>;
}

export default ItemFollowing;
