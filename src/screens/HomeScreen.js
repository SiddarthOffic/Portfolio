import "../css/HomeScreen.css";
import About from "../components/About";
import Illustrator from "../components/Illustrator";
import Photoshop from "../components/Photoshop";
import Powerpoint from "../components/Powerpoint";
import Websites from "../components/Website";
import { useState } from "react";

export default function HomeScreen() {
  const [aboutStatus, setAboutStatus] = useState(false);
  const [illustratorStatus, setIllustratorStatus] = useState(false);
  const [photoshopStatus, setPhotoshopStatus] = useState(false);
  const [powerpointStatus, setPowerpointStatus] = useState(false);
  const [websitesStatus, setWebsitesStatus] = useState(false);

  function AboutComponent() {
    setAboutStatus(true);
    setIllustratorStatus(false);
    setPhotoshopStatus(false);
    setPowerpointStatus(false);
    setWebsitesStatus(false);
  }

  function IllustratorComponent() {
    setAboutStatus(false);
    setIllustratorStatus(true);
    setPhotoshopStatus(false);
    setPowerpointStatus(false);
    setWebsitesStatus(false);
  }

  function PhotoshopComponent() {
    setAboutStatus(false);
    setIllustratorStatus(false);
    setPhotoshopStatus(true);
    setPowerpointStatus(false);
    setWebsitesStatus(false);
  }

  function PowerpointComponent() {
    setAboutStatus(false);
    setIllustratorStatus(false);
    setPhotoshopStatus(false);
    setPowerpointStatus(true);
    setWebsitesStatus(false);
  }

  function WebsitesComponent() {
    setAboutStatus(false);
    setIllustratorStatus(false);
    setPhotoshopStatus(false);
    setPowerpointStatus(false);
    setWebsitesStatus(true);
  }

  return (
    <div>
      <header>
        <h2>Logo Text</h2>
        <div>
          <p onClick={AboutComponent}>About</p>
          <p onClick={WebsitesComponent}>Websites</p>
          <p onClick={IllustratorComponent}>Illustrator</p>
          <p onClick={PowerpointComponent}>PowerPoint</p>
          <p onClick={PhotoshopComponent}>Photoshop</p>
        </div>
      </header>
      <section className="common-container">
        {aboutStatus && About()}
        {websitesStatus && Websites()}
        {illustratorStatus && Illustrator()}
        {powerpointStatus && Powerpoint()}
        {photoshopStatus && Photoshop()}
      </section>
    </div>
  );
}
