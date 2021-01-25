import {BrowserRouter as Router,Route,Redirect} from "react-router-dom"
import Login from "./Components/Login/Login.js"
import Posts from "./Components/Posts/Posts.js"
import "./App.scss";
function App() {

localStorage.setItem("allowedUsers",JSON.stringify([{username:"Erfan",password:"1234"}]))
let isLoggedIn=+localStorage.getItem("isLoggedIn")
  return (
    <Router>  
      <Route exact path="/" >
       { isLoggedIn?<Redirect to="/posts"></Redirect>:<Login/>}
      </Route>
      <Route exact path="/posts" component={Posts}/>
</Router>)
  
}

export default App;
