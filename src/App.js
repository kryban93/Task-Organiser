import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import { AuthProvider } from './contexts/AuthContext';
import Nav from './components/Nav/Nav';
import DashboardView from './views/DashboardView.js/DashboardView';
import LandingView from './views/LandingView/LandingView';
import NotesView from './views/NotesView/NotesView';
import SignUpView from './views/SignUpView/SignUpView';
import TasksView from './views/TasksView/TasksView';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Nav />
        <Switch>
          {
            //<Route exact path='/' component={LandingView} />
          }
          <Route path='/signUp' component={SignUpView} />
          <Route exact path='/' component={LandingView} />
          <Route path='/dashboard' component={DashboardView} />
          <Route path='/tasks' component={TasksView} />
          <Route path='/notes' component={NotesView} />
        </Switch>
      </Router>
    </AuthProvider>
  );
};

export default App;
