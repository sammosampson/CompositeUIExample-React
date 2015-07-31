import React from 'react';

export default class TextInput extends React.Component {
  render() {
    return (
      <div className="form-group">
        <div className="input-group">
          <input type="text" className="form-control" value={this.props.value}/>
          <span className="input-group-addon">{this.props.title}</span>
        </div>
      </div>
    );
  }
}
