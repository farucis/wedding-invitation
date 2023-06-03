import "./App.css";
import AboutUs from "./components/AboutUs/AboutUs";
import BackToTopButton from "./components/BackToTopButton/BackToTopButton";
import InvitationInfo from "./components/InvitationInfo/InvitationInfo";
import MapForPeople from "./components/MapForPeople/MapForPeople";

function App() {
  return (
    <div className="App">
      <AboutUs />
      <InvitationInfo />
      <MapForPeople />
      <BackToTopButton />
    </div>
  );
}

export default App;
