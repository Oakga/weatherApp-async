/**
*
* History
*
*/
import React from 'react';
import PropTypes from 'prop-types';

function History(props) {
  const showTitle = (props.data.locations.length > 0);
  const testArr = props.data.locations.map((x, i) => ({"searches" : x+props.data.dates[i]}));
  return (
    <div>
      <table className="table table-hover">
        <thead className="thead-inverse">
          <tr>
            {showTitle ? <th>Search History</th> : ''}
          </tr>
        </thead>
        <tbody id="history-table">
          {props.data.locations.map((search) =>
            <tr key={search}><td>{search}</td></tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

History.propTypes = {
  data: PropTypes.object,
};

export default History;
