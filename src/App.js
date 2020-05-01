import React, { Component } from 'react'
import {
  BrowserRouter as Router, 
  Route, 
  Switch,
} from 'react-router-dom';
import PokeSearch from './PokeSearch.js';
import PokeDetail from './PokeDetail.js';



export default class App extends Component {

  render() {
    
    
    
    return (


              <div>
                <Router>
                    <Switch>
                        <Route 
                            path="/" 
                            exact
                            render={(routerProps) => <PokeSearch {...routerProps} />} 
                        />
                        <Route 
                            path="/pokemon/:pokemon" 
                            exact
                            render={(routerProps) => <PokeDetail {...routerProps} />} 
                        />
                    </Switch>
                </Router>
            </div>
    )
  }
}
