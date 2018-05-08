import React, {Component} from 'react';
import { Grid } from 'semantic-ui-react'

import { CommentBox } from './CommentBox';
import NavBar from './NavBar';
import './App.css';
import GridExampleCelled from './GridExampleCelled';


class App extends Component {
  render() {

  return (
    <Grid celled className="App" >
      <Grid.Row verticalAlign='top'>
        <Grid.Column >
          <NavBar />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row centered>
        <Grid.Column width={14}>
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
