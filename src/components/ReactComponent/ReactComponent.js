/* eslint-disable */
import React from 'react';

export default class ReactComponent extends React.Component {
  render() {
    return (
      <div>
        <p>This was rendered with React!</p>
        <p>{this.props.stuff}</p>
        <p>{JSON.stringify(this.props.arr)}</p>
        <p>{JSON.stringify(this.props.obj)}</p>
      </div>
    );
  }
}
