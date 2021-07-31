import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
const useStyles = makeStyles((theme) => ({
  paper: {
    color: theme.palette.text.secondary,
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
    // backgroundImage: "linear-gradient(to right,#000000,#5c3b3c,white,#fbfbfb)",
  },
}));

export default function GeneralCard({ children }) {
  const classes = useStyles();

  return (
    <Grid item xs={4} lg={4} md={6} sm={6}>
      <Paper className={classes.paper}>{children()}</Paper>
    </Grid>
  );
}
