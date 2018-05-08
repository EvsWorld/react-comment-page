import React, { Component } from 'react';
import { Menu, Icon } from 'semantic-ui-react';

import './NavBar.css';

class NavBar extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const menuStyles = {
      padding: '0 6.5%',
      backgroundColor: '#278ACE',
      height: '5.5vh',
      border: '1px solid rgb(227, 231, 28)'
    }

    const { activeItem } = this.state;

    return (
      <Menu style={menuStyles}>
        <Menu.Menu position='left'>
          <Menu.Item name='browse' active={activeItem === 'browse'} onClick={this.handleItemClick}>
            <Icon name='users' size='large' inverted />
          </Menu.Item>

          <Menu.Item name='submit' active={activeItem === 'submit'} onClick={this.handleItemClick}>
            <i className="bars icon"></i>
          </Menu.Item>
          <Menu.Item name='search' active={activeItem === 'search'} onClick={this.handleItemClick}>
            <i className="search icon"></i>
          </Menu.Item>
        </Menu.Menu>

        <Menu.Menu position='right'>
          <Menu.Item name='signup' active={activeItem === 'signup'} onClick={this.handleItemClick}>
           <i className="inverted calender alternate outline icon"></i>
          </Menu.Item>

          <Menu.Item name='help' active={activeItem === 'help'} onClick={this.handleItemClick}>
            <i className="envelope outline icon"></i>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}


export default NavBar;
