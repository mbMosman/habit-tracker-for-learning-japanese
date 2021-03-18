import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import Typography from '@material-ui/core/Typography';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles((theme) => ({
  title: {
		padding: theme.spacing(1),
	}
}));

function ConfirmationDialog({ title, text, isOpen, handleCancel, handleOk }) {

	const classes = useStyles();

  return (
    <Dialog disableBackdropClick disableEscapeKeyDown
      maxWidth="xs" aria-labelledby="confirmation-dialog-title"
      open={isOpen}
			TransitionComponent={Transition}
    >
      <DialogTitle id="confirmation-dialog-title" className={classes.title}>
				{title ? title : 'Confirm'}
			</DialogTitle>

      <DialogContent>
        <Typography>{text}</Typography>
      </DialogContent>

      <DialogActions>
        <Button autoFocus variant="contained" onClick={handleCancel}>
          Cancel
        </Button>
        <Button variant="contained" color="primary" onClick={handleOk}>
          Ok
        </Button>

      </DialogActions>
    </Dialog>
  );
}

ConfirmationDialog.propTypes = {
  handleOk: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default ConfirmationDialog;

