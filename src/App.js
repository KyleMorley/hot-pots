import Header from './components/Header';
import Home from './components/Home';
import Services from './components/Services';
import AddPotForm from './components/AddPotForm'
import About from './components/About';
import Footer from './components/Footer'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';



function App() {
  return (
    <Router>
      <div>
          <Header />
        <Switch>
          <Route exact path='/'>
            <div className='content'>
              <Home />  
            </div>
          </Route> 
          <Route path='/pots'>
              <div className='container'>
                < Services />
              </div>  
          </Route> 
          <Route path='/add'>
              <div className='container'>
                < AddPotForm />
              </div>  
          </Route> 
          <Route path='/about'>
              <div className='container'>
                  <About />
              </div>
          </Route>
        </Switch>
        <Footer />
    </div>
   </Router>
  );
}

export default App;
