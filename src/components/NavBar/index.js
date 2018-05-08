import React, { Component } from 'react';
import { Icon, Menu, Image } from 'semantic-ui-react';

import './NavBar.css';

export default class NavBar extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const menuStyles = {
      padding: '0 5.5%',
      backgroundColor: '#278ACE',
      height: '4.5vh',
      border: '1px solid rgb(227, 231, 28)'
    }

    const { activeItem } = this.state;

    return (
      <Menu borderless style={menuStyles}>
        <Menu.Menu position='left'>
          <Menu.Item name='users' active={activeItem === 'users'} onClick={this.handleItemClick} >
            <Icon name="users" inverted/>
          </Menu.Item>

          <Menu.Item name='submit' active={activeItem === 'submit'} onClick={this.handleItemClick}>
            <Icon name='bars'/>
          </Menu.Item>
          <Menu.Item name='search' active={activeItem === 'search'} onClick={this.handleItemClick}>
            <Icon name='search'/>
          </Menu.Item>
        </Menu.Menu>

        <Menu.Menu position='right'>
          <Menu.Item name='signup' active={activeItem === 'signup'} onClick={this.handleItemClick}>
           <Icon name='browser outline'/>
          </Menu.Item>
          <Menu.Item name='envelope' active={activeItem === 'envelope'} onClick={this.handleItemClick}>
           <Icon name='outline envelope'/>
          </Menu.Item>
          <Menu.Item name='img' active={activeItem === 'img'} onClick={this.handleItemClick}>
            <Icon> <Image src='../images/keira-knightley3.png' size='large' circular /> </Icon>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}
