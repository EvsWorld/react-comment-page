import React, {Component} from 'react';
import { Grid, Icon } from 'semantic-ui-react'

import NavBar from './NavBar';
import { CommentBox } from './CommentBox';
import GridExampleCelled from './GridExampleCelled';
import './App.css';


class App extends Component {
  render() {

  return (
    <Grid className="App" >
      <Grid.Row >
        <Grid.Column >
          <NavBar />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row centered>
        <Grid.Column centered width={14}>
          <CommentBox />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <GridExampleCelled />
      </Grid.Row>
    </Grid>
  );
  }
}

export default App;
