import React from 'react';
import { Grid, Button, Item, Segment, Icon, Container } from 'semantic-ui-react';

import CommentForm from '../CommentForm';
// import Comment from '../Comment';
import Comment from '../Comment';

import './CommentBox.css';

export default class CommentBox extends React.Component {
  state = {
    comments: [
      {
        id: 1,
        author: 'Morgan McCircuit',
        body: 'Morgan McCircuits Body',
        time: 1525817737350
      }, {
        id: 2,
        author: 'Bending Bender',
        body: 'Bending Binders Body',
        time: 1525817785857
      }
    ]
  }


  render() {
    const commentBoxStyle = {
      backgroundColor: 'white',
      border: '1px solid red',
      margin: '0.5vh auto',
      padding: '0',
    };
    const nameStyle = {
      backgroundColor:'#E9E9E9',
    }

    return (
      <Segment.Group style={commentBoxStyle} className="CommentBox">
        <Segment size='large' style={nameStyle}>
          <div className='name'>Alex Martinger
            <span className='status'>
              <Icon padded name='circle' size='small' color='green' /> online
            </span>
          </div>
        </Segment >
        {/* <Segment>{comments}</Segment> */}
        <Item.Group divided >{this._getComments()}</Item.Group>
        <CommentForm addComment={this._addComment}/>
      </Segment.Group>
    );
  }

  _addComment = (body,time) => {
    const comment = {
      id: this.state.comments.length + 1,
      body,
      time
    }
    this.setState({
      comments: this.state.comments.concat([comment])
    });
  }

  _getComments = () => {
    return this.state.comments.map((comment) => {
      return (
        <Comment key={comment.id} body={comment.body} time={comment.time} />
      );
    });
  }

  // _getCommentsTitle(commentCount) {
  //   if (commentCount === 0) {
  //     return 'No comments yet';
  //   } else if (commentCount === 1) {
  //     return '1 comment';
  //   } else {
  //     return `${commentCount} comments`;
  //   }
  // }
}
