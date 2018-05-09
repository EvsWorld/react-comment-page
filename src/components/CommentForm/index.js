import React from 'react';
import { Form, Grid, Button, Segment, Container} from 'semantic-ui-react';

class CommentForm extends React.Component {
  render() {
    const formStyles = {
      border: '1px solid green'
    }

    return (
      <Form style={formStyles} onSubmit={this._handleSubmit}>
        <textarea
          placeholder="Start typing your message or drop file..."
          ref={(textarea) => this._body = textarea}>
        </textarea>
        <Button>
          Post comment
        </Button>
      </Form>
    );
  }

  _addComment = (body, time ) => {
    const comment = {
      id: this.state.comments.length + 1,
      body,
      time,
    };
    this.setState({
      comments: this.state.comments.concat([comment])
    });
  }

  _handleSubmit = (event) => {
    event.preventDefault();

    // let author = this._author;
    let body = this._body;
    let time = new Date();
    this.props.addComment( body.value, time);
  }
}

export default CommentForm;
