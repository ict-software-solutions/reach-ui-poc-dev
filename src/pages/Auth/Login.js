import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Link from "@material-ui/core/Link";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import { useFormik } from "formik";
import * as yup from "yup";
import logo from "../../assets/images/logo.png";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundSize: "cover",
    minHeight: "100vh",
    width: "100%",
    display: "flex",
    position: "fixed",
    backgroundImage: `url(${"https://popuppainting.com/wp-content/uploads/2020/04/aerial-background-beverage-blog-blogger-browsing-1447929-pxhere.com_-scaled.jpg"})`,
  },
  paper: {
    marginTop: theme.spacing(6),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: 380,
    margin: "100px auto",
    padding: 20,
  },
  avatar: {
    margin: theme.spacing(1),
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  checkbox: {
    display: "table-cell",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function Login(props) {
  const classes = useStyles();
  const { history } = props;
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },

    validationSchema: yup.object({
      username: yup
        .string()
        .required("username is required")
        .min(6, "6 characters required"),
      password: yup
        .string()
        .required("password is required")
        .min(5, "5 characters required"),
    }),

    onSubmit: (Data) => {
      history.push({
        pathname: "/home",
        state: { user: Data.username },
      });
    },
  });

  return (
    <div className={classes.root}>
      <Paper className={classes.paper} elevation={6}>
        <Avatar src={logo} className={classes.avatar} />
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoFocus
            value={formik.values.username}
            onChange={formik.handleChange}
            helperText={formik.touched.username ? formik.errors.username : ""}
            error={formik.touched.username ? formik.errors.username : ""}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            helperText={formik.touched.password ? formik.errors.password : ""}
            error={formik.touched.password ? formik.errors.password : ""}
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            className={classes.checkbox}
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={formik.handleSubmit}
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/register" variant="body2">
                Don't have an account? Sign Up
              </Link>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </div>
  );
}

export default Login;
