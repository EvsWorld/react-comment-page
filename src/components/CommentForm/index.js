import React from 'react';
import { Form, Grid, Button, Segment, Container} from 'semantic-ui-react';


import './CommentForm.css';

class CommentForm extends React.Component {
  render() {
    const formStyles = {
      // border: '2px solid green'
      backgroundColor: '#E9E9E9'
    }

    return (
      <Form style={formStyles} onSubmit={this._handleSubmit}>
        <textarea id='textarea'
          placeholder="Start typing your message or drop file..."
          ref={(textarea) => this._body = textarea}>
        </textarea>
        <button id='submit-btn' floated='right' medium>
          SEND
        </button>
      </Form>
    );
  }

  _addComment = (body, time ) => {
    const comment = {
      id: this.state.comments.length + 1,
      body,
      time,
      isInEditMode: false
    };
    this.setState({
      comments: this.state.comments.concat([comment])
    });
  }

  _handleSubmit = (event) => {
    event.preventDefault();
    let body = this._body;
    let time = new Date();
    this.props.addComment( body.value, time);
  }
}

export default CommentForm;
