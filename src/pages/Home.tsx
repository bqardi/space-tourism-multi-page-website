import Picture from "../components/Picture";
import { Link } from "react-router-dom";

import backgroundHomeMobile from "../assets/home/background-home-mobile.jpg";
import backgroundHomeTablet from "../assets/home/background-home-tablet.jpg";
import backgroundHomeDesktop from "../assets/home/background-home-desktop.jpg";

import "./Home.scss";

function Home() {
  return (
    <div className="Home">
      <div className="Home__body">
        <div className="Home__content">
          <HomeTitle />
          <p className="Home__text">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <HomeExplore />
      </div>
      <Picture isBackground>
        <Picture.Responsive
          mobile={backgroundHomeMobile}
          tablet={backgroundHomeTablet}
          desktop={backgroundHomeDesktop}
          alt=""
        />
      </Picture>
    </div>
  );
}

function HomeTitle() {
  return (
    <h1 className="HomeTitle">
      So, you want to travel to space
      <span className="HomeTitle__large">Space</span>
    </h1>
  );
}

function HomeExplore() {
  return (
    <Link to={getRandomEndpoint()} className="HomeExplore">
      Explore
    </Link>
  );
}

function getRandomEndpoint() {
  const endpoints = [
    [
      "/destination/moon",
      "/destination/mars",
      "/destination/europa",
      "/destination/titan",
    ],
    [
      "/crew/douglas-hurley",
      "/crew/mark-shuttleworth",
      "/crew/victor-glover",
      "/crew/anousheh-ansari",
    ],
    [
      "/technology/launch-vehicle",
      "/technology/spaceport",
      "/technology/space-capsule",
    ],
  ];
  const endpoint = endpoints[Math.floor(Math.random() * endpoints.length)];
  return endpoint[Math.floor(Math.random() * endpoint.length)];
}

export default Home;
