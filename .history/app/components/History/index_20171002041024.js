/**
*
* History
*
*/
import React from 'react';
import PropTypes from 'prop-types';

function History(props) {
  const showTitle = (props.data.locations.length > 0);
  const searchLog = [];
  for (let i = 0; i < props.data.locations.length; i++) {
    searchLog.push(`${props.data.location},${props.data.dates}`);
  }
  return (
    <div>
      <table className="table table-hover">
        <thead className="thead-inverse">
          <tr>
            {showTitle ? <th>Search History</th> : ''}
          </tr>
        </thead>
        <tbody id="history-table">
          <tr>
          {searchLog.map((search) =>
            <td key={search}>{search}</td>
          )}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

History.propTypes = {
  data: PropTypes.object,
};

export default History;
