/**
*
* History
*
*/
import React from 'react';
import PropTypes from 'prop-types';

export default class History extends React.Component {

  render(props) {
    const showTitle = (props.data.length > 0);
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
              <tr id={`history-table-${key}`} key={key}><td>{search}</td></tr>
          )}
          </tbody>
        </table>
      </div>
    );
  }
}

History.propTypes = {
  data: PropTypes.array,
};
