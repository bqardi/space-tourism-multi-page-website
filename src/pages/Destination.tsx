import { useContext } from "react";
import { NavLink, useParams } from "react-router-dom";
import Header from "../components/Header";
import Picture from "../components/Picture";
import DataContext from "../contexts/data";

import backgroundDestinationMobile from "../assets/destination/background-destination-mobile.jpg";
import backgroundDestinationTablet from "../assets/destination/background-destination-tablet.jpg";
import backgroundDestinationDesktop from "../assets/destination/background-destination-desktop.jpg";

import "./Destination.scss";

type DestinationsImages = {
  png: string;
  webp: string;
};

export type DestinationsData = {
  slug: string;
  description: string;
  distance: string;
  images: DestinationsImages;
  name: string;
  travel: string;
};

function Destination() {
  const { slug } = useParams();
  const data = useContext(DataContext);
  const current = data?.destinations.find(
    (destination) => destination.slug === "/destination/" + slug
  );

  return (
    <>
      <Header />
      <div className="Destination">
        <p className="Destination__subheading">
          <span className="Destination__index">01</span>
          Pick your destination
        </p>
        {current && (
          <img
            className="Destination__image"
            src={current.images.png}
            alt={current.name}
          />
        )}
        <nav className="Destination__nav" aria-label="Destination menu">
          {data?.destinations.map((card: DestinationsData) => (
            <DestinationLink key={card.slug} data={card} />
          ))}
        </nav>
        <Picture>
          <Picture.Responsive
            mobile={backgroundDestinationMobile}
            tablet={backgroundDestinationTablet}
            desktop={backgroundDestinationDesktop}
            alt=""
          />
        </Picture>
      </div>
    </>
  );
}

type DestinationCardLink = {
  data: DestinationsData;
};
function DestinationLink({ data }: DestinationCardLink) {
  return (
    <NavLink className={linkHandler} to={data.slug}>
      {data.name}
    </NavLink>
  );
}

function linkHandler({ isActive }: { isActive: boolean }) {
  return isActive
    ? "Destination__link Destination__link--active"
    : "Destination__link";
}

export default Destination;
