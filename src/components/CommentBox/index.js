import React from 'react';
import { Divider, Grid, Button, Item, Segment, Icon, Container } from 'semantic-ui-react';

import whit from '../../images/waltwhitman.png';
import keira from '../../images/keira-knightley.png';
import placeholder from '../../images/placeholder.png';

import CommentForm from '../CommentForm';
import Comment from '../Comment';

import './CommentBox.css';
const moment = require('moment');

export default class CommentBox extends React.Component {
  state = {
    comments: [
      {
        id: 1,
        author: 'Walt Whitman',
        body: 'Poems are the raddest. I would write them all day long. Rolling in the grass is cool too.',
        time: 1525817737350,
        foto: whit
      }, {
        id: 2,
        author: 'Keira Knightly',
        body: 'I just love being Keira Knightly',
        time: 1525817785857,
        foto: keira
      }
    ]
  }


  render() {
    const commentBoxStyle = {
      backgroundColor: 'white',
      // border: '1px solid red',
      margin: '0.5vh auto',
      padding: '0',
    };
    const nameBox = {
      backgroundColor:'#E9E9E9',
      padding: '1.5em 0',

    }

    return (
      <Segment.Group style={commentBoxStyle} className="CommentBox">
        <Segment style={nameBox}>
          <div className='name'>Walt Whitman
            <span className='status'>
              <Icon padded name='circle' size='small' color='green' /> online
            </span>
          </div>
        </Segment>
        <div id='day'>{moment(new Date()).format('DD MMMM YYYY')}</div>
        <Divider id='divider'/>
        <Item.Group divided >{this._getComments()}</Item.Group>
        <CommentForm addComment={this._addComment}/>
      </Segment.Group>
    );
  }

  _addComment = (body,time) => {
    const comment = {
      id: this.state.comments.length + 1,
      body,
      time,
      foto: placeholder
    }
    this.setState({
      comments: this.state.comments.concat([comment])
    });
  }

  _getComments = () => {
    return this.state.comments.map((comment) => {
      return (
        <Comment key={comment.id} body={comment.body} time={comment.time} author={comment.author} foto={comment.foto}/>
      );
    });


  }

}
