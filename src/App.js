import "./App.css";
import axios from "axios";
import { Route, Switch } from "react-router-dom";
import Header from "./componentScreens/Header";
import Footer from "./componentScreens/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/AboutUS" component={AboutUs} />
          <Route exact path="/ArtMain" component={ArtMain} />
          <Route exact path="/ViewPopularArt" component={ViewPopularArt} />
          <Route exact path="/ArtDepartment" component={ArtDepartment} />
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
          <Route exact path="/ArtView" component={ArtView} />
          <Route exact path="/ViewArt" component={ViewArt} />
          <Route exact path="*" component={ArtError} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
