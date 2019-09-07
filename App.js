
import React, {Component} from 'react';
import Route from './src/routers/router'
import { Container } from 'native-base';
import {Provider} from 'react-redux'
import Store from './src/_redux/Store'

export default class App extends Component {
  render(){
    return(
      <Provider store={Store}>
        <Route/>
      </Provider>
    )
  }
}
