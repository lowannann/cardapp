import '/Users/joannechi/nlpWeb/myApp/nlpweb/mycardapp/cardapp/hello-world/src/App.css'
import {  Route , Switch, Link } from 'react-router-dom';
import FlashCard from './containers/FlashCard.js';
import About from './containers/About.js';
import Translator from './containers/Translator.js';
import '/Users/joannechi/nlpWeb/myApp/nlpweb/mycardapp/cardapp/hello-world/src/containers/About.css';
function Home(){
  return(
    <div className='container'>
      <div className="page-header">

    <h1>
      Choose one to go 🥳
    </h1>
    <nav>
      <Link to="/flashcard">FlashCard</Link>
      <p></p>
      <Link to="/about">About</Link>
      <p></p>
      <Link to="/translate">Translator</Link>
    </nav> 
    </div>
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
              <Route  path='/translate' component={Translator}/>
	      </Switch> 

    </div>
  );
}

export default App;