import React from 'react';
import { Form, Grid, Button, Segment, Container} from 'semantic-ui-react';

class CommentForm extends React.Component {
  formInput = React.createRef();

  _addComment = (body) => {
    const comment = {
      id: this.state.comments.length + 1,
      body
    };
    this.setState({
      comments: this.state.comments.concat([comment])
    });
  }

  _handleSubmit = (event) => {
    event.preventDefault();

    // let author = this._author;
    const body = this.formInput.value.value;

    this.props.addComment( body);
  }

  render() {
    // const { body } = this.state.comments;
    const formStyles = {
      border: '2px solid green'
    }

    return (
      <Form style={formStyles} onSubmit={this._handleSubmit}>
        <Form.Input
          placeholder='Start typing your message or drop file...'
          value={this.props.body}
          ref={this.formInput} >
        </Form.Input>
        <Form.Button content='Post comment' />
      </Form>
    );
  }
}

export default CommentForm;
