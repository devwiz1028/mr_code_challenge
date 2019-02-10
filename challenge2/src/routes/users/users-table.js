import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core';

class UsersTable extends React.Component { //eslint-disable-line
  static propTypes = {
    classes: PropTypes.object.isRequired, //eslint-disable-line
    data: PropTypes.arrayOf(PropTypes.shape({
      firstName: PropTypes.string,
      lastName: PropTypes.string,
    })).isRequired,
  };

  render() {
    const { classes, data } = this.props;

    return (
      <Paper className={classes.root}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(data.length === 0) && (
              <TableRow>
                <TableCell colSpan={2} align="center">
                  No data yet
                </TableCell>
              </TableRow>
            )}
            {data.map((user, index) => (
              <TableRow key={index}>
                <TableCell>
                  {user.firstName}
                </TableCell>
                <TableCell>
                  {user.lastName}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

const styles = theme => ({
  root: {
    margin: theme.spacing.unit * 2,
  },
});

export default withStyles(styles)(UsersTable);
