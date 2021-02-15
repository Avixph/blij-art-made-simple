import "./App.css";

import { Route, Switch } from "react-router-dom";
import Header from "./componentScreens/Header";
import Home from "./componentScreens/Home";
import AboutUs from "./componentScreens/Home";
import ArtMain from "./componentScreens/ArtMain";
import ArtDepartmentCollection from "./componentScreens/ArtDepartmentCollection";

import PopularArtDetail from "./componentScreens/PopularArtDetail";
import ArtDetail from "./componentScreens/ArtDetail";
import Footer from "./componentScreens/Footer";
import ArtError from "./componentScreens/ArtError";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/aboutUs" component={AboutUs} />
          <Route exact path="/art" component={ArtMain} />
          <Route
            exact
            path="/art/departmentCollection"
            component={ArtDepartmentCollection}
          />
          <Route exact path="/art/artDetail" component={ArtDetail} />
          <Route exact path="/popularArtDetail" component={PopularArtDetail} />
          <Route exact path="*" component={ArtError} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
