import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import AdbRoundedIcon from "@material-ui/icons/AdbRounded";
import { blue } from "@material-ui/core/colors";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1)
    }
  },
  blue: {
    color: "#fff",
    backgroundColor: blue[500]
  }
}));

const LeftPanel = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid item xs={6} sm={4}>
        <Avatar className={classes.blue}>
          <HomeRoundedIcon />
        </Avatar>
      </Grid>
      <Grid item xs={6} sm={4}>
        <Avatar>
          <AdbRoundedIcon />
        </Avatar>
      </Grid>
      <Grid item xs={6} sm={4} >
        <Avatar className={classes.blue}>AO</Avatar>
      </Grid>
    </div>
  );
};

export default LeftPanel;
