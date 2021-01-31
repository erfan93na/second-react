import {BrowserRouter as Router,Route,Redirect} from "react-router-dom"
import Login from "./Components/Login/Login.js"
import MainPage from "./PageComponents/MainPage/MainPage.js"
import "./App.scss";
import PostPage from "./PageComponents/PostPage/PostPage.js";
function App() {
  
  let isLoggedIn=localStorage.getItem("isLoggedIn")

console.log(isLoggedIn)
  return (
    <Router>  
      <Route exact path="/" >
       { isLoggedIn==="1"?<MainPage/>:<Redirect to="/login"/>}
      </Route>
      <Route exact path="/posts/:id" component={PostPage } />
      <Route exact path="/login" component={Login } />


</Router>)
  
}

export default App;
