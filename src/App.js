import "./App.css";
import axios from "axios";
import { Route, NavLink, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
    <div className="Navlink">
    <nav>
      <NavLink exact to={"/"}>
        Home
      </NavLink>
      <NavLink to={"/ArtMain"}>Art</NavLink>
      <NavLink to={"/AboutUs"}>About Us</NavLink>
    </nav>
      </div>
      <main>
      <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/AboutUS" component={AboutUs} />
          <Route exact path="/ArtMain" component={ArtMain} />
          <Route exact path="/ViewPopularArt" component={ViewPopularArt} />
          <Route exact path="/ArtDepartment" component={ArtDepartment} />
          <Route exact path="/ArtDepartmentResults" component={ArtDepartmentResults} />
          <Route exact path="/ArtDepartmentCollection" component={ArtDepartmentCollection} />
          <Route exact path="/ArtView" component={ArtView} />
          <Route exact path="/ViewArt" component={ViewArt} />
          
          
        
       
          
        
         
          
          
          </Route>
      </Switch>
    </main>
    </div>
  );
}

export default App;
