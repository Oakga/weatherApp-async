/**
 * RepoListItem
 *
 * Lists the name and the issue count of a repository
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { FormattedNumber } from 'react-intl';

import { makeSelectCurrentSearch } from 'containers/HomePage/selectors';
import ListItem from 'components/ListItem';
import { IssueIcon, IssueLink, RepoLink, Wrapper } from './styles/index';

export class RepoListItem extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const item = this.props.item;
    let nameprefix = '';

    // Put together the content of the repository
    const content = (
      <Wrapper>
        <RepoLink href={item.html_url} target="_blank">
          currentSearch
        </RepoLink>
      </Wrapper>
    );

    // Render the content into a list item
    return (
      <ListItem key={`repo-list-item-${item.full_name}`} item={content} />
    );
  }
}

RepoListItem.propTypes = {
  item: PropTypes.object,
  currentSearch: PropTypes.string,
};

export default connect(createStructuredSelector({
  currentSearch: makeSelectCurrentSearch(),
}))(RepoListItem);
