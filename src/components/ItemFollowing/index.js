import React, { useState, useContext } from "react";
import Avatar from "@material-ui/core/Avatar";
import Styles from "./Styles.module.scss";
import Button from "@material-ui/core/Button";
import InfoContext from "../../context/InfoContext";

function ItemFollowing({ data }) {
  const context = useContext(InfoContext);
  const [state, setstate] = useState(data.follow);
  const [visible, setvisible] = useState(data.visible);
  function handleclick() {
    let ind = data.id - 1;
    if (state === "true") {
      setstate("false");
      context[ind].follow = "false";
      context[ind].visible = "true";
    } else if (state === "false") {
      setstate("true");
      context[ind].follow = "true";
      context[ind].visible = "false";
    }

    // console.log(context[ind].follow);
    // console.log("state ", state);
    // console.log("follow ", data.follow);
  }
  function show() {
    if (data.following === "true" && visible === "true") {
      return (
        <div className={Styles.container}>
          <Avatar alt="Cindy Baker" src="" />
          <div className={Styles.name}>
            <p>{data.name}</p>
          </div>

          <Button variant="text" className={Styles.btnred}>
            Following
          </Button>
        </div>
      );
    } else if (data.following === "false" && visible === "true") {
      return (
        <div className={Styles.container}>
          <Avatar alt="Cindy Baker" src="" />
          <div className={Styles.name}>
            <p>{data.name}</p>
          </div>

          <Button variant="text" className={Styles.btnblue}>
            Follow
          </Button>
        </div>
      );
    }
  }
  return <>{show()}</>;
}

export default ItemFollowing;
