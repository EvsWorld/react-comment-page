import React from 'react';
import { Form, Grid, Button, Segment, Container} from 'semantic-ui-react';

class CommentForm extends React.Component {
  render() {
    const formStyles = {
      border: '1px solid green'
    }
    return (
      <Form style={formStyles} onSubmit={this._handleSubmit.bind(this)}>


          <h3 className="text-uppercase">New Comment</h3>
          <textarea className="form-control form-group" placeholder="Start typing your message or drop file..." ref={(textarea) => this._body = textarea}></textarea>
          <Button>
            Post comment
          </Button>

      </Form>
    );
  }

  _addComment( body) {
    const comment = {
      id: this.state.comments.length + 1,
      body
    };
    this.setSate({
      comments: this.state.comments.concat([comment])
    });
  }

  _handleSubmit(event) {
    event.preventDefault();

    // let author = this._author;
    let body = this._body;

    this.props.addComment( body.value);
  }
}

export default CommentForm;
