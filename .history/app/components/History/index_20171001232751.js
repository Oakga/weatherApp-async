/**
*
* History
*
*/
import React from 'react';
import PropTypes from 'prop-types';
import H2 from '../H2';

function History(props) {
  return (
    <div>
      <table className="table table-hover">
        <thead className="thead-inverse">
          <tr>
            <th>Location</th>
          </tr>
          <tbody id="history-table">
            {this.props.data.map((type) =>
              <tr>{type}</tr>
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
