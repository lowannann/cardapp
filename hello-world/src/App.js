import '/Users/joannechi/nlpWeb/myApp/nlpweb/mycardapp/cardapp/hello-world/src/App.css'
import {  Route , Switch, Link } from 'react-router-dom';
import FlashCard from './containers/FlashCard.js';
import About from './containers/About.js';

function Home(){
  return(
    <div>
    <h1>
      HOME
    </h1>
    <nav>
      <Link to="/flashcard">FlashCard</Link>
      <Link to="/about">About</Link>
    </nav> 
    </div>
    );
}

function App() {
  return (
    <div >

	      <Switch>
              <Route  path='/home' component={Home} />
              <Route  path='/flashcard' component={FlashCard}/> 
              <Route  path='/about' component={About}/>
	      </Switch> 

    </div>
  );
}

export default App;