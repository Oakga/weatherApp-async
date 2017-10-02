/**
*
* History
*
*/
import React from 'react';
import PropTypes from 'prop-types';

function History(props) {
  const showTitle = (props.data.length > 0);
  console.log(showTitle);
  return (
    <div>
      <table className="table table-hover">
        <thead className="thead-inverse">
          <tr>
            {showTitle ? <th>Search History</th> : ''}
          </tr>
        </thead>
        <tbody id="history-table">
          {props.data.map((search, key) =>
            <tr key={key}><td>{search}</td></tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

History.propTypes = {
  data: PropTypes.array,
};

export default History;
