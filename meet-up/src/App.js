import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          All Meetup Page
        </Route>
        <Route path="/favourite">Favorites Page</Route>
        <Route path="/new-meetup">New Meetup Page</Route>
      </Switch>
    </div>
  );
}

export default App;
