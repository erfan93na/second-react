import {BrowserRouter as Router,Route,Redirect} from "react-router-dom"
import Login from "./Components/Login/Login.js"
import MainPage from "./MainPage/MainPage.js"
import "./App.scss";
import PostPage from "./PostPage/PostPage.js";
function App() {

localStorage.setItem("allowedUsers",JSON.stringify([{username:"erfan",password:"1234"}]))
let isLoggedIn=+localStorage.getItem("isLoggedIn")
  return (
    <Router>  
      <Route exact path="/" >
       { isLoggedIn?<Redirect to="/posts"></Redirect>:<Login/>}
      </Route>
      <Route exact path="/posts" component={MainPage}/>
      <Route path="/posts/:id" component={PostPage } />

</Router>)
  
}

export default App;
