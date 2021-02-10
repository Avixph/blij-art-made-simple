import "./App.css";
import axios from "axios";
import { Route, NavLink, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
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
        </Switch>
      </main>
    </div>
  );
}

export default App;
