import React from 'react';
import { Grid, Button, Segment, Container } from 'semantic-ui-react';

import CommentForm from '../CommentForm';
import Comment from '../Comment';
import EditUpdate from '../EditUpdate';


export default class CommentBox extends React.Component {
  state = {
    comments: [
      {
        id: 1,
        author: 'Morgan McCircuit',
        body: 'Morgan McCircuits Body',
        time: 1525817737350,
        isInEditMode: false
      }, {
        id: 2,
        author: 'Bending Bender',
        body: 'Bending Binders Body',
        time: 1525817785857,
        isInEditMode: false
      }
    ]
  }


  render() {
    const CommentBoxStyle = {
      backgroundColor: 'white',
      border: '1px solid red',
      margin: '0.5vh auto',
      maxWidth: '1500px',
      padding: '0'
      // maxWidth: '80%'
    };

    // const comments = this._getComments();
    const comments = this._getCommentsEdit();
    let commentNodes;
    // let buttonText = 'Show comments';
    //
    // if (this.state.showComments) {
    //   buttonText = 'Hide comments';
    //   commentNodes = <div>{comments}</div>;
    // }
    return (
      <Segment style={CommentBoxStyle} className="CommentBox">
        <Segment>Alex Martinger</Segment>
        <Segment>{comments}</Segment>
        <CommentForm addComment={this._addComment}/>
      </Segment>
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

  // _handleClick = () => {
  //   this.setState({
  //     showComments: !this.state.showComments
  //   });
  // }

  _getComments = () => {
    return this.state.comments.map((comment) => {
      return (
        <Comment author={comment.author} body={comment.body} key={comment.id} />
      );
    });
  }

  _getCommentsEdit = () => {
    return this.state.comments.map((comment) => {
      return (
        <EditUpdate key={comment.id} body={comment.body} time={comment.time} isineditmode={comment.isInEditMode}/>
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
