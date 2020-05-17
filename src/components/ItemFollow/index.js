import React, { useState, useContext } from "react";
import Avatar from "@material-ui/core/Avatar";
import Styles from "./Styles.module.scss";
import Button from "@material-ui/core/Button";
import InfoContext from "../../context/InfoContext";

function ItemFollow({ data }) {
  const context = useContext(InfoContext);
  const [state, setstate] = useState(data.follow);
  //console.log(context);
  function handleclick() {
    let ind = data.id - 1;
    if (state === "true") {
      setstate("false");
      context[ind].follow = "false";
      context[ind].visible = "true";
    } else if (state === "wait") {
      setstate("false");
      context[ind].follow = "false";
      context[ind].visible = "true";
    }
  }
  function handleFollow() {
    let ind = data.id - 1;
    if (state === "true") {
      setstate("wait");
      context[ind].following = "true";
      context[ind].visible = "false";
    }
  }

  function show() {
    if (state === "true") {
      return (
        <div className={Styles.container}>
          <Avatar alt="Cindy Baker" src="" />
          <div className={Styles.name}>
            <p>{data.name}</p>
            {data.following === "false" ? (
              <Button
                variant="text"
                className={Styles.btnblue}
                onClick={handleFollow}
              >
                Follow
              </Button>
            ) : (
              <></>
            )}
          </div>

          <Button
            variant="text"
            className={Styles.btnred}
            onClick={handleclick}
          >
            remove
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
            className={Styles.btnred}
            onClick={handleclick}
          >
            remove
          </Button>
        </div>
      );
    }
    // if (state === "false" && visible === "true") {
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
    //         remove
    //       </Button>
    //     </div>
    //   );
    // } else if (state === "true" && visible === "true") {
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

export default ItemFollow;
