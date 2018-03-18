import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';

import ListItem from './ListItem';

class LibraryList extends Component {
  componentWillMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    //the ds object uses the props from the MapStateToProps funct
    this.dataSource = ds.cloneWithRows(this.props.libraries);
  }

  // tells ListView how to render a single list item
  renderRow() {
    return <ListItem />;
  }

  render() {
    return(
      // create the list view nd provide it the data to view
      <ListView
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

const mapStateToProps = state => {
  return { libraries: state.libraries }; //libraries to show
};

export default connect(mapStateToProps)(LibraryList);
