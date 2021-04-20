import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import { AuthProvider } from './contexts/AuthContext';
import { UserDataProvider } from './contexts/UserDataContext';
import { AppDataProvider } from './contexts/AppDataContext';
import DashboardView from './views/DashboardView/DashboardView';
import LandingView from './views/LandingView/LandingView';
import NotesView from './views/NotesView/NotesView';
import SignUpView from './views/SignUpView/SignUpView';
import TasksView from './views/TasksView/TasksView';
import LoginView from './views/LoginView/LoginView';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import SettingsView from './views/SettingsView/SettingsView';

const App = () => {
  return (
    <AuthProvider>
      <AppDataProvider>
        <UserDataProvider>
          <Router>
            <Switch>
              <Route exact path='/' component={LandingView} />
              <Route path='/signUp' component={SignUpView} />
              <Route path='/login' component={LoginView} />

              <PrivateRoute path='/dashboard' component={DashboardView} />
              <PrivateRoute path='/tasks' component={TasksView} />
              <PrivateRoute path='/notes' component={NotesView} />
              <PrivateRoute path='/settings' component={SettingsView} />
            </Switch>
          </Router>
        </UserDataProvider>
      </AppDataProvider>
    </AuthProvider>
  );
};

export default App;
