import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Toolbar from './components/Navbar'
import MovieCards from './Pages/HomePage'
import MovieDetail from './Pages/DetailPage';

import './App.css';

function App() {
  return (
    <Router>
      <Toolbar/>
      
      <Switch>
        <Route path='/' exact>
          <MovieCards/>
        </Route>
  
        {/* <Route path='/detail/:id'>
          <MovieDetail/>
        </Route>  */}
        <Route path="/detail/:id" component={MovieDetail} />
      </Switch>
      

      
    </Router>
  );
}

export default App;
