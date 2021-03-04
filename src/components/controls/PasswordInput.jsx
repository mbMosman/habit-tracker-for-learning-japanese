import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const useStyles = makeStyles((theme) => ({
  margin: {
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  textField: {
    width: '25ch',
  },
}));

function PasswordInput({setPassword, value}) {

  const classes = useStyles();

  const [showPassword, setShowPassword] = React.useState( false );

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
		<FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
			<InputLabel htmlFor="in-password">Password</InputLabel>
			<OutlinedInput id="in-password"
				type={showPassword ? 'text' : 'password'}
				value={value}
				onChange={setPassword}
				endAdornment={
					<InputAdornment position="end">
						<IconButton
							aria-label="toggle password visibility"
							onClick={handleClickShowPassword}
							onMouseDown={handleMouseDownPassword}
							edge="end"
						>
							{showPassword ? <Visibility /> : <VisibilityOff />}
						</IconButton>
					</InputAdornment>
				}
				labelWidth={70}
			/>
		</FormControl>
  );
}

export default PasswordInput;


