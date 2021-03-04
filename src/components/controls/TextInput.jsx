import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles((theme) => ({
  margin: {
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  textField: {
    width: '25ch',
  },
}));

function TextInput({setValue, value, label}) {

  const classes = useStyles();

  return (
		<FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
			<InputLabel htmlFor={`in-${label}`}>{label}</InputLabel>
			<OutlinedInput id={`in-${label}`}
				type="text" 
				value={value}
				onChange={setValue}
				labelWidth={70}
			/>
		</FormControl>
  );
}

export default TextInput;


