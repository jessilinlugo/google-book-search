import './App.css';
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Saved from "./components/Saved";
import Library from "./components/Library"
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <h1 className="mt-2">Search for a Book</h1>
        <h3 className="subtext"> Then Save It for Later! </h3>
        <h6 className="subtext mt-2">Ex: The Great Gatsby by F. Scott Fitzgerald</h6>

      </div>
      <div className="container">
        <div className="row">
              <div className="col-md-6">
                <Search />

              </div>
              <div className="col-md-6">
                <Library />
              </div>
        </div>
      </div>
      <Router>
        <div>
          <Route exact path="/saved" component={Saved} />
        </div>
      </Router>
    </div>
  );
}

export default App;
