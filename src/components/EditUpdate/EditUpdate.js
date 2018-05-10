import React, { Component } from "react";
import { Segment } from 'semantic-ui-react';

import { canEdit } from '../../helpers';
const moment = require('moment');

export default class EditUpdate extends Component {
  // This is local state, being used just for UI logic
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
      this.props.body: {this.props.body}   <br/>
      <br/>
      Time comment posted: {moment(this.props.time).format('h:mm')}
    </Segment>
  }

  render() {
    return this.state.isInEditMode ?
    this.renderEditView() :
    this.renderDefaultView()

  }
}
