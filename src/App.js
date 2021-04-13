import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import Nav from './components/Nav/Nav';
import DasshboardView from './views/DashboardView.js/DasshboardView';
import LandingView from './views/LandingView/LandingView';
import NotesView from './views/NotesView/NotesView';
import TasksView from './views/TasksView/TasksView';

const App = () => {
  return (
    <Router>
      <Nav />
      <Switch>
        {
          //<Route exact path='/' component={LandingView} />
        }
        <Route exact path='/' component={DasshboardView} />
        <Route path='/tasks' component={TasksView} />
        <Route path='/notes' component={NotesView} />
      </Switch>
    </Router>
  );
};

export default App;
