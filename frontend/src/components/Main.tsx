import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { withRouter } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import Topbar from "./Topbar";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.grey["100"],
    overflow: "hidden",
    backgroundSize: "cover",
    backgroundPosition: "0 400px",
    paddingBottom: 200
  },
  grid: {
    width: 1200,
    marginTop: 40,
    [theme.breakpoints.down("sm")]: {
      width: "calc(100% - 20px)"
    }
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: "left",
    color: theme.palette.text.secondary
  },
  topBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 32
  },
  actionButton: {
    textTransform: "uppercase",
    margin: theme.spacing(1),
    width: 152
  },
  block: {
    padding: theme.spacing(2)
  },
  box: {
    marginBottom: 40,
    height: 65
  },
  alignRight: {
    display: "flex",
    justifyContent: "flex-end"
  },
}));

const Main: React.FunctionComponent = (props: any) => {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <Topbar />
      <div className={classes.root}>
        <Grid container justify="center">
          <Grid
            spacing={4}
            alignItems="center"
            justify="center"
            container
            className={classes.grid}
          >
            <Grid item xs={12} md={6}>
              <Paper className={classes.paper}>
                <div className={classes.box}>
                  <Typography
                    style={{ textTransform: "uppercase" }}
                    color="secondary"
                    gutterBottom
                  >
                    First title
                    </Typography>
                  <Typography variant="body2" gutterBottom>
                    A first title style <br /> with two lines
                    </Typography>
                </div>
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <Button
                    color="primary"
                    variant="contained"
                    className={classes.actionButton}
                  >
                    Learn more
                    </Button>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper className={classes.paper}>
                <div className={classes.box}>
                  <Typography
                    style={{ textTransform: "uppercase" }}
                    color="secondary"
                    gutterBottom
                  >
                    Another box
                    </Typography>
                  <Typography variant="body1" gutterBottom>
                    A default box
                    </Typography>
                </div>
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <Button
                    color="primary"
                    variant="contained"
                    className={classes.actionButton}
                  >
                    Learn more
                    </Button>
                </div>
              </Paper>
            </Grid>
            <Grid container item xs={12}>
              <Grid item xs={12}>
                <Paper className={classes.paper}>
                  <div>
                    <div className={classes.box}>
                      <Typography color="secondary" gutterBottom>
                        Full box
                        </Typography>
                      <Typography variant="body1" gutterBottom>
                        Full-width box
                        </Typography>
                    </div>
                    <div className={classes.alignRight}>
                      <Button
                        color="primary"
                        variant="contained"
                        className={classes.actionButton}
                      >
                        Learn more
                        </Button>
                    </div>
                  </div>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default withRouter(Main);