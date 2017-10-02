/**
*
* History
*
*/
import React from 'react';
import PropTypes from 'prop-types';

function History(props) {
  return (
    <div>
      <table className="table table-hover">
        <thead className="thead-inverse">
          <tr>
            <th>Location</th>
          </tr>
          <tbody id="history-table">
            {props.data.map((search) =>
              <tr>{search}</tr>
        )}
          </tbody>
        </thead>
      </table>
    </div>
  );
}

History.propTypes = {
  data: PropTypes.array,
};

export default History;
