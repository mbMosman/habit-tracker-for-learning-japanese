import React from 'react';
import LoginForm from '../forms/LoginForm';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(5),
  },
}));

function LoginPage() {

  const classes = useStyles();
  const history = useHistory();

  const goToRegistration = (event) => {
    event.preventDefault();
    history.push('/registration');
  }

  return (
    <div className={classes.root}>
      <LoginForm />
      <Typography>
        Not registered yet? Go to &nbsp;
          <Link href="#" onClick={goToRegistration}>
            New User Registration
          </Link>
      </Typography>
    </div>
  );
}

export default LoginPage;
