import { useContext } from "react";
import { NavLink, useParams } from "react-router-dom";
import Picture from "../components/Picture";
import DataContext from "../contexts/data";

import backgroundDestinationMobile from "../assets/destination/background-destination-mobile.jpg";
import backgroundDestinationTablet from "../assets/destination/background-destination-tablet.jpg";
import backgroundDestinationDesktop from "../assets/destination/background-destination-desktop.jpg";

import "./Destination.scss";
import Divider from "../components/Divider";

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
    <div className="Destination">
      <h1 className="Destination__subheading">
        <span className="Destination__index" aria-hidden="true">
          01
        </span>
        Pick your destination
      </h1>
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
      {current && (
        <>
          <h2 className="Destination__heading">{current.name}</h2>
          <p className="Destination__description">{current.description}</p>
          <Divider />
          <DestinationInfo heading="Avg. distance" value={current.distance} />
          <DestinationInfo heading="Est. travel time" value={current.travel} />
        </>
      )}
      <Picture>
        <Picture.Responsive
          mobile={backgroundDestinationMobile}
          tablet={backgroundDestinationTablet}
          desktop={backgroundDestinationDesktop}
          alt=""
        />
      </Picture>
    </div>
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

type DestinationCardInfo = {
  heading: string;
  value: string;
};
function DestinationInfo({ heading, value }: DestinationCardInfo) {
  return (
    <div className="DestinationInfo">
      <h3 className="DestinationInfo__heading">{heading}</h3>
      <p className="DestinationInfo__value">{value}</p>
    </div>
  );
}

function linkHandler({ isActive }: { isActive: boolean }) {
  return isActive
    ? "DestinationLink DestinationLink--active"
    : "DestinationLink";
}

export default Destination;
