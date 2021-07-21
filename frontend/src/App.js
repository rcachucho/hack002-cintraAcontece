import EventForm from "./pages/EventForm";
import HomePage from "./pages/HomePage";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import BackButton from "./components/BackButton";
import { Switch, Route } from "react-router";
import Footer from "./components/Footer";


function App() {
  return (
    <div>
      <Switch>

        <Route exact path="/">
          <LandingPage/>
        </Route>

        <Route exact path="/signup">
          <SignUp/>
          <BackButton/>
        </Route>

        <Route exact path="/homepage">
          <HomePage/>
        </Route>

        <Route exact path="/eventform">
          <EventForm/>
          <BackButton/>
        </Route>

      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
