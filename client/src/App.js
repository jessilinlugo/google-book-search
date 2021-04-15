import './App.css';
import Navbar from "./components/Navbar";
import Search from "./components/Search";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="container">
        <h1 className="mt-2">Search for a Book</h1>
        <h3 className="subtext"> Then Save It for Later! </h3>
      <Search/>
      <h6 className="subtext mt-2">Ex: The Great Gatsby by F. Scott Fitzgerald</h6>
      </div>
    </div>
  );
}

export default App;
