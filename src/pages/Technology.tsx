import { useContext } from "react";
import Header from "../components/Header";
import DataContext from "../contexts/data";
import Picture from "../components/Picture";

import backgroundTechnologyMobile from "../assets/technology/background-technology-mobile.jpg";
import backgroundTechnologyTablet from "../assets/technology/background-technology-tablet.jpg";
import backgroundTechnologyDesktop from "../assets/technology/background-technology-desktop.jpg";

import "./Technology.scss";

type TechnologyImages = {
  landscape: string;
  portrait: string;
};

export type TechnologyData = {
  description: string;
  distance: string;
  images: TechnologyImages;
  name: string;
  travel: string;
};

function Technology() {
  const data = useContext(DataContext);
  return (
    <>
      <Header />
      <div className="Technology">
        {data?.technology.map((card: TechnologyData) => (
          <DestinationCard key={card.name} data={card} />
        ))}
        <Picture>
          <Picture.Responsive
            mobile={backgroundTechnologyMobile}
            tablet={backgroundTechnologyTablet}
            desktop={backgroundTechnologyDesktop}
            alt=""
          />
        </Picture>
      </div>
    </>
  );
}

type DestinationCardProps = {
  data: TechnologyData;
};
function DestinationCard({ data }: DestinationCardProps) {
  return (
    <div>
      <h2>{data.name}</h2>
    </div>
  );
}

export default Technology;
