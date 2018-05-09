import React, { Component } from "react";
import { Segment } from 'semantic-ui-react';

import { canEdit } from '../../helpers';

export default class EditUpdate extends Component {
  state = {
    value: this.props.body,
    isInEditMode: false
  }

  changeEditMode = () => {
    if (canEdit(this.props.time)) {
      this.setState({
        isInEditMode: !this.state.isInEditMode
      })
    }
  }

  updateComponentValue = () => {
    this.setState({
      isInEditMode: false,
      value: this.refs.theTextInput.value
    })
  }

  renderEditView = () => {
    return <div>
      <input
        type="text"
        // defaultValue={this.state.value}
        defaultValue={this.props.body}
        ref="theTextInput"
      />
      <button onClick={this.changeEditMode}>Cancel</button>
      <button onClick={this.updateComponentValue}>Accept Changes</button>
    </div>
  }

  renderDefaultView = () => {
    return <Segment onDoubleClick={this.changeEditMode}>
      From internal state:  {this.state.value} <br/>
      From higher state: {this.props.body}   <br/>
      <br/>
      Time comment posted: {this.props.time}
    </Segment>
  }

  render() {
    return this.state.isInEditMode ?
    this.renderEditView() :
    this.renderDefaultView()

  }
}
