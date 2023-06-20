import React from "react";
import "./App.css";

import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";

import AboutUs from "./components/AboutUs/AboutUs";
import BackToTopButton from "./components/BackToTopButton/BackToTopButton";
import InvitationInfo from "./components/InvitationInfo/InvitationInfo";
import MapForPeople from "./components/MapForPeople/MapForPeople";
import AcceptEvent from "./components/AcceptEvent/AcceptEvent";

function App() {
  const [ip, setIP] = React.useState("");

  //creating function to load ip address from the API
  const getData = async () => {
    const res = await axios.get("https://geolocation-db.com/json/");
    setIP(res.data.IPv4);
  };

  React.useEffect(() => {
    AOS.init();
    getData();
  }, []);
  console.log(ip);
  return (
    <div className="App">
      <AboutUs />
      <InvitationInfo />
      <MapForPeople />
      <AcceptEvent />
      <BackToTopButton />
      <h2>Your IP Address is</h2>
      <h4>{ip}</h4>
    </div>
  );
}

export default App;
