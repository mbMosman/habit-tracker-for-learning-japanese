import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import RegisterForm from '../forms/RegisterForm';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(5),
  },
}));

function RegisterPage() {

  const classes = useStyles();
  const history = useHistory();

  const goToLogin = (event) => {
    event.preventDefault();
    history.push('/login');
  }

  return (
    <div className={classes.root}>
      <RegisterForm />
      <Typography>
        Already registered? Go to &nbsp;
          <Link href="#" onClick={goToLogin}>
            Log In
          </Link>
      </Typography>
    </div>
  );
}

export default RegisterPage;
