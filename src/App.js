import "./App.css";
import AboutUs from "./components/AboutUs/AboutUs";
import BackToTopButton from "./components/BackToTopButton/BackToTopButton";
import MapForPeople from "./components/MapForPeople/MapForPeople";

function App() {
  return (
    <div className="App">
      <AboutUs />
      <MapForPeople />
      <BackToTopButton />
    </div>
  );
}

export default App;
