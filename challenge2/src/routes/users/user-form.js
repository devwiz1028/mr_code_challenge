import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Paper, Button } from '@material-ui/core';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

class UserForm extends React.Component {
  static propTypes = {
    classes: PropTypes.object.isRequired, //eslint-disable-line
    data: PropTypes.shape({
      firstName: PropTypes.string,
      lastName: PropTypes.string,
    }).isRequired,
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
  };

  handleChange = fieldName => (event) => {
    const { onChange } = this.props;
    const fieldValue = event.target.value;
    onChange({ [fieldName]: fieldValue });
  }

  handleSubmit = () => {
    const { data, onSubmit } = this.props;
    onSubmit(data);
  }

  render() {
    const { classes, data } = this.props;
    const { firstName, lastName } = data;

    return (
      <Paper className={classes.root}>
        <ValidatorForm onSubmit={this.handleSubmit}>
          <TextValidator
            className={classes.input}
            label="First Name"
            name="firstName"
            validators={['required']}
            errorMessages={['First name is required']}
            fullWidth
            value={firstName}
            onChange={this.handleChange('firstName')}
          />
          <TextValidator
            className={classes.input}
            label="Last Name"
            name="lastName"
            validators={['required']}
            errorMessages={['Last name is required']}
            fullWidth
            value={lastName}
            onChange={this.handleChange('lastName')}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
          >
            Submit
          </Button>
        </ValidatorForm>
      </Paper>
    );
  }
}

const styles = theme => ({
  root: {
    maxWidth: 400,
    margin: 'auto',
    marginTop: theme.spacing.unit * 2,
    padding: theme.spacing.unit * 2,
  },
  input: {
    marginBottom: theme.spacing.unit * 2,
  },
});

export default withStyles(styles)(UserForm);
