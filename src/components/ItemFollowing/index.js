import React, { useState, useContext } from "react";
import Avatar from "@material-ui/core/Avatar";
import Styles from "./Styles.module.scss";
import Button from "@material-ui/core/Button";
import InfoContext from "../../context/InfoContext";

function ItemFollowing({ data }) {
  const context = useContext(InfoContext);
  const [state, setstate] = useState(data.following);

  function handleFollowing() {
    let ind = data.id - 1;
    if (state === "true") {
      setstate("wait");
      context[ind].following = "false";
      context[ind].visible = "false";
    }
    console.log("following", state);
  }
  function handleFollow() {
    let ind = data.id - 1;
    if (state === "wait") {
      setstate("true");
      context[ind].following = "true";
      context[ind].visible = "false";
    }
    console.log("follow ", state);
  }
  function show() {
    if (state === "true") {
      return (
        <div className={Styles.container}>
          <Avatar alt="Cindy Baker" src="" />
          <div className={Styles.name}>
            <p>{data.name}</p>
          </div>

          <Button
            variant="text"
            className={Styles.btnred}
            onClick={handleFollowing}
          >
            Following
          </Button>
        </div>
      );
    } else if (state === "wait") {
      return (
        <div className={Styles.container}>
          <Avatar alt="Cindy Baker" src="" />
          <div className={Styles.name}>
            <p>{data.name}</p>
          </div>
          <Button
            variant="text"
            className={Styles.btnblue}
            onClick={handleFollow}
          >
            Follow
          </Button>
        </div>
      );
    }
    // if (state === "true" && visible === "true") {
    //   return (
    //     <div className={Styles.container}>
    //       <Avatar alt="Cindy Baker" src="" />
    //       <div className={Styles.name}>
    //         <p>{data.name}</p>
    //       </div>

    //       <Button
    //         variant="text"
    //         className={Styles.btnred}
    //         onClick={handleclick}
    //       >
    //         Following
    //       </Button>
    //     </div>
    //   );
    // } else if (state === "false" && visible === "true") {
    //   return (
    //     <div className={Styles.container}>
    //       <Avatar alt="Cindy Baker" src="" />
    //       <div className={Styles.name}>
    //         <p>{data.name}</p>
    //       </div>

    //       <Button
    //         variant="text"
    //         className={Styles.btnblue}
    //         onClick={handleclick}
    //       >
    //         Follow
    //       </Button>
    //     </div>
    //   );
    // }
  }
  return <>{show()}</>;
}

export default ItemFollowing;
