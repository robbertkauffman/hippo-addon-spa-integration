import React from 'react';

export default class UndefinedComponent extends React.Component {
  // fallback component when unknown/undefined component type is used
  render() {
    return (
      <p>
        Component { this.props.componentType } <strong>not defined</strong>
      </p>
    );
  }
}