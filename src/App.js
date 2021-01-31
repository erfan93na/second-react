import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Login from "./Components/Login/Login.js";
import MainPage from "./PageComponents/MainPage/MainPage.js";
import PostPage from "./PageComponents/PostPage/PostPage.js";
<<<<<<< HEAD
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

=======
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute.js";

import "./App.scss";
function App() {
  localStorage.setItem(
    "allowedUsers",
    JSON.stringify([{ username: "erfan", password: "1234" }])
  );
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
>>>>>>> e564b7230dabf107f0a0e4a5c0c5feeffcda3ae9

        <Route path="/posts/:id" component={PostPage} />
        <PrivateRoute   path="/" component={MainPage} />
      </Switch>
    </Router>
  );
}

export default App;
