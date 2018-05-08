import React from 'react';
import { Grid, Button, Segment, Container } from 'semantic-ui-react';

import CommentForm from '../CommentForm';
import Comment from '../Comment';


export class CommentBox extends React.Component {
  constructor() {
    super();

    this.state = {
      showComments: false,
      comments: [
        {
          id: 1,
          author: 'Morgan McCircuit',
          body: 'Great picture!'
        }, {
          id: 2,
          author: 'Bending Bender',
          body: 'Excellent stuff'
        }
      ]
    }
  }

  render() {
    const CommentBoxStyle = {
      backgroundColor: 'white',
      border: '1px solid red',
      margin: '0.5vh auto',
      maxWidth: '1300px',
      // maxWidth: '80%'
    };

    const comments = this._getComments();
    let commentNodes;
    let buttonText = 'Show comments';

    if (this.state.showComments) {
      buttonText = 'Hide comments';
      commentNodes = <div>{comments}</div>;
    }
    return (
      <Segment style={CommentBoxStyle} className="CommentBox">
        <h3>Comments</h3>
        <hr/>
        <h4>{this._getCommentsTitle(comments.length)}</h4>
        {commentNodes}
        <CommentForm addComment={this._addComment.bind(this)}/>
        <Button onClick={this._handleClick.bind(this)}>{buttonText}</Button>
        <br/>
        <br/>

      </Segment>
    );
  }

  _addComment(author, body) {
    const comment = {
      id: this.state.comments.length + 1,
      author,
      body
    }
    this.setState({
      comments: this.state.comments.concat([comment])
    });
  }

  _handleClick() {
    this.setState({
      showComments: !this.state.showComments
    });
  }

  _getComments() {
    return this.state.comments.map((comment) => {
      return (
        <Comment author={comment.author} body={comment.body} key={comment.id}/>
      );
    });
  }

  _getCommentsTitle(commentCount) {
    if (commentCount === 0) {
      return 'No comments yet';
    } else if (commentCount === 1) {
      return '1 comment';
    } else {
      return `${commentCount} comments`;
    }
  }
}
