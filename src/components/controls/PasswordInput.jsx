import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: '25ch',
  },
}));



function PasswordInput() {

  const classes = useStyles();

  const [password, setValues] = React.useState({
    password: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
		<FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
			<InputLabel htmlFor="in-password">Password</InputLabel>
			<OutlinedInput
				id="in-password"
				type={values.showPassword ? 'text' : 'password'}
				value={values.password}
				onChange={handleChange('password')}
				endAdornment={
					<InputAdornment position="end">
						<IconButton
							aria-label="toggle password visibility"
							onClick={handleClickShowPassword}
							onMouseDown={handleMouseDownPassword}
							edge="end"
						>
							{values.showPassword ? <Visibility /> : <VisibilityOff />}
						</IconButton>
					</InputAdornment>
				}
				labelWidth={70}
			/>
		</FormControl>
  );
}

export default PasswordInput;


