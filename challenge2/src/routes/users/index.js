import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  Snackbar,
  IconButton,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

import UserForm from './user-form';
import UsersTable from './users-table';
import { addUser, updateUserFormData } from '../../actions';

class Users extends React.Component { //eslint-disable-line
  static propTypes = {
    users: PropTypes.arrayOf(PropTypes.shape({
      firstName: PropTypes.string,
      lastName: PropTypes.string,
    })).isRequired,
    userFormData: PropTypes.shape({
      firstName: PropTypes.string,
      lastName: PropTypes.string,
    }).isRequired,
    addUser: PropTypes.func.isRequired,
    updateUserFormData: PropTypes.func.isRequired,
  };

  state = {
    snackbarOpen: false,
  };

  handleAddUser = (data) => {
    const { addUser } = this.props;
    addUser(data);

    this.setState({ snackbarOpen: true });
  }

  handleCloseSnackbar = () => {
    this.setState({ snackbarOpen: false });
  }

  render() {
    const {
      users,
      userFormData,
      updateUserFormData,
    } = this.props;
    const { snackbarOpen } = this.state;

    return (
      <div className="page page--users">
        <UserForm
          data={userFormData}
          onChange={updateUserFormData}
          onSubmit={this.handleAddUser}
        />
        <UsersTable data={users} />
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={snackbarOpen}
          autoHideDuration={6000}
          onClose={this.handleCloseSnackbar}
          message="User added successfully"
          action={[
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              onClick={this.handleCloseSnackbar}
            >
              <CloseIcon />
            </IconButton>,
          ]}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users.list,
  userFormData: state.users.form,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  addUser,
  updateUserFormData,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Users);
