import React from "react";
import Grid from "@material-ui/core/Grid";
import Steper from "../../ReusableCompnents/Steper";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Input } from "reactstrap";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { UPDATE_HOME_PROPS } from "../../Redux/Actions/types";
const useStyles = makeStyles((theme) => ({
  paper: {
    borderRadius: "10px",
    height: "100%",
  },
}));
const UserForm = ({ general, userForm }) => {
  const classes = useStyles();

  return (
    <Grid item xs={10}>
      <Grid container item spacing={3} className="mt-2">
        <Steper step={3} />
      </Grid>

      <Grid container item spacing={3} className="ml-1 mt-1">
        <Grid item xs={12} lg={12} md={12} sm={12} className="center">
          <div className="form_container">
            <Paper className={classes.paper}>
              <br />
              <Grid
                item
                xs={12}
                lg={12}
                md={12}
                sm={12}
                className="ml-4 mr-4 mt-3 text-center"
              >
                <p className="form_title">Payment Form</p>

                <Input
                  placeholder="Name"
                  value={userForm.name}
                  onChange={(e) =>
                    general(
                      [{ prop: "userForm.name", value: e.target.value }],
                      UPDATE_HOME_PROPS
                    )
                  }
                />
              </Grid>
              <br />

              <Grid
                item
                xs={12}
                lg={12}
                md={12}
                sm={12}
                className="ml-4 mr-4 mt-3"
              >
                <Input
                  placeholder="Email"
                  type="email"
                  value={userForm.email}
                  onChange={(e) =>
                    general(
                      [{ prop: "userForm.email", value: e.target.value }],
                      UPDATE_HOME_PROPS
                    )
                  }
                />
              </Grid>
              <br />

              <Grid
                item
                xs={12}
                lg={12}
                md={12}
                sm={12}
                className="ml-4 mr-4 mt-3"
              >
                <PhoneInput
                  country={"eg"}
                  value={userForm.name}
                  onChange={(phone) =>
                    general(
                      [{ prop: "userForm.mobile", value: phone }],
                      UPDATE_HOME_PROPS
                    )
                  }
                />
              </Grid>
              <br />
            </Paper>
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default UserForm;
