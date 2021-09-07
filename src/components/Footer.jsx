import {makeStyles} from "@material-ui/core";
import React from "react";

const useStyle = makeStyles({
  footer: {
    textAlign: "center",
    fontSize: "1rem",
    fontWeight: "bold",
  },
});

function Footer() {
  const classes = useStyle();

  return (
    <div className={classes.footer}>
      <p className={classes.footer}>Copyrights @SyedAhamed</p>
    </div>
  );
}

export default Footer;
