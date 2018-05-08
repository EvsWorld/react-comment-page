import React from 'react';
import { Grid, Button, Segment, Container} from 'semantic-ui-react';

class CommentForm extends React.Component {
  render() {
    return (
      <form onSubmit={this._handleSubmit.bind(this)}>
        <h2 className="text-uppercase">Join the discussion</h2>
        <div>
          <h3 className="text-uppercase">New Comment</h3>
          <input className="form-control form-group" placeholder="What's your name?" ref={(input) => this._author = input}/>
          <textarea className="form-control form-group" placeholder="Join the discussion..." ref={(textarea) => this._body = textarea}></textarea>
          <Button>
            Post comment
          </Button>
        </div>
      </form>
    );
  }

  _addComment(author, body) {
    const comment = {
      id: this.state.comments.length + 1,
      author,
      body
    };
    this.setSate({
      comments: this.state.comments.concat([comment])
    });
  }

  _handleSubmit(event) {
    event.preventDefault();

    let author = this._author;
    let body = this._body;

    this.props.addComment(author.value, body.value);
  }
}

export default CommentForm;
