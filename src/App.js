import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  Routes
} from 'react-router-dom'

// Components
import Home from './components/Home';
import Footer from './components/Footer';

// Styles
import { GlobalStyle } from './GlobalStyles';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/About'/>
      <Route path='/Artwork'/>
      <Route path='/ShowRoom'/>
      <Route path='ShortFilm'/>
      <Route path='Venue'/>
    </Routes>
      <Footer />
      <GlobalStyle/>
    </BrowserRouter>
  );
}

export default App;
