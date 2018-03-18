import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';

class LibraryList extends Component {
  componentWillMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    //the ds object uses the props from the MapStateToProps funct
    this.dataSource = ds.cloneWithRows(this.props.libraries);
  } //

  render() {
    return(
      <ListView
        dataSource={this.dataSource}
      />
    );
  }
}

const mapStateToProps = state => {
  return { libraries: state.libraries }; //libraries to show
};

export default connect(mapStateToProps)(LibraryList);
