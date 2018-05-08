import React from 'react';
import { Segment } from 'semantic-ui-react';


class Comment extends React.Component {
  render() {
    const segmentStyle = {
      // border: '1px solid pink',
      backgroundColor: 'rgb(88, 123, 231)',
      margin: '20px 100px',

    };

    return (
      <div>
        <p>Author in 'Content' component: {this.props.author}</p>
        <hr/> {/* <p className="panel-body">{this.props.body}</p> */}
        <div>
          <a href="#">
            Delete comment
          </a>
        </div>
        <Segment className="vertical" style={segmentStyle}>Example Segment!! {this.props.body}
        </Segment>

      </div>
    );
  }
}

export default Comment;
