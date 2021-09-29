import {Route} from 'react-router-dom';
import ContactPage from './components/ContactPage';
import HomePage from './components/HomePage';
import Navigation from './components/Navigation';
function App(){
return(
<>
<Navigation/>
<Route path='/'  exact component={HomePage}/>
<Route path='/contact' exact component={ContactPage}/>
</>
);
}
export default App;