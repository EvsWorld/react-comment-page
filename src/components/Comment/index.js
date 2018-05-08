import React from 'react';
import { Segment, Item, Image } from 'semantic-ui-react';


class Comment extends React.Component {
  render() {
    const itemStyle = {
      // border: '1px solid pink',
      backgroundColor: 'rgb(88, 123, 231)',
      margin: '2em auto',

    };

    return (
      <Item style={itemStyle}>
        <Item.Image size='small' src='./profilePic1.png' />
        <Item.Content>
        <Item.Header as='a'>Header</Item.Header>
        <Item.Meta>Time</Item.Meta>
        <Item.Description>
          {this.props.body}
        </Item.Description>
        <Item.Extra>Additional Details</Item.Extra>
      </Item.Content>

      </Item>
    );
  }
}

export default Comment;
