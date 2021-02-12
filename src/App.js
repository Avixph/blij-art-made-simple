import "./App.css";

import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import Header from "./componentScreens/Header";
import Home from "./componentScreens/Home";
import AboutUs from "./componentScreens/Home";
import ArtMain from "./componentScreens/ArtMain";
import ViewPopularArt from "./components/ViewPopularArt";
import ArtDepartment from "./componentScreens/ArtDepartment";
import ArtDepartmentResults from "./components/ArtDepartmentResults";
import ArtDepartmentCollection from "./components/ArtDepartmentCollection";

import ViewArt from "./components/ViewArt";
import Footer from "./componentScreens/Footer";
// import ArtError from "./componentScreens/ArtError";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/aboutUS" component={AboutUs} />
            <Route exact path="/art" component={ArtMain} />
            <Route exact path="/viewPopularArt" component={ViewPopularArt} />
            <Route exact path="/artDepartments" component={ArtDepartment} />
            <Route
              exact
              path="/ArtDepartmentResults"
              component={ArtDepartmentResults}
            />
            <Route
              exact
              path="/ArtDepartmentCollection"
              component={ArtDepartmentCollection}
            />
            <Route exact path="/ViewArt" component={ViewArt} />

            {/* <Route exact path="*" component={ArtError} /> */}
          </Switch>
        </main>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
