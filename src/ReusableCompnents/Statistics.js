import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: "black",
    fontWeight: "bold",
  },
}));
const Statistics = ({ count, price }) => {
  const classes = useStyles();

  return (
    <Grid item xs={2} className="mt-2">
      <Grid container item spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            {count === 0 ? "Count" : count + " Songs"}
          </Paper>
        </Grid>
      </Grid>
      <Grid container item spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            {price === 0 ? "Price" : price + " Egp"}
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Statistics;
