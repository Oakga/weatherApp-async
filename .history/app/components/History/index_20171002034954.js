/**
*
* History
*
*/
import React from 'react';
import PropTypes from 'prop-types';

function History(props) {
  const showTitle = (props.data.locations.length > 0);
  return (
    <div>
      <table className="table table-hover">
        <thead className="thead-inverse">
            {showTitle ? <tr><td>Location</td><td>Dates</td></tr> : ''}
        </thead>
        <tbody id="history-table">
          {props.data.map((search) =>
            <tr key={search}><td>{search}</td></tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

History.propTypes = {
  data: PropTypes.array,
  dates: PropTypes.array,
};

export default History;
