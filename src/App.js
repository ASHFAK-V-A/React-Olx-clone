
import { BrowserRouter as Router,Route } from 'react-router-dom';
import './App.css';
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import { useEffect,useContext } from 'react';
/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';
import { AuthContext, FirebaseContext } from './store/FirebaseContext';



function App() {

const {setUser} = useContext(AuthContext)
const {firebase}=useContext(FirebaseContext)
useEffect(()=>{
firebase.auth().onAuthStateChanged((user)=>{
  setUser(user)
})
})
  return (
    <div>
      <Router >
        <Route exact path='/'>
              <Home /> 
        </Route>
       <Route path='/signup'>
        <Signup />
       </Route>
       <Route path='/login'>
        <Login />
       </Route>
      </Router>
  
    </div>
  );
}

export default App;
