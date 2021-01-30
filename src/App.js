import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Login from "./Components/Login/Login.js";
import MainPage from "./PageComponents/MainPage/MainPage.js";
import PostPage from "./PageComponents/PostPage/PostPage.js";
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

        <Route path="/posts/:id" component={PostPage} />
        <PrivateRoute   path="/" component={MainPage} />
      </Switch>
    </Router>
  );
}

export default App;
