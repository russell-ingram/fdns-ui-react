import React from 'react';
import PropTypes from 'prop-types';
import {
  IconButton,
} from '@material-ui/core';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';

const propTypes = {
  /** onChangePage event */
  onChangePage: PropTypes.func,
  /** The current page number */
  page: PropTypes.number,
  /** The rowsPerPage from the SuperTable selection */
  rowsPerPage: PropTypes.number,
};

// set the defaults
const defaultProps = {
  onChangePage: () => {},
  page: 1,
  rowsPerPage: 10,
};

const TablePaginationActions = ({ count, page, rowsPerPage, onChangePage }) => {
  const handleFirstPageButtonClick = (event) => {
    onChangePage(event, 0);
  }

  const handleBackButtonClick = (event) => {
    onChangePage(event, page - 1);
  }

  const handleNextButtonClick = (event) => {
    onChangePage(event, page + 1);
  }

  const handleLastPageButtonClick = (event) => {
    onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  }

  return (
    <div className="TablePageActions">
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        <FirstPageIcon />
      </IconButton>
      <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
        <KeyboardArrowLeft />
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        <KeyboardArrowRight />
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        <LastPageIcon />
      </IconButton>
    </div>
  );
};

TablePaginationActions.propTypes = propTypes;
TablePaginationActions.defaultProps = defaultProps;
export default TablePaginationActions;
