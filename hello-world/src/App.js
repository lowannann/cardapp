import '/Users/joannechi/nlpWeb/myApp/nlpweb/mycardapp/cardapp/hello-world/src/App.css'
import {  Route , Switch, Link } from 'react-router-dom';
import FlashCard from './containers/FlashCard.js';

function Home(){
  return(
    <div>
    <h1>
      HOME
    </h1>
    <nav>
      <Link to="/flashcard">點我</Link>
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
	      </Switch> 

    </div>
  );
}

export default App;
