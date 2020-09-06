import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Main from './components/Main/Main';
import NoMatch from './components/NoMatch/NoMatch';
import PostDetail from './components/PostDetail/PostDetail';


function App() {
  
  return (
    <div >
      <Router>
        <Switch>
          <Route path="/main">
           <Main></Main>
          </Route>
          <Route path="/post/:postId">
             <PostDetail></PostDetail>
          </Route>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="*">
             <NoMatch></NoMatch>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
