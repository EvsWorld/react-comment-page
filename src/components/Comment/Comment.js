import React, { Component } from "react";
import { Button, Item, Segment } from 'semantic-ui-react';

import { canEdit } from '../../helpers';

import './Comment.css';

const moment = require('moment');

export default class Comment extends Component {
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
    return (
      <div>
        <input
          type="text"
          defaultValue={this.props.body}
          ref="theTextInput"
        />
        <Button id='cancel-btn' onClick={this.changeEditMode}>Cancel</Button>
        <Button id='confirm-btn' onClick={this.updateComponentValue}>Accept Changes</Button>
      </div>
    );
  }

  renderDefaultView = () => {
    return (
      <div onDoubleClick={this.changeEditMode}>
        {this.state.value}
      </div>
    );
  }

  render() {
    const itemStyle = {
      // border: '1px solid rgb(88, 123, 231)',
      padding: '1em 5em',

    };
    return (
      <React.Fragment>
        <Item style={itemStyle}>
          <Item.Image size='tiny' circular src={this.props.foto} />
          <Item.Content>
            <Item.Header id='header'>
              <div>{this.props.author}</div>
              <div className='time'>{moment(this.props.time).format('h:mm')}</div>
            </Item.Header>
            <Item.Description id='description'>
              {this.state.isInEditMode ?
              this.renderEditView() :
              this.renderDefaultView()}
            </Item.Description>
            {/* <Item.Extra>Additional Details</Item.Extra> */}
          </Item.Content>
        </Item>
      </React.Fragment>
    );

  }
}
