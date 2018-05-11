import React, { Component } from "react";
import { Item, Segment } from 'semantic-ui-react';

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
        <button onClick={this.changeEditMode}>Cancel</button>
        <button onClick={this.updateComponentValue}>Accept Changes</button>
      </div>
    );
  }

  renderDefaultView = () => {
    return (
      <Segment onDoubleClick={this.changeEditMode}>
        From internal state:  {this.state.value} <br/>
        {/* this.props.body: {this.props.body}   <br/> */}
        {/* <br/> */}
        {/* {moment(this.props.time).format('h:mm')} */}
      </Segment>
    );
  }

  render() {
    const itemStyle = {
      border: '1px solid rgb(88, 123, 231)',
      padding: '0 5em'
    };
    return (
      <React.Fragment>
        <Item style={itemStyle}>
          <Item.Image size='tiny'  src={require('../../images/waltwhitman.png')} />
          <Item.Content>
            <Item.Header id='header'>
              <div className="inheader">Commenter Name</div>
              <div>{moment(this.props.time).format('h:mm')}</div>
            </Item.Header>
            {/* <Item.Header as='a'>Header</Item.Header> */}
            <Item.Description>
              {this.state.isInEditMode ?
              this.renderEditView() :
              this.renderDefaultView()}
            </Item.Description>
            {/* <Item.Extra>Additional Details</Item.Extra> */}
          </Item.Content>
        </Item>
      </React.Fragment>
    );

    return this.state.isInEditMode ?
    this.renderEditView() :
    this.renderDefaultView()

  }
}
