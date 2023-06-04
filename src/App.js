import React from "react";
import "./App.css";
import AboutUs from "./components/AboutUs/AboutUs";
import BackToTopButton from "./components/BackToTopButton/BackToTopButton";
import InvitationInfo from "./components/InvitationInfo/InvitationInfo";
import MapForPeople from "./components/MapForPeople/MapForPeople";
import AOS from "aos";
import "aos/dist/aos.css";
import AcceptEvent from "./components/AcceptEvent/AcceptEvent";

function App() {
  React.useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="App">
      <AboutUs />
      <InvitationInfo />
      <MapForPeople />
      <AcceptEvent />
      <BackToTopButton />
    </div>
  );
}

export default App;
