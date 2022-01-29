import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Router } from "react-router-dom";
import Registration from "./components/registration";
import Login from "./components/login";
import Profile from "./components/profile";
import Home from "./components/home";
import Event from "./components/event";
import Det from "./components/details";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" component={Login} />
        <Route path="/reg" component={Registration} />
        <Route path="/home" component={Home} />
      </BrowserRouter>
    </div>
  );
}

export default App;
