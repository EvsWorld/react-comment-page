import React, {Component} from 'react';
import { Grid, Icon } from 'semantic-ui-react'

import NavBar from './components/NavBar';
import CommentBox from './components/CommentBox';
import GridExampleCelled from './components/GridExampleCelled';
import LodashGridCompon from './components/LodashGridCompon';

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
        <LodashGridCompon />
      </Grid.Row>
    </Grid>
  );
  }
}

export default App;
